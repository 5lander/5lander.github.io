/* Noctis · commerce POS-a — BÚSQUEDA DE PRODUCTO + ESCANEO. Campo con debounce que
   también acepta lectura de código de barras: el escáner ESCRIBE y dispara Enter, y
   si el texto coincide exacto con un código de barras del catálogo, la línea se
   agrega directo. Resultados en lista táctil grande, cada fila tocable. Estados:
   vacío ("buscá o escaneá") · cargando · sin resultados · error · 403.

   DEUDA DE SISTEMA SEÑALADA (no simulada resuelta): el buscador SERVER-SIDE de
   variantes es prerequisito y hoy puede no existir. Igual que en Productos, acá se
   filtra en cliente y la dependencia se declara en un banner — no se finge resuelta. */
const SNS = window.NoctisCommerceDesignSystem_4dfd35;
const { Button: SBtn, MoneyDisplay: SMoney, Alert: SAlert } = SNS;
const SIco = window.PosIcon;

function ResultRow({ item, onAdd }) {
  const sinPrecio = item.precio === null || item.precio === undefined;
  return (
    <div className="pos-result" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 'var(--pos-row-py) var(--pos-row-px)', borderRadius: 12, border: '1px solid ' + (sinPrecio ? 'hsl(var(--warning-border))' : 'hsl(var(--border-subtle))'), background: 'hsl(var(--surface-raised))' }}>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: 'hsl(var(--text-primary))', letterSpacing: '-.01em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.variante}</div>
        <div style={{ fontSize: 13, color: 'hsl(var(--text-secondary))', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.producto}</div>
        <div style={{ marginTop: 3, display: 'flex', gap: 12, alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'hsl(var(--text-tertiary))' }}>
          <span>{item.sku}</span><span aria-hidden="true">·</span><span>{item.barcode}</span>
        </div>
      </div>
      <div style={{ flex: 'none', textAlign: 'right' }}><SMoney value={item.precio} size="md" /></div>
      <div style={{ flex: 'none' }}>
        {sinPrecio
          ? <span style={{ display: 'inline-flex', alignItems: 'center', height: 'var(--pos-action)', padding: '0 14px', borderRadius: 10, fontSize: 13, fontWeight: 500, color: 'hsl(var(--warning-fg))', background: 'hsl(var(--warning-bg))', border: '1px dashed hsl(var(--warning-border))' }}>No vendible</span>
          : <SBtn variant="primary" onClick={() => onAdd(item)}><SIco name="plus" size={18} style={{ marginRight: 6, display: 'inline-block', verticalAlign: '-3px' }} />Agregar</SBtn>}
      </div>
    </div>
  );
}

function ProductSearch({ searchState, onAdd, onAddGeneric, onRetry, onExit, flash }) {
  const { PosLabel, PosStatePanel, PosLoading, PosError, PosForbidden } = window;
  const t = window.usePosTouch();
  const [query, setQuery] = React.useState('');
  const inputRef = React.useRef(null);

  // 'empty' desde la barra de prototipo = estado de reposo (sin consulta).
  React.useEffect(() => { if (searchState === 'empty') setQuery(''); }, [searchState]);
  // Desktop: foco automático en búsqueda al cargar (el cajero teclea de una). En táctil no.
  React.useEffect(() => { if (!t && inputRef.current) inputRef.current.focus(); }, [t]);

  const catalog = window.PosData.CATALOG;
  const ql = query.trim().toLowerCase();
  const matches = ql
    ? catalog.filter((v) => v.producto.toLowerCase().includes(ql) || v.variante.toLowerCase().includes(ql) || v.sku.toLowerCase().includes(ql) || v.barcode.includes(ql))
    : [];

  // Escaneo: escribe y dispara Enter → coincidencia exacta de código agrega directo.
  // Además (atajo de teclado, sobre todo en desktop): Enter sin match de código agrega
  // el PRIMER resultado visible — flujo rápido con teclado físico.
  const onKeyDown = (e) => {
    if (e.key !== 'Enter') return;
    const code = query.trim();
    const hit = catalog.find((v) => v.barcode === code);
    if (hit) { onAdd(hit); setQuery(''); return; }
    if (matches.length) { onAdd(matches[0]); setQuery(''); }
  };

  let body;
  if (searchState === 'forbidden') body = <PosForbidden onExit={onExit} />;
  else if (searchState === 'loading') body = <PosLoading />;
  else if (searchState === 'error') body = <PosError onRetry={onRetry} />;
  else if (!ql) body = <PosStatePanel icon="scan-barcode" title="Buscá o escaneá" description="Escribí el nombre, el SKU o el código, o pasá el producto por el lector para agregarlo al carrito." />;
  else if (matches.length === 0) body = <PosStatePanel icon="search" title="Sin resultados en el catálogo"
    description={'Ningún producto coincide con «' + query.trim() + '». Podés venderlo igual como ítem rápido, sin cargarlo al catálogo.'}
    action={<SBtn variant="primary" onClick={() => onAddGeneric(query.trim())}><SIco name="plus" size={18} style={{ marginRight: 6, display: 'inline-block', verticalAlign: '-3px' }} />Agregar «{query.trim()}» como ítem rápido</SBtn>} />;
  else body = (
    <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '4px 20px 20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {matches.map((v) => <ResultRow key={v.id} item={v} onAdd={onAdd} />)}
      </div>
    </div>
  );

  const showResults = !['forbidden', 'loading', 'error'].includes(searchState);

  return (
    <section aria-label="Búsqueda de producto" style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', minHeight: 0, background: 'hsl(var(--surface-base))' }}>
      <div style={{ flex: 'none', padding: '18px 20px 12px' }}>
        <PosLabel style={{ marginBottom: 10 }}>Venta · agregar productos</PosLabel>
        {/* Campo de búsqueda + escaneo — 56px, superficie grande, ícono guía. */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <span style={{ position: 'absolute', left: 16, color: 'hsl(var(--text-tertiary))', pointerEvents: 'none' }} aria-hidden="true"><SIco name="search" size={22} /></span>
          <input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={onKeyDown}
            aria-label="Buscar o escanear producto" placeholder="Buscá por nombre o SKU, o escaneá el código de barras…"
            style={{ width: '100%', height: 'var(--pos-field)', padding: '0 var(--pos-field-px) 0 var(--pos-field-pl)', borderRadius: 12, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-primary))', font: '400 16px var(--font-ui)', outline: 'none' }}
            onFocus={(e) => { e.target.style.borderColor = 'hsl(var(--focus-ring))'; e.target.style.boxShadow = '0 0 0 3px hsl(var(--focus-ring) / .28)'; }}
            onBlur={(e) => { e.target.style.borderColor = 'hsl(var(--border-strong))'; e.target.style.boxShadow = 'none'; }} />
          {query && <button type="button" onClick={() => { setQuery(''); inputRef.current && inputRef.current.focus(); }} aria-label="Limpiar búsqueda"
            style={{ position: 'absolute', right: 8, width: 'var(--pos-tap-sm)', height: 'var(--pos-tap-sm)', borderRadius: 10, border: 0, background: 'transparent', color: 'hsl(var(--text-tertiary))', cursor: 'pointer', display: 'grid', placeItems: 'center' }}><SIco name="x" size={20} /></button>}
        </div>
        {/* Atajos — hint discreto SOLO en desktop (el táctil no tiene teclado protagónico). */}
        {!t && showResults && <div style={{ marginTop: 8, display: 'flex', gap: 14, fontSize: 12, color: 'hsl(var(--text-tertiary))', flexWrap: 'wrap' }}>
          <span><kbd style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 6px', borderRadius: 5, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-sunken))' }}>Enter</kbd> agrega el primer resultado</span>
          <span><kbd style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 6px', borderRadius: 5, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-sunken))' }}>F2</kbd> cobrar</span>
        </div>}
        {/* DEPENDENCIA DECLARADA — no se finge resuelta. */}
        {showResults && (
          <div style={{ marginTop: 10 }}>
            <SAlert tone="info">
              <span style={{ fontSize: 13 }}><b>Filtro en cliente (deuda conocida).</b> El buscador server-side de variantes es prerequisito y aún no está resuelto; hoy se filtra sobre el catálogo cargado. La lectura de código de barras sí funciona por coincidencia exacta.</span>
            </SAlert>
          </div>
        )}
      </div>
      {flash && <div style={{ flex: 'none', margin: '0 20px 10px' }}><SAlert tone="success"><span style={{ fontSize: 14 }}>{flash}</span></SAlert></div>}
      {body}
    </section>
  );
}

window.ProductSearch = ProductSearch;
