/* Noctis · commerce — módulo CLIENTES: lista · detalle · alta/edición. Calca los
   primitivos y patrones de PRODUCTOS (Table del núcleo, 4 estados + 403, keyset sin
   páginas, gating de CTA por permiso). FUENTE ÚNICA: la lista lee la MISMA cartera que
   el picker del POS (window.PosData.CLIENTES, vía el estado del orquestador) y el alta
   reusa el MISMO ClientForm es-EC — nada de dos formularios divergentes. Consumidor Final
   NO es fila: es convención fiscal (cédula 9999999999999), no un cliente registrado. */
const CLNS = window.NoctisCommerceDesignSystem_4dfd35;
const { Button: LBtn, Input: LInput, Table: LTable, Badge: LBadge, Card: LCard } = CLNS;

function EstadoClienteBadge({ activo }) {
  const inactivo = activo === false;
  return <LBadge tone={inactivo ? 'neutral' : 'success'} dot={!inactivo}>{inactivo ? 'Inactivo' : 'Activo'}</LBadge>;
}

/* ── /clientes (lista) ──────────────────────────────────────────────────────
   Búsqueda por nombre O documento (client-side, deuda conocida) + «Cargar más»
   keyset. CTA «Nuevo cliente» gated por `clientes`. */
function ClientesList({ profile, listState, clientes, onRetry, onNew, onOpen }) {
  const { CanPerm, PageHeader, Crumbs, TableSkeleton, ErrorState, ForbiddenState, ListEmpty } = window;
  const canWrite = CanPerm(profile, 'clientes');
  const [q, setQ] = React.useState('');
  const [visible, setVisible] = React.useState(5);

  const cols = [
    { key: 'estado', label: 'Estado', pill: true, w: 90 },
    { key: 'nombre', label: 'Nombre / razón social', w: '90%' },
    { key: 'ident', label: 'Identificación', w: 190 },
    { key: 'celular', label: 'Celular', w: 130 },
    { key: 'correo', label: 'Correo', w: '80%' },
  ];

  const header = (
    <>
      <Crumbs items={[{ label: 'Inicio' }, { label: 'Clientes' }]} />
      <PageHeader
        title="Clientes"
        meta={<span style={{ color: 'hsl(var(--text-tertiary))' }}>Cartera registrada del tenant · la misma que elige el POS</span>}
        actions={canWrite ? <LBtn variant="primary" onClick={onNew}>Nuevo cliente</LBtn> : null}
      />
    </>
  );

  const Toolbar = (
    <div style={{ marginBottom: 12, maxWidth: 440 }}>
      <label style={{ display: 'block', font: '500 13px var(--font-ui)', marginBottom: 6 }}>Buscar por nombre o documento</label>
      <LInput value={q} onChange={(e) => { setQ(e.target.value); setVisible(5); }} placeholder="Nombre, razón social o identificación…"
        helper="Búsqueda por nombre o documento en cliente (deuda conocida: el buscador server-side llega después). Consumidor Final no aparece: es convención fiscal, no un cliente registrado." />
    </div>
  );

  if (listState === 'forbidden') return <>{header}<ForbiddenState resource="los clientes" onHome={onRetry} /></>;
  if (listState === 'loading') return <>{header}{Toolbar}<div style={{ border: '1px solid hsl(var(--border-subtle))', borderRadius: 12, overflow: 'hidden' }}><TableSkeleton columns={cols} rows={5} /></div></>;
  if (listState === 'error') return <>{header}{Toolbar}<ErrorState errorId="ERR-CLI-5A21" context="la lista de clientes" onRetry={onRetry} /></>;

  let data = clientes || [];
  const ql = q.trim().toLowerCase();
  if (ql) data = data.filter((c) => c.nombre.toLowerCase().includes(ql) || (c.doc || '').toLowerCase().includes(ql));

  if (listState === 'empty' || data.length === 0) {
    const emptyByFilter = !!ql;
    return <>{header}{Toolbar}<ListEmpty
      title={emptyByFilter ? 'Sin resultados' : 'Aún no hay clientes'}
      description={emptyByFilter ? 'Ningún cliente coincide con el nombre o documento buscado. Ajuste la búsqueda.' : 'Registre el primer cliente. Consumidor Final no cuenta: es una convención fiscal, no un cliente de la cartera.'}
      action={!emptyByFilter && canWrite ? <LBtn variant="primary" size="sm" onClick={onNew}>Nuevo cliente</LBtn> : null}
    /></>;
  }

  const em = <span style={{ color: 'hsl(var(--text-tertiary))' }}>—</span>;
  const shown = data.slice(0, visible);
  const rows = shown.map((c) => ({
    estado: <EstadoClienteBadge activo={c.activo} />,
    nombre: <button type="button" onClick={() => onOpen(c.id)} style={{ border: 0, background: 'none', padding: 0, cursor: 'pointer', color: 'hsl(var(--link))', font: '500 14px var(--font-ui)', textAlign: 'left' }}>{c.nombre}</button>,
    ident: <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'hsl(var(--text-secondary))' }}>{c.docTipo} {c.doc}</span>,
    celular: c.celular ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'hsl(var(--text-secondary))' }}>{c.celular}</span> : em,
    correo: c.correo ? <span style={{ color: 'hsl(var(--text-secondary))', fontSize: 13 }}>{c.correo}</span> : em,
  }));

  return (
    <>
      {header}{Toolbar}
      <div style={{ border: '1px solid hsl(var(--border-subtle))', borderRadius: 12, overflow: 'hidden', background: 'hsl(var(--surface-raised))' }}>
        <LTable columns={cols} rows={rows} minWidth={720}
          footNote={<span>Orden por alta · keyset, sin números de página ni total{!canWrite && ' · solo lectura para su perfil'}</span>}
          onLoadMore={visible < data.length ? () => setVisible((v) => v + 5) : undefined}
          loadMoreLabel="Cargar más" />
      </div>
    </>
  );
}

/* ── /clientes/[id] (detalle) ───────────────────────────────────────────────
   Ficha completa (identificación · nombre · celular · correo · dirección). Editar
   gated. Desactivar/Reactivar por confirm inline de 2 pasos. Histórico de compras =
   «Pronto» (se señala, no se inventa). */
function ClientDetail({ client, profile, onEdit, onBack, onToast, onToggleActive }) {
  const { CanPerm, ConfirmInline, PageHeader, Crumbs, ListEmpty } = window;
  const canWrite = CanPerm(profile, 'clientes');

  if (!client) {
    return (
      <>
        <Crumbs items={[{ label: 'Inicio' }, { label: 'Clientes', onClick: onBack }]} />
        <ListEmpty title="Cliente no encontrado" description="El cliente ya no está disponible en esta cartera. Vuelva a la lista." action={<LBtn variant="secondary" size="sm" onClick={onBack}>Volver a clientes</LBtn>} />
      </>
    );
  }

  const inactive = client.activo === false;
  const em = <span style={{ color: 'hsl(var(--text-tertiary))' }}>—</span>;
  const fields = [
    ['Identificación', <span style={{ fontFamily: 'var(--font-mono)' }}>{client.docTipo} {client.doc}</span>],
    ['Nombre / razón social', client.nombre],
    ['Celular', client.celular ? <span style={{ fontFamily: 'var(--font-mono)' }}>{client.celular}</span> : em],
    ['Correo', client.correo || em],
    ['Dirección de domicilio', client.direccion || em],
  ];

  return (
    <>
      <Crumbs items={[{ label: 'Inicio' }, { label: 'Clientes', onClick: onBack }, { label: client.nombre }]} />
      <PageHeader
        title={client.nombre}
        meta={<>
          <EstadoClienteBadge activo={client.activo} />
          <span style={{ color: 'hsl(var(--text-tertiary))' }}>·</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{client.docTipo} {client.doc}</span>
        </>}
        actions={canWrite ? <>
          <LBtn variant="secondary" onClick={onEdit}>Editar</LBtn>
          <ConfirmInline
            label={inactive ? 'Reactivar' : 'Desactivar'}
            tone={inactive ? 'primary' : 'danger'}
            question={inactive ? '¿Reactivar este cliente?' : '¿Desactivar este cliente?'}
            confirmLabel={inactive ? 'Sí, reactivar' : 'Sí, desactivar'}
            size="md"
            onConfirm={(close) => { onToggleActive(client); close(); }}
          />
        </> : null}
      />
      <div style={{ maxWidth: 640, display: 'grid', gap: 16 }}>
        <LCard header="Ficha del cliente">
          <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: '180px 1fr', rowGap: 14, columnGap: 16 }}>
            {fields.map(([k, v], i) => (
              <React.Fragment key={i}>
                <dt style={{ margin: 0, fontSize: 13, color: 'hsl(var(--text-tertiary))' }}>{k}</dt>
                <dd style={{ margin: 0, fontSize: 14, color: 'hsl(var(--text-primary))' }}>{v}</dd>
              </React.Fragment>
            ))}
          </dl>
        </LCard>
        <LCard header="Histórico de compras">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: 11, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'hsl(var(--text-tertiary))', border: '1px solid hsl(var(--border-strong))', borderRadius: 999, padding: '3px 10px' }}>Pronto</span>
            <p style={{ margin: 0, color: 'hsl(var(--text-secondary))', fontSize: 13, maxWidth: '52ch' }}>El histórico de compras de este cliente llega con el módulo de Ventas. El hueco se señala, no se inventa.</p>
          </div>
        </LCard>
      </div>
    </>
  );
}

/* ── /clientes/nuevo · /[id]/editar ─────────────────────────────────────────
   Envuelve el ClientForm compartido (mismo del POS) con crumbs + encabezado del shell. */
function ClientFormScreen({ client, onCancel, onSubmit }) {
  const { PageHeader, Crumbs } = window;
  const editing = !!client;
  return (
    <>
      <Crumbs items={[{ label: 'Inicio' }, { label: 'Clientes', onClick: onCancel }, { label: editing ? 'Editar' : 'Nuevo' }]} />
      <PageHeader
        title={editing ? 'Editar cliente' : 'Nuevo cliente'}
        meta={editing
          ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'hsl(var(--text-tertiary))' }}>{client.docTipo} {client.doc}</span>
          : <span style={{ color: 'hsl(var(--text-tertiary))' }}>Mismo formulario y validación es-EC que el alta del POS</span>}
      />
      <div style={{ maxWidth: 560 }}>
        <LCard>
          <window.ClientForm client={client} onCancel={onCancel} onSubmit={onSubmit} submitLabel={editing ? 'Guardar cambios' : 'Crear cliente'} submitIcon="user-round" />
        </LCard>
      </div>
    </>
  );
}

Object.assign(window, { ClientesList, ClientDetail, ClientFormScreen, EstadoClienteBadge });
