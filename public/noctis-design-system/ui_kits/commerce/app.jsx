/* Noctis · commerce — ORQUESTADOR del prototipo. Router de vistas, ejes en vivo
   (MODO por usuario, MARCA por tenant como par {primary,foreground}), gating en
   tres capas y una barra de PROTOTIPO (andamiaje, no chrome de la app) para
   recorrer tenant · perfil · estados. Solo shell + Productos. */
const ANS = window.NoctisCommerceDesignSystem_4dfd35;
const { Toast: AToast, Badge: ABadge, Button: AButton, Card: ACard, Wordmark: AWordmark } = ANS;
const D = window.CommerceData;

function ProntoView({ label }) {
  return (
    <>
      <window.Crumbs items={[{ label: 'Inicio' }, { label }]} />
      <window.PageHeader title={label} meta={<ABadge tone="neutral">Pronto</ABadge>} />
      <ACard>
        <div style={{ padding: '24px 8px', textAlign: 'center', maxWidth: 460, margin: '0 auto' }}>
          <div style={{ font: '600 16px/22px var(--font-ui)' }}>Módulo en construcción</div>
          <p style={{ margin: '6px 0 0', color: 'hsl(var(--text-secondary))', fontSize: 13 }}>Tiene permiso para <b>{label}</b>, pero este módulo aún no se construye en este corte. Se muestra en el menú con la marca «Pronto» — el hueco se señala, no se oculta.</p>
        </div>
      </ACard>
    </>
  );
}

function SignedOut({ onBack }) {
  return (
    <div style={{ minHeight: 560, display: 'grid', placeItems: 'center', borderRadius: 14, overflow: 'hidden', position: 'relative', background: 'linear-gradient(150deg,#000 0%,#1C1C1E 65%,#2C2C2E 100%)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 90% at 90% -20%, rgba(255,255,255,.07), transparent 60%)' }} />
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <AWordmark onDark />
        <div style={{ font: '500 20px/1.2 var(--font-ui)', color: '#F5F5F7', margin: '18px 0 6px' }}>Sesión cerrada</div>
        <p style={{ color: '#AEAEB2', fontSize: 13, margin: '0 0 18px' }}>Cerró sesión de forma segura.</p>
        <AButton variant="secondary" onClick={onBack}>Volver a ingresar</AButton>
      </div>
    </div>
  );
}

function CommerceApp() {
  const [mode, setMode] = React.useState('light');
  const [tenantId, setTenantId] = React.useState('aguilar');
  const [empresaId, setEmpresaId] = React.useState('e1');
  const [profileKey, setProfileKey] = React.useState('admin');
  const [collapsed, setCollapsed] = React.useState(false);
  const [route, setRoute] = React.useState({ view: 'dashboard' });
  const [activeModule, setActiveModule] = React.useState(null);
  const [listState, setListState] = React.useState('data');
  const [sectionState, setSectionState] = React.useState('data');
  const [toast, setToast] = React.useState(null);
  const [transition, setTransition] = React.useState(false);
  const [signedOut, setSignedOut] = React.useState(false);

  const tenant = D.TENANTS[tenantId];
  const profile = { ...D.PROFILES[profileKey] };
  const { CanPerm } = window;
  const showToast = (msg) => setToast(msg);

  const go = (view, extra = {}) => setRoute({ view, ...extra });
  const product = route.productId ? D.PRODUCTS.find((p) => p.id === route.productId) : null;
  const variant = (route.productId && route.variantId) ? (D.VARIANTS[route.productId] || []).find((v) => v.id === route.variantId) : null;
  const barcode = (variant && route.barcodeId) ? (D.BARCODES[variant.id] || []).find((b) => b.id === route.barcodeId) : null;

  // gating capa 2 (fail-closed): si el perfil pierde el permiso de la vista actual, bounce a /dashboard
  React.useEffect(() => {
    const needsProductos = route.view !== 'dashboard' && route.view !== 'pronto';
    if (needsProductos && !CanPerm(profile, 'productos.read')) { go('dashboard'); setActiveModule(null); }
  }, [profileKey]); // eslint-disable-line

  const onNavigate = (item) => {
    if (!item.built) { setActiveModule(item.id); go('pronto', { prontoLabel: item.label }); return; }
    setActiveModule(item.id); go('productos');
  };

  const onChangeCompany = (id) => {
    // cambiar empresa: limpia TODO el estado y vuelve a /dashboard
    setTransition(true);
    setTimeout(() => {
      setEmpresaId(id); setRoute({ view: 'dashboard' }); setActiveModule(null);
      setListState('data'); setSectionState('data'); setTransition(false);
      showToast('Empresa cambiada · estado reiniciado.');
    }, 950);
  };

  const onChangeTenant = (id) => {
    setTenantId(id); setEmpresaId('e1'); setRoute({ view: 'dashboard' }); setActiveModule(null);
    setListState('data'); setSectionState('data');
  };
  const onChangeProfile = (k) => { setProfileKey(k); };

  const backToProductos = () => { setActiveModule('productos'); go('productos'); };
  const backToProduct = (pid) => { setActiveModule('productos'); go('producto-detalle', { productId: pid }); };

  let content;
  switch (route.view) {
    case 'dashboard':
      content = <window.Dashboard tenant={tenant} profile={profile} canProductos={CanPerm(profile, 'productos.read')} onGoProductos={() => onNavigate({ id: 'productos', built: true })} />;
      break;
    case 'pronto':
      content = <ProntoView label={route.prontoLabel} />;
      break;
    case 'productos':
      content = <window.ProductsList profile={profile} listState={listState} onRetry={() => setListState('data')}
        onNew={() => go('producto-nuevo')} onOpen={(id) => go('producto-detalle', { productId: id })} />;
      break;
    case 'producto-nuevo':
      content = <window.ProductForm scenario="ok" onCancel={backToProductos} onSaved={(m) => { showToast(m); backToProductos(); }} />;
      break;
    case 'producto-editar':
      content = <window.ProductForm product={product} scenario={route.scenario} onCancel={() => backToProduct(product.id)} onSaved={(m) => { showToast(m); backToProduct(product.id); }} />;
      break;
    case 'producto-detalle':
      content = <window.ProductDetail product={product} profile={profile} sectionState={sectionState} onRetry={() => setSectionState('data')}
        onEdit={() => go('producto-editar', { productId: product.id, scenario: 'ok' })}
        onBack={backToProductos}
        onNewVariant={() => go('variante-nueva', { productId: product.id })}
        onOpenVariant={(vid) => go('variante-detalle', { productId: product.id, variantId: vid })}
        onToast={showToast} />;
      break;
    case 'variante-nueva':
      content = <window.VariantForm product={product} onCancel={(w) => backToProduct(product.id)} onSaved={(m) => { showToast(m); backToProduct(product.id); }} />;
      break;
    case 'variante-editar':
      content = <window.VariantForm product={product} variant={variant} onCancel={() => go('variante-detalle', { productId: product.id, variantId: variant.id })} onSaved={(m) => { showToast(m); go('variante-detalle', { productId: product.id, variantId: variant.id }); }} />;
      break;
    case 'variante-detalle':
      content = <window.VariantDetail product={product} variant={variant} profile={profile} sectionState={sectionState} onRetry={() => setSectionState('data')}
        onBackProduct={() => backToProduct(product.id)}
        onEdit={() => go('variante-editar', { productId: product.id, variantId: variant.id })}
        onNewBarcode={() => go('barcode-nuevo', { productId: product.id, variantId: variant.id })}
        onEditBarcode={(bid) => go('barcode-editar', { productId: product.id, variantId: variant.id, barcodeId: bid })}
        onToast={showToast} onDeleted={() => backToProduct(product.id)} />;
      break;
    case 'barcode-nuevo':
      content = <window.BarcodeForm product={product} variant={variant} onCancel={() => go('variante-detalle', { productId: product.id, variantId: variant.id })} onSaved={(m) => { showToast(m); go('variante-detalle', { productId: product.id, variantId: variant.id }); }} />;
      break;
    case 'barcode-editar':
      content = <window.BarcodeForm product={product} variant={variant} barcode={barcode} onCancel={() => go('variante-detalle', { productId: product.id, variantId: variant.id })} onSaved={(m) => { showToast(m); go('variante-detalle', { productId: product.id, variantId: variant.id }); }} />;
      break;
    default:
      content = null;
  }

  // el par MARCA {primary, foreground} viaja SIEMPRE junto; nunca primary solo
  const accentVars = { '--brand-primary': tenant.accent, '--brand-foreground': tenant.fg };
  // ¿la sección embebida está en la vista actual? (para habilitar su control de estado)
  const sectionScreens = ['producto-detalle', 'variante-detalle'];
  const listScreens = ['productos'];

  return (
    <div data-mode={mode} style={{ minHeight: '100vh', background: 'hsl(var(--surface-sunken))', color: 'hsl(var(--text-primary))', fontFamily: 'var(--font-ui)', ...accentVars }}>
      <PrototypeBar
        mode={mode}
        tenantId={tenantId} onChangeTenant={onChangeTenant}
        profileKey={profileKey} onChangeProfile={onChangeProfile}
        listState={listState} setListState={setListState} listEnabled={listScreens.includes(route.view)}
        sectionState={sectionState} setSectionState={setSectionState} sectionEnabled={sectionScreens.includes(route.view)}
        tenant={tenant}
      />
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '16px 20px 28px' }}>
        {signedOut ? (
          <SignedOut onBack={() => { setSignedOut(false); go('dashboard'); setActiveModule(null); }} />
        ) : (
          <div style={{ position: 'relative' }}>
            <window.CommerceShell
              tenant={tenant} empresa={empresaId} profile={profile} mode={mode}
              onToggleMode={() => setMode((m) => (m === 'light' ? 'dark' : 'light'))}
              onLogout={() => setSignedOut(true)}
              activeModule={activeModule} onNavigate={onNavigate}
              onChangeCompany={onChangeCompany}
              collapsed={collapsed} onToggleCollapse={() => setCollapsed((c) => !c)}
            >
              {content}
            </window.CommerceShell>
            {transition && <window.GateOverlay text="Cambiando de empresa · limpiando estado…" />}
          </div>
        )}
      </div>
      {toast && <div style={{ position: 'fixed', left: 0, right: 0, bottom: 22, display: 'flex', justifyContent: 'center', zIndex: 90, pointerEvents: 'none' }}><div style={{ pointerEvents: 'auto' }}><AToast onDismiss={() => setToast(null)}>{toast}</AToast></div></div>}
    </div>
  );
}

/* Barra de PROTOTIPO — andamiaje tipo Storybook, NO es chrome de la app. Recorre
   los ejes (tenant→acento, perfil→permisos) y los cuatro estados del kit. */
function PrototypeBar({ mode, tenantId, onChangeTenant, profileKey, onChangeProfile, listState, setListState, listEnabled, sectionState, setSectionState, sectionEnabled, tenant }) {
  const { Segmented, MicroLabel } = window;
  const stateOpts = [
    { value: 'data', label: 'Datos' }, { value: 'loading', label: 'Cargando' },
    { value: 'empty', label: 'Vacío' }, { value: 'error', label: 'Error' }, { value: 'forbidden', label: '403' },
  ];
  return (
    <div data-mode="dark" style={{ background: '#0A0A0B', borderBottom: '1px solid #26262A', color: '#F5F5F7' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#8E8E93' }} aria-hidden="true" />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.09em', textTransform: 'uppercase', color: '#AEAEB2' }}>Prototipo</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, color: '#8E8E93' }}>Tenant</span>
          <Segmented ariaLabel="Tenant" value={tenantId} onChange={onChangeTenant} options={[
            { value: 'aguilar', label: 'Aguilar' }, { value: 'sanrafael', label: 'San Rafael' }, { value: 'rincon', label: 'El Rincón' },
          ]} />
          <span title={`Acento: ${tenant.accentName}`} style={{ width: 16, height: 16, borderRadius: 5, background: `hsl(${tenant.accent})`, border: '1px solid rgba(255,255,255,.2)' }} aria-hidden="true" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, color: '#8E8E93' }}>Perfil</span>
          <Segmented ariaLabel="Perfil" value={profileKey} onChange={onChangeProfile} options={[
            { value: 'admin', label: 'Admin' }, { value: 'bodeguero', label: 'Bodeguero' }, { value: 'vendedor', label: 'Vendedor' }, { value: 'cajero', label: 'Cajero' }, { value: 'contador', label: 'Contador' },
          ]} />
        </div>
        {(listEnabled || sectionEnabled) && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
            <span style={{ fontSize: 11, color: '#8E8E93' }}>{listEnabled ? 'Estado lista' : 'Estado sección'}</span>
            <Segmented ariaLabel="Estado" value={listEnabled ? listState : sectionState} onChange={listEnabled ? setListState : setSectionState} options={stateOpts} />
          </div>
        )}
      </div>
    </div>
  );
}

window.CommerceApp = CommerceApp;
ReactDOM.createRoot(document.getElementById('root')).render(<CommerceApp />);
