/* Noctis — UI kit del NÚCLEO compartido. Pantallas que heredan ambas apps
   (commerce y backoffice): Login → Select-workspace → Shell (vista Productos).
   Consume los primitivos del sistema; no reimplementa ninguno. */
const NS = window.NoctisCommerceDesignSystem_4dfd35;
const { Button, Input, Wordmark, Shell, Table, Badge, MoneyDisplay, Tabs, Combobox, EmptyState } = NS;

/* Acentos de tenant (par primary+foreground curado por el clamp: luminancia + croma + hue OKLCH ≥ 25° del -fg de cada semántico, ambos modos → ventanas 98–127/179–227/282–3).
   Chrome siempre neutro; el acento solo aparece en botón primario, nav activo, foco y selección. */
const TENANTS = {
  aguilar: { name: 'Librería Aguilar S.A.', initials: 'LA', role: 'Administrador · 5 sucursales', product: 'commerce', accent: '262 60% 42%', fg: '0 0% 100%' },
  sanrafael: { name: 'Farmacia San Rafael', initials: 'FS', role: 'Contador · multi-empresa', product: 'commerce', accent: '184 72% 26%', fg: '0 0% 100%' },
  noctis: { name: 'Noctis · Plataforma', initials: '◆', role: 'Platform Admin', product: 'backoffice', accent: null, fg: null },
};

function LoginScreen({ onLogin }) {
  return (
    <div style={{ minHeight: '100%', display: 'grid', placeItems: 'center', padding: 24 }}>
      <div style={{ width: 'min(760px,100%)', border: '1px solid hsl(var(--border-subtle))', borderRadius: 16, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ position: 'relative', padding: 28, background: 'linear-gradient(150deg,#000 0%,#1C1C1E 65%,#2C2C2E 100%)', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 90% at 90% -20%, rgba(255,255,255,.07), transparent 60%)' }} />
          <div style={{ position: 'relative' }}>
            <Wordmark onDark />
            <div style={{ font: '500 22px/1.2 var(--font-ui)', color: '#F5F5F7', marginTop: 18, letterSpacing: '-.01em' }}>Inicie sesión</div>
            <p style={{ margin: '8px 0 0', color: '#AEAEB2', fontSize: 13, maxWidth: '34ch' }}>Núcleo compartido entre commerce y backoffice. Negro y plata, sin editorial dentro de la herramienta.</p>
          </div>
        </div>
        <div style={{ padding: 24, background: 'hsl(var(--surface-raised))', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Input label="Correo" defaultValue="agustina@aguilar.ec" />
          <Input label="Contraseña" type="password" defaultValue="claveSegura1" />
          <Button variant="primary" style={{ width: '100%' }} onClick={onLogin}>Ingresar</Button>
          <span style={{ fontSize: 11, color: 'hsl(var(--text-tertiary))' }}>Hueco conocido: «olvidé mi clave» no existe en el roadmap — se señala, no se inventa.</span>
        </div>
      </div>
    </div>
  );
}

function WorkspaceScreen({ onPick }) {
  return (
    <div style={{ minHeight: '100%', display: 'grid', placeItems: 'center', padding: 24 }}>
      <div style={{ width: 'min(720px,100%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}><Wordmark size="sm" /></div>
        <h1 style={{ font: '600 24px/1.2 var(--font-ui)', letterSpacing: '-.015em', margin: '10px 0 2px' }}>Elija un espacio de trabajo</h1>
        <p style={{ margin: '0 0 18px', color: 'hsl(var(--text-secondary))', fontSize: 13 }}>Cards por acceso (tenant × producto).</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 12 }}>
          {Object.entries(TENANTS).map(([id, t]) => (
            <button key={id} onClick={() => onPick(id)} style={{ textAlign: 'left', border: '1px solid hsl(var(--border-strong))', borderRadius: 12, padding: 16, background: 'hsl(var(--surface-raised))', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: 'hsl(var(--text-primary))', color: 'hsl(var(--surface-raised))', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 13 }}>{t.initials}</div>
                <Badge tone="neutral">{t.product}</Badge>
              </div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
              <div style={{ fontSize: 12, color: 'hsl(var(--text-tertiary))' }}>{t.role}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductsScreen({ tenant, mode, onToggleMode, onLogout }) {
  const [tab, setTab] = React.useState('variantes');
  const [cliente, setCliente] = React.useState('');
  const rows = [
    { e: <Badge tone="success" dot>Activa</Badge>, p: 'Cuaderno universitario 100h', c: 'Papelería', s: '128', pr: <MoneyDisplay value={2.45} size="sm" />, a: <Button variant="ghost" size="sm">Editar</Button> },
    { e: <Badge tone="success" dot>Activa</Badge>, p: 'Esferográfico azul BIC', c: 'Escritura', s: '1.204', pr: <MoneyDisplay value={0.35} size="sm" />, a: <Button variant="danger-ghost" size="sm">Descontinuar</Button> },
    { e: <Badge tone="neutral">Borrador</Badge>, p: 'Marcador permanente negro', c: 'Escritura', s: '0', pr: <MoneyDisplay value={null} size="sm" />, a: <Button variant="ghost" size="sm">Editar</Button> },
    { e: <Badge tone="info">En tránsito</Badge>, p: 'Resma A4 75g', c: 'Papelería', s: '340', pr: <MoneyDisplay value={4.9} size="sm" />, a: <Button variant="ghost" size="sm">Editar</Button> },
  ];
  return (
    <Shell
      user={`agustina@aguilar.ec · ${tenant.name.split(' ')[0]} · ${tenant.product}`}
      mode={mode}
      onToggleMode={onToggleMode}
      onLogout={onLogout}
      tenantLogo={<><div style={{ width: 24, height: 24, borderRadius: 6, background: 'hsl(var(--text-primary))', color: 'hsl(var(--surface-raised))', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 11 }}>{tenant.initials}</div><span style={{ color: 'hsl(var(--text-secondary))', fontSize: 12, fontWeight: 600 }}>{tenant.name}</span></>}
      nav={[{ section: 'Vender', items: [
        { label: 'Productos', active: true, children: ['Madre', 'Variantes'] },
        { label: 'Precios' },
        { label: 'Clientes' },
        { label: 'POS', badge: 'Pronto', disabled: true },
      ] }]}
      footerLegal="Librería Aguilar S.A. · RUC 1790012345001"
    >
      <div style={{ fontSize: 12, color: 'hsl(var(--text-tertiary))', marginBottom: 10 }}>Productos › Variantes</div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', marginBottom: 14, flexWrap: 'wrap' }}>
        <div style={{ flex: '0 0 280px' }}>
          <label style={{ display: 'block', font: '500 13px/1.2 var(--font-ui)', marginBottom: 6 }}>Cliente</label>
          <Combobox value={cliente} onChange={setCliente} placeholder="Seleccione un cliente…" searchPlaceholder="Buscar por nombre o identificación…" options={[
            { value: 'cf', label: 'Consumidor Final', meta: '· un toque', accent: true },
            { value: 'ag', label: 'Librería Aguilar S.A.', meta: 'RUC 1790012345001' },
            { value: 'mm', label: 'María Méndez Rueda', meta: 'CI 1712345678' },
          ]} />
        </div>
        <Button variant="primary">Nuevo producto</Button>
      </div>
      <div style={{ border: '1px solid hsl(var(--border-subtle))', borderRadius: 12, overflow: 'hidden', background: 'hsl(var(--surface-raised))', marginBottom: 14 }}>
        <Tabs value={tab} onChange={setTab} tabs={[{ id: 'variantes', label: 'Variantes' }, { id: 'codigos', label: 'Códigos de barras' }, { id: 'precios', label: 'Precios' }]} />
        <div style={{ padding: 14, fontSize: 13, color: 'hsl(var(--text-secondary))' }}>Sección <b style={{ color: 'hsl(var(--text-primary))' }}>{tab}</b> — lista keyset con CTAs gated por permiso.</div>
      </div>
      <Table
        columns={[
          { key: 'e', label: 'Estado' }, { key: 'p', label: 'Producto' }, { key: 'c', label: 'Categoría' },
          { key: 's', label: 'Stock', numeric: true }, { key: 'pr', label: 'Precio', numeric: true }, { key: 'a', label: 'Acciones', align: 'right' },
        ]}
        rows={rows}
        footNote="Orden cronológico · sin números de página, total ni salto"
        onLoadMore={() => {}}
      />
    </Shell>
  );
}

function CoreApp() {
  const [screen, setScreen] = React.useState('login');
  const [tenantId, setTenantId] = React.useState('aguilar');
  const [mode, setMode] = React.useState('light');
  const tenant = TENANTS[tenantId];
  const wrapperStyle = (screen === 'products' && tenant.accent)
    ? { '--brand-primary': tenant.accent, '--brand-foreground': tenant.fg }
    : {};
  return (
    <div data-mode={mode} style={{ minHeight: '100vh', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-primary))', fontFamily: 'var(--font-ui)', ...wrapperStyle }}>
      {screen === 'login' && <LoginScreen onLogin={() => setScreen('workspace')} />}
      {screen === 'workspace' && <WorkspaceScreen onPick={(id) => { setTenantId(id); setScreen('products'); }} />}
      {screen === 'products' && <ProductsScreen tenant={tenant} mode={mode} onToggleMode={() => setMode(m => m === 'light' ? 'dark' : 'light')} onLogout={() => { window.location.href = '../../index.html'; }} />}
    </div>
  );
}

window.CoreApp = CoreApp;
ReactDOM.createRoot(document.getElementById('root')).render(<CoreApp />);
