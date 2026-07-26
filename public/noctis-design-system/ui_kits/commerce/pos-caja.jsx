/* Noctis · commerce — CONTABILIDAD naciente + CAJA (apertura / cierre). El cierre de
   caja es un HECHO CONTABLE (cuadra efectivo, registra diferencia), no un paso de la
   venta: por eso vive en el módulo CONTABILIDAD como submódulo, NO bajo Vender. Este
   corte hace NACER Contabilidad en la sidebar con la caja; el resto de submódulos
   contables sigue siendo horizonte ("Pronto", reloj).

   GATING de tres capas (heredado): módulo visible con ≥1 permiso efectivo → submódulo
   OCULTO si no hay permiso (no deshabilitado) → CTA se oculta. La CAJERA ve Contabilidad
   pero al abrirlo SOLO aparece "Cierre de caja"; un administrador vería todos los
   submódulos. La vista de índice se dibuja TAL COMO LA VE quien la abre.

   DENSIDAD NORMAL (no táctil): el cuadre se hace SENTADO contando efectivo, no en el
   fragor de la venta. SUPUESTO declarado — si debe ser táctil, se avisa.

   DINERO: montos como string es-EC $1.234,56 (coma decimal), MoneyDisplay del núcleo.
   El ESPERADO viene RESUELTO del backend (esperado = fondo inicial + cobros en efectivo);
   el front NO lo calcula — lo muestra como dato dado. La única aritmética de cliente es
   la DIFERENCIA (contado − esperado), auxiliar del cuadre. */
const CJNS = window.NoctisCommerceDesignSystem_4dfd35;
const { MoneyDisplay: CjMoney, Button: CjBtn, Badge: CjBadge, Spinner: CjSpinner } = CJNS;

/* Íconos de caja/contabilidad. Reusa el del núcleo vía PosIcon; agrega los glifos que el
   bundle aún no expone (mismo peso/grilla Lucide, misma API). Ventana de rebuild, mismo
   criterio que el fallback de POS-a/POS-b. */
const CJ_ICON_PATHS = {
  'lock': '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  'lock-open': '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
  'calculator': '<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>',
  'landmark': '<path d="M10 18v-7"/><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.29.949-.24.949H3.5c-.53 0-.716-.716-.24-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/>',
  'wallet': '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 1 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  'banknote': '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'triangle-alert': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  'trending-up': '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  'trending-down': '<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/>',
  'equal': '<line x1="5" x2="19" y1="9" y2="9"/><line x1="5" x2="19" y1="15" y2="15"/>',
  'circle-check': '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
  'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'rotate-cw': '<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>',
  'check': '<path d="M20 6 9 17l-5-5"/>',
  'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  'receipt': '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
  'user-round': '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
  'delete': '<path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"/><path d="m12 9 6 6"/><path d="m18 9-6 6"/>',
};
function CjIcon({ name, size = 20, strokeWidth = 2, title, style, ...rest }) {
  const core = window.PosIcon ? window.PosIcon({ name, size, strokeWidth, title, style, ...rest }) : null;
  if (core) return core;
  const inner = CJ_ICON_PATHS[name];
  if (!inner) return null;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      role={title ? 'img' : undefined} aria-hidden={title ? undefined : 'true'} aria-label={title} style={{ display: 'block', flex: 'none', ...style }}
      dangerouslySetInnerHTML={{ __html: (title ? '<title>' + title + '</title>' : '') + inner }} {...rest} />
  );
}
window.CajaIcon = CjIcon;

/* Formato es-EC ($1.234,56 · coma decimal). Fuente de formato de la caja. */
function fmtEC(n) {
  const neg = n < 0;
  const [ent, dec] = Math.abs(n).toFixed(2).split('.');
  return (neg ? '−' : '') + '$' + ent.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + dec;
}
const cToN = (cents) => (parseInt(cents || '0', 10)) / 100;
window.cajaFmtEC = fmtEC;

/* ── Campo de monto a DENSIDAD NORMAL ────────────────────────────────────────────
   El cuadre se hace con teclado físico, sentado. Campo enfocable que captura dígitos
   (centavos) y muestra el monto en formato es-EC. No es keypad táctil (esa es la venta):
   coherente con la entrada desktop del cobro, distinta superficie de contexto. */
function MoneyField({ value, onChange, ariaLabel, autoFocus, tone }) {
  const ref = React.useRef(null);
  const [focus, setFocus] = React.useState(false);
  React.useEffect(() => { if (autoFocus && ref.current) ref.current.focus(); }, [autoFocus]);
  const empty = value === '' || value == null;
  const ringVar = tone === 'danger' ? '--danger-fg' : '--focus-ring';
  return (
    <div style={{ height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '0 16px', borderRadius: 12,
      border: '1px solid ' + (focus ? 'hsl(var(' + ringVar + '))' : 'hsl(var(--border-strong))'),
      boxShadow: focus ? '0 0 0 3px hsl(var(' + ringVar + ') / .28)' : 'none',
      background: 'hsl(var(--surface-base))' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', color: 'hsl(var(--text-tertiary))', flex: 'none' }}>
        <CjIcon name="banknote" size={20} />
      </span>
      <input ref={ref} inputMode="numeric" aria-label={ariaLabel} value={fmtEC(cToN(value))}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, '').replace(/^0+(?=\d)/, '').slice(0, 9))}
        style={{ flex: 1, minWidth: 0, textAlign: 'right', border: 0, outline: 'none', background: 'transparent', font: '700 30px/1 var(--font-ui)', fontVariantNumeric: 'tabular-nums', color: empty ? 'hsl(var(--text-tertiary))' : 'hsl(var(--text-primary))' }} />
    </div>
  );
}

/* Encabezado de submódulo de caja: micro-eyebrow del módulo padre (Contabilidad) +
   título + chip de estado de turno. */
function CajaHeader({ title, meta, onBack, backLabel }) {
  return (
    <div style={{ marginBottom: 18 }}>
      {onBack && (
        <button type="button" onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, border: 0, background: 'none', padding: 0, cursor: 'pointer', color: 'hsl(var(--link))', font: '500 13px var(--font-ui)', marginBottom: 10 }}>
          <CjIcon name="chevron-right" size={15} style={{ transform: 'rotate(180deg)' }} />{backLabel || 'Contabilidad'}
        </button>
      )}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.09em', textTransform: 'uppercase', color: 'hsl(var(--text-tertiary))', marginBottom: 4 }}>Contabilidad · Caja</div>
          <h1 style={{ font: '600 26px/32px var(--font-ui)', letterSpacing: '-.015em', margin: 0 }}>{title}</h1>
        </div>
        {meta}
      </div>
    </div>
  );
}

/* Chip de estado del turno (abierta / cerrada). */
function TurnoChip({ open, seq }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 12px', borderRadius: 999, fontSize: 13, fontWeight: 600,
      background: open ? 'hsl(var(--success-bg))' : 'hsl(var(--surface-sunken))', border: '1px solid ' + (open ? 'hsl(var(--success-border))' : 'hsl(var(--border-strong))'), color: open ? 'hsl(var(--success-fg))' : 'hsl(var(--text-secondary))' }}>
      <CjIcon name={open ? 'lock-open' : 'lock'} size={16} />{open ? 'Caja abierta' : 'Caja cerrada'}{seq && <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, opacity: .8 }}>· {seq}</span>}
    </span>
  );
}

/* Panel de dato (etiqueta + monto), reusado por esperado / resumen. */
function DataRow({ label, children, hint, strong, tone }) {
  const color = tone === 'danger' ? 'hsl(var(--danger-fg))' : tone === 'success' ? 'hsl(var(--success-fg))' : 'hsl(var(--text-primary))';
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 14, padding: '11px 0', borderTop: '1px solid hsl(var(--border-subtle))' }}>
      <span style={{ fontSize: 14, color: 'hsl(var(--text-secondary))', fontWeight: strong ? 600 : 500 }}>{label}{hint && <span style={{ display: 'block', fontSize: 12, color: 'hsl(var(--text-tertiary))', fontWeight: 400 }}>{hint}</span>}</span>
      <span style={{ font: (strong ? '700 20px' : '600 16px') + '/1 var(--font-ui)', fontVariantNumeric: 'tabular-nums', color }}>{children}</span>
    </div>
  );
}

/* ── APERTURA DE CAJA ─────────────────────────────────────────────────────────────
   Estado inicial (sin turno abierto): la cajera registra el FONDO INICIAL (base para
   dar vuelto) y abre el turno. `phase` = 'processing' durante la escritura. */
function AperturaCaja({ tenant, cajero, fondo, onFondo, onAbrir, phase, hora }) {
  const processing = phase === 'processing';
  const canOpen = fondo !== '' && cToN(fondo) >= 0;
  return (
    <div style={{ maxWidth: 560 }}>
      <div style={{ padding: '22px 22px 24px', borderRadius: 16, background: 'hsl(var(--surface-raised))', border: '1px solid hsl(var(--border-subtle))' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, flex: 'none', display: 'grid', placeItems: 'center', background: 'hsl(var(--surface-sunken))', border: '1px solid hsl(var(--border-strong))', color: 'hsl(var(--text-secondary))' }} aria-hidden="true">
            <CjIcon name="lock" size={26} strokeWidth={1.8} />
          </div>
          <div>
            <div style={{ font: '600 18px/1.3 var(--font-ui)', color: 'hsl(var(--text-primary))' }}>Iniciá el turno</div>
            <p style={{ margin: '3px 0 0', fontSize: 13, color: 'hsl(var(--text-secondary))', maxWidth: '48ch' }}>Registrá el <b style={{ color: 'hsl(var(--text-primary))' }}>fondo inicial</b> — la base de efectivo con la que arrancás para dar vuelto. Queda como punto de partida del cuadre al cierre.</p>
          </div>
        </div>
        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'hsl(var(--text-secondary))', marginBottom: 8 }}>Fondo inicial</label>
        <MoneyField value={fondo} onChange={onFondo} ariaLabel="Fondo inicial de caja" autoFocus />
        <div style={{ marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['5000', '10000', '20000'].map((c) => (
            <button key={c} type="button" onClick={() => onFondo(c)} className="pos-btn"
              style={{ padding: '7px 14px', borderRadius: 10, cursor: 'pointer', border: '1px solid ' + (fondo === c ? 'hsl(var(--brand-primary))' : 'hsl(var(--border-strong))'), background: fondo === c ? 'hsl(var(--brand-primary) / .08)' : 'hsl(var(--surface-base))', color: 'hsl(var(--text-primary))', font: '600 14px var(--font-ui)' }}>
              {fmtEC(cToN(c))}
            </button>
          ))}
        </div>
        <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', padding: '12px 14px', borderRadius: 12, background: 'hsl(var(--surface-sunken))', border: '1px solid hsl(var(--border-subtle))' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'hsl(var(--text-secondary))' }}><CjIcon name="user-round" size={16} style={{ color: 'hsl(var(--text-tertiary))' }} />{cajero.nombre}</span>
          <span style={{ color: 'hsl(var(--border-strong))' }} aria-hidden="true">·</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'hsl(var(--text-secondary))' }}><CjIcon name="clock" size={16} style={{ color: 'hsl(var(--text-tertiary))' }} />Apertura {hora}</span>
        </div>
        <button type="button" onClick={processing || !canOpen ? undefined : onAbrir} disabled={processing || !canOpen} aria-busy={processing || undefined}
          style={{ marginTop: 20, width: '100%', height: 52, borderRadius: 14, cursor: processing || !canOpen ? 'default' : 'pointer', font: '600 16px var(--font-ui)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, border: !canOpen && !processing ? '1px solid hsl(var(--border-subtle))' : 0,
            background: !canOpen && !processing ? 'hsl(var(--surface-sunken))' : 'hsl(var(--brand-primary))', color: !canOpen && !processing ? 'hsl(var(--text-disabled))' : 'hsl(var(--brand-foreground))' }}>
          {processing ? <><span className="noctis-btn__spin" aria-hidden="true" />Abriendo caja…</> : <><CjIcon name="lock-open" size={20} />Abrir caja con {fmtEC(cToN(fondo || '0'))}</>}
        </button>
      </div>
    </div>
  );
}

/* ── CIERRE DE CAJA ───────────────────────────────────────────────────────────────
   Turno abierto: el sistema muestra el ESPERADO (resuelto por backend = fondo + cobros en
   efectivo). La cajera cuenta el efectivo REAL, lo ingresa, y se calcula la DIFERENCIA
   (sobra / falta / cuadra), inequívoca. `phase` = processing (escritura) · error. */
function DiffState({ diff, counted }) {
  if (!counted) {
    return (
      <div style={{ padding: '18px 20px', borderRadius: 14, background: 'hsl(var(--surface-sunken))', border: '1px dashed hsl(var(--border-strong))', display: 'flex', alignItems: 'center', gap: 12, color: 'hsl(var(--text-tertiary))' }}>
        <CjIcon name="calculator" size={22} /><span style={{ fontSize: 14 }}>Ingresá el efectivo contado para ver la diferencia.</span>
      </div>
    );
  }
  const cuadra = Math.abs(diff) < 0.005;
  const sobra = diff > 0;
  const cfg = cuadra
    ? { label: 'Cuadra', icon: 'circle-check', tone: 'success', desc: 'El efectivo contado coincide con lo esperado.' }
    : sobra
      ? { label: 'Sobra', icon: 'trending-up', tone: 'success', desc: 'Hay más efectivo del esperado. Se registra la diferencia.' }
      : { label: 'Falta', icon: 'trending-down', tone: 'danger', desc: 'Falta efectivo respecto de lo esperado. Se registra la diferencia.' };
  const bg = cfg.tone === 'danger' ? 'hsl(var(--danger-bg))' : 'hsl(var(--success-bg))';
  const bd = cfg.tone === 'danger' ? 'hsl(var(--danger-border))' : 'hsl(var(--success-border))';
  const fg = cfg.tone === 'danger' ? 'hsl(var(--danger-fg))' : 'hsl(var(--success-fg))';
  return (
    <div role="status" style={{ padding: '18px 20px', borderRadius: 14, background: bg, border: '1px solid ' + bd }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, flex: 'none', display: 'grid', placeItems: 'center', background: 'hsl(var(--surface-base))', border: '1px solid ' + bd, color: fg }} aria-hidden="true"><CjIcon name={cfg.icon} size={24} /></div>
          <div>
            <div style={{ font: '700 18px/1.1 var(--font-ui)', color: fg }}>{cfg.label}</div>
            <p style={{ margin: '3px 0 0', fontSize: 12.5, color: 'hsl(var(--text-secondary))', maxWidth: '34ch' }}>{cfg.desc}</p>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'hsl(var(--text-tertiary))', marginBottom: 2 }}>Diferencia</div>
          <CjMoney value={cuadra ? 0 : diff} size="display" style={{ color: fg }} />
        </div>
      </div>
    </div>
  );
}

function CierreCaja({ turno, contado, onContado, onCerrar, phase, errorId, onRetry }) {
  const processing = phase === 'processing';
  const errored = phase === 'error';
  const counted = contado !== '' && contado != null;
  const diff = cToN(contado) - turno.esperado;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 18, alignItems: 'start' }}>
      {/* ESPERADO — dato RESUELTO por el backend, no calculado en el front. */}
      <div style={{ padding: '20px 22px', borderRadius: 16, background: 'hsl(var(--surface-raised))', border: '1px solid hsl(var(--border-subtle))' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <span style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'hsl(var(--text-secondary))' }}>Esperado en caja</span>
          <span title="Lo calcula el sistema (backend), no el punto de venta" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'hsl(var(--text-tertiary))', border: '1px solid hsl(var(--border-subtle))', borderRadius: 999, padding: '1px 8px' }}><CjIcon name="info" size={12} />Resuelto por el sistema</span>
        </div>
        <CjMoney value={turno.esperado} size="display" />
        <div style={{ marginTop: 14 }}>
          <DataRow label="Fondo inicial" hint={'Apertura ' + turno.aperturaHora}>{fmtEC(turno.fondo)}</DataRow>
          <DataRow label="Ventas en efectivo" hint={turno.ventasCount + ' ventas del turno'}>{fmtEC(turno.ventasEfectivo)}</DataRow>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 14, padding: '11px 0 0', borderTop: '1px solid hsl(var(--border-strong))', marginTop: 2 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'hsl(var(--text-secondary))' }}><CjIcon name="equal" size={15} />Esperado</span>
            <span style={{ font: '700 18px/1 var(--font-ui)', fontVariantNumeric: 'tabular-nums' }}>{fmtEC(turno.esperado)}</span>
          </div>
        </div>
        <p style={{ margin: '12px 0 0', fontSize: 12, color: 'hsl(var(--text-tertiary))', lineHeight: 1.5 }}>El punto de venta no recalcula la venta: fondo, ventas y esperado llegan resueltos del sistema.</p>
      </div>

      {/* CONTADO + DIFERENCIA + cerrar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ padding: '20px 22px', borderRadius: 16, background: 'hsl(var(--surface-raised))', border: '1px solid hsl(var(--border-subtle))' }}>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'hsl(var(--text-secondary))', marginBottom: 8 }}>Efectivo contado</label>
          <MoneyField value={contado} onChange={onContado} ariaLabel="Efectivo real contado en caja" tone={counted && diff < -0.005 ? 'danger' : undefined} />
          <p style={{ margin: '8px 2px 0', fontSize: 12, color: 'hsl(var(--text-tertiary))' }}>Contá el efectivo real de la caja e ingresalo. Formato $1.234,56.</p>
        </div>
        <DiffState diff={diff} counted={counted} />
        {errored && (
          <div role="alert" style={{ padding: '14px 16px', borderRadius: 12, background: 'hsl(var(--danger-bg))', border: '1px solid hsl(var(--danger-border))', color: 'hsl(var(--danger-fg))' }}>
            <div style={{ fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}><CjIcon name="triangle-alert" size={17} />No se pudo cerrar el turno</div>
            <p style={{ margin: '6px 0 8px', fontSize: 13, lineHeight: 1.5 }}>El esperado y el efectivo contado siguen intactos. Reintentá el cierre; si persiste, compartí el código con soporte.</p>
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>errorId: {errorId}</code>
          </div>
        )}
        <div style={{ display: 'flex', gap: 10 }}>
          {errored ? (
            <button type="button" onClick={onRetry} style={{ flex: 1, height: 52, borderRadius: 14, border: 0, cursor: 'pointer', background: 'hsl(var(--brand-primary))', color: 'hsl(var(--brand-foreground))', font: '600 16px var(--font-ui)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
              <CjIcon name="rotate-cw" size={20} />Reintentar cierre
            </button>
          ) : (
            <button type="button" onClick={processing || !counted ? undefined : onCerrar} disabled={processing || !counted} aria-busy={processing || undefined}
              style={{ flex: 1, height: 52, borderRadius: 14, cursor: processing || !counted ? 'default' : 'pointer', font: '600 16px var(--font-ui)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, border: !counted && !processing ? '1px solid hsl(var(--border-subtle))' : 0,
                background: !counted && !processing ? 'hsl(var(--surface-sunken))' : 'hsl(var(--brand-primary))', color: !counted && !processing ? 'hsl(var(--text-disabled))' : 'hsl(var(--brand-foreground))' }}>
              {processing ? <><span className="noctis-btn__spin" aria-hidden="true" />Registrando el cierre…</> : <><CjIcon name="lock" size={20} />Cerrar caja y registrar</>}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── RESUMEN DEL TURNO CERRADO ────────────────────────────────────────────────────
   Éxito del cierre: pantalla de resumen con fondo, ventas, esperado, contado, diferencia
   (con su estado), hora de cierre y secuencial de turno. */
function CierreResumen({ closed, onNuevoTurno }) {
  const cuadra = Math.abs(closed.diff) < 0.005;
  const sobra = closed.diff > 0;
  const tone = cuadra || sobra ? 'success' : 'danger';
  const fg = tone === 'danger' ? 'hsl(var(--danger-fg))' : 'hsl(var(--success-fg))';
  const label = cuadra ? 'Cuadró' : sobra ? 'Sobró' : 'Faltó';
  return (
    <div style={{ maxWidth: 520 }}>
      <div style={{ textAlign: 'center', marginBottom: 18 }}>
        <div style={{ width: 68, height: 68, borderRadius: 20, margin: '0 auto 14px', display: 'grid', placeItems: 'center', background: tone === 'danger' ? 'hsl(var(--danger-bg))' : 'hsl(var(--success-bg))', border: '1px solid ' + (tone === 'danger' ? 'hsl(var(--danger-border))' : 'hsl(var(--success-border))'), color: fg }} aria-hidden="true">
          <CjIcon name={cuadra ? 'circle-check' : sobra ? 'trending-up' : 'trending-down'} size={34} strokeWidth={1.9} />
        </div>
        <div style={{ font: '700 22px/1.2 var(--font-ui)', letterSpacing: '-.01em' }}>Turno cerrado</div>
        <div style={{ margin: '8px 0 0', display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, background: 'hsl(var(--surface-base))', border: '1px solid hsl(var(--border-strong))' }}>
          <CjIcon name="receipt" size={16} style={{ color: 'hsl(var(--text-tertiary))' }} />
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase', color: 'hsl(var(--text-tertiary))' }}>Turno</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 600, letterSpacing: '.02em' }}>{closed.seq}</span>
        </div>
      </div>
      <div style={{ padding: '6px 22px 14px', borderRadius: 16, background: 'hsl(var(--surface-base))', border: '1px solid hsl(var(--border-subtle))' }}>
        <DataRow label="Fondo inicial" hint={'Apertura ' + closed.aperturaHora}>{fmtEC(closed.fondo)}</DataRow>
        <DataRow label="Ventas en efectivo" hint={closed.ventasCount + ' ventas'}>{fmtEC(closed.ventasEfectivo)}</DataRow>
        <DataRow label="Esperado" strong>{fmtEC(closed.esperado)}</DataRow>
        <DataRow label="Efectivo contado" strong>{fmtEC(closed.contado)}</DataRow>
        <DataRow label={label} strong tone={tone}>{cuadra ? fmtEC(0) : fmtEC(closed.diff)}</DataRow>
        <DataRow label="Hora de cierre">{closed.cierreHora}</DataRow>
      </div>
      <p style={{ margin: '12px 2px 0', fontSize: 12, color: 'hsl(var(--text-tertiary))', textAlign: 'center', lineHeight: 1.5 }}>La diferencia quedó registrada como hecho contable. El asiento y su conciliación viven en el resto de Contabilidad.</p>
      <button type="button" onClick={onNuevoTurno} className="pos-btn" style={{ marginTop: 16, width: '100%', height: 48, borderRadius: 12, border: '1px solid hsl(var(--border-strong))', cursor: 'pointer', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', font: '500 15px var(--font-ui)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <CjIcon name="lock-open" size={18} />Abrir un nuevo turno
      </button>
    </div>
  );
}

/* ── ÍNDICE DE CONTABILIDAD (gating de submódulo) ─────────────────────────────────
   Se dibuja TAL COMO LO VE quien lo abre: solo aparecen los submódulos con permiso
   efectivo. La cajera ve SOLO "Cierre de caja"; el resto queda OCULTO (no deshabilitado).
   Un administrador vería todos. Los submódulos no construidos son informativos ("Pronto"). */
const CONTA_SUBMODULES = [
  { id: 'caja', perm: 'caja', built: true, icon: 'wallet', label: 'Cierre de caja', desc: 'Apertura, cierre y cuadre de efectivo del turno.' },
  { id: 'balance', perm: 'conta.balance', built: false, icon: 'landmark', label: 'Balance general', desc: 'Estado de situación de la empresa.' },
  { id: 'asientos', perm: 'conta.asientos', built: false, icon: 'receipt', label: 'Asientos contables', desc: 'Libro diario y registro de asientos.' },
  { id: 'mayor', perm: 'conta.mayor', built: false, icon: 'calculator', label: 'Libro mayor', desc: 'Saldos por cuenta contable.' },
];
function ContabilidadIndex({ profile, onOpenCaja }) {
  const { CanPerm } = window;
  const visible = CONTA_SUBMODULES.filter((s) => CanPerm(profile, s.perm));
  const hidden = CONTA_SUBMODULES.length - visible.length;
  return (
    <div style={{ maxWidth: 720 }}>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.09em', textTransform: 'uppercase', color: 'hsl(var(--text-tertiary))', marginBottom: 6 }}>Módulo</div>
        <h1 style={{ font: '600 26px/32px var(--font-ui)', letterSpacing: '-.015em', margin: 0 }}>Contabilidad</h1>
        <p style={{ margin: '8px 0 0', fontSize: 14, color: 'hsl(var(--text-secondary))', maxWidth: '58ch' }}>Los submódulos que ves dependen de tus permisos. {hidden > 0 ? 'Otros roles ven más de este módulo.' : 'Tu rol ve el módulo completo.'}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {visible.map((s) => s.built ? (
          <button key={s.id} type="button" onClick={onOpenCaja} className="pos-btn"
            style={{ display: 'flex', alignItems: 'center', gap: 16, textAlign: 'left', padding: '16px 18px', borderRadius: 14, cursor: 'pointer', border: '1px solid hsl(var(--border-subtle))', background: 'hsl(var(--surface-raised))', color: 'hsl(var(--text-primary))' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, flex: 'none', display: 'grid', placeItems: 'center', background: 'hsl(var(--brand-primary) / .1)', color: 'hsl(var(--brand-primary))' }} aria-hidden="true"><CjIcon name={s.icon} size={22} /></div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ font: '600 16px/1.3 var(--font-ui)' }}>{s.label}</div>
              <div style={{ fontSize: 13, color: 'hsl(var(--text-secondary))' }}>{s.desc}</div>
            </div>
            <CjIcon name="chevron-right" size={20} style={{ color: 'hsl(var(--text-tertiary))' }} />
          </button>
        ) : (
          <div key={s.id} title={s.label + ' · Pronto (submódulo por construir)'}
            style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 18px', borderRadius: 14, border: '1px solid hsl(var(--border-subtle))', background: 'hsl(var(--surface-base))', position: 'relative' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, flex: 'none', display: 'grid', placeItems: 'center', background: 'hsl(var(--surface-sunken))', color: 'hsl(var(--text-tertiary))' }} aria-hidden="true"><CjIcon name={s.icon} size={22} /></div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ font: '600 16px/1.3 var(--font-ui)', color: 'hsl(var(--text-secondary))' }}>{s.label}</div>
              <div style={{ fontSize: 13, color: 'hsl(var(--text-tertiary))' }}>{s.desc}</div>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'hsl(var(--text-tertiary))', border: '1px solid hsl(var(--border-strong))', borderRadius: 999, padding: '3px 9px' }}><CjIcon name="clock" size={12} />Pronto</span>
            <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0 }}>{s.label} · Pronto, submódulo por construir</span>
          </div>
        ))}
      </div>
      {hidden > 0 && (
        <div style={{ marginTop: 14, display: 'flex', alignItems: 'flex-start', gap: 10, padding: '12px 14px', borderRadius: 12, background: 'hsl(var(--surface-sunken))', border: '1px solid hsl(var(--border-subtle))' }}>
          <CjIcon name="lock" size={16} style={{ color: 'hsl(var(--text-tertiary))', marginTop: 1 }} />
          <p style={{ margin: 0, fontSize: 12.5, color: 'hsl(var(--text-secondary))', lineHeight: 1.5 }}><b style={{ color: 'hsl(var(--text-primary))' }}>{hidden} {hidden === 1 ? 'submódulo oculto' : 'submódulos ocultos'}</b> por permisos. Tu rol no incluye el resto de Contabilidad — no se deshabilitan, se ocultan. Un administrador vería el módulo completo.</p>
        </div>
      )}
    </div>
  );
}

/* Vista de CAJA (submódulo): enruta apertura / cierre / resumen según el turno y la fase. */
function CajaScreen(props) {
  const { turno, closed } = props;
  let body, chip;
  if (closed) { body = <CierreResumen closed={closed} onNuevoTurno={props.onNuevoTurno} />; chip = <TurnoChip open={false} seq={closed.seq} />; }
  else if (turno) { body = <CierreCaja turno={turno} contado={props.contado} onContado={props.onContado} onCerrar={props.onCerrar} phase={props.phase} errorId={props.errorId} onRetry={props.onRetry} />; chip = <TurnoChip open seq={turno.seq} />; }
  else { body = <AperturaCaja tenant={props.tenant} cajero={props.cajero} fondo={props.fondo} onFondo={props.onFondo} onAbrir={props.onAbrir} phase={props.phase} hora={props.hora} />; chip = <TurnoChip open={false} />; }
  return (
    <div>
      <CajaHeader title={closed ? 'Turno cerrado' : turno ? 'Cierre de caja' : 'Apertura de caja'} meta={chip} onBack={props.onBack} backLabel="Contabilidad" />
      {body}
    </div>
  );
}

Object.assign(window, { ContabilidadIndex, CajaScreen });
