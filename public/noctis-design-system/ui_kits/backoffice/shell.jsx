/* Noctis · backoffice — SHELL. A diferencia de commerce: NO temeable por tenant
   (marca Noctis fija, cero acento de tenant), sidebar FIJA (no por permisos), sin
   CompanySelector, sin logo de tenant, sin slot de sucursal — son conceptos de
   commerce. El toggle de modo SÍ aplica: es preferencia de USUARIO. Densidad
   back-office (comfortable), nada táctil. */
const { Wordmark: SWordmark, Icon: SIcon, Card: SCard, Badge: SBadge, Button: SButton } = window.NoctisCommerceDesignSystem_4dfd35;
const ML = window.BoMicroLabel;

/* Ítem de sidebar. Mismo LENGUAJE DE ESTADO DE MÓDULO que commerce: los módulos
   "Pronto" (no construidos) son INFORMATIVOS PUROS —no un control deshabilitado ni
   un link con handler nulo—: <div> sin href/onClick, no tabbable, sin aria-disabled.
   Expandido → chip "Pronto"; colapsado → reloj discreto. El estado viaja en texto
   sr-only siempre presente + title. Solo los construidos son <button> navegable. */
function NavItem({ item, active, collapsed, onClick }) {
  const disabled = !item.built;
  const srName = item.label + ' · Pronto (módulo por construir)';
  const inner = (
    <>
      <span style={{ display: 'flex', alignItems: 'center', gap: 11, minWidth: 0 }}>
        <span style={{ position: 'relative', display: 'inline-flex', flex: 'none', opacity: collapsed && disabled ? .5 : 1 }}>
          <SIcon name={item.icon} size={20} style={{ flex: 'none' }} />
          {collapsed && disabled && <span aria-hidden="true" style={{ position: 'absolute', top: -3, right: -3, fontSize: 9, lineHeight: 1, color: 'hsl(var(--text-tertiary))' }}>◷</span>}
        </span>
        {!collapsed && <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.label}</span>}
        {collapsed && disabled && <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0 }}>{srName}</span>}
      </span>
      {!collapsed && disabled && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 500, padding: '1px 7px', borderRadius: 999, background: 'hsl(var(--surface-base))', border: '1px solid hsl(var(--border-subtle))', color: 'hsl(var(--text-tertiary))' }}><span aria-hidden="true">◷</span>Pronto</span>}
    </>
  );
  const baseStyle = { display: 'flex', alignItems: 'center', gap: 11, width: '100%', textAlign: 'left', border: 0,
    padding: collapsed ? 10 : '10px 12px', borderRadius: 8, font: '500 13.5px var(--font-ui)',
    justifyContent: collapsed ? 'center' : 'space-between',
    background: active ? 'hsl(var(--brand-primary))' : 'transparent',
    color: active ? 'hsl(var(--brand-foreground))' : 'hsl(var(--text-secondary))' };
  if (disabled) {
    return <div title={collapsed ? item.label + ' · Pronto' : undefined} style={{ ...baseStyle, cursor: 'default', position: 'relative' }}>{inner}</div>;
  }
  return (
    <button type="button" onClick={onClick} title={collapsed ? item.label : undefined} aria-current={active ? 'page' : undefined} aria-label={collapsed ? item.label : undefined}
      style={{ ...baseStyle, cursor: 'pointer', position: 'relative' }}
      style-hover={active ? undefined : 'background:hsl(var(--surface-sunken))'}>
      {inner}
    </button>
  );
}

function Sidebar({ nav, active, collapsed, onToggle, onNavigate }) {
  return (
    <div style={{ width: collapsed ? 64 : 232, flex: 'none', background: 'hsl(var(--surface-sunken))', borderRight: '1px solid hsl(var(--border-subtle))', display: 'flex', flexDirection: 'column', transition: 'width .16s ease' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: collapsed ? '12px 8px' : '14px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {nav.map((g, gi) => (
          <div key={gi} style={{ marginBottom: 8 }}>
            {!collapsed && <ML style={{ padding: '8px 8px 6px' }}>{g.section}</ML>}
            {collapsed && gi > 0 && <div style={{ height: 1, background: 'hsl(var(--border-subtle))', margin: '8px 8px' }} />}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {g.items.map((it) => (
                <NavItem key={it.id} item={it} collapsed={collapsed} active={active === it.id} onClick={() => onNavigate(it)} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Sin slot de sucursal (concepto de commerce). Solo el colapsar. */}
      <div style={{ padding: collapsed ? 8 : '10px 12px', borderTop: '1px solid hsl(var(--border-subtle))' }}>
        <button type="button" onClick={onToggle} aria-label={collapsed ? 'Expandir menú' : 'Colapsar menú'} aria-pressed={collapsed}
          style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', justifyContent: collapsed ? 'center' : 'flex-start', border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', borderRadius: 8, padding: collapsed ? 8 : '8px 10px', cursor: 'pointer', fontSize: 12, fontFamily: 'var(--font-ui)' }}>
          <SIcon name={collapsed ? 'chevrons-right' : 'chevrons-left'} size={16} />{!collapsed && 'Colapsar'}
        </button>
      </div>
    </div>
  );
}

/* Marca de casa Noctis FIJA en el topbar (nunca logo de tenant). */
function NoctisMark() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <SWordmark size="sm" />
      <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'hsl(var(--text-tertiary))', padding: '3px 8px', borderRadius: 999, border: '1px solid hsl(var(--border-subtle))', background: 'hsl(var(--surface-sunken))' }}>Backoffice</span>
    </div>
  );
}

function BackofficeShell({ staff, mode, onToggleMode, onLogout, activeModule, onNavigate, collapsed, onToggleCollapse, children }) {
  const modeIcon = mode === 'dark' ? '☾' : '☀';
  return (
    <div style={{ border: '1px solid hsl(var(--border-subtle))', borderRadius: 14, overflow: 'hidden', background: 'hsl(var(--surface-base))', display: 'flex', flexDirection: 'column', minHeight: 680 }}>
      {/* topbar — chrome neutro de casa, marca Noctis fija */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '0 16px', height: 58, flex: 'none', background: 'hsl(var(--surface-raised))', borderBottom: '1px solid hsl(var(--border-subtle))' }}>
        <NoctisMark />
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ textAlign: 'right', lineHeight: 1.3 }}>
            <div style={{ fontSize: 12.5, color: 'hsl(var(--text-primary))', fontWeight: 500 }}>{staff.email}</div>
            <div style={{ fontSize: 11, color: 'hsl(var(--text-tertiary))' }}>{staff.rol}</div>
          </div>
          <button type="button" onClick={onToggleMode} aria-label={mode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'} style={{ width: 34, height: 34, borderRadius: 8, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', cursor: 'pointer', fontSize: 15 }}>{modeIcon}</button>
          <button type="button" onClick={onLogout} style={{ height: 34, padding: '0 13px', borderRadius: 8, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', fontSize: 12.5, cursor: 'pointer', fontFamily: 'var(--font-ui)' }}>Salir</button>
        </div>
      </div>
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <Sidebar nav={window.BackofficeData.NAV} active={activeModule} collapsed={collapsed} onToggle={onToggleCollapse} onNavigate={onNavigate} />
        <div style={{ flex: 1, minWidth: 0, position: 'relative', background: 'hsl(var(--surface-base))', overflow: 'auto' }}>
          <div style={{ maxWidth: 1160, margin: '0 auto', padding: '26px 30px 44px' }}>{children}</div>
        </div>
      </div>
      {/* footer — constante de plataforma (sin línea legal de tenant: no aplica en backoffice) */}
      <div style={{ padding: '11px 16px', flex: 'none', borderTop: '1px solid hsl(var(--border-subtle))', background: 'hsl(var(--surface-raised))', display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 11, color: 'hsl(var(--text-tertiary))', flexWrap: 'wrap' }}>
        <span>Consola de administración de plataforma · uso interno Noctis</span>
        <span style={{ fontWeight: 500, color: 'hsl(var(--text-secondary))' }}>Powered by Noctis Commerce</span>
      </div>
    </div>
  );
}

/* Dashboard — placeholder DIGNO. Sin KPIs falsos; se señala el hueco (Fase 2). */
function Dashboard({ staff, tenants, onGoTenants, onGoCatalogo }) {
  const activos = tenants.filter((t) => t.estado === 'activo').length;
  const enMora = tenants.filter((t) => t.estado === 'moroso').length;
  const suspendidos = tenants.filter((t) => t.estado === 'suspendido').length;
  const Stat = ({ n, label, tone }) => (
    <div style={{ flex: 1, minWidth: 120 }}>
      <div style={{ font: '600 26px/1 var(--font-ui)', fontVariantNumeric: 'tabular-nums', letterSpacing: '-.02em', color: tone || 'hsl(var(--text-primary))' }}>{n}</div>
      <div style={{ fontSize: 12, color: 'hsl(var(--text-tertiary))', marginTop: 5 }}>{label}</div>
    </div>
  );
  return (
    <div>
      <div style={{ marginBottom: 22 }}>
        <h1 style={{ font: '600 30px/36px var(--font-ui)', letterSpacing: '-.02em', margin: '0 0 8px' }}>Panel de plataforma</h1>
        <p style={{ margin: 0, color: 'hsl(var(--text-secondary))', fontSize: 14, maxWidth: '60ch' }}>
          Está operando como <b style={{ color: 'hsl(var(--text-primary))' }}>{staff.rol.toLowerCase()}</b>. Las acciones desde esta consola pueden afectar a todos los tenants — el alcance se declara donde distingue, y toda acción de plataforma pide confirmación explícita.
        </p>
      </div>
      <SCard>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Stat n={tenants.length} label="Tenants totales" />
          <Stat n={activos} label="Activos" tone="hsl(var(--success-fg))" />
          <Stat n={enMora} label="Con mora" tone="hsl(var(--warning-fg))" />
          <Stat n={suspendidos} label="Suspendidos" tone="hsl(var(--danger-fg))" />
        </div>
      </SCard>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14, margin: '18px 0' }}>
        <SCard header="Cuentas">
          <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Tenants</div>
          <p style={{ margin: '0 0 14px', color: 'hsl(var(--text-secondary))', fontSize: 13 }}>Administre las cuentas de las PYMEs: estado, plan y árbol de entitlements.</p>
          <SButton variant="primary" size="sm" onClick={onGoTenants}>Ver tenants</SButton>
        </SCard>
        <SCard header="Producto">
          <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Catálogo de módulos</div>
          <p style={{ margin: '0 0 14px', color: 'hsl(var(--text-secondary))', fontSize: 13 }}>El catálogo es append-only: los módulos se deprecan, nunca se borran.</p>
          <SButton variant="secondary" size="sm" onClick={onGoCatalogo}>Ver catálogo</SButton>
        </SCard>
      </div>
      <SCard>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <span aria-hidden="true" style={{ fontSize: 16, color: 'hsl(var(--text-tertiary))', marginTop: 1 }}>◷</span>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2 }}>Los indicadores de salud de plataforma llegan en la Fase 2</div>
            <p style={{ margin: 0, color: 'hsl(var(--text-secondary))', fontSize: 13, maxWidth: '66ch' }}>Consumo por tenant, adopción de módulos y facturación agregada aparecerán aquí. No se muestran cifras hasta tener el dato real — el hueco se señala, no se inventa.</p>
          </div>
        </div>
      </SCard>
    </div>
  );
}

Object.assign(window, { BackofficeShell, BackofficeDashboard: Dashboard });
