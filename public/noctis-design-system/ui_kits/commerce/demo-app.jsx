/* Noctis · commerce — DEMO NAVEGABLE (Fase 2). UNA sola SPA para clientes PYME:
   Login → Elegir workspace → Shell (TopBar + Sidebar por permisos + router de módulo).
   Reconcilia los dos shells previos (base «Shell+Productos» y el integrado «POS inmersivo
   + Caja») en un solo archivo: TODO el estado vive en memoria, el carrito y el turno de
   caja sobreviven a la navegación entre módulos. Datos mock, sin backend.

   POS = MODO INMERSIVO del shell (bajo Vender): entrada automática, «Salir de venta»
   recupera las barras SIN cancelar la venta (el carrito sobrevive con LiveSalePill global
   + badge «En curso»). Productos = módulo COMPLETO (lista → detalle → variante → código).
   Contabilidad = Cierre de caja. El resto de módulos: «Pronto» (informativos, reloj).

   Consume el design system Noctis SIN redefinir tokens; la marca del tenant es acento
   quirúrgico (primary/nav activo/foco/selección); el chrome es neutro de casa. */
const DNS = window.NoctisCommerceDesignSystem_4dfd35;
const { Icon: CIcon, Toast: CToast, Button: CBtn, Input: CInput, Badge: CBadge, Wordmark: CWord } = DNS;
const CPD = window.PosData;
const CD = window.CommerceData;

/* NAV UNIFICADO — repone los «Pronto» junto a lo construido. `built` = navegable;
   el resto es visible-pero-Pronto (informativo). `anyPerm` = visible con ≥1 permiso. */
const NAV = [
  { section: 'Vender', items: [
    { id: 'pos', label: 'POS', perm: 'pos', built: true },
    { id: 'ventas', label: 'Ventas', perm: 'ventas', built: false },
  ] },
  { section: 'Catálogo', items: [
    { id: 'productos', label: 'Productos', perm: 'productos.read', built: true },
    { id: 'categorias', label: 'Categorías', perm: 'categorias', built: false },
  ] },
  { section: 'Suministro', items: [
    { id: 'inventario', label: 'Inventario', perm: 'inventario', built: false },
    { id: 'compras', label: 'Compras', perm: 'compras', built: false },
  ] },
  { section: 'Dinero', items: [
    { id: 'precios', label: 'Precios', perm: 'precios', built: false },
    { id: 'facturacion', label: 'Facturación', perm: 'facturacion', built: false },
    { id: 'clientes', label: 'Clientes', perm: 'clientes', built: true },
  ] },
  { section: 'Finanzas', items: [
    { id: 'contabilidad', label: 'Contabilidad', anyPerm: ['caja', 'conta.balance', 'conta.asientos', 'conta.mayor'], built: true },
  ] },
  { section: 'Gestión', items: [
    { id: 'reportes', label: 'Reportes', perm: 'reportes', built: false },
  ] },
  { section: 'Configuración', items: [
    { id: 'config.empresa', label: 'Empresa', perm: 'config.empresa', built: false },
    { id: 'config.usuarios', label: 'Usuarios', perm: 'config.usuarios', built: false },
  ] },
];
const NAV_ITEMS = NAV.flatMap((g) => g.items);
const itemVisible = (prof, it) => it.anyPerm ? it.anyPerm.some((pp) => window.CanPerm(prof, pp)) : window.CanPerm(prof, it.perm);
const moduleLabel = (id) => { const it = NAV_ITEMS.find((i) => i.id === id); return it ? it.label : id; };
/* Módulo de aterrizaje tras elegir workspace: preferimos una vista de shell tranquila. */
const landingFor = (prof) => {
  const order = ['productos', 'contabilidad', 'pos'];
  for (const id of order) { const it = NAV_ITEMS.find((i) => i.id === id); if (it && itemVisible(prof, it)) return id; }
  const first = NAV_ITEMS.find((i) => i.built && itemVisible(prof, i));
  return first ? first.id : 'pos';
};

const SEED_TURNO = { seq: 'T-001-042', fondo: 50.00, aperturaHora: '08:12', ventasEfectivo: 428.75, ventasCount: 23, esperado: 478.75 };
const centsNum = (cents) => (parseInt(cents || '0', 10)) / 100;

/* Segmented oscuro de la barra de prototipo (andamiaje tipo Storybook, no chrome). */
function Seg({ value, onChange, options, ariaLabel }) {
  return (
    <div role="radiogroup" aria-label={ariaLabel} style={{ display: 'inline-flex', gap: 2, padding: 2, borderRadius: 9, background: '#161619', border: '1px solid #2A2A2E' }}>
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button key={o.value} type="button" role="radio" aria-checked={active} onClick={() => onChange(o.value)}
            style={{ border: 0, cursor: 'pointer', borderRadius: 7, padding: '6px 11px', fontSize: 12, fontWeight: active ? 600 : 500, fontFamily: 'var(--font-ui)', minHeight: 32, background: active ? '#F5F5F7' : 'transparent', color: active ? '#0A0A0B' : '#AEAEB2' }}>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/* Barra de PROTOTIPO — recorre los ejes de presentación (tenant · perfil · densidad ·
   turno · estado de Productos · escritura). Es scaffolding, no chrome de la app. */
function PrototypeBar(p) {
  return (
    <div data-mode="dark" style={{ flex: 'none', background: '#0A0A0B', borderBottom: '1px solid #26262A', color: '#F5F5F7' }}>
      <div style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#8E8E93' }} aria-hidden="true" />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.09em', textTransform: 'uppercase', color: '#AEAEB2' }}>Prototipo · Demo commerce</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, color: '#8E8E93' }}>Tenant</span>
          <Seg ariaLabel="Tenant" value={p.tenantId} onChange={p.onChangeTenant} options={[{ value: 'aguilar', label: 'Aguilar' }, { value: 'sanrafael', label: 'San Rafael' }, { value: 'rincon', label: 'El Rincón' }]} />
          <span title={'Acento: ' + p.tenant.accentName} style={{ width: 16, height: 16, borderRadius: 5, background: 'hsl(' + p.tenant.accent + ')', border: '1px solid rgba(255,255,255,.2)' }} aria-hidden="true" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, color: '#8E8E93' }}>Perfil</span>
          <Seg ariaLabel="Perfil" value={p.profileKey} onChange={p.onChangeProfile} options={[{ value: 'admin', label: 'Admin' }, { value: 'bodeguero', label: 'Bodeguero' }, { value: 'vendedor', label: 'Vendedor' }, { value: 'cajero', label: 'Cajera' }, { value: 'contador', label: 'Contador' }]} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, color: '#8E8E93' }}>Densidad venta</span>
          <Seg ariaLabel="Densidad de la venta" value={p.density} onChange={p.onChangeDensity} options={[{ value: 'comfortable', label: 'Desktop' }, { value: 'touch', label: 'Táctil' }]} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, color: '#8E8E93' }}>Turno de caja</span>
          <Seg ariaLabel="Estado del turno de caja" value={p.cajaPreset} onChange={p.onChangeCajaPreset} options={[{ value: 'sin', label: 'Sin turno' }, { value: 'abierto', label: 'Turno abierto' }]} />
        </div>
        {p.stateEnabled && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 11, color: '#8E8E93' }}>{p.stateScope === 'section' ? 'Estado sección' : 'Estado lista'}</span>
            <Seg ariaLabel="Estado de Productos" value={p.stateValue} onChange={p.onChangeState} options={[{ value: 'data', label: 'Datos' }, { value: 'loading', label: 'Cargando' }, { value: 'empty', label: 'Vacío' }, { value: 'error', label: 'Error' }, { value: 'forbidden', label: '403' }]} />
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
          <span style={{ fontSize: 11, color: '#8E8E93' }}>Escritura</span>
          <Seg ariaLabel="Resultado de la escritura (cobro / cierre)" value={p.outcome} onChange={p.onChangeOutcome} options={[{ value: 'success', label: 'Éxito' }, { value: 'fail', label: 'Falla' }]} />
        </div>
      </div>
    </div>
  );
}

/* ══ LOGIN — momento negro (reusa el look del núcleo) ══════════════════════════ */
function LoginScreen({ onLogin }) {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, background: 'linear-gradient(150deg,#000 0%,#141416 60%,#1C1C1E 100%)', fontFamily: 'var(--font-ui)' }}>
      <div style={{ width: 'min(760px,100%)', border: '1px solid hsl(var(--border-subtle))', borderRadius: 16, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ position: 'relative', padding: 28, background: 'linear-gradient(150deg,#000 0%,#1C1C1E 65%,#2C2C2E 100%)', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 90% at 90% -20%, rgba(255,255,255,.07), transparent 60%)' }} />
          <div style={{ position: 'relative' }}>
            <CWord onDark />
            <div style={{ font: '500 22px/1.2 var(--font-ui)', color: '#F5F5F7', marginTop: 18, letterSpacing: '-.01em' }}>Inicie sesión</div>
            <p style={{ margin: '8px 0 0', color: '#AEAEB2', fontSize: 13, maxWidth: '34ch' }}>Punto de venta, catálogo y caja para su negocio. Negro y plata en la herramienta; el color es de su marca.</p>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} style={{ padding: 24, background: 'hsl(var(--surface-raised))', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <CInput label="Correo" defaultValue="agustina@aguilar.ec" />
          <CInput label="Contraseña" type="password" defaultValue="claveSegura1" />
          <CBtn variant="primary" type="submit" style={{ width: '100%' }}>Ingresar</CBtn>
          <span style={{ fontSize: 11, color: 'hsl(var(--text-tertiary))' }}>Hueco conocido: «olvidé mi clave» no existe en el roadmap — se señala, no se inventa.</span>
        </form>
      </div>
    </div>
  );
}

/* ══ ELEGIR WORKSPACE — cards por acceso (tenant × producto) ═══════════════════ */
function WorkspaceScreen({ onPick, mode }) {
  return (
    <div data-mode={mode} style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, background: 'hsl(var(--surface-sunken))', color: 'hsl(var(--text-primary))', fontFamily: 'var(--font-ui)' }}>
      <div style={{ width: 'min(760px,100%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}><CWord size="sm" /></div>
        <h1 style={{ font: '600 24px/1.2 var(--font-ui)', letterSpacing: '-.015em', margin: '10px 0 2px' }}>Elija un espacio de trabajo</h1>
        <p style={{ margin: '0 0 18px', color: 'hsl(var(--text-secondary))', fontSize: 13 }}>Cards por acceso (tenant × producto). Elija uno para entrar al panel.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12 }}>
          {Object.values(CD.TENANTS).map((t) => (
            <button key={t.id} onClick={() => onPick(t.id)} style={{ textAlign: 'left', border: '1px solid hsl(var(--border-strong))', borderRadius: 12, padding: 16, background: 'hsl(var(--surface-raised))', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'hsl(var(--text-primary))', color: 'hsl(var(--surface-raised))', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 13 }}>{t.initials}</div>
                <CBadge tone="neutral">{t.product}</CBadge>
                <span title={'Acento: ' + t.accentName} style={{ marginLeft: 'auto', width: 14, height: 14, borderRadius: 4, background: 'hsl(' + t.accent + ')', border: '1px solid hsl(var(--border-subtle))' }} aria-hidden="true" />
              </div>
              <div style={{ fontWeight: 600, fontSize: 15 }}>{t.name}</div>
              <div style={{ fontSize: 12, color: 'hsl(var(--text-tertiary))' }}>{t.wsRole}</div>
              <div style={{ fontSize: 11, color: 'hsl(var(--text-tertiary))', marginTop: 8, fontFamily: 'var(--font-mono)' }}>{t.empresas.length} {t.empresas.length === 1 ? 'empresa' : 'empresas'}</div>
            </button>
          ))}
        </div>
        <p style={{ margin: '18px 2px 0', fontSize: 11, color: 'hsl(var(--text-tertiary))' }}>El acceso real vendría del backend por usuario. Acá el eje Perfil de la barra de prototipo simula los permisos dentro del panel.</p>
      </div>
    </div>
  );
}

/* Chip de contexto (empresa/sucursal, cajera) — neutro de casa. */
function CtxChip({ icon, primary, secondary, small }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9, minWidth: 0 }}>
      <div style={{ width: small ? 28 : 32, height: small ? 28 : 32, flex: 'none', borderRadius: 9, display: 'grid', placeItems: 'center', background: 'hsl(var(--surface-sunken))', border: '1px solid hsl(var(--border-subtle))', color: 'hsl(var(--text-secondary))' }} aria-hidden="true"><CIcon name={icon} size={18} /></div>
      <div style={{ minWidth: 0, lineHeight: 1.25 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'hsl(var(--text-primary))', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{primary}</div>
        <div style={{ fontSize: 11.5, color: 'hsl(var(--text-tertiary))', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{secondary}</div>
      </div>
    </div>
  );
}

/* Selector de empresa — visible solo con >1 empresa (Aguilar, El Rincón). */
function CompanySelector({ empresas, value, onChange }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h); return () => document.removeEventListener('mousedown', h);
  }, [open]);
  if (!empresas || empresas.length < 2) return null;
  const current = empresas.find((e) => e.id === value) || empresas[0];
  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button type="button" onClick={() => setOpen((o) => !o)} aria-haspopup="listbox" aria-expanded={open} aria-label="Cambiar de empresa"
        style={{ display: 'flex', alignItems: 'center', gap: 8, height: 32, padding: '0 10px', borderRadius: 8, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-primary))', cursor: 'pointer', font: '500 12px var(--font-ui)', maxWidth: 240 }}>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{current.name}</span>
        <span aria-hidden="true" style={{ color: 'hsl(var(--text-tertiary))' }}>▾</span>
      </button>
      {open && (
        <div role="listbox" style={{ position: 'absolute', top: 38, left: 0, minWidth: 280, padding: 6, borderRadius: 12, background: 'hsl(var(--surface-overlay))', border: '1px solid hsl(var(--border-subtle))', boxShadow: 'var(--shadow-overlay)', zIndex: 60 }}>
          <div style={{ padding: '4px 8px 8px' }}><window.MicroLabel>Empresa</window.MicroLabel></div>
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
          <div style={{ padding: '8px 10px 4px', fontSize: 11, color: 'hsl(var(--text-tertiary))', borderTop: '1px solid hsl(var(--border-subtle))', marginTop: 4 }}>Al cambiar de empresa se limpia la vista y vuelve al catálogo.</div>
        </div>
      )}
    </div>
  );
}

/* Píldora «venta en curso» — visible fuera del modo inmersivo cuando el POS tiene carrito
   vivo. Un clic vuelve a la venta con el carrito intacto. */
function LiveSalePill({ count, total, onResume }) {
  return (
    <button type="button" onClick={onResume} aria-label={'Volver a la venta en curso · ' + count + ' ítems · ' + total}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 38, padding: '0 8px 0 12px', borderRadius: 999, cursor: 'pointer', border: '1px solid hsl(var(--brand-primary))', background: 'hsl(var(--brand-primary) / .1)', color: 'hsl(var(--text-primary))', font: '500 13px var(--font-ui)' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
        <span style={{ position: 'relative', display: 'inline-flex' }}><CIcon name="shopping-cart" size={17} style={{ color: 'hsl(var(--brand-primary))' }} /><span aria-hidden="true" style={{ position: 'absolute', top: -3, right: -4, width: 7, height: 7, borderRadius: 999, background: 'hsl(var(--brand-primary))' }} /></span>
        <span style={{ fontWeight: 600 }}>Venta en curso</span>
        <span style={{ color: 'hsl(var(--text-tertiary))' }}>· {count} {count === 1 ? 'ítem' : 'ítems'} · <span style={{ fontVariantNumeric: 'tabular-nums' }}>{total}</span></span>
      </span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, height: 28, padding: '0 10px', borderRadius: 999, background: 'hsl(var(--brand-primary))', color: 'hsl(var(--brand-foreground))', fontWeight: 600, fontSize: 12 }}>Volver<CIcon name="chevrons-right" size={14} /></span>
    </button>
  );
}

/* Ítem de sidebar. Construido = <button> navegable; «Pronto» = informativo (sin foco/href,
   no tabbable, estado en sr-only). El POS con carrito vivo muestra punto de acento + «En curso». */
function NavItem({ item, active, collapsed, onClick, live }) {
  const disabled = !item.built;
  const srName = item.label + ' · Pronto (módulo por construir)';
  const base = { display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left', border: 0, padding: collapsed ? 8 : '8px 10px', borderRadius: 8, font: '500 13px var(--font-ui)', justifyContent: collapsed ? 'center' : 'space-between', background: active ? 'hsl(var(--brand-primary))' : 'transparent', color: active ? 'hsl(var(--brand-foreground))' : 'hsl(var(--text-secondary))' };
  const inner = (
    <>
      <span style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
        <span style={{ position: 'relative', display: 'inline-flex', flex: 'none', opacity: collapsed && disabled ? .6 : 1 }}>
          <CIcon module={item.id} size={20} />
          {(live || (collapsed && disabled)) && <span aria-hidden="true" style={{ position: 'absolute', top: -3, right: -3, width: 7, height: 7, borderRadius: 999, background: live ? 'hsl(var(--brand-primary))' : (active ? 'hsl(var(--brand-foreground))' : 'hsl(var(--text-tertiary))'), boxShadow: '0 0 0 2px ' + (active ? 'hsl(var(--brand-primary))' : 'hsl(var(--surface-sunken))') }} />}
        </span>
        {!collapsed && <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.label}</span>}
        {collapsed && disabled && <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0 }}>{srName}</span>}
      </span>
      {!collapsed && disabled && <span style={{ fontSize: 10, fontWeight: 500, padding: '1px 7px', borderRadius: 999, background: 'hsl(var(--surface-base))', border: '1px solid hsl(var(--border-subtle))', color: 'hsl(var(--text-tertiary))' }}>Pronto</span>}
      {!collapsed && live && <span style={{ fontSize: 10, fontWeight: 600, padding: '1px 7px', borderRadius: 999, background: active ? 'hsl(var(--brand-foreground) / .2)' : 'hsl(var(--brand-primary) / .14)', color: active ? 'hsl(var(--brand-foreground))' : 'hsl(var(--brand-primary))' }}>En curso</span>}
    </>
  );
  if (disabled) return <div title={collapsed ? item.label + ' · Pronto' : undefined} style={{ ...base, cursor: 'default', position: 'relative' }}>{inner}</div>;
  return <button type="button" onClick={onClick} title={collapsed ? item.label : undefined} aria-current={active ? 'page' : undefined} aria-label={collapsed ? item.label : undefined} style={{ ...base, cursor: 'pointer', position: 'relative' }}>{inner}</button>;
}

function Sidebar({ profile, active, collapsed, onToggle, onNavigate, liveCart }) {
  const groups = NAV.map((g) => ({ ...g, items: g.items.filter((it) => itemVisible(profile, it)) })).filter((g) => g.items.length);
  const { MicroLabel: ML } = window;
  return (
    <div style={{ width: collapsed ? 60 : 216, flex: 'none', background: 'hsl(var(--surface-sunken))', borderRight: '1px solid hsl(var(--border-subtle))', display: 'flex', flexDirection: 'column', transition: 'width .16s ease' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: collapsed ? '10px 8px' : '12px 10px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {groups.map((g, gi) => (
          <div key={gi} style={{ marginBottom: 6 }}>
            {!collapsed && <ML style={{ padding: '8px 8px 4px' }}>{g.section}</ML>}
            {collapsed && gi > 0 && <div style={{ height: 1, background: 'hsl(var(--border-subtle))', margin: '6px 6px' }} />}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {g.items.map((it) => <NavItem key={it.id} item={it} collapsed={collapsed} active={active === it.id} onClick={() => onNavigate(it)} live={it.id === 'pos' && liveCart} />)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: collapsed ? 8 : 10, borderTop: '1px solid hsl(var(--border-subtle))' }}>
        <div title="Slot de sucursal — reservado para POS/Caja" style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: collapsed ? 'center' : 'flex-start', padding: collapsed ? 8 : '8px 10px', borderRadius: 8, border: '1px dashed hsl(var(--border-strong))', color: 'hsl(var(--text-disabled))', fontSize: 12 }}>
          <CIcon name="store" size={20} style={{ flex: 'none', opacity: .7 }} />{!collapsed && <span>Sucursal · reservado</span>}
        </div>
      </div>
      <div style={{ padding: collapsed ? 8 : '8px 10px', borderTop: '1px solid hsl(var(--border-subtle))' }}>
        <button type="button" onClick={onToggle} aria-label={collapsed ? 'Expandir menú' : 'Colapsar menú'} aria-pressed={collapsed}
          style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', justifyContent: collapsed ? 'center' : 'flex-start', border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', borderRadius: 8, padding: collapsed ? 7 : '7px 10px', cursor: 'pointer', fontSize: 12, fontFamily: 'var(--font-ui)' }}>
          <CIcon name={collapsed ? 'chevrons-right' : 'chevrons-left'} size={16} />{!collapsed && 'Colapsar'}
        </button>
      </div>
    </div>
  );
}

/* Barra superior del shell NORMAL (chrome neutro de casa). Aloja el CompanySelector y la
   píldora de venta en curso. */
function TopBar({ tenant, empresaObj, empresaId, onChangeCompany, profile, mode, onToggleMode, liveCart, cartCount, cartTotal, onResume, onLogout }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 14px', height: 56, flex: 'none', background: 'hsl(var(--surface-raised))', borderBottom: '1px solid hsl(var(--border-subtle))' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, flex: 'none', background: 'hsl(var(--text-primary))', color: 'hsl(var(--surface-raised))', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 11 }}>{tenant.initials}</div>
        <span style={{ color: 'hsl(var(--text-primary))', fontSize: 14, fontWeight: 600, letterSpacing: '-.01em', whiteSpace: 'nowrap' }}>{tenant.name}</span>
      </div>
      <div style={{ width: 1, height: 26, background: 'hsl(var(--border-subtle))', flex: 'none' }} />
      <CompanySelector empresas={tenant.empresas} value={empresaId} onChange={onChangeCompany} />
      {tenant.empresas.length < 2 && <CtxChip icon="store" primary={empresaObj.name} secondary={tenant.sucursal} small />}
      {liveCart && <div style={{ marginLeft: 6 }}><LiveSalePill count={cartCount} total={cartTotal} onResume={onResume} /></div>}
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ textAlign: 'right', lineHeight: 1.3 }}>
          <div style={{ fontSize: 12, color: 'hsl(var(--text-primary))', fontWeight: 500 }}>{tenant.cajero.nombre}</div>
          <div style={{ fontSize: 11, color: 'hsl(var(--text-tertiary))' }}>{profile.label}</div>
        </div>
        <button type="button" onClick={onToggleMode} aria-label={mode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'} style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', cursor: 'pointer', fontSize: 14 }}>{mode === 'dark' ? '☾' : '☀'}</button>
        <button type="button" onClick={onLogout} style={{ height: 32, padding: '0 12px', borderRadius: 8, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', fontSize: 12, cursor: 'pointer', fontFamily: 'var(--font-ui)' }}>Salir</button>
      </div>
    </div>
  );
}

/* Barra del MODO INMERSIVO — mínima, orientada a la venta. «Salir de venta» RECUPERA las
   barras (no cierra el POS). */
function ImmersiveBar({ tenant, empresaObj, mode, onToggleMode, onExitSale }) {
  return (
    <header style={{ flex: 'none', height: 'var(--pos-header)', display: 'flex', alignItems: 'center', gap: 16, padding: '0 16px', background: 'hsl(var(--surface-raised))', borderBottom: '1px solid hsl(var(--border-subtle))' }}>
      <button type="button" onClick={onExitSale} className="pos-btn" aria-label="Salir de venta y recuperar las barras del panel"
        style={{ height: 'var(--pos-action)', display: 'flex', alignItems: 'center', gap: 8, padding: '0 14px', borderRadius: 10, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-ui)' }}>
        <CIcon name="chevrons-left" size={20} />Salir de venta
      </button>
      <div style={{ width: 1, height: 32, background: 'hsl(var(--border-subtle))', flex: 'none' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, flex: 'none', background: 'hsl(var(--text-primary))', color: 'hsl(var(--surface-raised))', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 12 }}>{tenant.initials}</div>
        <span style={{ color: 'hsl(var(--text-primary))', fontSize: 15, fontWeight: 600, whiteSpace: 'nowrap' }}>{tenant.name}</span>
        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'hsl(var(--text-tertiary))', border: '1px solid hsl(var(--border-strong))', borderRadius: 999, padding: '2px 8px' }}>Venta</span>
      </div>
      <div style={{ width: 1, height: 32, background: 'hsl(var(--border-subtle))', flex: 'none' }} />
      <CtxChip icon="store" primary={empresaObj.name} secondary={tenant.sucursal} />
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
        <CtxChip icon="user-round" primary={tenant.cajero.nombre} secondary={tenant.cajero.rol} />
        <button type="button" onClick={onToggleMode} className="pos-btn" aria-label={mode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          style={{ width: 'var(--pos-action)', height: 'var(--pos-action)', flex: 'none', borderRadius: 10, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', cursor: 'pointer', fontSize: 18, display: 'grid', placeItems: 'center' }}>{mode === 'dark' ? '☾' : '☀'}</button>
      </div>
    </header>
  );
}

/* Pantalla del POS en modo NORMAL (barras visibles). Se llega al «Salir de venta»: el POS
   sigue abierto y muestra el estado de la venta —en curso (reanudar/cobrar) o sin venta—. */
function PosResume({ lines, totals, customer, onResume, onCobrar, onDescartar }) {
  const alive = lines.length > 0;
  const count = lines.reduce((s, l) => s + l.qty, 0);
  const fmt = window.cajaFmtEC;
  return (
    <div style={{ maxWidth: 720 }}>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.09em', textTransform: 'uppercase', color: 'hsl(var(--text-tertiary))', marginBottom: 6 }}>Vender · POS</div>
        <h1 style={{ font: '600 26px/32px var(--font-ui)', letterSpacing: '-.015em', margin: 0 }}>Punto de venta</h1>
        <p style={{ margin: '8px 0 0', fontSize: 14, color: 'hsl(var(--text-secondary))', maxWidth: '58ch' }}>El POS abre en modo inmersivo para foco total en la venta. Saliste de la venta pero el POS sigue abierto — {alive ? 'tu carrito quedó intacto, esperando.' : 'no hay ninguna venta en curso.'}</p>
      </div>
      {alive ? (
        <div style={{ padding: '20px 22px', borderRadius: 16, background: 'hsl(var(--surface-raised))', border: '1px solid hsl(var(--brand-primary) / .4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 46, height: 46, borderRadius: 12, flex: 'none', display: 'grid', placeItems: 'center', background: 'hsl(var(--brand-primary) / .12)', color: 'hsl(var(--brand-primary))' }} aria-hidden="true"><CIcon name="shopping-cart" size={24} /></div>
            <div>
              <div style={{ font: '600 17px/1.2 var(--font-ui)' }}>Venta en curso</div>
              <div style={{ fontSize: 13, color: 'hsl(var(--text-secondary))' }}>{count} {count === 1 ? 'ítem' : 'ítems'} · {lines.length} {lines.length === 1 ? 'línea' : 'líneas'} · {customer.nombre}</div>
            </div>
            <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'hsl(var(--text-tertiary))' }}>Total</div>
              <div style={{ font: '700 22px/1 var(--font-ui)', fontVariantNumeric: 'tabular-nums' }}>{fmt(totals.total)}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button type="button" onClick={onResume} style={{ flex: '1 1 200px', height: 48, borderRadius: 12, border: 0, cursor: 'pointer', background: 'hsl(var(--brand-primary))', color: 'hsl(var(--brand-foreground))', font: '600 15px var(--font-ui)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}><CIcon name="chevrons-right" size={18} />Volver a la venta</button>
            <button type="button" onClick={onCobrar} className="pos-btn" style={{ flex: '0 1 auto', height: 48, padding: '0 18px', borderRadius: 12, border: '1px solid hsl(var(--border-strong))', cursor: 'pointer', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-primary))', font: '500 15px var(--font-ui)' }}>Ir a cobrar</button>
            <button type="button" onClick={onDescartar} className="pos-btn" style={{ flex: '0 1 auto', height: 48, padding: '0 16px', borderRadius: 12, border: '1px solid hsl(var(--border-subtle))', cursor: 'pointer', background: 'transparent', color: 'hsl(var(--text-tertiary))', font: '500 14px var(--font-ui)' }}>Descartar</button>
          </div>
          <p style={{ margin: '14px 0 0', fontSize: 12, color: 'hsl(var(--text-tertiary))', lineHeight: 1.5 }}>Perder una venta a medio armar por salir a consultar es el peor caso — por eso el carrito sobrevive a la salida.</p>
        </div>
      ) : (
        <div style={{ padding: '28px 22px', borderRadius: 16, background: 'hsl(var(--surface-raised))', border: '1px solid hsl(var(--border-subtle))', textAlign: 'center', maxWidth: 460 }}>
          <div style={{ width: 60, height: 60, borderRadius: 16, margin: '0 auto 16px', display: 'grid', placeItems: 'center', background: 'hsl(var(--surface-sunken))', border: '1px solid hsl(var(--border-strong))', color: 'hsl(var(--text-tertiary))' }} aria-hidden="true"><CIcon name="shopping-cart" size={28} /></div>
          <div style={{ font: '600 18px/1.3 var(--font-ui)' }}>Empezá una venta</div>
          <p style={{ margin: '6px 0 18px', fontSize: 14, color: 'hsl(var(--text-secondary))', lineHeight: 1.5 }}>Entrá al modo inmersivo para buscar o escanear productos con foco total. Las barras se recuperan cuando salgas.</p>
          <button type="button" onClick={onResume} style={{ minWidth: 220, height: 48, borderRadius: 12, border: 0, cursor: 'pointer', background: 'hsl(var(--brand-primary))', color: 'hsl(var(--brand-foreground))', font: '600 15px var(--font-ui)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}><CIcon name="chevrons-right" size={18} />Entrar a vender</button>
        </div>
      )}
    </div>
  );
}

function ProntoView({ label }) {
  return (
    <div style={{ maxWidth: 520 }}>
      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.09em', textTransform: 'uppercase', color: 'hsl(var(--text-tertiary))', marginBottom: 6 }}>Módulo</div>
      <h1 style={{ font: '600 26px/32px var(--font-ui)', letterSpacing: '-.015em', margin: '0 0 8px' }}>{label}</h1>
      <div style={{ padding: '24px 20px', borderRadius: 16, background: 'hsl(var(--surface-raised))', border: '1px solid hsl(var(--border-subtle))', textAlign: 'center' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'hsl(var(--text-tertiary))', border: '1px solid hsl(var(--border-strong))', borderRadius: 999, padding: '3px 10px', marginBottom: 12 }}><window.CajaIcon name="clock" size={13} />Pronto</span>
        <p style={{ margin: 0, color: 'hsl(var(--text-secondary))', fontSize: 13, maxWidth: '48ch', marginInline: 'auto' }}>Tenés permiso para <b>{label}</b>, pero este módulo aún no se construye en este corte. El hueco se señala, no se inventa.</p>
      </div>
    </div>
  );
}

/* ══ ORQUESTADOR ══════════════════════════════════════════════════════════════ */
function DemoApp() {
  const [screen, setScreen] = React.useState('login');
  const [mode, setMode] = React.useState('light');
  const autoDensity = React.useRef(window.detectDensity()).current;
  const [density, setDensity] = React.useState(autoDensity);
  const [tenantId, setTenantId] = React.useState('aguilar');
  const [empresaId, setEmpresaId] = React.useState('e1');
  const [profileKey, setProfileKey] = React.useState('admin');
  const [collapsed, setCollapsed] = React.useState(false);
  const [activeModule, setActiveModule] = React.useState('productos');
  const [immersive, setImmersive] = React.useState(false);
  const [contaView, setContaView] = React.useState('index');
  const [toast, setToast] = React.useState(null);
  const [outcome, setOutcome] = React.useState('success');

  // Productos: sub-router en memoria + estados de lista/sección.
  const [prodRoute, setProdRoute] = React.useState({ view: 'productos' });
  const [listState, setListState] = React.useState('data');
  const [sectionState, setSectionState] = React.useState('data');
  const [clientesRoute, setClientesRoute] = React.useState({ view: 'lista' });

  // ── Venta (contenido idéntico a POS-a/POS-b) ──────────────────────────────────
  const [lines, setLines] = React.useState(() => CPD.INITIAL_CART.filter((l) => !CPD.needsPrice(CPD.lineView(l))));
  const [customer, setCustomer] = React.useState(CPD.CONSUMIDOR_FINAL);
  const [clientes, setClientes] = React.useState(() => CPD.CLIENTES);
  const [qtyLine, setQtyLine] = React.useState(null);
  const [genericDraft, setGenericDraft] = React.useState(null);
  const [pickerOpen, setPickerOpen] = React.useState(false);
  const [flash, setFlash] = React.useState(null);
  const [checkoutOpen, setCheckoutOpen] = React.useState(false);
  const [phase, setPhase] = React.useState('idle');
  const [received, setReceived] = React.useState('');
  const [closedSale, setClosedSale] = React.useState(null);
  const [errorId, setErrorId] = React.useState('ERR-POS-7F09');
  const flashTimer = React.useRef(null); const seq = React.useRef(100); const compSeq = React.useRef(101); const writeTimer = React.useRef(null);

  // ── Caja (Contabilidad) ────────────────────────────────────────────────────────
  const [cajaPreset, setCajaPreset] = React.useState('sin');
  const [cajaTurno, setCajaTurno] = React.useState(null);
  const [cajaPhase, setCajaPhase] = React.useState('idle');
  const [contado, setContado] = React.useState('');
  const [fondo, setFondo] = React.useState('5000');
  const [cajaClosed, setCajaClosed] = React.useState(null);
  const [cajaErrorId, setCajaErrorId] = React.useState('ERR-CAJA-3B1');
  const cajaTimer = React.useRef(null);

  const tenant = CD.TENANTS[tenantId];
  const empresaObj = tenant.empresas.find((e) => e.id === empresaId) || tenant.empresas[0];
  const profile = CD.PROFILES[profileKey];
  const { CanPerm } = window;
  const totals = window.posTotals(lines);
  const cartAlive = lines.length > 0 && !closedSale;

  const doFlash = (msg) => { setFlash(msg); if (flashTimer.current) clearTimeout(flashTimer.current); flashTimer.current = setTimeout(() => setFlash(null), 2600); };

  // Navegación de módulos: POS entra AUTOMÁTICAMENTE en inmersivo; el resto vive en shell.
  const onNavigate = (item) => {
    if (!item.built) { setActiveModule(item.id); setImmersive(false); return; }
    if (item.id === 'pos') { setActiveModule('pos'); setImmersive(true); return; }
    if (item.id === 'productos') { setActiveModule('productos'); setProdRoute({ view: 'productos' }); setListState('data'); setSectionState('data'); setImmersive(false); return; }
    if (item.id === 'clientes') { setActiveModule('clientes'); setClientesRoute({ view: 'lista' }); setListState('data'); setImmersive(false); return; }
    if (item.id === 'contabilidad') { setActiveModule('contabilidad'); setContaView('index'); setImmersive(false); return; }
    setActiveModule(item.id); setImmersive(false);
  };
  const exitSale = () => setImmersive(false);
  const resumeSale = () => { setActiveModule('pos'); setImmersive(true); };

  // Handlers de venta (idénticos a POS-b)
  const onAdd = (item) => { setLines((prev) => { const ex = prev.find((l) => l.ref === item.id); if (ex) return prev.map((l) => l.ref === item.id ? { ...l, qty: l.qty + 1 } : l); return [...prev, { key: 'l' + (++seq.current), ref: item.id, qty: 1 }]; }); doFlash((item.precio == null ? 'Agregado (sin precio, bloquea el cobro): ' : 'Agregado: ') + item.variante); };
  const onStep = (line, d) => setLines((prev) => prev.map((l) => l.key === line.key ? { ...l, qty: Math.max(1, l.qty + d) } : l));
  const onRemove = (line) => setLines((prev) => prev.filter((l) => l.key !== line.key));
  const commitQty = (n) => { setLines((prev) => prev.map((l) => l.key === qtyLine.key ? { ...l, qty: n } : l)); setQtyLine(null); };
  const openGeneric = (desc) => setGenericDraft({ desc });
  const commitGeneric = (data) => { setLines((prev) => [...prev, { key: 'l' + (++seq.current), generic: true, desc: data.desc, precio: data.precio, iva: data.iva, qty: data.qty }]); setGenericDraft(null); doFlash((data.precio === 0 ? 'Ítem rápido agregado (precio en cero, bloquea el cobro): ' : 'Ítem rápido agregado: ') + data.desc); };
  const onSaveProduct = (line) => setToast('Abriría el alta de producto con «' + line.desc + '» precargado. Es otro corte: la venta se registra igual.');
  const pickCustomer = (c) => { setCustomer(c); setPickerOpen(false); };
  const createCustomer = (data) => { const c = { ...data, id: 'nc' + Date.now(), activo: true }; setClientes((prev) => [c, ...prev]); setCustomer(c); setPickerOpen(false); setToast('Cliente creado: ' + c.nombre + '. Ya es el cliente de esta venta.'); };
  const consumidorFinal = () => { setCustomer(CPD.CONSUMIDOR_FINAL); setPickerOpen(false); };
  const isBlocked = () => lines.length === 0 || lines.some((l) => CPD.needsPrice(CPD.lineView(l)));
  const onCobrar = () => { if (isBlocked()) return; setActiveModule('pos'); setImmersive(true); setReceived(''); setPhase('idle'); setCheckoutOpen(true); };
  const runWrite = () => {
    if (phase === 'processing') return;
    setPhase('processing'); if (writeTimer.current) clearTimeout(writeTimer.current);
    writeTimer.current = setTimeout(() => {
      if (outcome === 'fail') { setErrorId('ERR-POS-' + (7000 + Math.floor(Math.random() * 900)).toString(16).toUpperCase()); setPhase('error'); return; }
      const recv = (parseInt(received || '0', 10)) / 100; const n = compSeq.current++;
      setClosedSale({ secuencial: '001-001-' + String(n).padStart(9, '0'), total: totals.total, received: recv, change: recv - totals.total, customer: customer.nombre });
      setCheckoutOpen(false); setPhase('idle');
    }, 1500);
  };
  const cancelCheckout = () => { if (phase === 'processing') return; setCheckoutOpen(false); setPhase('idle'); };
  const newSale = () => { setClosedSale(null); setLines([]); setCustomer(CPD.CONSUMIDOR_FINAL); setReceived(''); setPhase('idle'); };
  const discardSale = () => { setLines([]); setCustomer(CPD.CONSUMIDOR_FINAL); setReceived(''); setToast('Venta descartada. El carrito quedó vacío.'); };
  const onPrint = () => setToast('Ver / imprimir comprobante es fast-follow (depende del driver/servidor de impresora). La venta ya quedó registrada con su secuencial.');

  // Caja
  const applyCajaPreset = (v) => { setCajaPreset(v); setCajaClosed(null); setCajaPhase('idle'); setContado(''); setCajaTurno(v === 'abierto' ? { ...SEED_TURNO } : null); };
  const abrirCaja = () => {
    if (cajaPhase === 'processing') return; setCajaPhase('processing'); if (cajaTimer.current) clearTimeout(cajaTimer.current);
    cajaTimer.current = setTimeout(() => { setCajaTurno({ seq: SEED_TURNO.seq, fondo: centsNum(fondo), aperturaHora: '08:12', ventasEfectivo: 0, ventasCount: 0, esperado: centsNum(fondo) }); setCajaPhase('idle'); setContado(''); }, 1400); };
  const cerrarCaja = () => {
    if (cajaPhase === 'processing') return; setCajaPhase('processing'); if (cajaTimer.current) clearTimeout(cajaTimer.current);
    cajaTimer.current = setTimeout(() => {
      if (outcome === 'fail') { setCajaErrorId('ERR-CAJA-' + (3000 + Math.floor(Math.random() * 900)).toString(16).toUpperCase()); setCajaPhase('error'); return; }
      const cont = centsNum(contado);
      setCajaClosed({ ...cajaTurno, contado: cont, diff: cont - cajaTurno.esperado, cierreHora: '20:47' });
      setCajaTurno(null); setCajaPhase('idle');
    }, 1500); };
  const nuevoTurno = () => { setCajaClosed(null); setCajaTurno(null); setCajaPhase('idle'); setContado(''); setFondo('5000'); setCajaPreset('sin'); };
  const openCaja = () => setContaView('caja');

  // ── Entrar a un workspace (desde la pantalla de selección) ──────────────────
  const enterWorkspace = (id) => {
    setTenantId(id); setEmpresaId('e1');
    const land = landingFor(profile);
    setActiveModule(land); setImmersive(land === 'pos');
    setProdRoute({ view: 'productos' }); setListState('data'); setSectionState('data');
    setContaView('index');
    setScreen('shell');
  };

  const logout = () => { window.location.href = '../../index.html'; };

  const onChangeTenant = (id) => { setTenantId(id); setEmpresaId('e1'); };
  const onChangeCompany = (id) => { setEmpresaId(id); setProdRoute({ view: 'productos' }); setListState('data'); setSectionState('data'); setClientesRoute({ view: 'lista' }); setToast('Empresa cambiada · se limpió la vista.'); };

  const moduleVisible = (id, prof) => { const it = NAV_ITEMS.find((i) => i.id === id); if (!it) return false; return itemVisible(prof, it); };

  // Gating capa 2 (fail-closed): al cambiar de perfil, si el módulo activo dejó de ser
  // visible, rebota al primer módulo visible; si el POS deja de ser accesible, sale del
  // inmersivo. Si Productos deja de ser visible, también rebota.
  const onChangeProfile = (k) => {
    const nextProfile = CD.PROFILES[k];
    setProfileKey(k);
    if (!moduleVisible('pos', nextProfile)) setImmersive(false);
    if (!moduleVisible(activeModule, nextProfile)) {
      const first = NAV_ITEMS.filter((i) => i.built).find((i) => moduleVisible(i.id, nextProfile));
      if (first) { setActiveModule(first.id); setImmersive(first.id === 'pos'); if (first.id === 'productos') setProdRoute({ view: 'productos' }); if (first.id === 'clientes') setClientesRoute({ view: 'lista' }); if (first.id === 'contabilidad') setContaView('index'); }
    }
  };

  React.useEffect(() => {
    if (screen !== 'shell' || density !== 'comfortable' || !immersive) return;
    const onKey = (e) => { if (e.key !== 'F2') return; e.preventDefault(); if (!checkoutOpen && !closedSale && !isBlocked()) onCobrar(); };
    window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey);
  }, [screen, density, immersive, lines, checkoutOpen, closedSale]);
  React.useEffect(() => () => { if (writeTimer.current) clearTimeout(writeTimer.current); if (cajaTimer.current) clearTimeout(cajaTimer.current); }, []);

  // ── Productos: sub-router ───────────────────────────────────────────────────
  const goProd = (view, extra = {}) => setProdRoute({ view, ...extra });
  const prod = prodRoute.productId ? CD.PRODUCTS.find((p) => p.id === prodRoute.productId) : null;
  const variant = (prodRoute.productId && prodRoute.variantId) ? (CD.VARIANTS[prodRoute.productId] || []).find((v) => v.id === prodRoute.variantId) : null;
  const barcode = (variant && prodRoute.barcodeId) ? (CD.BARCODES[variant.id] || []).find((b) => b.id === prodRoute.barcodeId) : null;
  const backToProductos = () => goProd('productos');
  const backToProduct = (pid) => goProd('producto-detalle', { productId: pid });

  const renderProductos = () => {
    switch (prodRoute.view) {
      case 'productos':
        return <window.ProductsList profile={profile} listState={listState} onRetry={() => setListState('data')}
          onNew={() => goProd('producto-nuevo')} onOpen={(id) => goProd('producto-detalle', { productId: id })} />;
      case 'producto-nuevo':
        return <window.ProductForm scenario="ok" onCancel={backToProductos} onSaved={(m) => { setToast(m); backToProductos(); }} />;
      case 'producto-editar':
        return <window.ProductForm product={prod} scenario={prodRoute.scenario} onCancel={() => backToProduct(prod.id)} onSaved={(m) => { setToast(m); backToProduct(prod.id); }} />;
      case 'producto-detalle':
        return <window.ProductDetail product={prod} profile={profile} sectionState={sectionState} onRetry={() => setSectionState('data')}
          onEdit={() => goProd('producto-editar', { productId: prod.id, scenario: 'ok' })}
          onBack={backToProductos}
          onNewVariant={() => goProd('variante-nueva', { productId: prod.id })}
          onOpenVariant={(vid) => goProd('variante-detalle', { productId: prod.id, variantId: vid })}
          onToast={setToast} />;
      case 'variante-nueva':
        return <window.VariantForm product={prod} onCancel={() => backToProduct(prod.id)} onSaved={(m) => { setToast(m); backToProduct(prod.id); }} />;
      case 'variante-editar':
        return <window.VariantForm product={prod} variant={variant} onCancel={() => goProd('variante-detalle', { productId: prod.id, variantId: variant.id })} onSaved={(m) => { setToast(m); goProd('variante-detalle', { productId: prod.id, variantId: variant.id }); }} />;
      case 'variante-detalle':
        return <window.VariantDetail product={prod} variant={variant} profile={profile} sectionState={sectionState} onRetry={() => setSectionState('data')}
          onBackProduct={() => backToProduct(prod.id)}
          onEdit={() => goProd('variante-editar', { productId: prod.id, variantId: variant.id })}
          onNewBarcode={() => goProd('barcode-nuevo', { productId: prod.id, variantId: variant.id })}
          onEditBarcode={(bid) => goProd('barcode-editar', { productId: prod.id, variantId: variant.id, barcodeId: bid })}
          onToast={setToast} onDeleted={() => backToProduct(prod.id)} />;
      case 'barcode-nuevo':
        return <window.BarcodeForm product={prod} variant={variant} onCancel={() => goProd('variante-detalle', { productId: prod.id, variantId: variant.id })} onSaved={(m) => { setToast(m); goProd('variante-detalle', { productId: prod.id, variantId: variant.id }); }} />;
      case 'barcode-editar':
        return <window.BarcodeForm product={prod} variant={variant} barcode={barcode} onCancel={() => goProd('variante-detalle', { productId: prod.id, variantId: variant.id })} onSaved={(m) => { setToast(m); goProd('variante-detalle', { productId: prod.id, variantId: variant.id }); }} />;
      default:
        return null;
    }
  };

  // ── Clientes: sub-router + FUENTE ÚNICA (misma cartera que el picker del POS). Un
  //    cliente creado en el POS aparece aquí y viceversa: ambos leen/escriben `clientes`.
  const cliente = clientesRoute.clienteId ? clientes.find((c) => c.id === clientesRoute.clienteId) : null;
  const createCliente = (data) => { const c = { ...data, id: 'nc' + Date.now(), activo: true }; setClientes((prev) => [c, ...prev]); setToast('Cliente creado: ' + c.nombre + '.'); return c; };
  const updateCliente = (id, data) => { setClientes((prev) => prev.map((x) => x.id === id ? { ...x, ...data } : x)); setToast('Cliente actualizado.'); };
  const toggleClienteActivo = (c) => { setClientes((prev) => prev.map((x) => x.id === c.id ? { ...x, activo: c.activo === false } : x)); setToast(c.activo === false ? ('Cliente reactivado: ' + c.nombre + '.') : ('Cliente desactivado: ' + c.nombre + '.')); };
  const renderClientes = () => {
    switch (clientesRoute.view) {
      case 'lista':
        return <window.ClientesList profile={profile} listState={listState} clientes={clientes} onRetry={() => setListState('data')}
          onNew={() => setClientesRoute({ view: 'nuevo' })} onOpen={(id) => setClientesRoute({ view: 'detalle', clienteId: id })} />;
      case 'nuevo':
        return <window.ClientFormScreen onCancel={() => setClientesRoute({ view: 'lista' })} onSubmit={(data) => { const c = createCliente(data); setClientesRoute({ view: 'detalle', clienteId: c.id }); }} />;
      case 'editar':
        return <window.ClientFormScreen client={cliente} onCancel={() => setClientesRoute({ view: 'detalle', clienteId: cliente.id })} onSubmit={(data) => { updateCliente(cliente.id, data); setClientesRoute({ view: 'detalle', clienteId: cliente.id }); }} />;
      case 'detalle':
        return <window.ClientDetail client={cliente} profile={profile} onBack={() => setClientesRoute({ view: 'lista' })}
          onEdit={() => setClientesRoute({ view: 'editar', clienteId: cliente.id })} onToggleActive={toggleClienteActivo} onToast={setToast} />;
      default:
        return null;
    }
  };

  // Contenido del shell NORMAL por módulo activo.
  let content;
  if (activeModule === 'pos') content = <PosResume lines={lines} totals={totals} customer={customer} onResume={resumeSale} onCobrar={onCobrar} onDescartar={discardSale} />;
  else if (activeModule === 'productos') content = renderProductos();
  else if (activeModule === 'clientes') content = renderClientes();
  else if (activeModule === 'contabilidad') content = contaView === 'index'
    ? <window.ContabilidadIndex profile={profile} onOpenCaja={openCaja} />
    : <window.CajaScreen tenant={tenant} cajero={tenant.cajero} turno={cajaTurno} closed={cajaClosed} phase={cajaPhase} errorId={cajaErrorId} contado={contado} onContado={setContado} fondo={fondo} onFondo={setFondo} hora="08:12" onAbrir={abrirCaja} onCerrar={cerrarCaja} onRetry={cerrarCaja} onNuevoTurno={nuevoTurno} onBack={() => setContaView('index')} />;
  else content = <ProntoView label={moduleLabel(activeModule)} />;

  const accentVars = { '--brand-primary': tenant.accent, '--brand-foreground': tenant.fg };

  // Barra de prototipo: eje de estado de Productos según la vista actual.
  const listScreens = ['productos'];
  const sectionScreens = ['producto-detalle', 'variante-detalle'];
  const stateInList = (activeModule === 'productos' && !immersive && listScreens.includes(prodRoute.view)) || (activeModule === 'clientes' && !immersive && clientesRoute.view === 'lista');
  const stateInSection = activeModule === 'productos' && !immersive && sectionScreens.includes(prodRoute.view);

  // Pantallas de momento (login / workspace): sin barra de prototipo, full screen.
  if (screen === 'login') return <LoginScreen onLogin={() => setScreen('workspace')} />;
  if (screen === 'workspace') return <WorkspaceScreen mode={mode} onPick={enterWorkspace} />;

  const ventaContent = closedSale
    ? <window.SaleClosedScreen sale={closedSale} onNewSale={newSale} onPrint={onPrint} density={density} />
    : (<><window.ProductSearch searchState="data" onAdd={onAdd} onAddGeneric={openGeneric} onRetry={() => {}} onExit={exitSale} flash={flash} />
        <window.Cart lines={lines} customer={customer} onOpenQty={setQtyLine} onStep={onStep} onRemove={onRemove} onSaveProduct={onSaveProduct} onConsumidorFinal={consumidorFinal} onOpenPicker={() => setPickerOpen(true)} onCobrar={onCobrar} /></>);

  return (
    <window.PosDensityCtx.Provider value={density}>
    <div data-mode={mode} data-density={density} style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'hsl(var(--surface-sunken))', color: 'hsl(var(--text-primary))', fontFamily: 'var(--font-ui)', ...accentVars }}>
      <PrototypeBar tenantId={tenantId} onChangeTenant={onChangeTenant} profileKey={profileKey} onChangeProfile={onChangeProfile} density={density} onChangeDensity={setDensity} cajaPreset={cajaPreset} onChangeCajaPreset={applyCajaPreset} outcome={outcome} onChangeOutcome={setOutcome} tenant={tenant}
        stateEnabled={stateInList || stateInSection} stateScope={stateInSection ? 'section' : 'list'} stateValue={stateInSection ? sectionState : listState} onChangeState={stateInSection ? setSectionState : setListState} />
      {immersive ? (
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
          <ImmersiveBar tenant={tenant} empresaObj={empresaObj} mode={mode} onToggleMode={() => setMode((m) => m === 'light' ? 'dark' : 'light')} onExitSale={exitSale} />
          <div style={{ flex: 1, minHeight: 0, display: 'flex', justifyContent: 'center', background: 'hsl(var(--surface-base))' }}>
            <div style={{ flex: 1, minWidth: 0, maxWidth: 1300, display: 'flex' }}>{ventaContent}</div>
          </div>
        </div>
      ) : (
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
          <TopBar tenant={tenant} empresaObj={empresaObj} empresaId={empresaId} onChangeCompany={onChangeCompany} profile={profile} mode={mode} onToggleMode={() => setMode((m) => m === 'light' ? 'dark' : 'light')} liveCart={cartAlive} cartCount={lines.reduce((s, l) => s + l.qty, 0)} cartTotal={window.cajaFmtEC(totals.total)} onResume={resumeSale} onLogout={logout} />
          <div style={{ flex: 1, minHeight: 0, display: 'flex' }}>
            <Sidebar profile={profile} active={activeModule} collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} onNavigate={onNavigate} liveCart={cartAlive} />
            <div style={{ flex: 1, minWidth: 0, overflow: 'auto', background: 'hsl(var(--surface-base))' }}>
              <div style={{ maxWidth: 1120, margin: '0 auto', padding: '24px 28px 48px' }}>{content}</div>
            </div>
          </div>
        </div>
      )}
      <window.QtySheet line={qtyLine} onClose={() => setQtyLine(null)} onCommit={commitQty} />
      <window.GenericItemSheet draft={genericDraft} ivaDefault={tenant.ivaDefault} onClose={() => setGenericDraft(null)} onCommit={commitGeneric} />
      <window.ClientPicker open={pickerOpen} onClose={() => setPickerOpen(false)} onPick={pickCustomer} onConsumidorFinal={consumidorFinal} activeId={customer.id} clientes={clientes} onCreate={createCustomer} />
      <window.CheckoutSheet open={checkoutOpen} phase={phase} totals={totals} received={received} onReceived={setReceived} onConfirm={runWrite} onRetry={runWrite} onCancel={cancelCheckout} errorId={errorId} density={density} />
      {toast && <div style={{ position: 'fixed', left: 0, right: 0, bottom: 22, display: 'flex', justifyContent: 'center', zIndex: 90, pointerEvents: 'none' }}><div style={{ pointerEvents: 'auto', maxWidth: 520, margin: '0 16px' }}><CToast onDismiss={() => setToast(null)}>{toast}</CToast></div></div>}
    </div>
    </window.PosDensityCtx.Provider>
  );
}

window.DemoApp = DemoApp;
ReactDOM.createRoot(document.getElementById('root')).render(<DemoApp />);
