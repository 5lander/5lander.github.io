/* Noctis · commerce POS-a — SHELL POS. Contexto de PANTALLA COMPLETA que REEMPLAZA
   el shell administrativo (topbar + sidebar de módulos + breadcrumbs + footer): un
   cajero clavado en una sola tarea no usa la navegación de módulos. Barra superior
   mínima, orientada a la tarea, con identidad discreta: logo pequeño, empresa ·
   sucursal activa, cajero, y salida clara del POS. SIN sidebar de módulos, SIN
   breadcrumbs. La marca del tenant sigue siendo acento quirúrgico; el chrome es
   neutro de casa. */
const SHIcon = window.PosIcon;

/* Logo pequeño del tenant (chip neutro de casa, NO usa el acento — la marca es
   quirúrgica y vive en primary/activo/foco/selección del contenido). */
function PosBrand({ tenant }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
      <div style={{ width: 32, height: 32, borderRadius: 8, flex: 'none', background: 'hsl(var(--text-primary))', color: 'hsl(var(--surface-raised))', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 12, letterSpacing: '.02em' }}>{tenant.initials}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
        <span style={{ color: 'hsl(var(--text-primary))', fontSize: 15, fontWeight: 600, letterSpacing: '-.01em', whiteSpace: 'nowrap' }}>{tenant.name}</span>
        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'hsl(var(--text-tertiary))', border: '1px solid hsl(var(--border-strong))', borderRadius: 999, padding: '2px 8px' }}>POS</span>
      </div>
    </div>
  );
}

function ContextChip({ icon, primary, secondary }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
      <div style={{ width: 'var(--pos-chip)', height: 'var(--pos-chip)', flex: 'none', borderRadius: 9, display: 'grid', placeItems: 'center', background: 'hsl(var(--surface-sunken))', border: '1px solid hsl(var(--border-subtle))', color: 'hsl(var(--text-secondary))' }} aria-hidden="true">
        <SHIcon name={icon} size={20} />
      </div>
      <div style={{ minWidth: 0, lineHeight: 1.25 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'hsl(var(--text-primary))', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{primary}</div>
        <div style={{ fontSize: 12, color: 'hsl(var(--text-tertiary))', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{secondary}</div>
      </div>
    </div>
  );
}

function PosShell({ tenant, mode, onToggleMode, onExit, children }) {
  const modeIcon = mode === 'dark' ? '☾' : '☀';
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'hsl(var(--surface-sunken))', overflow: 'hidden' }}>
      {/* BARRA POS — mínima, neutra de casa. Sin sidebar de módulos ni breadcrumbs. */}
      <header style={{ flex: 'none', height: 'var(--pos-header)', display: 'flex', alignItems: 'center', gap: 16, padding: '0 16px', background: 'hsl(var(--surface-raised))', borderBottom: '1px solid hsl(var(--border-subtle))' }}>
        <PosBrand tenant={tenant} />
        <div style={{ width: 1, height: 32, background: 'hsl(var(--border-subtle))', flex: 'none' }} />
        <ContextChip icon="store" primary={tenant.empresa} secondary={tenant.sucursal} />
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <ContextChip icon="user-round" primary={tenant.cajero.nombre} secondary={tenant.cajero.rol} />
          <button type="button" onClick={onToggleMode} className="pos-btn" aria-label={mode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            style={{ width: 'var(--pos-action)', height: 'var(--pos-action)', flex: 'none', borderRadius: 10, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', cursor: 'pointer', fontSize: 18, display: 'grid', placeItems: 'center' }}>{modeIcon}</button>
          <button type="button" onClick={onExit} className="pos-btn" aria-label="Salir del POS"
            style={{ height: 'var(--pos-action)', display: 'flex', alignItems: 'center', gap: 8, padding: '0 14px', borderRadius: 10, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-ui)' }}>
            <SHIcon name="log-out" size={20} />Salir del POS
          </button>
        </div>
      </header>
      {/* ÁREA DE VENTA — el orquestador pasa el split (búsqueda | carrito). */}
      <div style={{ flex: 1, minHeight: 0, display: 'flex' }}>{children}</div>
    </div>
  );
}

window.PosShell = PosShell;
