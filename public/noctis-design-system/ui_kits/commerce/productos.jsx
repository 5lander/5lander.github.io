/* Noctis · commerce — módulo PRODUCTOS: lista · form (nuevo/editar) · detalle madre
   + VariantsSection embebida. Aplica los primitivos del sistema. Gating de CTA por
   permiso (ocultar, no deshabilitar). Los cuatro estados por pantalla salen del kit. */
const CNS = window.NoctisCommerceDesignSystem_4dfd35;
const { Button: PBtn, Input: PInput, Select: PSelect, Combobox: PCombo, Table: PTable, Badge: PBadge, Card: PCard, Alert: PAlert, Spinner: PSpinner, Toast: PToast } = CNS;

function EstadoBadge({ estado }) {
  const m = window.CommerceData.ESTADO_META[estado];
  return <PBadge tone={m.tone} dot={m.dot}>{m.label}</PBadge>;
}

/* ── /productos (lista) ─────────────────────────────────────────────────────
   Filtro de estado (server-side) + búsqueda por nombre (client-side, deuda
   conocida) + "Cargar más" keyset. CTA "Nuevo producto" gated. */
function ProductsList({ profile, listState, onRetry, onNew, onOpen }) {
  const { CanPerm, PageHeader, Crumbs, TableSkeleton, ErrorState, ForbiddenState, ListEmpty, Segmented } = window;
  const canWrite = CanPerm(profile, 'productos.write');
  const [estado, setEstado] = React.useState('todos');
  const [q, setQ] = React.useState('');
  const [visible, setVisible] = React.useState(5);

  const cols = [
    { key: 'estado', label: 'Estado', pill: true, w: 90 },
    { key: 'nombre', label: 'Nombre', w: '90%' },
    { key: 'categoria', label: 'Categoría', w: '70%' },
    { key: 'creado', label: 'Creado', numeric: true, w: 80 },
  ];

  const header = (
    <>
      <Crumbs items={[{ label: 'Inicio' }, { label: 'Productos' }]} />
      <PageHeader
        title="Productos"
        meta={<span style={{ color: 'hsl(var(--text-tertiary))' }}>Catálogo del tenant · productos madre</span>}
        actions={canWrite ? <PBtn variant="primary" onClick={onNew}>Nuevo producto</PBtn> : null}
      />
    </>
  );

  const Toolbar = (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', marginBottom: 12, flexWrap: 'wrap' }}>
      <div style={{ width: 190 }}>
        <label style={{ display: 'block', font: '500 13px var(--font-ui)', marginBottom: 6 }}>Estado</label>
        <PSelect value={estado} onChange={(e) => { setEstado(e.target.value); setVisible(5); }} options={[
          { value: 'todos', label: 'Todos los estados' }, { value: 'activo', label: 'Activo' },
          { value: 'borrador', label: 'Borrador' },
          { value: 'descontinuado', label: 'Descontinuado' },
        ]} />
      </div>
      <div style={{ flex: '1 1 240px', minWidth: 200 }}>
        <label style={{ display: 'block', font: '500 13px var(--font-ui)', marginBottom: 6 }}>Buscar por nombre</label>
        <PInput value={q} onChange={(e) => setQ(e.target.value)} placeholder="Nombre del producto…" helper="Búsqueda por nombre en cliente (deuda conocida: el buscador server-side llega con Clientes/POS)." />
      </div>
    </div>
  );

  if (listState === 'forbidden') return <>{header}<ForbiddenState resource="los productos" onHome={onRetry} /></>;
  if (listState === 'loading') return <>{header}{Toolbar}<div style={{ border: '1px solid hsl(var(--border-subtle))', borderRadius: 12, overflow: 'hidden' }}><TableSkeleton columns={cols} rows={5} /></div></>;
  if (listState === 'error') return <>{header}{Toolbar}<ErrorState errorId="ERR-PRD-4C19" context="la lista de productos" onRetry={onRetry} /></>;

  // datos + filtro server-side (estado) + búsqueda client-side (nombre)
  let data = window.CommerceData.PRODUCTS;
  if (estado !== 'todos') data = data.filter((p) => p.estado === estado);
  const ql = q.trim().toLowerCase();
  if (ql) data = data.filter((p) => p.nombre.toLowerCase().includes(ql));

  if (listState === 'empty' || data.length === 0) {
    const emptyByFilter = ql || estado !== 'todos';
    return <>{header}{Toolbar}<ListEmpty
      title={emptyByFilter ? 'Sin resultados' : 'Aún no hay productos'}
      description={emptyByFilter ? 'Ningún producto coincide con el filtro o la búsqueda. Ajuste los criterios.' : 'Cree el primer producto para comenzar a construir el catálogo.'}
      action={!emptyByFilter && canWrite ? <PBtn variant="primary" size="sm" onClick={onNew}>Nuevo producto</PBtn> : null}
    /></>;
  }

  const shown = data.slice(0, visible);
  const rows = shown.map((p) => ({
    estado: <EstadoBadge estado={p.estado} />,
    nombre: <button type="button" onClick={() => onOpen(p.id)} style={{ border: 0, background: 'none', padding: 0, cursor: 'pointer', color: 'hsl(var(--link))', font: '500 14px var(--font-ui)', textAlign: 'left' }}>{p.nombre}</button>,
    categoria: <span style={{ color: 'hsl(var(--text-secondary))' }}>{p.categoriaLabel}</span>,
    creado: <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'hsl(var(--text-secondary))' }}>{p.creado}</span>,
  }));

  return (
    <>
      {header}{Toolbar}
      <div style={{ border: '1px solid hsl(var(--border-subtle))', borderRadius: 12, overflow: 'hidden', background: 'hsl(var(--surface-raised))' }}>
        <PTable columns={cols} rows={rows}
          footNote={<span>Orden cronológico · keyset, sin números de página ni total{!canWrite && ' · solo lectura para su perfil'}</span>}
          onLoadMore={visible < data.length ? () => setVisible((v) => v + 5) : undefined}
          loadMoreLabel="Cargar más" />
      </div>
    </>
  );
}

/* ── /productos/nuevo · /[id]/editar (form) ─────────────────────────────────
   Espejo del schema: nombre, categoría (Combobox, NUNCA UUID), IVA, descripción.
   Error por campo + error root en banner (Alert) para el 404 de categoría. */
function ProductForm({ product, scenario, onCancel, onSaved }) {
  const editing = !!product;
  const [nombre, setNombre] = React.useState(product?.nombre || '');
  const [categoria, setCategoria] = React.useState(product?.categoria || '');
  const [iva, setIva] = React.useState(product?.iva || '15');
  const [desc, setDesc] = React.useState(product?.descripcion || '');
  const [errors, setErrors] = React.useState({});
  const [rootError, setRootError] = React.useState('');
  const [pending, setPending] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!nombre.trim()) errs.nombre = 'Ingrese el nombre del producto.';
    else if (nombre.trim().length < 3) errs.nombre = 'El nombre debe tener al menos 3 caracteres.';
    if (!categoria) errs.categoria = 'Elija una categoría.';
    setErrors(errs);
    setRootError('');
    if (Object.keys(errs).length) return;
    setPending(true);
    setTimeout(() => {
      setPending(false);
      // 404 root: la categoría elegida ya no existe (borrada server-side) → banner root
      if (scenario === 'root404') { setRootError('La categoría seleccionada ya no existe. Actualice la lista y vuelva a elegir. (errorId: ERR-CAT-404)'); return; }
      onSaved(editing ? 'Producto actualizado.' : 'Producto creado.');
    }, 900);
  };

  return (
    <>
      <window.Crumbs items={[{ label: 'Inicio' }, { label: 'Productos', onClick: onCancel }, { label: editing ? 'Editar' : 'Nuevo' }]} />
      <window.PageHeader title={editing ? 'Editar producto' : 'Nuevo producto'} meta={editing ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'hsl(var(--text-tertiary))' }}>Creado {product.creado}</span> : null} />
      <form onSubmit={submit} style={{ maxWidth: 640 }}>
        <PCard>
          {rootError && <div style={{ marginBottom: 16 }}><PAlert tone="danger"><b>No se pudo guardar.</b> {rootError}</PAlert></div>}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <PInput label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} error={errors.nombre} placeholder="Nombre visible del producto" disabled={pending} />
            <div>
              <label style={{ display: 'block', font: '500 13px var(--font-ui)', marginBottom: 6 }}>Categoría</label>
              <PCombo value={categoria} onChange={setCategoria} placeholder="Elija una categoría…" searchPlaceholder="Buscar categoría por nombre…" options={window.CommerceData.CATEGORIAS} />
              {errors.categoria
                ? <div style={{ marginTop: 6, fontSize: 12, color: 'hsl(var(--danger-fg))' }}>{errors.categoria}</div>
                : <div style={{ marginTop: 6, fontSize: 12, color: 'hsl(var(--text-tertiary))' }}>Elegible por nombre — nunca se ingresa el identificador a mano.</div>}
            </div>
            <div style={{ width: 200 }}>
              <label style={{ display: 'block', font: '500 13px var(--font-ui)', marginBottom: 6 }}>IVA</label>
              <PSelect value={iva} onChange={(e) => setIva(e.target.value)} options={window.CommerceData.IVA_OPTIONS} disabled={pending} />
            </div>
            <div>
              <label style={{ display: 'block', font: '500 13px var(--font-ui)', marginBottom: 6 }}>Descripción <span style={{ color: 'hsl(var(--text-tertiary))', fontWeight: 400 }}>· opcional</span></label>
              <textarea value={desc} onChange={(e) => setDesc(e.target.value)} rows={3} disabled={pending}
                style={{ width: '100%', resize: 'vertical', padding: '10px 12px', borderRadius: 8, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-primary))', font: '400 14px/1.5 var(--font-ui)' }} />
            </div>
          </div>
        </PCard>
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <PBtn variant="primary" type="submit" loading={pending}>{editing ? 'Guardar cambios' : 'Crear producto'}</PBtn>
          <PBtn variant="ghost" type="button" onClick={onCancel} disabled={pending}>Cancelar</PBtn>
        </div>
      </form>
    </>
  );
}

/* ── VariantsSection (LISTA embebida — no el picker en cascada) ──────────────
   Keyset de variantes con CTAs gated. Cuatro estados propios. */
function VariantsSection({ productId, profile, sectionState, onRetry, onNewVariant, onOpenVariant }) {
  const { CanPerm, ErrorState, ForbiddenState, Segmented } = window;
  const canWrite = CanPerm(profile, 'productos.write');
  const cols = [
    { key: 'nombre', label: 'Variante', w: '80%' },
    { key: 'sku', label: 'SKU', w: 120 },
    { key: 'attrs', label: 'Atributos', w: '90%' },
    { key: 'acc', label: '', align: 'right', w: 70 },
  ];
  const head = (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
      <div>
        <h2 style={{ font: '600 18px/24px var(--font-ui)', letterSpacing: '-.01em', margin: 0 }}>Variantes</h2>
        <p style={{ margin: '2px 0 0', fontSize: 12, color: 'hsl(var(--text-tertiary))' }}>Presentaciones vendibles de este producto.</p>
      </div>
      {canWrite && <PBtn variant="secondary" size="sm" onClick={onNewVariant}>Nueva variante</PBtn>}
    </div>
  );

  let body;
  if (sectionState === 'forbidden') body = <ForbiddenState resource="las variantes" onHome={onRetry} />;
  else if (sectionState === 'loading') body = <window.TableSkeleton columns={cols} rows={3} />;
  else if (sectionState === 'error') body = <ErrorState errorId="ERR-VAR-8B04" context="las variantes" onRetry={onRetry} />;
  else {
    const data = sectionState === 'empty' ? [] : (window.CommerceData.VARIANTS[productId] || []);
    if (data.length === 0) {
      body = <div style={{ padding: '8px 4px' }}><window.ListEmpty title="Sin variantes" description="Este producto todavía no tiene variantes. Cree la primera para asignarle SKU y códigos de barras." action={canWrite ? <PBtn variant="primary" size="sm" onClick={onNewVariant}>Nueva variante</PBtn> : null} /></div>;
    } else {
      const rows = data.map((v) => ({
        nombre: <button type="button" onClick={() => onOpenVariant(v.id)} style={{ border: 0, background: 'none', padding: 0, cursor: 'pointer', color: 'hsl(var(--link))', font: '500 14px var(--font-ui)', textAlign: 'left' }}>{v.nombre}</button>,
        sku: <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'hsl(var(--text-secondary))' }}>{v.sku}</code>,
        attrs: <span style={{ color: 'hsl(var(--text-secondary))', fontSize: 13 }}>{v.atributos}</span>,
        acc: <PBtn variant="ghost" size="sm" onClick={() => onOpenVariant(v.id)}>Abrir</PBtn>,
      }));
      body = <div style={{ border: '1px solid hsl(var(--border-subtle))', borderRadius: 12, overflow: 'hidden', background: 'hsl(var(--surface-raised))' }}><PTable columns={cols} rows={rows} minWidth={560} footNote="Keyset · sin números de página" /></div>;
    }
  }
  return <div>{head}{body}</div>;
}

/* ── /productos/[id] (detalle madre) ────────────────────────────────────────
   Cabecera + Descontinuar (confirm inline 2 pasos; 409 si ya terminal). */
function ProductDetail({ product, profile, sectionState, onRetry, onEdit, onBack, onNewVariant, onOpenVariant, onToast }) {
  const { CanPerm, ConfirmInline, PageHeader, Crumbs } = window;
  const canWrite = CanPerm(profile, 'productos.write');
  const [estado, setEstado] = React.useState(product.estado);
  const [pending, setPending] = React.useState(false);
  const [conflict, setConflict] = React.useState('');
  const terminal = estado === 'descontinuado';

  const descontinuar = (close) => {
    setPending(true); setConflict('');
    setTimeout(() => {
      setPending(false); close();
      if (terminal || product.estado === 'descontinuado') { setConflict('Este producto ya está descontinuado. No es posible repetir la acción (409). '); return; }
      setEstado('descontinuado'); onToast('Producto descontinuado.');
    }, 800);
  };

  return (
    <>
      <Crumbs items={[{ label: 'Inicio' }, { label: 'Productos', onClick: onBack }, { label: product.nombre }]} />
      <PageHeader
        title={product.nombre}
        meta={<>
          <EstadoBadge estado={estado} />
          <span style={{ color: 'hsl(var(--text-tertiary))' }}>·</span>
          <span>{product.categoriaLabel}</span>
          <span style={{ color: 'hsl(var(--text-tertiary))' }}>·</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>IVA {product.iva}%</span>
          <span style={{ color: 'hsl(var(--text-tertiary))' }}>·</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>Creado {product.creado}</span>
        </>}
        actions={canWrite ? <>
          <PBtn variant="secondary" onClick={onEdit}>Editar</PBtn>
          {!terminal && <ConfirmInline label="Descontinuar" question="¿Descontinuar este producto?" confirmLabel="Sí, descontinuar" pending={pending} size="md" onConfirm={descontinuar} />}
        </> : null}
      />
      {conflict && <div style={{ maxWidth: 720, marginBottom: 16 }}><PAlert tone="warning">{conflict}El estado terminal no admite reversa desde aquí.</PAlert></div>}
      {product.descripcion && <PCard header="Descripción"><p style={{ margin: 0, color: 'hsl(var(--text-secondary))', fontSize: 14 }}>{product.descripcion}</p></PCard>}
      <div style={{ height: 24 }} />
      <VariantsSection productId={product.id} profile={profile} sectionState={sectionState} onRetry={onRetry} onNewVariant={onNewVariant} onOpenVariant={onOpenVariant} />
    </>
  );
}

Object.assign(window, { ProductsList, ProductForm, ProductDetail, VariantsSection, EstadoBadge });
