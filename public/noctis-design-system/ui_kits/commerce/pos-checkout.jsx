/* Noctis · commerce POS-b — COBRO y CIERRE de venta. Continúa el "Cobrar" que en
   POS-a quedaba inerte: abre el cobro sobre el primitivo Sheet del núcleo y cierra la
   venta con secuencial. NO recalcula impuestos: consume subtotal/IVA/total que ya trae
   el carrito de POS-a (tarifas de IVA mixtas conviven, la fila IVA no asume una sola).

   SUPERFICIE = Sheet: un cajero cobrando necesita foco total y superficie grande, no un
   modal chico ni un confirm inline — bottom-sheet a pantalla casi completa en táctil,
   centrado grande en desktop. (Nota de sistema: el Sheet centrado del núcleo topa en
   520px; alcanza para una columna de cobro con foco, se señala como techo del primitivo.)

   DOS ENTRADAS (heredadas de la doble densidad, decisión cerrada):
   · DESKTOP (comfortable): el monto recibido se TECLEA con el teclado FÍSICO; Enter
     confirma (coherente con el F2 de cobrar de POS-a). El keypad en pantalla está ausente.
   · TÁCTIL (touch): NumericKeypad del núcleo protagónico (--kp-key), targets ≥48
     (--pos-tap-lg), sin hover. Mismo cobro, dos entradas, cero px hardcodeado de tamaño.

   DINERO (reglas de dominio, entrada autoritativa): los montos son autoridad del backend;
   el front NO es fuente de verdad de la venta. ÚNICA excepción: el VUELTO (recibido−total)
   es auxiliar de UI para el cajero — se calcula en cliente y se muestra, NO se persiste ni
   se manda como verdad. Formato Ecuador $1.234,56 (coma decimal) en todo monto. */
const CKNS = window.NoctisCommerceDesignSystem_4dfd35;
const { MoneyDisplay: CkMoney, NumericKeypad: CkKeypad, Sheet: CkSheet, Spinner: CkSpinner } = CKNS;

/* Shim de VENTANA DE REBUILD: el size hero `display` (40px) de MoneyDisplay es la entrada
   nueva del núcleo; mientras el bundle recompila, esta regla lo cubre. Es IDÉNTICA a la del
   núcleo (mismo font-size/weight) — cuando el bundle la trae, queda redundante, no divergente.
   Mismo criterio que el fallback de íconos del POS. NO reimplementa el formato de moneda:
   el es-EC y los tabular-nums siguen viviendo en MoneyDisplay. */
if (typeof document !== 'undefined' && !document.getElementById('pos-money-hero-css')) {
  const s = document.createElement('style'); s.id = 'pos-money-hero-css';
  s.textContent = '.noctis-money--display{font-size:40px;font-weight:700;line-height:1;}';
  document.head.appendChild(s);
}

/* Íconos del cobro. Reusa el del núcleo vía PosIcon; agrega los glifos de cobro que
   el bundle aún no expone (mismo peso/grilla Lucide, misma API). Ventana de rebuild,
   igual criterio que el fallback de POS-a. */
const CK_ICON_PATHS = {
  'banknote': '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  'credit-card': '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  'qr-code': '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>',
  'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'check': '<path d="M20 6 9 17l-5-5"/>',
  'circle-check': '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
  'printer': '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect width="12" height="8" x="6" y="14"/>',
  'rotate-cw': '<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>',
  'receipt': '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
  'plus-circle': '<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/>',
};
function CkIcon({ name, size = 20, strokeWidth = 2, title, style, ...rest }) {
  const core = window.PosIcon ? window.PosIcon({ name, size, strokeWidth, title, style, ...rest }) : null;
  if (core) return core;
  const inner = CK_ICON_PATHS[name];
  if (!inner) return null;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      role={title ? 'img' : undefined} aria-hidden={title ? undefined : 'true'} style={{ display: 'block', flex: 'none', ...style }}
      dangerouslySetInnerHTML={{ __html: (title ? '<title>' + title + '</title>' : '') + inner }} {...rest} />
  );
}

/* Formato es-EC ($1.234,56). Fuente única de verdad de formato del cobro. */
function fmtEC(n) {
  const neg = n < 0;
  const [ent, dec] = Math.abs(n).toFixed(2).split('.');
  return (neg ? '−' : '') + '$' + ent.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + dec;
}
const centsToNum = (cents) => (parseInt(cents || '0', 10)) / 100;

/* Totales del cobro — CONSUME lo que arma POS-a; catálogo y genérica suman igual, se
   excluyen las líneas a resolver. NO recalcula tarifas: agrega los IVA por línea (0/5/15
   conviven). Es el mismo stand-in de render que el carrito; la autoridad es el backend. */
function posTotals(lines) {
  const views = (lines || []).map((l) => window.PosData.lineView(l));
  const priced = views.filter((v) => !window.PosData.needsPrice(v));
  const subtotal = priced.reduce((s, v) => s + v.precio * v.qty, 0);
  const iva = priced.reduce((s, v) => s + v.precio * v.qty * (v.iva / 100), 0);
  const rates = Array.from(new Set(priced.map((v) => v.iva))).sort((a, b) => a - b);
  return { subtotal, iva, total: subtotal + iva, rates, items: priced.reduce((s, v) => s + v.qty, 0), lines: priced.length };
}
window.posTotals = posTotals;

/* Aceleradores de monto: el EXACTO + denominaciones redondas HACIA ARRIBA (billetes EC
   por encima del total). Táctil: botones grandes; desktop: también clickeables. */
function accelerators(total) {
  const out = [{ label: 'Exacto', cents: Math.round(total * 100), exact: true }];
  const bills = [5, 10, 20, 50, 100].filter((b) => b > total + 0.001);
  bills.slice(0, 3).forEach((b) => out.push({ label: fmtEC(b), cents: b * 100 }));
  if (bills.length === 0) { const up = Math.ceil(total / 10) * 10; if (up > total) out.push({ label: fmtEC(up), cents: up * 100 }); }
  return out;
}

/* ── Selección de medio de pago (nace multi-método) ──────────────────────────────
   EFECTIVO activo (único funcional en este corte). Deuna/QR y Tarjeta = SLOTS "Pronto"
   con el mismo lenguaje que el resto de commerce: reloj, no clickeable, informativo puro
   (<div> sin onClick/foco/aria-disabled, estado en texto sr-only + title). Reservan el
   lugar para que v3 no rediseñe la pantalla; no se implementan. */
function MethodTiles({ density }) {
  const t = density === 'touch';
  const base = { flex: 1, minWidth: 0, borderRadius: 14, padding: t ? '14px 12px' : '12px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center' };
  return (
    <div role="group" aria-label="Medio de pago" style={{ display: 'flex', gap: 10 }}>
      <div aria-current="true" style={{ ...base, minHeight: 'var(--pos-tap-lg)', border: '2px solid hsl(var(--brand-primary))', background: 'hsl(var(--brand-primary) / .08)', color: 'hsl(var(--text-primary))' }}>
        <CkIcon name="banknote" size={t ? 26 : 22} />
        <span style={{ fontSize: t ? 15 : 14, fontWeight: 600 }}>Efectivo</span>
        <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0 }}>Medio de pago seleccionado</span>
      </div>
      {[{ icon: 'qr-code', label: 'Deuna / QR' }, { icon: 'credit-card', label: 'Tarjeta' }].map((m) => (
        <div key={m.label} title={m.label + ' · Pronto (medio por construir)'} style={{ ...base, minHeight: 'var(--pos-tap-lg)', border: '1px solid hsl(var(--border-subtle))', background: 'hsl(var(--surface-sunken))', color: 'hsl(var(--text-tertiary))', position: 'relative' }}>
          <CkIcon name={m.icon} size={t ? 26 : 22} style={{ opacity: .7 }} />
          <span style={{ fontSize: t ? 15 : 14, fontWeight: 500 }}>{m.label}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'hsl(var(--text-tertiary))', border: '1px solid hsl(var(--border-strong))', borderRadius: 999, padding: '2px 8px' }}>
            <CkIcon name="clock" size={12} />Pronto
          </span>
          <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0 }}>{m.label} · Pronto, medio de pago por construir</span>
        </div>
      ))}
    </div>
  );
}

/* Fila del resumen del cobro (Total / Recibido / Vuelto). `hero` = monto grande legible
   a distancia de brazo, vía MoneyDisplay size="display" (40px) del núcleo — el formato
   es-EC y tabular-nums viven en el componente, no se replican acá; el tono (falta/vuelto)
   se pasa como color, la cifra la formatea el núcleo. */
function AmountRow({ label, amount, hero, tone, note }) {
  const color = tone === 'danger' ? 'hsl(var(--danger-fg))' : tone === 'success' ? 'hsl(var(--success-fg))' : 'hsl(var(--text-primary))';
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 14 }}>
      <span style={{ fontSize: hero ? 14 : 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'hsl(var(--text-secondary))' }}>{label}{note && <span style={{ display: 'block', textTransform: 'none', letterSpacing: 0, fontWeight: 500, fontSize: 12, color: tone === 'danger' ? 'hsl(var(--danger-fg))' : 'hsl(var(--text-tertiary))' }}>{note}</span>}</span>
      {hero
        ? <CkMoney value={amount} size="display" style={{ color }} />
        : <span style={{ font: '600 22px/1 var(--font-ui)', fontVariantNumeric: 'tabular-nums', color }}>{fmtEC(amount)}</span>}
    </div>
  );
}

/* Botón de cobro grande (superficie táctil, --pos-tap-lg). Mismo lenguaje que el Cobrar
   de POS-a: acento del tenant, radios y peso coherentes. */
function BigConfirm({ children, onClick, disabled, busy, tone = 'brand', icon }) {
  const brand = tone === 'brand';
  return (
    <button type="button" onClick={disabled || busy ? undefined : onClick} disabled={disabled || busy} aria-busy={busy || undefined}
      style={{ flex: 1, minHeight: 'var(--pos-tap-lg)', borderRadius: 14, cursor: disabled || busy ? 'default' : 'pointer', font: '600 18px var(--font-ui)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, border: disabled ? '1px solid hsl(var(--border-subtle))' : 0,
        background: disabled ? 'hsl(var(--surface-sunken))' : 'hsl(var(--brand-primary))', color: disabled ? 'hsl(var(--text-disabled))' : 'hsl(var(--brand-foreground))', opacity: busy ? .9 : 1 }}>
      {busy ? <span className="noctis-btn__spin" aria-hidden="true" /> : icon && <CkIcon name={icon} size={22} />}{children}
    </button>
  );
}

/**
 * CheckoutSheet — superficie de cobro sobre el Sheet del núcleo. Presentacional: la
 * máquina de estados (idle · processing · error) vive en el orquestador; acá se dibuja.
 */
function CheckoutSheet({ open, phase, totals, received, onReceived, onConfirm, onCancel, onRetry, errorId, density }) {
  const t = density === 'touch';
  const total = totals ? totals.total : 0;
  const recv = centsToNum(received);
  const vuelto = recv - total;
  const canPay = received !== '' && recv + 1e-9 >= total;
  const processing = phase === 'processing';
  const errored = phase === 'error';

  /* Entrada por teclado FÍSICO en desktop (keypad ausente): dígitos editan el monto,
     Enter confirma (coherente con F2 de POS-a). En táctil no aplica: el NumericKeypad
     del núcleo lo cubre. */
  React.useEffect(() => {
    if (!open || t || processing) return;
    const onKey = (e) => {
      if (/^[0-9]$/.test(e.key)) { e.preventDefault(); onReceived((String(received).replace(/^0$/, '') + e.key).slice(0, 9)); }
      else if (e.key === 'Backspace') { e.preventDefault(); onReceived(String(received).slice(0, -1)); }
      else if (e.key.toLowerCase() === 'c') { e.preventDefault(); onReceived(''); }
      else if (e.key === 'Enter') { e.preventDefault(); if (errored) onRetry(); else if (canPay) onConfirm(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, t, processing, errored, received, canPay]);

  const accels = totals ? accelerators(total) : [];

  const entry = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1, minWidth: t ? 300 : 0 }}>
      <div style={{ padding: t ? '16px 18px' : '14px 16px', borderRadius: 14, background: 'hsl(var(--surface-sunken))', border: '1px solid hsl(var(--border-subtle))' }}>
        <AmountRow label="Total a cobrar" amount={total} hero
          note={totals && totals.rates.length > 1 ? 'IVA de tarifas mixtas (' + totals.rates.map((r) => r + '%').join(' · ') + ') — ya resuelto en el carrito' : (totals ? 'IVA ' + (totals.rates[0] ?? 0) + '% — ya resuelto en el carrito' : null)} />
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'hsl(var(--text-secondary))' }}>Monto recibido</span>
          <span style={{ fontSize: 12, color: 'hsl(var(--text-tertiary))' }}>{t ? 'Tocá el teclado numérico' : 'Escribí el monto con el teclado'}</span>
        </div>
        <div aria-live="polite" style={{ height: t ? 64 : 56, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 16px', borderRadius: 12, border: '1px solid ' + (received === '' ? 'hsl(var(--border-strong))' : 'hsl(var(--focus-ring))'), background: 'hsl(var(--surface-base))', font: '700 ' + (t ? 34 : 30) + 'px/1 var(--font-ui)', fontVariantNumeric: 'tabular-nums', color: received === '' ? 'hsl(var(--text-tertiary))' : 'hsl(var(--text-primary))' }}>
          {fmtEC(recv)}
        </div>
        <div style={{ marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {accels.map((a) => (
            <button key={a.label} type="button" onClick={() => onReceived(String(a.cents))} className="pos-btn"
              style={{ flex: '1 1 auto', minHeight: 'var(--pos-tap-sm)', padding: '6px 12px', borderRadius: 10, cursor: 'pointer', border: '1px solid ' + (a.exact ? 'hsl(var(--brand-primary))' : 'hsl(var(--border-strong))'), background: a.exact ? 'hsl(var(--brand-primary) / .08)' : 'hsl(var(--surface-base))', color: 'hsl(var(--text-primary))', font: '600 14px var(--font-ui)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
              <span>{a.label}</span>
              {a.exact && <span style={{ fontSize: 11, fontWeight: 500, color: 'hsl(var(--text-tertiary))', fontVariantNumeric: 'tabular-nums' }}>{fmtEC(total)}</span>}
            </button>
          ))}
        </div>
      </div>
      <div style={{ height: 1, background: 'hsl(var(--border-subtle))' }} />
      {/* VUELTO — auxiliar de UI para el cajero (recibido − total), calculado en cliente y
          NO persistido: el backend recomputa la venta. Nunca es fuente de verdad. */}
      <div style={{ padding: t ? '16px 18px' : '14px 16px', borderRadius: 14, background: vuelto < -1e-9 ? 'hsl(var(--warning-bg))' : recv > 0 ? 'hsl(var(--success-bg))' : 'hsl(var(--surface-sunken))', border: '1px solid ' + (vuelto < -1e-9 ? 'hsl(var(--warning-border))' : recv > 0 ? 'hsl(var(--success-border))' : 'hsl(var(--border-subtle))') }}>
        {vuelto < -1e-9
          ? <AmountRow label="Falta" amount={-vuelto} hero tone="danger" note="Recibido menor al total — no se puede cerrar" />
          : <AmountRow label="Vuelto" amount={received === '' ? 0 : vuelto} hero tone={recv > 0 ? 'success' : undefined} note="Auxiliar de caja · no se persiste" />}
      </div>
    </div>
  );

  return (
    <CkSheet open={open} onClose={processing ? undefined : onCancel} placement={t ? 'bottom' : 'center'}
      title={<span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}><CkIcon name="banknote" size={20} />Cobro en efectivo</span>}
      footer={processing ? (
        <BigConfirm busy icon="receipt">Registrando la venta…</BigConfirm>
      ) : errored ? (
        <div style={{ display: 'flex', gap: 10, width: '100%' }}>
          <button type="button" onClick={onCancel} className="pos-btn" style={{ minHeight: 'var(--pos-tap-lg)', padding: '0 18px', borderRadius: 14, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', cursor: 'pointer', font: '500 15px var(--font-ui)' }}>Volver al carrito</button>
          <BigConfirm onClick={onRetry} icon="rotate-cw">Reintentar cobro</BigConfirm>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: 10, width: '100%' }}>
          <button type="button" onClick={onCancel} className="pos-btn" style={{ minHeight: 'var(--pos-tap-lg)', padding: '0 18px', borderRadius: 14, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', cursor: 'pointer', font: '500 15px var(--font-ui)' }}>Cancelar</button>
          <BigConfirm onClick={onConfirm} disabled={!canPay} icon="check">Confirmar cobro · {fmtEC(total)}</BigConfirm>
        </div>
      )}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, minWidth: t ? 0 : 300 }}>
        <MethodTiles density={density} />
        {errored && (
          <div role="alert" style={{ padding: '14px 16px', borderRadius: 12, background: 'hsl(var(--danger-bg))', border: '1px solid hsl(var(--danger-border))', color: 'hsl(var(--danger-fg))' }}>
            <div style={{ fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}><CkIcon name="x" size={18} />No se pudo registrar la venta</div>
            <p style={{ margin: '6px 0 8px', fontSize: 13, lineHeight: 1.5 }}>El carrito y el monto recibido siguen intactos. Reintentá el cobro; si persiste, compartí el código con soporte.</p>
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>errorId: {errorId}</code>
          </div>
        )}
        {processing ? (
          <div role="status" aria-live="assertive" style={{ minHeight: t ? 320 : 240, display: 'grid', placeItems: 'center', padding: 28 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, textAlign: 'center' }}>
              <CkSpinner size="lg" />
              <div>
                <div style={{ font: '600 18px/1.3 var(--font-ui)', color: 'hsl(var(--text-primary))' }}>Registrando la venta…</div>
                <p style={{ margin: '6px 0 0', fontSize: 14, color: 'hsl(var(--text-secondary))', maxWidth: 340 }}>Es una escritura: no cierres ni vuelvas a tocar. Bloqueamos un segundo cobro hasta que responda el servidor.</p>
              </div>
              <span style={{ fontVariantNumeric: 'tabular-nums', font: '600 15px var(--font-ui)', color: 'hsl(var(--text-tertiary))' }}>{fmtEC(total)} · recibido {fmtEC(recv)}</span>
            </div>
          </div>
        ) : t ? (
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {entry}
            <div style={{ flex: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <CkKeypad value={received} onChange={onReceived} maxLength={7} />
              <p style={{ margin: 0, fontSize: 12, color: 'hsl(var(--text-tertiary))', maxWidth: 240, textAlign: 'center' }}>El teclado fija el monto en centavos; formato $1.234,56.</p>
            </div>
          </div>
        ) : entry}
      </div>
    </CkSheet>
  );
}
window.CheckoutSheet = CheckoutSheet;

/* Fila del resumen mínimo de la venta cerrada. */
function CloseRow({ label, children, strong }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 14, padding: '10px 0', borderTop: '1px solid hsl(var(--border-subtle))' }}>
      <span style={{ fontSize: 14, color: 'hsl(var(--text-secondary))', fontWeight: strong ? 600 : 500 }}>{label}</span>
      <span style={{ font: (strong ? '700 20px' : '600 16px') + '/1 var(--font-ui)', fontVariantNumeric: 'tabular-nums', color: 'hsl(var(--text-primary))' }}>{children}</span>
    </div>
  );
}

/**
 * SaleClosedScreen — el ÉXITO es esta pantalla (no un toast). Toma la superficie de
 * venta: secuencial visible, resumen mínimo (total, medio, vuelto entregado) y DOS
 * salidas: "Nueva venta" (mayoritaria, vuelve al POS vacío) y "Ver / imprimir
 * comprobante" como SLOT — la impresión es fast-follow (depende de driver/servidor de
 * impresora), señalada, no fingida. Adapta a ambas densidades por tokens.
 */
function SaleClosedScreen({ sale, onNewSale, onPrint, density }) {
  const t = density === 'touch';
  if (!sale) return null;
  return (
    <div style={{ flex: 1, minWidth: 0, minHeight: 0, display: 'grid', placeItems: 'center', padding: 24, overflowY: 'auto', background: 'hsl(var(--surface-sunken))' }}>
      <div style={{ width: '100%', maxWidth: 460, textAlign: 'center' }}>
        <div style={{ width: 76, height: 76, borderRadius: 22, margin: '0 auto 18px', display: 'grid', placeItems: 'center', background: 'hsl(var(--success-bg))', border: '1px solid hsl(var(--success-border))', color: 'hsl(var(--success-fg))' }} aria-hidden="true">
          <CkIcon name="circle-check" size={38} strokeWidth={1.9} />
        </div>
        <div style={{ font: '700 24px/1.2 var(--font-ui)', letterSpacing: '-.01em', color: 'hsl(var(--text-primary))' }}>Venta cerrada</div>
        <div style={{ margin: '8px 0 0', display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, background: 'hsl(var(--surface-base))', border: '1px solid hsl(var(--border-strong))' }}>
          <CkIcon name="receipt" size={16} style={{ color: 'hsl(var(--text-tertiary))' }} />
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase', color: 'hsl(var(--text-tertiary))' }}>Comprobante</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 600, color: 'hsl(var(--text-primary))', letterSpacing: '.02em' }}>{sale.secuencial}</span>
        </div>
        <div style={{ marginTop: 20, padding: '4px 20px 12px', borderRadius: 16, background: 'hsl(var(--surface-base))', border: '1px solid hsl(var(--border-subtle))', textAlign: 'left' }}>
          <CloseRow label="Total cobrado" strong>{fmtEC(sale.total)}</CloseRow>
          <CloseRow label="Medio de pago"><span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><CkIcon name="banknote" size={16} style={{ color: 'hsl(var(--text-tertiary))' }} />Efectivo</span></CloseRow>
          <CloseRow label="Recibido">{fmtEC(sale.received)}</CloseRow>
          <CloseRow label="Vuelto entregado">{fmtEC(sale.change)}</CloseRow>
          <CloseRow label="Cliente">{sale.customer}</CloseRow>
        </div>
        <p style={{ margin: '10px 2px 0', fontSize: 12, color: 'hsl(var(--text-tertiary))', lineHeight: 1.5 }}>El vuelto es referencia de caja; el comprobante fiscal lo emite el backend.</p>
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button type="button" onClick={onNewSale} style={{ minHeight: 'var(--pos-tap-lg)', borderRadius: 14, border: 0, cursor: 'pointer', background: 'hsl(var(--brand-primary))', color: 'hsl(var(--brand-foreground))', font: '600 18px var(--font-ui)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <CkIcon name="plus-circle" size={22} />Nueva venta
          </button>
          {/* Comprobante — SLOT. La impresión es fast-follow (depende de driver/servidor de
              impresora, no está en este corte); se señala la dependencia, no se finge. */}
          <button type="button" onClick={onPrint} className="pos-btn" style={{ minHeight: 'var(--pos-tap-sm)', borderRadius: 12, border: '1px solid hsl(var(--border-strong))', cursor: 'pointer', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', font: '500 14px var(--font-ui)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <CkIcon name="printer" size={18} />Ver / imprimir comprobante
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'hsl(var(--text-tertiary))', border: '1px solid hsl(var(--border-strong))', borderRadius: 999, padding: '2px 7px' }}><CkIcon name="clock" size={11} />Pronto</span>
          </button>
        </div>
      </div>
    </div>
  );
}
window.SaleClosedScreen = SaleClosedScreen;
