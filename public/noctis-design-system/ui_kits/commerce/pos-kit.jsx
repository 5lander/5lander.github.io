/* Noctis · commerce POS-a — kit compartido del ambiente de venta. Helpers de
   densidad táctil + los estados del kit adaptados al POS pantalla completa:
   vacío ("buscá o escaneá") · cargando · sin resultados · error (errorId +
   reintento) · 403. NO reimplementa primitivos: usa Button/Spinner/Icon/Alert
   del núcleo. Todo hit-target ≥48 y feedback al presionar, cero hover-only. */
const PNS = window.NoctisCommerceDesignSystem_4dfd35;
const { Button: KBtn, Spinner: KSpinner, Icon: CoreIcon, Alert: KAlert } = PNS;

/* Fallback local de íconos POS mientras el bundle recompila con las entradas nuevas
   de Icon.jsx (la ampliación del set es la decisión de sistema; esto solo cubre la
   ventana de rebuild). Mismos paths Lucide, mismo peso/grilla que el núcleo. */
const POS_ICON_PATHS = {
  'search': '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'scan-barcode': '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 7v10"/><path d="M12 7v10"/><path d="M16 7v10"/>',
  'trash-2': '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
  'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
  'minus': '<path d="M5 12h14"/>',
  'user-round': '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
  'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
};

/* Icon del POS: usa el del núcleo; si devuelve null (glifo aún no en el bundle),
   cae al path local con la misma API (name, size, strokeWidth, title, style). */
function KIcon({ name, size = 20, strokeWidth = 2, title, style, ...rest }) {
  const core = CoreIcon ? CoreIcon({ name, size, strokeWidth, title, style, ...rest }) : null;
  if (core) return core;
  const inner = POS_ICON_PATHS[name];
  if (!inner) return null;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      role={title ? 'img' : undefined} aria-hidden={title ? undefined : 'true'} aria-label={title}
      style={{ display: 'block', flex: 'none', ...style }} dangerouslySetInnerHTML={{ __html: (title ? '<title>' + title + '</title>' : '') + inner }} {...rest} />
  );
}
window.PosIcon = KIcon;

/* ── EJE DENSIDAD (consumo del núcleo, no redefinición) ──────────────────────
   Dos modos de INTERACCIÓN, autodetectados por PUNTERO (no por ancho):
   · comfortable = desktop/mouse (PRIMARIO): pointer fine, targets normales, teclado
     físico protagónico, hover permitido.
   · touch = táctil (SECUNDARIO): pointer coarse, targets ≥48, keypad protagónico,
     sin hover. Es el POS-a original, intacto.
   El contexto viaja la densidad; los componentes eligen tamaños con `t` (=touch). */
const PosDensityCtx = React.createContext('touch');
function usePosDense() { return React.useContext(PosDensityCtx); }        // 'comfortable' | 'touch'
function usePosTouch() { return React.useContext(PosDensityCtx) === 'touch'; }
/* Autodetección: pointer fine → desktop; coarse → táctil. Sin breakpoints de ancho
   (un monitor táctil de 24" es grande y aun así es coarse). */
function detectDensity() {
  try {
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(pointer: fine)').matches) return 'touch';
  } catch (e) {}
  return 'comfortable';
}

/* Hover legítimo SOLO en desktop (pointer fine). En táctil está prohibido. Se
   scope-a por [data-density="comfortable"] para que jamás aplique en el modo coarse. */
if (typeof document !== 'undefined' && !document.getElementById('pos-hover-css')) {
  const s = document.createElement('style'); s.id = 'pos-hover-css';
  s.textContent = '[data-density="comfortable"] .pos-btn:hover{background:hsl(var(--surface-sunken));border-color:hsl(var(--border-strong))}[data-density="comfortable"] .pos-result:hover{border-color:hsl(var(--border-strong));background:hsl(var(--surface-sunken))}';
  document.head.appendChild(s);
}

/* Micro-etiqueta de zona (VENTA · CARRITO) — mayúsculas + tracking, neutra. */
function PosLabel({ children, style }) {
  return <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.1em', color: 'hsl(var(--text-tertiary))', fontWeight: 600, ...style }}>{children}</div>;
}

/* Estado del panel de resultados: contenedor centrado, superficie grande, sin
   depender de hover. `icon` es un ícono Lucide del núcleo. */
function PosStatePanel({ icon, title, description, action, tone = 'neutral' }) {
  const ring = tone === 'danger' ? 'hsl(var(--danger-border))' : 'hsl(var(--border-strong))';
  const iconColor = tone === 'danger' ? 'hsl(var(--danger-fg))' : 'hsl(var(--text-tertiary))';
  const iconBg = tone === 'danger' ? 'hsl(var(--danger-bg))' : 'hsl(var(--surface-sunken))';
  return (
    <div style={{ flex: 1, minHeight: 0, display: 'grid', placeItems: 'center', padding: 32 }}>
      <div style={{ textAlign: 'center', maxWidth: 440 }}>
        <div style={{ width: 72, height: 72, borderRadius: 18, margin: '0 auto 20px', display: 'grid', placeItems: 'center', background: iconBg, border: '1px solid ' + ring, color: iconColor }} aria-hidden="true">
          <KIcon name={icon} size={30} strokeWidth={1.8} />
        </div>
        <div style={{ font: '600 20px/26px var(--font-ui)', letterSpacing: '-.01em', color: 'hsl(var(--text-primary))' }}>{title}</div>
        {description && <p style={{ margin: '8px 0 0', color: 'hsl(var(--text-secondary))', fontSize: 15, lineHeight: 1.5 }}>{description}</p>}
        {action && <div style={{ marginTop: 22, display: 'flex', justifyContent: 'center' }}>{action}</div>}
      </div>
    </div>
  );
}

/* Cargando — spinner grande centrado (no skeleton: el resultado es una lista corta
   que cambia por completo al terminar la búsqueda). */
function PosLoading({ label = 'Buscando…' }) {
  return (
    <div style={{ flex: 1, minHeight: 0, display: 'grid', placeItems: 'center', padding: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <KSpinner size="lg" />
        <span style={{ fontSize: 15, color: 'hsl(var(--text-secondary))' }}>{label}</span>
      </div>
    </div>
  );
}

/* Error con errorId visible + reintento en superficie grande (nunca por toast). */
function PosError({ errorId = 'ERR-POS-6D21', onRetry, context = 'la búsqueda' }) {
  return (
    <PosStatePanel
      icon="x" tone="danger"
      title={'No se pudo cargar ' + context}
      description="Intente nuevamente. Si el problema persiste, comparta el código con soporte."
      action={<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <KBtn variant="secondary" onClick={onRetry}>Reintentar</KBtn>
        <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'hsl(var(--text-tertiary))' }}>errorId: {errorId}</code>
      </div>}
    />
  );
}

/* 403 — el perfil no puede vender en el POS (p.ej. contador). Fail-closed. */
function PosForbidden({ onExit }) {
  return (
    <PosStatePanel
      icon="shield-check"
      title="Su perfil no tiene acceso al POS"
      description="Vender en el punto de venta requiere el permiso de POS. Si cree que es un error, solicítelo a un administrador de su empresa."
      action={<KBtn variant="secondary" onClick={onExit}>Salir del POS</KBtn>}
    />
  );
}

Object.assign(window, { PosLabel, PosStatePanel, PosLoading, PosError, PosForbidden, PosDensityCtx, usePosDense, usePosTouch, detectDensity });
