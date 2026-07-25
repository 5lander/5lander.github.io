/* Noctis · commerce — SHELL. Viste los slots que el núcleo dejó abiertos: logo
   del tenant (fallback a Noctis), CompanySelector, sidebar POR PERMISOS colapsable,
   slot de branch reservado, footer legal. Chrome SIEMPRE neutro de casa; el acento
   del tenant aparece solo en el ítem de nav activo (los otros 3 puntos —primary,
   foco, selección— viven en el contenido). Réplica del contrato visual del Shell
   primitivo, extendida con la interacción que el prototipo necesita. */
const { Wordmark: SWordmark, Badge: SBadge, Icon: SIcon } = window.NoctisCommerceDesignSystem_4dfd35;
const { MicroLabel: ML } = window;

/* Logo del tenant (variable) con fallback al logo de casa Noctis. */
function TenantLogo({ tenant }) {
  if (!tenant) return <SWordmark size="sm" />;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ width: 26, height: 26, borderRadius: 7, background: 'hsl(var(--text-primary))', color: 'hsl(var(--surface-raised))', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 11, letterSpacing: '.02em' }}>{tenant.initials}</div>
      <span style={{ color: 'hsl(var(--text-primary))', fontSize: 13, fontWeight: 600, letterSpacing: '-.01em' }}>{tenant.name}</span>
    </div>
  );
}

/* CompanySelector — VISIBLE solo con >1 empresa. Cambiar empresa limpia el estado
   y vuelve a /dashboard (transición manejada por el orquestador). */
function CompanySelector({ empresas, value, onChange }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h); return () => document.removeEventListener('mousedown', h);
  }, [open]);
  if (!empresas || empresas.length < 2) return null; // con una sola empresa es invisible
  const current = empresas.find((e) => e.id === value) || empresas[0];
  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button type="button" onClick={() => setOpen((o) => !o)} aria-haspopup="listbox" aria-expanded={open} aria-label="Cambiar de empresa"
        style={{ display: 'flex', alignItems: 'center', gap: 8, height: 32, padding: '0 10px', borderRadius: 8, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-primary))', cursor: 'pointer', font: '500 12px var(--font-ui)', maxWidth: 220 }}>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{current.name}</span>
        <span aria-hidden="true" style={{ color: 'hsl(var(--text-tertiary))' }}>▾</span>
      </button>
      {open && (
        <div role="listbox" style={{ position: 'absolute', top: 38, left: 0, minWidth: 260, padding: 6, borderRadius: 12, background: 'hsl(var(--surface-overlay))', border: '1px solid hsl(var(--border-subtle))', boxShadow: 'var(--shadow-overlay)', zIndex: 40 }}>
          <div style={{ padding: '4px 8px 8px' }}><ML>Empresa</ML></div>
          {empresas.map((e) => {
            const active = e.id === value;
            return (
              <button key={e.id} role="option" aria-selected={active} onClick={() => { setOpen(false); if (!active) onChange(e.id); }}
                style={{ display: 'flex', width: '100%', alignItems: 'center', gap: 8, textAlign: 'left', border: 0, cursor: 'pointer', padding: '8px 10px', borderRadius: 8, background: active ? 'hsl(var(--surface-sunken))' : 'transparent', color: 'hsl(var(--text-primary))', font: 'inherit' }}>
                <span aria-hidden="true" style={{ width: 14, color: active ? 'hsl(var(--brand-primary))' : 'transparent' }}>✓</span>
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 13, fontWeight: active ? 600 : 500 }}>{e.name}</span>
                  <span style={{ fontSize: 11, color: 'hsl(var(--text-tertiary))', fontFamily: 'var(--font-mono)' }}>{e.legal.split('·')[1]?.trim()}</span>
                </span>
              </button>
            );
          })}
          <div style={{ padding: '8px 10px 4px', fontSize: 11, color: 'hsl(var(--text-tertiary))', borderTop: '1px solid hsl(var(--border-subtle))', marginTop: 4 }}>Al cambiar de empresa se limpia el estado y vuelve al inicio.</div>
        </div>
      )}
    </div>
  );
}

/* Ítem de sidebar. Ícono Lucide del sistema por id de módulo (mismo set que backoffice).
   Decisión declarada: los módulos "Pronto" (no construidos) son INFORMATIVOS PUROS —no un control
   deshabilitado ni un link con handler nulo—: se renderizan como <div> sin href/ruta, sin onClick,
   sin foco (no tabbable) y sin aria-disabled. El estado viaja en texto sr-only siempre presente +
   title, así se percibe sin vista y en ambos modos. Solo los construidos son <button> navegable. */
function NavItem({ item, active, collapsed, onClick, profile }) {
  const disabled = !item.built; // visible-pero-Pronto (informativo)
  const srName = item.label + ' · Pronto (módulo por construir)';
  const inner = (
    <>
      <span style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
        <span style={{ position: 'relative', display: 'inline-flex', flex: 'none', opacity: collapsed && disabled ? .5 : 1 }}>
          <SIcon module={item.id} size={20} style={{ flex: 'none' }} />
          {collapsed && disabled && <span aria-hidden="true" style={{ position: 'absolute', top: -2, right: -2, width: 6, height: 6, borderRadius: 999, background: active ? 'hsl(var(--brand-foreground))' : 'hsl(var(--text-tertiary))', boxShadow: '0 0 0 2px ' + (active ? 'hsl(var(--brand-primary))' : 'hsl(var(--surface-sunken))') }} />}
        </span>
        {!collapsed && <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.label}</span>}
        {collapsed && disabled && <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0 }}>{srName}</span>}
      </span>
      {!collapsed && disabled && <span style={{ fontSize: 10, fontWeight: 500, padding: '1px 7px', borderRadius: 999, background: active ? 'hsl(var(--brand-foreground) / .2)' : 'hsl(var(--surface-base))', border: active ? 0 : '1px solid hsl(var(--border-subtle))', color: active ? 'hsl(var(--brand-foreground))' : 'hsl(var(--text-tertiary))' }}>Pronto</span>}
    </>
  );
  const baseStyle = { display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left', border: 0,
    padding: collapsed ? 8 : '8px 10px', borderRadius: 8, font: '500 13px var(--font-ui)',
    justifyContent: collapsed ? 'center' : 'space-between',
    background: active ? 'hsl(var(--brand-primary))' : 'transparent',
    color: active ? 'hsl(var(--brand-foreground))' : 'hsl(var(--text-secondary))' };
  if (disabled) {
    return (
      <div title={collapsed ? item.label + ' · Pronto' : undefined} style={{ ...baseStyle, cursor: 'default', position: 'relative' }}>
        {inner}
      </div>
    );
  }
  return (
    <button type="button" onClick={onClick} title={collapsed ? item.label : undefined} aria-current={active ? 'page' : undefined} aria-label={collapsed ? item.label : undefined}
      style={{ ...baseStyle, cursor: 'pointer', position: 'relative' }}>
      {inner}
    </button>
  );
}

function Sidebar({ nav, profile, active, collapsed, onToggle, onNavigate }) {
  const { CanPerm } = window;
  // gating capa 1: módulo visible solo con >=1 permiso efectivo
  const groups = nav.map((g) => ({ ...g, items: g.items.filter((it) => CanPerm(profile, it.perm)) })).filter((g) => g.items.length);
  return (
    <div style={{ width: collapsed ? 60 : 214, flex: 'none', background: 'hsl(var(--surface-sunken))', borderRight: '1px solid hsl(var(--border-subtle))', display: 'flex', flexDirection: 'column', transition: 'width .16s ease' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: collapsed ? '10px 8px' : '12px 10px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {groups.map((g, gi) => (
          <div key={gi} style={{ marginBottom: 6 }}>
            {!collapsed && <ML style={{ padding: '8px 8px 4px' }}>{g.section}</ML>}
            {collapsed && gi > 0 && <div style={{ height: 1, background: 'hsl(var(--border-subtle))', margin: '6px 6px' }} />}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {g.items.map((it) => (
                <NavItem key={it.id} item={it} profile={profile} collapsed={collapsed} active={active === it.id} onClick={() => onNavigate(it)} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* SLOT DE BRANCH reservado — hoy sin selector (POS/Caja lo necesitará). No se llena. */}
      <div style={{ padding: collapsed ? 8 : 10, borderTop: '1px solid hsl(var(--border-subtle))' }}>
        <div title="Slot de sucursal — reservado para POS/Caja" style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: collapsed ? 'center' : 'flex-start', padding: collapsed ? 8 : '8px 10px', borderRadius: 8, border: '1px dashed hsl(var(--border-strong))', color: 'hsl(var(--text-disabled))', fontSize: 12 }}>
          <SIcon name="store" size={20} style={{ flex: 'none', opacity: .7 }} />
          {!collapsed && <span>Sucursal · reservado</span>}
        </div>
      </div>
      <div style={{ padding: collapsed ? 8 : '8px 10px', borderTop: '1px solid hsl(var(--border-subtle))' }}>
        <button type="button" onClick={onToggle} aria-label={collapsed ? 'Expandir menú' : 'Colapsar menú'} aria-pressed={collapsed}
          style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', justifyContent: collapsed ? 'center' : 'flex-start', border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', borderRadius: 8, padding: collapsed ? 7 : '7px 10px', cursor: 'pointer', fontSize: 12, fontFamily: 'var(--font-ui)' }}>
          <SIcon name={collapsed ? 'chevrons-right' : 'chevrons-left'} size={16} />{!collapsed && 'Colapsar'}
        </button>
      </div>
    </div>
  );
}

function CommerceShell({ tenant, empresa, profile, mode, onToggleMode, onLogout, activeModule, onNavigate, onChangeCompany, collapsed, onToggleCollapse, children }) {
  const modeIcon = mode === 'dark' ? '☾' : '☀';
  const empresaObj = tenant.empresas.find((e) => e.id === empresa) || tenant.empresas[0];
  return (
    <div style={{ border: '1px solid hsl(var(--border-subtle))', borderRadius: 14, overflow: 'hidden', background: 'hsl(var(--surface-base))', display: 'flex', flexDirection: 'column', minHeight: 640 }}>
      {/* topbar — chrome neutro de casa */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 14px', height: 56, flex: 'none', background: 'hsl(var(--surface-raised))', borderBottom: '1px solid hsl(var(--border-subtle))' }}>
        <TenantLogo tenant={tenant} />
        <div style={{ width: 1, height: 24, background: 'hsl(var(--border-subtle))' }} />
        <CompanySelector empresas={tenant.empresas} value={empresa} onChange={onChangeCompany} />
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ color: 'hsl(var(--text-secondary))', fontSize: 12, display: 'none' }} className="hide-sm" />
          <div style={{ textAlign: 'right', lineHeight: 1.3 }}>
            <div style={{ fontSize: 12, color: 'hsl(var(--text-primary))', fontWeight: 500 }}>{profile.email}</div>
            <div style={{ fontSize: 11, color: 'hsl(var(--text-tertiary))' }}>{tenant.name} · {tenant.product}</div>
          </div>
          <button type="button" onClick={onToggleMode} aria-label={mode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'} style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', cursor: 'pointer', fontSize: 14 }}>{modeIcon}</button>
          <button type="button" onClick={onLogout} style={{ height: 32, padding: '0 12px', borderRadius: 8, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', fontSize: 12, cursor: 'pointer', fontFamily: 'var(--font-ui)' }}>Salir</button>
        </div>
      </div>
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <Sidebar nav={window.CommerceData.NAV} profile={profile} active={activeModule} collapsed={collapsed} onToggle={onToggleCollapse} onNavigate={onNavigate} />
        <div style={{ flex: 1, minWidth: 0, position: 'relative', background: 'hsl(var(--surface-base))', overflow: 'auto' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto', padding: '22px 26px 40px' }}>{children}</div>
        </div>
      </div>
      {/* footer — línea legal del tenant + constante de plataforma */}
      <div style={{ padding: '10px 16px', flex: 'none', borderTop: '1px solid hsl(var(--border-subtle))', background: 'hsl(var(--surface-raised))', display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 11, color: 'hsl(var(--text-tertiary))', flexWrap: 'wrap' }}>
        <span>{empresaObj.legal}</span>
        <span style={{ fontWeight: 500, color: 'hsl(var(--text-secondary))' }}>Powered by Noctis Commerce</span>
      </div>
    </div>
  );
}

/* Dashboard — placeholder DIGNO (el dashboard KPI real es Fase 2). Sin KPIs falsos. */
function Dashboard({ tenant, profile, onGoProductos, canProductos }) {
  const { Card, Badge, Button } = window.NoctisCommerceDesignSystem_4dfd35;
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ font: '600 28px/34px var(--font-ui)', letterSpacing: '-.02em', margin: '0 0 8px' }}>Panel de inicio</h1>
        <p style={{ margin: 0, color: 'hsl(var(--text-secondary))', fontSize: 14, maxWidth: '56ch' }}>
          Está trabajando en <b style={{ color: 'hsl(var(--text-primary))' }}>{tenant.name}</b> como {profile.label.toLowerCase()}. Desde aquí accede a los módulos habilitados para su perfil.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14, marginBottom: 20 }}>
        {canProductos && (
          <Card header="Catálogo">
            <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Productos</div>
            <p style={{ margin: '0 0 14px', color: 'hsl(var(--text-secondary))', fontSize: 13 }}>Gestione productos madre, variantes y códigos de barras.</p>
            <Button variant="primary" size="sm" onClick={onGoProductos}>Abrir productos</Button>
          </Card>
        )}
        <Card header="Su perfil">
          <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{profile.label}</div>
          <p style={{ margin: '0 0 12px', color: 'hsl(var(--text-secondary))', fontSize: 13 }}>Los módulos del menú se muestran según sus permisos efectivos.</p>
          <Badge tone="neutral">{profile.perms.length} permisos</Badge>
        </Card>
      </div>
      <Card>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <span aria-hidden="true" style={{ fontSize: 16, color: 'hsl(var(--text-tertiary))', marginTop: 1 }}>◷</span>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2 }}>El tablero con indicadores llega en la Fase 2</div>
            <p style={{ margin: 0, color: 'hsl(var(--text-secondary))', fontSize: 13, maxWidth: '64ch' }}>Ventas del día, productos por vencer y bajo stock aparecerán aquí. No se muestran cifras hasta tener el dato real — el hueco se señala, no se inventa.</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

Object.assign(window, { CommerceShell, Dashboard, CompanySelector });
