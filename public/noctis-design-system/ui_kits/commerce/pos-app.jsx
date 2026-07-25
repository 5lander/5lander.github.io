/* Noctis · commerce POS-a — ORQUESTADOR del ambiente de venta. Monta el shell POS
   pantalla completa con el split búsqueda | carrito, mantiene el carrito y el cliente,
   el sheet de cantidad (keypad) y el picker de cliente. Densidad FIJA táctil (es un
   POS). Barra de PROTOTIPO arriba (andamiaje tipo Storybook, NO chrome de la app):
   recorre tenant (acento), densidad (fija), estado de resultados y demo de carrito.
   Alcance: POS-a llega hasta "carrito listo con cliente elegido, Cobrar visible" — el
   destino de Cobrar es POS-b y acá NO se dibuja. */
const APNS = window.NoctisCommerceDesignSystem_4dfd35;
const { Toast: APToast, Icon: APIcon, Button: APBtn, Wordmark: APWord } = APNS;
const PD = window.PosData;

/* Segmented táctil para la barra de prototipo (modo oscuro fijo de la barra). */
function Seg({ value, onChange, options, ariaLabel }) {
  return (
    <div role="radiogroup" aria-label={ariaLabel} style={{ display: 'inline-flex', gap: 2, padding: 2, borderRadius: 9, background: '#161619', border: '1px solid #2A2A2E' }}>
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button key={o.value} type="button" role="radio" aria-checked={active} onClick={() => onChange(o.value)}
            style={{ border: 0, cursor: 'pointer', borderRadius: 7, padding: '7px 12px', fontSize: 12, fontWeight: active ? 600 : 500, fontFamily: 'var(--font-ui)', minHeight: 34,
              background: active ? '#F5F5F7' : 'transparent', color: active ? '#0A0A0B' : '#AEAEB2' }}>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function PrototypeBar({ tenantId, onChangeTenant, searchState, onChangeSearch, cartDemo, onChangeCart, tenant, density, onChangeDensity, autoDensity }) {
  return (
    <div style={{ flex: 'none', background: '#0A0A0B', borderBottom: '1px solid #26262A', color: '#F5F5F7' }}>
      <div style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#8E8E93' }} aria-hidden="true" />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.09em', textTransform: 'uppercase', color: '#AEAEB2' }}>Prototipo · POS-a</span>
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
          <span style={{ fontSize: 11, color: '#8E8E93' }}>Resultados</span>
          <Seg ariaLabel="Estado de resultados" value={searchState} onChange={onChangeSearch} options={[{ value: 'data', label: 'Datos' }, { value: 'empty', label: 'Vacío' }, { value: 'loading', label: 'Cargando' }, { value: 'error', label: 'Error' }, { value: 'forbidden', label: '403' }]} />
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
        <APWord onDark />
        <div style={{ font: '500 22px/1.2 var(--font-ui)', color: '#F5F5F7', margin: '20px 0 6px' }}>Saliste del POS</div>
        <p style={{ color: '#AEAEB2', fontSize: 14, margin: '0 0 20px' }}>Volvés al panel administrativo (fuera de este corte).</p>
        <APBtn variant="secondary" onClick={onBack}>Volver al POS</APBtn>
      </div>
    </div>
  );
}

function PosApp() {
  const [mode, setMode] = React.useState('light');
  const autoDensity = React.useRef(window.detectDensity()).current;
  const [density, setDensity] = React.useState(autoDensity); // primario = desktop; táctil si pointer coarse
  const [tenantId, setTenantId] = React.useState('aguilar');
  const [searchState, setSearchState] = React.useState('data');
  const [cartDemo, setCartDemo] = React.useState('full');
  const [lines, setLines] = React.useState(PD.INITIAL_CART);
  const [customer, setCustomer] = React.useState(PD.CONSUMIDOR_FINAL);
  const [qtyLine, setQtyLine] = React.useState(null);
  const [genericDraft, setGenericDraft] = React.useState(null);
  const [pickerOpen, setPickerOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [flash, setFlash] = React.useState(null);
  const [exited, setExited] = React.useState(false);
  const flashTimer = React.useRef(null);
  const seq = React.useRef(100);

  const tenant = PD.TENANTS[tenantId];

  const doFlash = (msg) => {
    setFlash(msg);
    if (flashTimer.current) clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setFlash(null), 2600);
  };

  const onChangeCart = (v) => { setCartDemo(v); setLines(v === 'empty' ? [] : PD.INITIAL_CART); };
  const onChangeTenant = (id) => setTenantId(id);

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

  // Ítem rápido: el "sin resultados" abre el alta; al confirmar entra como línea genérica.
  const openGeneric = (desc) => setGenericDraft({ desc });
  const commitGeneric = (data) => {
    setLines((prev) => [...prev, { key: 'l' + (++seq.current), generic: true, desc: data.desc, precio: data.precio, iva: data.iva, qty: data.qty }]);
    setGenericDraft(null); setCartDemo('full');
    doFlash((data.precio === 0 ? 'Ítem rápido agregado (precio en cero, bloquea el cobro): ' : 'Ítem rápido agregado: ') + data.desc);
  };
  // Guardar como producto: transición señalada, NO implementada (otro corte). La venta
  // se registra igual; esto sólo abriría el alta con los datos precargados.
  const onSaveProduct = (line) => setToast('Abriría el alta de producto con «' + line.desc + '» (descripción, precio e IVA) precargados. Es otro corte: la venta se registra igual sin crear el producto.');

  const pickCustomer = (c) => { setCustomer(c); setPickerOpen(false); };
  const consumidorFinal = () => { setCustomer(PD.CONSUMIDOR_FINAL); setPickerOpen(false); };

  const onCobrar = () => setToast('Cobrar es el siguiente corte (POS-b): vuelto, medios de pago y cierre con secuencial. Fuera de POS-a.');

  // Atajo de teclado del modo desktop: F2 = Cobrar (si no está bloqueado). El táctil no lo usa.
  React.useEffect(() => {
    if (density !== 'comfortable') return;
    const onKey = (e) => {
      if (e.key !== 'F2') return;
      e.preventDefault();
      const blocked = exited || lines.length === 0 || lines.some((l) => PD.byId(l.ref).precio == null);
      if (!blocked) onCobrar();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [density, lines, exited]);

  const accentVars = { '--brand-primary': tenant.accent, '--brand-foreground': tenant.fg };

  return (
    <window.PosDensityCtx.Provider value={density}>
    <div data-mode={mode} data-density={density} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'hsl(var(--surface-sunken))', color: 'hsl(var(--text-primary))', fontFamily: 'var(--font-ui)', ...accentVars }}>
      <PrototypeBar tenantId={tenantId} onChangeTenant={onChangeTenant} searchState={searchState} onChangeSearch={setSearchState} cartDemo={cartDemo} onChangeCart={onChangeCart} tenant={tenant} density={density} onChangeDensity={setDensity} autoDensity={autoDensity} />
      <div style={{ flex: 1, minHeight: 0 }}>
        <window.PosShell tenant={tenant} mode={mode} onToggleMode={() => setMode((m) => m === 'light' ? 'dark' : 'light')} onExit={() => { window.location.href = '../../index.html'; }}>
          {exited
            ? <div style={{ flex: 1, minWidth: 0 }}><ExitedScreen onBack={() => setExited(false)} /></div>
            : <>
                <window.ProductSearch searchState={searchState} onAdd={onAdd} onAddGeneric={openGeneric} onRetry={() => setSearchState('data')} onExit={() => { window.location.href = '../../index.html'; }} flash={flash} />
                <window.Cart lines={lines} customer={customer}
                  onOpenQty={setQtyLine} onStep={onStep} onRemove={onRemove} onSaveProduct={onSaveProduct}
                  onConsumidorFinal={consumidorFinal} onOpenPicker={() => setPickerOpen(true)} onCobrar={onCobrar} />
              </>}
        </window.PosShell>
      </div>
      <window.QtySheet line={qtyLine} onClose={() => setQtyLine(null)} onCommit={commitQty} />
      <window.GenericItemSheet draft={genericDraft} ivaDefault={tenant.ivaDefault} onClose={() => setGenericDraft(null)} onCommit={commitGeneric} />
      <window.ClientPicker open={pickerOpen} onClose={() => setPickerOpen(false)} onPick={pickCustomer} onConsumidorFinal={consumidorFinal} activeId={customer.id} />
      {toast && <div style={{ position: 'fixed', left: 0, right: 0, bottom: 22, display: 'flex', justifyContent: 'center', zIndex: 90, pointerEvents: 'none' }}><div style={{ pointerEvents: 'auto', maxWidth: 520, margin: '0 16px' }}><APToast onDismiss={() => setToast(null)}>{toast}</APToast></div></div>}
    </div>
    </window.PosDensityCtx.Provider>
  );
}

window.PosApp = PosApp;
ReactDOM.createRoot(document.getElementById('root')).render(<PosApp />);
