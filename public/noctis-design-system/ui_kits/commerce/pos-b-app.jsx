/* Noctis · commerce POS-b — ORQUESTADOR del cobro. Reusa TAL CUAL el ambiente de venta
   de POS-a (shell + búsqueda + carrito + cliente + kit + datos): NO lo rediseña. Lo único
   que agrega es cablear el "Cobrar" —antes inerte— a la máquina de estados del cobro y a
   la pantalla de venta cerrada de pos-checkout.jsx. Densidad AUTODETECTADA por puntero
   (desktop primario / táctil), igual que POS-a; el cobro respeta esa densidad con su
   entrada (teclado físico desktop · NumericKeypad táctil). */
const BPNS = window.NoctisCommerceDesignSystem_4dfd35;
const { Toast: BToast, Button: BBtn, Wordmark: BWord } = BPNS;
const BPD = window.PosData;
// POS-b arranca de un carrito VÁLIDO (Cobrar habilitado): POS-a ya demuestra el
// bloqueo por SIN PRECIO; acá el foco es el cobro, así que se siembran sólo las
// líneas con precio. No toca los datos compartidos ni la regla de bloqueo.
const B_CART = BPD.INITIAL_CART.filter((l) => !BPD.needsPrice(BPD.lineView(l)));

function Seg({ value, onChange, options, ariaLabel }) {
  return (
    <div role="radiogroup" aria-label={ariaLabel} style={{ display: 'inline-flex', gap: 2, padding: 2, borderRadius: 9, background: '#161619', border: '1px solid #2A2A2E' }}>
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button key={o.value} type="button" role="radio" aria-checked={active} onClick={() => onChange(o.value)}
            style={{ border: 0, cursor: 'pointer', borderRadius: 7, padding: '7px 12px', fontSize: 12, fontWeight: active ? 600 : 500, fontFamily: 'var(--font-ui)', minHeight: 34, background: active ? '#F5F5F7' : 'transparent', color: active ? '#0A0A0B' : '#AEAEB2' }}>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function PrototypeBar({ tenantId, onChangeTenant, cartDemo, onChangeCart, tenant, density, onChangeDensity, autoDensity, outcome, onChangeOutcome }) {
  return (
    <div style={{ flex: 'none', background: '#0A0A0B', borderBottom: '1px solid #26262A', color: '#F5F5F7' }}>
      <div style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#8E8E93' }} aria-hidden="true" />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.09em', textTransform: 'uppercase', color: '#AEAEB2' }}>Prototipo · POS-b · cobro</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, color: '#8E8E93' }}>Tenant</span>
          <Seg ariaLabel="Tenant" value={tenantId} onChange={onChangeTenant} options={[{ value: 'aguilar', label: 'Aguilar' }, { value: 'sanrafael', label: 'San Rafael' }, { value: 'rincon', label: 'El Rincón' }]} />
          <span title={'Acento: ' + tenant.accentName} style={{ width: 16, height: 16, borderRadius: 5, background: 'hsl(' + tenant.accent + ')', border: '1px solid rgba(255,255,255,.2)' }} aria-hidden="true" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, color: '#8E8E93' }}>Densidad</span>
          <Seg ariaLabel="Densidad (override manual)" value={density} onChange={onChangeDensity} options={[{ value: 'comfortable', label: 'Desktop' }, { value: 'touch', label: 'Táctil' }]} />
          <span title={'Autodetectado por puntero: ' + (autoDensity === 'touch' ? 'coarse → táctil' : 'fine → desktop')} style={{ fontSize: 10, color: '#8E8E93', fontWeight: 500 }}>auto: {autoDensity === 'touch' ? 'táctil' : 'desktop'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, color: '#8E8E93' }}>Carrito</span>
          <Seg ariaLabel="Demo de carrito" value={cartDemo} onChange={onChangeCart} options={[{ value: 'full', label: 'Con productos' }, { value: 'empty', label: 'Vacío' }]} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
          <span style={{ fontSize: 11, color: '#8E8E93' }}>Escritura del cobro</span>
          <Seg ariaLabel="Resultado de la escritura del cobro" value={outcome} onChange={onChangeOutcome} options={[{ value: 'success', label: 'Éxito' }, { value: 'fail', label: 'Falla' }]} />
        </div>
      </div>
    </div>
  );
}

function ExitedScreen({ onBack }) {
  return (
    <div style={{ height: '100%', display: 'grid', placeItems: 'center', position: 'relative', background: 'linear-gradient(150deg,#000 0%,#1C1C1E 65%,#2C2C2E 100%)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 90% at 90% -20%, rgba(255,255,255,.07), transparent 60%)' }} />
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <BWord onDark />
        <div style={{ font: '500 22px/1.2 var(--font-ui)', color: '#F5F5F7', margin: '20px 0 6px' }}>Saliste del POS</div>
        <p style={{ color: '#AEAEB2', fontSize: 14, margin: '0 0 20px' }}>Volvés al panel administrativo (fuera de este corte).</p>
        <BBtn variant="secondary" onClick={onBack}>Volver al POS</BBtn>
      </div>
    </div>
  );
}

function PosBApp() {
  const [mode, setMode] = React.useState('light');
  const autoDensity = React.useRef(window.detectDensity()).current;
  const [density, setDensity] = React.useState(autoDensity);
  const [tenantId, setTenantId] = React.useState('aguilar');
  const [cartDemo, setCartDemo] = React.useState('full');
  const [lines, setLines] = React.useState(B_CART);
  const [customer, setCustomer] = React.useState(BPD.CONSUMIDOR_FINAL);
  const [qtyLine, setQtyLine] = React.useState(null);
  const [genericDraft, setGenericDraft] = React.useState(null);
  const [pickerOpen, setPickerOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [flash, setFlash] = React.useState(null);
  const [exited, setExited] = React.useState(false);
  // ── Máquina de estados del COBRO ──────────────────────────────────────────────
  const [checkoutOpen, setCheckoutOpen] = React.useState(false);
  const [phase, setPhase] = React.useState('idle');   // idle · processing · error
  const [received, setReceived] = React.useState('');  // centavos tecleados (string)
  const [outcome, setOutcome] = React.useState('success'); // control de prototipo
  const [closedSale, setClosedSale] = React.useState(null); // venta cerrada (éxito)
  const [errorId, setErrorId] = React.useState('ERR-POS-7F09');
  const flashTimer = React.useRef(null);
  const seq = React.useRef(100);
  const compSeq = React.useRef(101); // secuencial del comprobante
  const writeTimer = React.useRef(null);

  const tenant = BPD.TENANTS[tenantId];

  const doFlash = (msg) => { setFlash(msg); if (flashTimer.current) clearTimeout(flashTimer.current); flashTimer.current = setTimeout(() => setFlash(null), 2600); };

  const onChangeCart = (v) => { setCartDemo(v); setLines(v === 'empty' ? [] : B_CART); };

  const onAdd = (item) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.ref === item.id);
      if (existing) return prev.map((l) => l.ref === item.id ? { ...l, qty: l.qty + 1 } : l);
      return [...prev, { key: 'l' + (++seq.current), ref: item.id, qty: 1 }];
    });
    setCartDemo('full');
    doFlash((item.precio == null ? 'Agregado (sin precio, bloquea el cobro): ' : 'Agregado: ') + item.variante);
  };
  const onStep = (line, d) => setLines((prev) => prev.map((l) => l.key === line.key ? { ...l, qty: Math.max(1, l.qty + d) } : l));
  const onRemove = (line) => setLines((prev) => prev.filter((l) => l.key !== line.key));
  const commitQty = (n) => { setLines((prev) => prev.map((l) => l.key === qtyLine.key ? { ...l, qty: n } : l)); setQtyLine(null); };

  const openGeneric = (desc) => setGenericDraft({ desc });
  const commitGeneric = (data) => {
    setLines((prev) => [...prev, { key: 'l' + (++seq.current), generic: true, desc: data.desc, precio: data.precio, iva: data.iva, qty: data.qty }]);
    setGenericDraft(null); setCartDemo('full');
    doFlash((data.precio === 0 ? 'Ítem rápido agregado (precio en cero, bloquea el cobro): ' : 'Ítem rápido agregado: ') + data.desc);
  };
  const onSaveProduct = (line) => setToast('Abriría el alta de producto con «' + line.desc + '» precargado. Es otro corte: la venta se registra igual.');

  const pickCustomer = (c) => { setCustomer(c); setPickerOpen(false); };
  const consumidorFinal = () => { setCustomer(BPD.CONSUMIDOR_FINAL); setPickerOpen(false); };

  const isBlocked = () => exited || lines.length === 0 || lines.some((l) => BPD.needsPrice(BPD.lineView(l)));

  // COBRAR — abre el cobro (antes inerte). Parte de un carrito válido (Cobrar sólo se
  // habilita si ninguna línea bloquea, regla de POS-a). Reset del monto por venta.
  const onCobrar = () => { if (isBlocked()) return; setReceived(''); setPhase('idle'); setCheckoutOpen(true); };

  // CONFIRMAR — escritura de la venta. Bloquea DOBLE SUBMIT (si ya está procesando, no
  // dispara otra). El vuelto se calcula acá sólo como referencia de caja, no se persiste.
  const runWrite = () => {
    if (phase === 'processing') return; // guarda anti doble-venta
    setPhase('processing');
    if (writeTimer.current) clearTimeout(writeTimer.current);
    writeTimer.current = setTimeout(() => {
      if (outcome === 'fail') { setErrorId('ERR-POS-' + (7000 + Math.floor(Math.random() * 900)).toString(16).toUpperCase()); setPhase('error'); return; }
      const totals = window.posTotals(lines);
      const recv = (parseInt(received || '0', 10)) / 100;
      const n = compSeq.current++;
      setClosedSale({ secuencial: '001-001-' + String(n).padStart(9, '0'), total: totals.total, received: recv, change: recv - totals.total, customer: customer.nombre });
      setCheckoutOpen(false); setPhase('idle');
    }, 1500);
  };
  const cancelCheckout = () => { if (phase === 'processing') return; setCheckoutOpen(false); setPhase('idle'); };

  // NUEVA VENTA — camino mayoritario: vuelve al POS vacío.
  const newSale = () => { setClosedSale(null); setLines([]); setCartDemo('empty'); setCustomer(BPD.CONSUMIDOR_FINAL); setReceived(''); setPhase('idle'); };
  const onPrint = () => setToast('Ver / imprimir comprobante es fast-follow: depende del driver/servidor de impresora, fuera de este corte. La venta ya quedó registrada con su secuencial.');

  // Atajo desktop: F2 = abrir cobro (coherente con POS-a). El táctil no lo usa. El Enter
  // que confirma dentro del cobro lo maneja el CheckoutSheet.
  React.useEffect(() => {
    if (density !== 'comfortable') return;
    const onKey = (e) => { if (e.key !== 'F2') return; e.preventDefault(); if (!checkoutOpen && !closedSale && !isBlocked()) onCobrar(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [density, lines, exited, checkoutOpen, closedSale]);

  React.useEffect(() => () => { if (writeTimer.current) clearTimeout(writeTimer.current); }, []);

  const accentVars = { '--brand-primary': tenant.accent, '--brand-foreground': tenant.fg };
  const totals = window.posTotals(lines);

  return (
    <window.PosDensityCtx.Provider value={density}>
    <div data-mode={mode} data-density={density} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'hsl(var(--surface-sunken))', color: 'hsl(var(--text-primary))', fontFamily: 'var(--font-ui)', ...accentVars }}>
      <PrototypeBar tenantId={tenantId} onChangeTenant={setTenantId} cartDemo={cartDemo} onChangeCart={onChangeCart} tenant={tenant} density={density} onChangeDensity={setDensity} autoDensity={autoDensity} outcome={outcome} onChangeOutcome={setOutcome} />
      <div style={{ flex: 1, minHeight: 0 }}>
        <window.PosShell tenant={tenant} mode={mode} onToggleMode={() => setMode((m) => m === 'light' ? 'dark' : 'light')} onExit={() => setExited(true)}>
          {exited
            ? <div style={{ flex: 1, minWidth: 0 }}><ExitedScreen onBack={() => setExited(false)} /></div>
            : closedSale
              ? <window.SaleClosedScreen sale={closedSale} onNewSale={newSale} onPrint={onPrint} density={density} />
              : <>
                  <window.ProductSearch searchState="data" onAdd={onAdd} onAddGeneric={openGeneric} onRetry={() => {}} onExit={() => setExited(true)} flash={flash} />
                  <window.Cart lines={lines} customer={customer}
                    onOpenQty={setQtyLine} onStep={onStep} onRemove={onRemove} onSaveProduct={onSaveProduct}
                    onConsumidorFinal={consumidorFinal} onOpenPicker={() => setPickerOpen(true)} onCobrar={onCobrar} />
                </>}
        </window.PosShell>
      </div>
      <window.QtySheet line={qtyLine} onClose={() => setQtyLine(null)} onCommit={commitQty} />
      <window.GenericItemSheet draft={genericDraft} ivaDefault={tenant.ivaDefault} onClose={() => setGenericDraft(null)} onCommit={commitGeneric} />
      <window.ClientPicker open={pickerOpen} onClose={() => setPickerOpen(false)} onPick={pickCustomer} onConsumidorFinal={consumidorFinal} activeId={customer.id} />
      <window.CheckoutSheet open={checkoutOpen} phase={phase} totals={totals} received={received} onReceived={setReceived}
        onConfirm={runWrite} onRetry={runWrite} onCancel={cancelCheckout} errorId={errorId} density={density} />
      {toast && <div style={{ position: 'fixed', left: 0, right: 0, bottom: 22, display: 'flex', justifyContent: 'center', zIndex: 90, pointerEvents: 'none' }}><div style={{ pointerEvents: 'auto', maxWidth: 520, margin: '0 16px' }}><BToast onDismiss={() => setToast(null)}>{toast}</BToast></div></div>}
    </div>
    </window.PosDensityCtx.Provider>
  );
}

window.PosBApp = PosBApp;
ReactDOM.createRoot(document.getElementById('root')).render(<PosBApp />);
