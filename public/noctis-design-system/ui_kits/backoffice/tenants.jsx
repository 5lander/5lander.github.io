/* Noctis · backoffice — TENANTS. Lista densa (keyset · filtros · StatusPill · 4
   estados) y el DETALLE = árbol de entitlements módulo→submódulo con:
   indeterminate en el padre · DRAFT LOCAL (nada se aplica hasta guardar, con guarda
   de salida) · ADMINISTRATION intrínseco (no-toggleable) · display_name en español
   (el path de máquina NUNCA se muestra). */
const TNS = window.NoctisCommerceDesignSystem_4dfd35;
const { Button: TBtn, Card: TCard, Select: TSelect, Input: TInput, Badge: TBadge, Icon: TIcon, Alert: TAlert, Switch: TSwitch, Checkbox: TCheckbox } = TNS;
const TD = window.BackofficeData;

/* ── LISTA DE TENANTS ─────────────────────────────────────────────────────── */
function TenantsList({ listState, onRetry, onOpen }) {
  const [estado, setEstado] = React.useState('todos');   // filtro server-side (estado)
  const [q, setQ] = React.useState('');                   // búsqueda client-side (deuda señalada)
  const [shown, setShown] = React.useState(8);            // keyset "Cargar más"

  const columns = [
    { key: 'estado', label: 'Estado', pill: true, w: '70%' },
    { key: 'nombre', label: 'Razón social', w: '90%' },
    { key: 'ruc', label: 'RUC' },
    { key: 'plan', label: 'Plan' },
    { key: 'sucursales', label: 'Suc.', numeric: true, align: 'right' },
    { key: 'usuarios', label: 'Usuarios', numeric: true, align: 'right' },
    { key: 'alta', label: 'Alta' },
    { key: 'acciones', label: '', w: '40%' },
  ];

  const header = (
    <window.BoPageHeader
      title="Tenants"
      meta={<><TIcon name="building-2" size={16} style={{ color: 'hsl(var(--text-tertiary))' }} /><span>Cuentas de las PYMEs sobre la plataforma</span></>}
    />
  );

  const filters = (
    <TCard pad={false}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', flexWrap: 'wrap', padding: '14px 16px' }}>
        <div style={{ minWidth: 180 }}>
          <window.BoMicroLabel style={{ marginBottom: 6 }}>Estado (servidor)</window.BoMicroLabel>
          <TSelect value={estado} onChange={(e) => { setEstado(e.target.value); setShown(8); }} options={[
            { value: 'todos', label: 'Todos los estados' },
            { value: 'activo', label: 'Activo' }, { value: 'prueba', label: 'En prueba' },
            { value: 'moroso', label: 'Con mora' }, { value: 'suspendido', label: 'Suspendido' },
            { value: 'cancelado', label: 'Cancelado' },
          ]} />
        </div>
        <div style={{ minWidth: 220, flex: 1 }}>
          <window.BoMicroLabel style={{ marginBottom: 6 }}>Buscar por razón social</window.BoMicroLabel>
          <TInput value={q} onChange={(e) => setQ(e.target.value)} placeholder="Escriba un nombre…"
            helper="Búsqueda por nombre en cliente (deuda conocida: el filtro de estado sí es server-side)." />
        </div>
      </div>
    </TCard>
  );

  if (listState === 'loading') {
    return <>{header}{filters}<div style={{ marginTop: 14 }}><window.BoTableSkeleton columns={columns} rows={7} /></div></>;
  }
  if (listState === 'error') {
    return <>{header}{filters}<div style={{ marginTop: 14 }}><window.BoErrorState context="la lista de tenants" errorId="ERR-TEN-3391" onRetry={onRetry} /></div></>;
  }
  if (listState === 'forbidden') {
    return <>{header}<div style={{ marginTop: 4 }}><window.BoForbiddenState resource="la lista de tenants" onHome={onRetry} /></div></>;
  }

  // datos
  let rows = TD.TENANTS;
  if (estado !== 'todos') rows = rows.filter((t) => t.estado === estado);
  const qn = q.trim().toLowerCase();
  if (qn) rows = rows.filter((t) => t.nombre.toLowerCase().includes(qn));

  if (listState === 'empty' || rows.length === 0) {
    return (
      <>{header}{filters}
        <div style={{ marginTop: 14 }}>
          <window.BoListEmpty
            title={qn || estado !== 'todos' ? 'Ningún tenant coincide' : 'Aún no hay tenants'}
            description={qn || estado !== 'todos' ? 'Ajuste el filtro de estado o el término de búsqueda.' : 'Cuando se aprovisione la primera cuenta aparecerá en esta lista.'}
          />
        </div>
      </>
    );
  }

  const visible = rows.slice(0, shown);
  const tableRows = visible.map((t) => {
    const meta = TD.TENANT_ESTADO[t.estado];
    return {
      estado: <window.BoStatusPill meta={meta} />,
      nombre: <span style={{ fontWeight: 500, color: 'hsl(var(--text-primary))' }}>{t.nombre}</span>,
      ruc: <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'hsl(var(--text-secondary))' }}>{t.ruc}</span>,
      plan: <span style={{ color: 'hsl(var(--text-secondary))' }}>{t.plan}</span>,
      sucursales: <span style={{ fontVariantNumeric: 'tabular-nums' }}>{t.sucursales}</span>,
      usuarios: <span style={{ fontVariantNumeric: 'tabular-nums' }}>{t.usuarios}</span>,
      alta: <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'hsl(var(--text-secondary))' }}>{t.alta}</span>,
      acciones: <TBtn variant="ghost" size="sm" onClick={() => onOpen(t.id)} aria-label={'Abrir ' + t.nombre}>Abrir</TBtn>,
    };
  });

  return (
    <>{header}{filters}
      <div style={{ marginTop: 14 }}>
        <TNS.Table columns={columns} rows={tableRows} minWidth={860}
          footNote={<span>Mostrando {visible.length} de {rows.length}</span>}
          onLoadMore={shown < rows.length ? () => setShown((s) => s + 6) : undefined}
          loadMoreLabel="Cargar más" />
      </div>
    </>
  );
}

/* ── Controles del árbol ──────────────────────────────────────────────────────
   Switch y Checkbox tri-estado son PRIMITIVOS DEL NÚCLEO (components/forms). Esta
   piel los consume; no define los suyos. `state` del padre ('all'|'some'|'none')
   se traduce al contrato checked/indeterminate del Checkbox. */

/* ── DETALLE DE TENANT — árbol de entitlements ────────────────────────────── */
function TenantDetail({ tenant, sectionState, onRetry, onBack, onToast, onDirtyChange, onSuspendToggle }) {
  // draft local + estado aplicado (servidor). Nada se aplica hasta Guardar.
  const initial = React.useMemo(() => ({ ...(TD.ENTITLEMENTS[tenant.id] || {}) }), [tenant.id]);
  const [applied, setApplied] = React.useState(initial);
  const [draft, setDraft] = React.useState(initial);
  const [open, setOpen] = React.useState(() => new Set(['productos']));
  const [saving, setSaving] = React.useState(false);
  /* Suspender = acción GRAVE de alcance tenant → fricción alta (Sheet + escritura del
     nombre). Reactivar y el resto del detalle son reversibles → confirm inline. Sin chip
     de alcance en esta pantalla: acá no hay ninguna acción de plataforma, y la fricción
     diferenciada ES el marcador. */
  const [suspendSheet, setSuspendSheet] = React.useState(false);
  const [suspending, setSuspending] = React.useState(false);

  // submódulos NO intrínsecos (administración se excluye del draft: siempre on)
  const gatedModules = TD.MODULES.filter((m) => !m.intrinsic);
  const allSubs = gatedModules.flatMap((m) => m.submodulos.map((s) => ({ ...s, moduleId: m.id, moduleStatus: m.status })));
  const subById = Object.fromEntries(allSubs.map((s) => [s.id, s]));

  const changedIds = allSubs.map((s) => s.id).filter((id) => !!draft[id] !== !!applied[id]);
  const dirty = changedIds.length > 0;

  React.useEffect(() => { onDirtyChange(dirty); }, [dirty]); // eslint-disable-line
  /* Camino 2 del guard: salida del DOCUMENTO (cerrar pestaña, refresh). El camino 1
     —navegación in-app— NO pasa por acá: lo intercepta guardedNav en app.jsx antes
     de cambiar de vista. beforeunload solo no alcanza (ver README). */
  React.useEffect(() => {
    if (!dirty) return;
    const h = (e) => { e.preventDefault(); e.returnValue = ''; };
    window.addEventListener('beforeunload', h);
    return () => window.removeEventListener('beforeunload', h);
  }, [dirty]);

  // reset cuando cambia de tenant
  React.useEffect(() => { setApplied(initial); setDraft(initial); }, [tenant.id]); // eslint-disable-line

  // una sub deprecada solo puede quedar ON si YA estaba concedida (grandfathering);
  // apagada, no se puede volver a habilitar.
  const canEnable = (s) => s.status !== 'deprecated' || !!applied[s.id];
  const setSub = (id, val) => {
    const s = subById[id];
    if (val && !canEnable(s)) return; // bloqueado: deprecado no concedido
    setDraft((d) => ({ ...d, [id]: val }));
  };

  const moduleState = (m) => {
    const subs = m.submodulos;
    const onCount = subs.filter((s) => !!draft[s.id]).length;
    if (onCount === 0) return 'none';
    if (onCount === subs.length) return 'all';
    return 'some';
  };
  const toggleModule = (m) => {
    const st = moduleState(m);
    setDraft((d) => {
      const next = { ...d };
      if (st === 'all') { m.submodulos.forEach((s) => { next[s.id] = false; }); }        // apagar todo
      else { m.submodulos.forEach((s) => { if (canEnable(s)) next[s.id] = true; }); }     // encender lo habilitable
      return next;
    });
  };

  const doSave = () => {
    setSaving(true);
    setTimeout(() => {
      setApplied({ ...draft }); setSaving(false);
      onToast(`Entitlements guardados · ${changedIds.length} cambio${changedIds.length === 1 ? '' : 's'} aplicado${changedIds.length === 1 ? '' : 's'}.`);
    }, 900);
  };
  const doDiscard = () => setDraft({ ...applied });

  const meta = TD.TENANT_ESTADO[tenant.id ? tenant.estado : 'activo'];
  const isTerminal = tenant.estado === 'cancelado';

  const crumbs = <window.BoCrumbs items={[{ label: 'Tenants', onClick: onBack }, { label: tenant.nombre }]} />;

  if (sectionState === 'loading') return <>{crumbs}<div style={{ marginTop: 8 }}><window.BoTableSkeleton columns={[{ key: 'a', w: '40%' }, { key: 'b', pill: true, w: '30%' }]} rows={6} /></div></>;
  if (sectionState === 'error') return <>{crumbs}<div style={{ marginTop: 8 }}><window.BoErrorState context="el detalle del tenant" errorId="ERR-TEN-7742" onRetry={onRetry} /></div></>;
  if (sectionState === 'forbidden') return <>{crumbs}<div style={{ marginTop: 8 }}><window.BoForbiddenState resource="el detalle del tenant" onHome={onBack} /></div></>;

  return (
    <div style={{ paddingBottom: dirty ? 76 : 0 }}>
      {crumbs}
      <window.BoPageHeader
        title={tenant.nombre}
        meta={<>
          <window.BoStatusPill meta={TD.TENANT_ESTADO[tenant.estado]} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5 }}>RUC {tenant.ruc}</span>
          <span>·</span><span>{tenant.plan}</span>
          <span>·</span><span>{tenant.sucursales} sucursal{tenant.sucursales === 1 ? '' : 'es'} · {tenant.usuarios} usuarios</span>
        </>}
        actions={
          isTerminal ? <TBadge tone="terminal">Cuenta cancelada</TBadge> :
          tenant.estado === 'suspendido'
            /* reversible → inline de 2 pasos */
            ? <window.BoConfirmInline tone="primary" label="Reactivar tenant" confirmLabel="Reactivar" question="¿Reactivar esta cuenta?" onConfirm={(done) => { onSuspendToggle(tenant.id, false); done(); }} />
            /* grave → fricción alta, aunque el alcance sea un solo tenant */
            : <TBtn variant="danger-ghost" size="md" onClick={() => setSuspendSheet(true)}>Suspender tenant</TBtn>
        }
      />

      {tenant.estado === 'suspendido' && (
        <div style={{ marginBottom: 16 }}><TAlert tone="danger"><b>Cuenta suspendida.</b> Los usuarios de este tenant no pueden operar hasta reactivarla. Suspender afecta solo a esta cuenta (alcance tenant).</TAlert></div>
      )}

      {/* Suspender — fricción alta por GRAVEDAD, no por alcance: sin marcador de
          plataforma, porque el efecto no cruza tenants. */}
      <window.BoDangerConfirmSheet
        open={suspendSheet} scope="tenant"
        onClose={() => setSuspendSheet(false)}
        title={`Suspender «${tenant.nombre}»`}
        confirmLabel="Suspender cuenta"
        matchText={tenant.nombre}
        pending={suspending}
        warning="La cuenta queda sin acceso de inmediato: nadie podrá facturar, cobrar ni registrar movimientos hasta reactivarla. Es reversible desde esta misma pantalla, pero interrumpe la operación mientras dure."
        impact={`Esto deja sin operar a ${tenant.nombre} y a sus ${tenant.usuarios} usuario${tenant.usuarios === 1 ? '' : 's'} en ${tenant.sucursales} sucursal${tenant.sucursales === 1 ? '' : 'es'}.`}
        onConfirm={() => {
          setSuspending(true);
          setTimeout(() => { setSuspending(false); setSuspendSheet(false); onSuspendToggle(tenant.id, true); }, 900);
        }}
      >
        <div style={{ fontSize: 13, color: 'hsl(var(--text-secondary))' }}>Escriba la razón social para confirmar. Dejar sin trabajar a un cliente amerita esta fricción aunque el alcance sea una sola cuenta.</div>
      </window.BoDangerConfirmSheet>

      {/* ADMINISTRACIÓN — intrínseco, no-toggleable, con explicación */}
      <IntrinsicModule />

      {/* Árbol de entitlements */}
      <window.BoMicroLabel style={{ margin: '20px 0 10px' }}>Módulos habilitados</window.BoMicroLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {gatedModules.map((m) => (
          <ModuleRow key={m.id} m={m} draft={draft} state={moduleState(m)} expanded={open.has(m.id)}
            onToggleExpand={() => setOpen((s) => { const n = new Set(s); n.has(m.id) ? n.delete(m.id) : n.add(m.id); return n; })}
            onToggleModule={() => toggleModule(m)} onSetSub={setSub} canEnable={canEnable} appliedHas={(id) => !!applied[id]} />
        ))}
      </div>

      {/* BARRA DRAFT — inequívoca. Nada se aplica hasta Guardar. */}
      {dirty && (
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 15, background: 'hsl(var(--surface-overlay))', borderTop: '1px solid hsl(var(--border-strong))', boxShadow: 'var(--shadow-overlay)' }}>
          <div style={{ maxWidth: 1160, margin: '0 auto', padding: '12px 30px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 13.5, color: 'hsl(var(--text-primary))', fontWeight: 500 }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: 'hsl(var(--warning-fg))', flex: 'none' }} aria-hidden="true" />
              {changedIds.length} cambio{changedIds.length === 1 ? '' : 's'} sin guardar
            </span>
            <span style={{ fontSize: 12.5, color: 'hsl(var(--text-tertiary))' }}>Los cambios no se aplican al tenant hasta que guarde.</span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
              <TBtn variant="ghost" size="sm" disabled={saving} onClick={doDiscard}>Descartar</TBtn>
              <TBtn variant="primary" size="sm" loading={saving} onClick={doSave}>Guardar cambios</TBtn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* Módulo ADMINISTRACIÓN — intrínseco. Se renderiza como NO-toggleable con su
   explicación, jamás como toggle apagado o ausente. */
function IntrinsicModule() {
  const m = TD.MODULES.find((x) => x.intrinsic);
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div style={{ border: '1px solid hsl(var(--border-subtle))', borderRadius: 12, background: 'hsl(var(--surface-sunken))', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px' }}>
        <TIcon name="settings" size={20} style={{ color: 'hsl(var(--text-secondary))', flex: 'none' }} />
        <button type="button" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}
          style={{ display: 'flex', alignItems: 'center', gap: 8, border: 0, background: 'none', padding: 0, cursor: 'pointer', font: 'inherit', minWidth: 0 }}>
          <span style={{ fontWeight: 600, fontSize: 14.5, color: 'hsl(var(--text-primary))' }}>{m.display}</span>
          <span aria-hidden="true" style={{ color: 'hsl(var(--text-tertiary))', transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform .12s', fontSize: 11 }}>▾</span>
        </button>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10.5, fontWeight: 600, padding: '2px 9px', borderRadius: 999, background: 'hsl(var(--surface-raised))', border: '1px solid hsl(var(--border-subtle))', color: 'hsl(var(--text-secondary))' }}>
          <span aria-hidden="true">●</span> Intrínseco
        </span>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'hsl(var(--text-tertiary))' }}>
          <span style={{ display: 'none' }} className="wide-only" />
          <span>Siempre disponible</span>
        </div>
      </div>
      <div style={{ padding: '0 16px 13px', marginLeft: 32 }}>
        <p style={{ margin: 0, fontSize: 12.5, color: 'hsl(var(--text-secondary))', maxWidth: '76ch' }}>{m.descripcion}</p>
        {expanded && (
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {m.submodulos.map((s) => (
              <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 12px', borderRadius: 8, background: 'hsl(var(--surface-raised))', border: '1px solid hsl(var(--border-subtle))' }}>
                <span style={{ fontSize: 13.5, color: 'hsl(var(--text-primary))' }}>{s.display}</span>
                <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: 'hsl(var(--text-tertiary))' }}>
                  <span aria-hidden="true">✓</span> Incluido
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* Fila de módulo gated: cabecera (tri-checkbox + resumen) + submódulos (switches). */
function ModuleRow({ m, draft, state, expanded, onToggleExpand, onToggleModule, onSetSub, canEnable, appliedHas }) {
  const subs = m.submodulos;
  const onCount = subs.filter((s) => !!draft[s.id]).length;
  const depModule = m.status === 'deprecated';
  return (
    <div style={{ border: '1px solid hsl(var(--border-subtle))', borderRadius: 12, background: 'hsl(var(--surface-raised))', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px' }}>
        <TCheckbox checked={state === 'all'} indeterminate={state === 'some'} aria-label={'Habilitar todo ' + m.display}
          onChange={onToggleModule} disabled={depModule && onCount === 0} />
        <TIcon module={m.id} size={20} style={{ color: 'hsl(var(--text-secondary))', flex: 'none' }} />
        <button type="button" onClick={onToggleExpand} aria-expanded={expanded}
          style={{ display: 'flex', alignItems: 'center', gap: 8, border: 0, background: 'none', padding: 0, cursor: 'pointer', font: 'inherit', minWidth: 0 }}>
          <span style={{ fontWeight: 600, fontSize: 14.5, color: 'hsl(var(--text-primary))' }}>{m.display}</span>
          <span aria-hidden="true" style={{ color: 'hsl(var(--text-tertiary))', transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform .12s', fontSize: 11 }}>▾</span>
        </button>
        {depModule && <DeprecatedChip />}
        <span style={{ marginLeft: 'auto', fontSize: 12, color: 'hsl(var(--text-tertiary))', fontVariantNumeric: 'tabular-nums' }}>{onCount} de {subs.length} habilitado{subs.length === 1 ? '' : 's'}</span>
      </div>
      {expanded && (
        <div style={{ borderTop: '1px solid hsl(var(--border-subtle))', padding: '8px 16px 12px 48px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {depModule && <div style={{ margin: '6px 0 8px', fontSize: 12, color: 'hsl(var(--text-secondary))' }}>Módulo deprecado: no se habilita en nuevos tenants. Los que ya lo tenían lo conservan.</div>}
          {subs.map((s) => {
            const on = !!draft[s.id];
            const dep = s.status === 'deprecated';
            const grandfathered = dep && appliedHas(s.id);
            const locked = dep && !on && !appliedHas(s.id); // deprecado y no concedido → no se puede habilitar
            return (
              <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 4px' }}>
                <TSwitch checked={on} disabled={locked} aria-label={s.display} onChange={(v) => onSetSub(s.id, v)} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 13.5, color: locked ? 'hsl(var(--text-tertiary))' : 'hsl(var(--text-primary))' }}>{s.display}</span>
                    {dep && <DeprecatedChip small />}
                  </div>
                  {grandfathered && <div style={{ fontSize: 11.5, color: 'hsl(var(--text-tertiary))', marginTop: 2 }}>Conservado (grandfathered). Si lo apaga, no podrá volver a habilitarlo.</div>}
                  {locked && <div style={{ fontSize: 11.5, color: 'hsl(var(--text-tertiary))', marginTop: 2 }}>No disponible: submódulo deprecado.</div>}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function DeprecatedChip({ small }) {
  /* MISMO lenguaje terminal que "Descontinuado" en commerce: pill terminal del
     Badge del núcleo (contorno neutro, sin relleno). NO se usa atenuación ni borde
     punteado — en commerce esos signos significan "Pronto" (no construido) y "slot
     reservado" (viene después): futuro pendiente. Deprecado es pasado terminal, la
     dirección opuesta del mismo eje; no puede compartir signo. */
  return <TBadge tone="terminal">Deprecado</TBadge>;
}

Object.assign(window, { BoTenantsList: TenantsList, BoTenantDetail: TenantDetail });
