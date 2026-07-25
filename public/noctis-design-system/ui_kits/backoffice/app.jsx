/* Noctis · backoffice — ORQUESTADOR. Router de vistas, MODO por usuario (marca
   Noctis FIJA: cero acento de tenant, el par {primary,foreground} queda en el
   fallback de casa), guarda de salida con cambios sin guardar, y barra de PROTOTIPO
   (andamiaje tipo Storybook, no chrome de la app) para recorrer los 4 estados. */
const ANS = window.NoctisCommerceDesignSystem_4dfd35;
const { Toast: AToast, Button: ABtn, Card: ACard, Wordmark: AWordmark, Sheet: ASheet, Icon: AIcon } = ANS;
const AD = window.BackofficeData;

function ProntoView({ label }) {
  return (
    <>
      <window.BoCrumbs items={[{ label: 'Inicio' }, { label }]} />
      <window.BoPageHeader title={label} meta={<span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: 'hsl(var(--text-tertiary))' }}><span aria-hidden="true">◷</span> Pronto</span>} />
      <ACard>
        <div style={{ padding: '24px 8px', textAlign: 'center', maxWidth: 480, margin: '0 auto' }}>
          <div style={{ font: '600 16px/22px var(--font-ui)' }}>Módulo en construcción</div>
          <p style={{ margin: '6px 0 0', color: 'hsl(var(--text-secondary))', fontSize: 13 }}>Este módulo de plataforma aún no se construye en este corte. Se muestra en el menú con la marca «Pronto» — mismo lenguaje de estado que commerce; el hueco se señala, no se oculta.</p>
        </div>
      </ACard>
    </>
  );
}

function SignedOut({ onBack }) {
  return (
    <div style={{ minHeight: 600, display: 'grid', placeItems: 'center', borderRadius: 14, overflow: 'hidden', position: 'relative', background: 'linear-gradient(150deg,#000 0%,#1C1C1E 65%,#2C2C2E 100%)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 90% at 90% -20%, rgba(255,255,255,.07), transparent 60%)' }} />
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <AWordmark onDark />
        <div style={{ font: '500 20px/1.2 var(--font-ui)', color: '#F5F5F7', margin: '18px 0 6px' }}>Sesión cerrada</div>
        <p style={{ color: '#AEAEB2', fontSize: 13, margin: '0 0 18px' }}>Cerró la consola de plataforma de forma segura.</p>
        <ABtn variant="secondary" onClick={onBack}>Volver a ingresar</ABtn>
      </div>
    </div>
  );
}

function BackofficeApp() {
  const [mode, setMode] = React.useState('light');
  const [collapsed, setCollapsed] = React.useState(false);
  const [route, setRoute] = React.useState({ view: 'dashboard' });
  const [activeModule, setActiveModule] = React.useState(null);
  const [listState, setListState] = React.useState('data');
  const [sectionState, setSectionState] = React.useState('data');
  const [toast, setToast] = React.useState(null);
  const [signedOut, setSignedOut] = React.useState(false);
  const [overrides, setOverrides] = React.useState({}); // id → estado (suspender/reactivar)
  const [dirty, setDirty] = React.useState(false);
  const [leave, setLeave] = React.useState(null); // navegación pendiente por cambios sin guardar

  const staff = AD.STAFF;
  const showToast = (msg) => setToast(msg);
  const go = (view, extra = {}) => setRoute({ view, ...extra });

  const tenant = route.tenantId ? (() => {
    const t = AD.TENANTS.find((x) => x.id === route.tenantId);
    return t && overrides[t.id] ? { ...t, estado: overrides[t.id] } : t;
  })() : null;

  // GUARD DE NAVEGACIÓN — camino 1 (in-app). TODO handler de navegación del shell
  // (sidebar, breadcrumb, tarjetas del dashboard, logout) pasa por acá: si hay draft
  // sin guardar, se ABORTA la navegación y se abre el Sheet de aviso; la función
  // pendiente se ejecuta solo al confirmar. El camino 2 (cerrar pestaña / refresh) es
  // el beforeunload del detalle.
  // NOTA Next (App Router): beforeunload NO intercepta el cambio de ruta de cliente y
  // no hay API estable para abortar navegación (no existe router.events del Pages
  // Router). Al portar, envolver cada <Link> y cada router.push() en este mismo
  // chequeo de `dirty` — no confiar solo en beforeunload. Ver README del kit.
  const guardedNav = (fn) => { if (dirty) setLeave(() => fn); else fn(); };
  // Si el draft se descarta o guarda mientras el aviso est\u00e1 abierto, el guard ya no
  // aplica: se cierra solo en vez de quedar pendiente sobre una navegaci\u00f3n resuelta.
  React.useEffect(() => { if (!dirty && leave) setLeave(null); }, [dirty]); // eslint-disable-line
  const confirmLeave = () => { const fn = leave; setDirty(false); setLeave(null); fn && fn(); };

  const onNavigate = (item) => guardedNav(() => {
    if (!item.built) { setActiveModule(item.id); go('pronto', { prontoLabel: item.label }); return; }
    setActiveModule(item.id);
    if (item.id === 'tenants') { setListState('data'); go('tenants'); }
    else if (item.id === 'catalogo') { setSectionState('data'); go('catalogo'); }
  });

  const onSuspendToggle = (id, suspend) => {
    setOverrides((o) => ({ ...o, [id]: suspend ? 'suspendido' : 'activo' }));
    showToast(suspend ? 'Tenant suspendido · alcance tenant (una sola cuenta).' : 'Tenant reactivado.');
  };

  let content;
  switch (route.view) {
    case 'dashboard':
      content = <window.BackofficeDashboard staff={staff} tenants={AD.TENANTS}
        onGoTenants={() => onNavigate({ id: 'tenants', built: true, label: 'Tenants' })}
        onGoCatalogo={() => onNavigate({ id: 'catalogo', built: true, label: 'Catálogo de módulos' })} />;
      break;
    case 'pronto':
      content = <ProntoView label={route.prontoLabel} />;
      break;
    case 'tenants':
      content = <window.BoTenantsList listState={listState} onRetry={() => setListState('data')}
        onOpen={(id) => { setSectionState('data'); go('tenant-detalle', { tenantId: id }); }} />;
      break;
    case 'tenant-detalle':
      content = <window.BoTenantDetail tenant={tenant} sectionState={sectionState} onRetry={() => setSectionState('data')}
        onBack={() => guardedNav(() => { setActiveModule('tenants'); go('tenants'); })}
        onToast={showToast} onDirtyChange={setDirty} onSuspendToggle={onSuspendToggle} />;
      break;
    case 'catalogo':
      content = <window.BoModuleCatalog sectionState={sectionState} onRetry={() => setSectionState('data')} onToast={showToast} />;
      break;
    default:
      content = null;
  }

  // marca Noctis FIJA — fallback de casa; NUNCA se inyecta acento de tenant.
  // Se dejan explícitos para dejar claro que backoffice no toca el par de marca.
  const houseVars = mode === 'dark'
    ? { '--brand-primary': '240 6% 90%', '--brand-foreground': '240 6% 12%' }   // plata (oscuro)
    : { '--brand-primary': '240 6% 12%', '--brand-foreground': '0 0% 100%' };    // grafito (claro)

  const listScreens = ['tenants'];
  const sectionScreens = ['tenant-detalle', 'catalogo'];
  const showState = listScreens.includes(route.view) || sectionScreens.includes(route.view);
  const isList = listScreens.includes(route.view);

  return (
    <div data-mode={mode} style={{ minHeight: '100vh', background: 'hsl(var(--surface-sunken))', color: 'hsl(var(--text-primary))', fontFamily: 'var(--font-ui)', ...houseVars }}>
      <PrototypeBar
        showState={showState} isList={isList}
        listState={listState} setListState={setListState}
        sectionState={sectionState} setSectionState={setSectionState}
        stateLabel={isList ? 'Estado lista' : (route.view === 'catalogo' ? 'Estado catálogo' : 'Estado sección')}
        mode={mode} onToggleMode={() => setMode((m) => (m === 'light' ? 'dark' : 'light'))}
      />
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '16px 20px 28px' }}>
        {signedOut ? (
          <SignedOut onBack={() => { setSignedOut(false); go('dashboard'); setActiveModule(null); }} />
        ) : (
          <window.BackofficeShell
            staff={staff} mode={mode}
            onToggleMode={() => setMode((m) => (m === 'light' ? 'dark' : 'light'))}
            onLogout={() => guardedNav(() => { window.location.href = '../../index.html'; })}
            activeModule={activeModule} onNavigate={onNavigate}
            collapsed={collapsed} onToggleCollapse={() => setCollapsed((c) => !c)}
          >
            {content}
          </window.BackofficeShell>
        )}
      </div>

      {/* guard de navegación in-app — aviso canónico (mismo mensaje en los dos caminos) */}
      <ASheet open={!!leave} onClose={() => setLeave(null)} title="Tiene cambios sin guardar"
        footer={<>
          <ABtn variant="ghost" onClick={() => setLeave(null)}>Seguir editando</ABtn>
          <ABtn variant="danger" onClick={confirmLeave}>Descartar y salir</ABtn>
        </>}>
        <p style={{ margin: 0, fontSize: 13.5, color: 'hsl(var(--text-secondary))' }}>Los cambios en el árbol de entitlements no se han aplicado al tenant. Si sale ahora, se descartarán. Nada se aplica hasta guardar.</p>
      </ASheet>

      {/* Toast por DEBAJO del Sheet (z-60): un overlay modal siempre gana la capa. */}
      {toast && <div style={{ position: 'fixed', left: 0, right: 0, bottom: 22, display: 'flex', justifyContent: 'center', zIndex: 50, pointerEvents: 'none' }}><div style={{ pointerEvents: 'auto' }}><AToast onDismiss={() => setToast(null)}>{toast}</AToast></div></div>}
    </div>
  );
}

/* Barra de PROTOTIPO — andamiaje, NO chrome. En backoffice no hay ejes tenant/perfil
   (marca Noctis fija, sidebar fija): se muestra el modo, el recordatorio de marca
   fija, y los 4 estados del kit de la pantalla con datos. */
function PrototypeBar({ showState, isList, listState, setListState, sectionState, setSectionState, stateLabel, mode, onToggleMode }) {
  const { BoSegmented } = window;
  const stateOpts = [
    { value: 'data', label: 'Datos' }, { value: 'loading', label: 'Cargando' },
    { value: 'empty', label: 'Vacío' }, { value: 'error', label: 'Error' }, { value: 'forbidden', label: '403' },
  ];
  const hasEmpty = isList; // "vacío" solo aplica a la lista
  const opts = hasEmpty ? stateOpts : stateOpts.filter((o) => o.value !== 'empty');
  return (
    <div data-mode="dark" style={{ background: '#0A0A0B', borderBottom: '1px solid #26262A', color: '#F5F5F7' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#8E8E93' }} aria-hidden="true" />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.09em', textTransform: 'uppercase', color: '#AEAEB2' }}>Prototipo · backoffice</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, color: '#8E8E93' }}>Modo</span>
          <BoSegmented ariaLabel="Modo" value={mode} onChange={() => onToggleMode()} options={[{ value: 'light', label: 'Claro' }, { value: 'dark', label: 'Oscuro' }]} />
        </div>
        <div title="Backoffice no es temeable por tenant: la marca queda en el fallback de casa (grafito claro / plata oscuro)." style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 11, color: '#8E8E93' }}>
          <span style={{ width: 13, height: 13, borderRadius: 4, background: mode === 'dark' ? '#E4E4E7' : '#1f1f22', border: '1px solid rgba(255,255,255,.2)' }} aria-hidden="true" />
          Marca Noctis fija · sin acento de tenant
        </div>
        {showState && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
            <span style={{ fontSize: 11, color: '#8E8E93' }}>{stateLabel}</span>
            <BoSegmented ariaLabel="Estado" value={isList ? listState : sectionState} onChange={isList ? setListState : setSectionState} options={opts} />
          </div>
        )}
      </div>
    </div>
  );
}

window.BackofficeApp = BackofficeApp;
ReactDOM.createRoot(document.getElementById('root')).render(<BackofficeApp />);
