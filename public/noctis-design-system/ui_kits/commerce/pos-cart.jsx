/* Noctis · commerce POS-a — CARRITO (línea por línea) + CLIENTE + totales + Cobrar.
   Cada línea: display_name de la variante (nunca UUID/SKU como identificador visual
   principal), cantidad editable por NumericKeypad del núcleo, precio unitario,
   subtotal de línea, y quitar-línea con superficie grande.

   QUITAR-LÍNEA: botón táctil explícito (no swipe). Justificación: bajo presión y en
   tablet, el swipe fino es de baja descubribilidad y fácil de disparar por error; un
   objetivo grande con feedback inmediato es más seguro. No lleva confirm de 2 pasos
   porque no es una mutación destructiva de datos —es editar la venta en curso—.

   MONTOS: string es-EC $1.234,56 vía MoneyDisplay. El subtotal de línea y los totales
   se MUESTRAN como render de lo que vendría del backend; el cliente no es la fuente de
   verdad del precio (acá se arma un stand-in aritmético solo para que el prototipo viva).

   SIN PRECIO (estado crítico): una variante puede no tener precio en la lista aplicable.
   precio null NO es $0 — es "Sin precio", BLOQUEA la línea y bloquea el avance a Cobrar. */
const KRT = window.NoctisCommerceDesignSystem_4dfd35;
const { Button: RBtn, MoneyDisplay: RMoney, NumericKeypad: RKeypad, Sheet: RSheet, Badge: RBadge } = KRT;
const RIco = window.PosIcon;

/* Formato es-EC de un monto tecleado en centavos (keypad de monto: coma decimal). */
function fmtCents(cents) {
  const n = (parseInt(cents || '0', 10)) / 100;
  const [e, d] = n.toFixed(2).split('.');
  return '$' + e.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + d;
}

/* Sheet de cantidad — NumericKeypad del núcleo (teclas del token --kp-key, teclado
   físico). Sirve para líneas de catálogo y genéricas por igual. */
function QtySheet({ line, onClose, onCommit }) {
  const view = line ? window.PosData.lineView(line) : null;
  const [val, setVal] = React.useState('1');
  React.useEffect(() => { if (line) setVal(String(line.qty)); }, [line]);
  const n = parseInt(val || '0', 10);
  const commit = () => onCommit(Math.max(1, n || 1));
  return (
    <RSheet open={!!line} onClose={onClose} placement="bottom"
      title={view ? <span>Cantidad — <span style={{ color: 'hsl(var(--text-secondary))', fontWeight: 500 }}>{view.desc}</span></span> : 'Cantidad'}
      footer={<div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
        <RBtn variant="ghost" onClick={onClose}>Cancelar</RBtn>
        <RBtn variant="primary" onClick={commit}>Confirmar cantidad</RBtn>
      </div>}>
      <div style={{ display: 'grid', placeItems: 'center', padding: '4px 0 8px' }}>
        <RKeypad value={val} onChange={setVal} maxLength={4} />
        <p style={{ margin: '14px 0 0', fontSize: 13, color: 'hsl(var(--text-tertiary))' }}>Para quitar la línea, usá el botón de quitar en el carrito.</p>
      </div>
    </RSheet>
  );
}

/* Sheet de ALTA de ítem rápido (línea genérica). Reusa el keypad del núcleo para el
   PRECIO (mismo input que la cantidad de catálogo) y hereda el IVA del perfil fiscal
   del tenant, corregible por línea. Descripción libre editable. Sin SKU ni stock. */
function GenericItemSheet({ draft, ivaDefault, onClose, onCommit }) {
  const [desc, setDesc] = React.useState('');
  const [cents, setCents] = React.useState('');
  const [qty, setQty] = React.useState(1);
  const [iva, setIva] = React.useState(ivaDefault);
  React.useEffect(() => { if (draft) { setDesc(draft.desc || ''); setCents(''); setQty(1); setIva(ivaDefault); } }, [draft, ivaDefault]);
  const precio = (parseInt(cents || '0', 10)) / 100;
  const canSave = desc.trim().length > 0;
  const commit = () => { if (canSave) onCommit({ desc: desc.trim(), precio, iva, qty }); };
  const tariffs = window.PosData.IVA_TARIFFS;
  const Label = ({ children }) => <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '.08em', color: 'hsl(var(--text-tertiary))', fontWeight: 600, marginBottom: 8 }}>{children}</div>;
  return (
    <RSheet open={!!draft} onClose={onClose} placement="bottom" title="Ítem rápido — venta sin catálogo"
      footer={<div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
        <RBtn variant="ghost" onClick={onClose}>Cancelar</RBtn>
        <RBtn variant="primary" onClick={commit} disabled={!canSave}>Agregar al carrito</RBtn>
      </div>}>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', minWidth: 300 }}>
        <div style={{ flex: 1, minWidth: 260, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <Label>Descripción</Label>
            <input value={desc} onChange={(e) => setDesc(e.target.value)} aria-label="Descripción del ítem rápido" placeholder="Ej. Pantalón, servicio, artículo suelto…"
              style={{ width: '100%', height: 'var(--pos-field)', padding: '0 14px', borderRadius: 12, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-primary))', font: '400 16px var(--font-ui)', outline: 'none' }}
              onFocus={(e) => { e.target.style.borderColor = 'hsl(var(--focus-ring))'; e.target.style.boxShadow = '0 0 0 3px hsl(var(--focus-ring) / .28)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'hsl(var(--border-strong))'; e.target.style.boxShadow = 'none'; }} />
          </div>
          <div>
            <Label>Precio</Label>
            <div style={{ height: 'var(--pos-field)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 16px', borderRadius: 12, border: '1px solid ' + (precio === 0 ? 'hsl(var(--warning-border))' : 'hsl(var(--border-strong))'), background: 'hsl(var(--surface-sunken))', font: '700 26px/1 var(--font-ui)', fontVariantNumeric: 'tabular-nums', color: precio === 0 ? 'hsl(var(--warning-fg))' : 'hsl(var(--text-primary))' }}>{fmtCents(cents)}</div>
            {precio === 0 && <div style={{ marginTop: 6, fontSize: 12, color: 'hsl(var(--warning-fg))' }}>Asigná un precio con el teclado para poder cobrarlo.</div>}
          </div>
          <div>
            <Label>IVA — heredado del perfil fiscal ({ivaDefault}%), corregible</Label>
            <div style={{ display: 'flex', gap: 8 }}>
              {tariffs.map((t) => {
                const active = t === iva;
                return (
                  <button key={t} type="button" onClick={() => setIva(t)} aria-pressed={active} className="pos-btn"
                    style={{ flex: 1, height: 'var(--pos-action)', borderRadius: 10, cursor: 'pointer', fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600,
                      border: '1px solid ' + (active ? 'hsl(var(--brand-primary))' : 'hsl(var(--border-strong))'),
                      background: active ? 'hsl(var(--brand-primary))' : 'hsl(var(--surface-base))',
                      color: active ? 'hsl(var(--brand-foreground))' : 'hsl(var(--text-secondary))' }}>{t}%{t === ivaDefault ? ' ·' : ''}</button>
                );
              })}
            </div>
          </div>
          <div>
            <Label>Cantidad</Label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="pos-btn" aria-label="Restar una unidad" disabled={qty <= 1}
                style={{ width: 'var(--pos-tap-sm)', height: 'var(--pos-tap-sm)', borderRadius: 10, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-raised))', color: 'hsl(var(--text-primary))', cursor: qty <= 1 ? 'default' : 'pointer', opacity: qty <= 1 ? .4 : 1, display: 'grid', placeItems: 'center' }}><RIco name="minus" size={18} /></button>
              <div style={{ minWidth: 60, height: 'var(--pos-tap-sm)', display: 'grid', placeItems: 'center', padding: '0 12px', borderRadius: 10, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-raised))', font: '600 18px var(--font-ui)', fontVariantNumeric: 'tabular-nums' }}>{qty}</div>
              <button type="button" onClick={() => setQty((q) => q + 1)} className="pos-btn" aria-label="Sumar una unidad"
                style={{ width: 'var(--pos-tap-sm)', height: 'var(--pos-tap-sm)', borderRadius: 10, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-raised))', color: 'hsl(var(--text-primary))', cursor: 'pointer', display: 'grid', placeItems: 'center' }}><RIco name="plus" size={18} /></button>
            </div>
          </div>
        </div>
        <div style={{ flex: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <RKeypad value={cents} onChange={setCents} maxLength={7} />
          <p style={{ margin: 0, fontSize: 12, color: 'hsl(var(--text-tertiary))', maxWidth: 240, textAlign: 'center' }}>El teclado numérico fija el precio en centavos; el teclado físico también funciona.</p>
        </div>
      </div>
    </RSheet>
  );
}

function CartLine({ line, onOpenQty, onStep, onRemove, onSaveProduct }) {
  const v = window.PosData.lineView(line);
  const needs = window.PosData.needsPrice(v);
  // stand-in aritmético de render (no fuente de verdad): subtotal = unitario × cantidad
  const subtotal = needs ? null : v.precio * v.qty;
  return (
    <div style={{ padding: 14, borderRadius: 12, border: '1px solid ' + (needs ? 'hsl(var(--warning-border))' : 'hsl(var(--border-subtle))'), background: needs ? 'hsl(var(--warning-bg))' : 'hsl(var(--surface-base))' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
            <span style={{ fontSize: 16, fontWeight: 600, color: 'hsl(var(--text-primary))', letterSpacing: '-.01em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{v.desc}</span>
            {v.generic && <RBadge tone="info">Ítem rápido</RBadge>}
          </div>
          {v.generic
            ? <div style={{ fontSize: 12, color: 'hsl(var(--text-tertiary))', fontFamily: 'var(--font-mono)' }}>Sin SKU · IVA {v.iva}%</div>
            : <div style={{ fontSize: 13, color: 'hsl(var(--text-secondary))', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{v.sub}</div>}
        </div>
        <button type="button" onClick={onRemove} className="pos-btn" aria-label={'Quitar ' + v.desc + ' del carrito'}
          style={{ flex: 'none', width: 'var(--hit-min)', height: 'var(--hit-min)', borderRadius: 10, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-raised))', color: 'hsl(var(--text-tertiary))', cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
          <RIco name="trash-2" style={{ width: 'var(--pos-ico)', height: 'var(--pos-ico)' }} />
        </button>
      </div>
      {needs && (
        <div role="alert" style={{ margin: '10px 0', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500, color: 'hsl(var(--warning-fg))' }}>
          <span aria-hidden="true">⚠</span> {v.generic ? 'Precio en cero — asigná un precio para poder vender.' : 'Sin precio en la lista aplicable — no se puede vender.'} Bloquea el cobro.
        </div>
      )}
      <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        {/* Stepper de cantidad — [−] [cantidad → keypad] [+], targets del eje densidad. */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button type="button" onClick={() => onStep(-1)} className="pos-btn" aria-label="Restar una unidad" disabled={line.qty <= 1}
            style={{ width: 'var(--pos-tap-sm)', height: 'var(--pos-tap-sm)', borderRadius: 10, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-raised))', color: 'hsl(var(--text-primary))', cursor: line.qty <= 1 ? 'default' : 'pointer', opacity: line.qty <= 1 ? .4 : 1, display: 'grid', placeItems: 'center' }}><RIco name="minus" size={18} /></button>
          <button type="button" onClick={onOpenQty} className="pos-btn" aria-label={'Cambiar cantidad, actual ' + line.qty}
            style={{ minWidth: 60, height: 'var(--pos-tap-sm)', padding: '0 12px', borderRadius: 10, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-raised))', color: 'hsl(var(--text-primary))', cursor: 'pointer', font: '600 18px var(--font-ui)', fontVariantNumeric: 'tabular-nums' }}>{line.qty}</button>
          <button type="button" onClick={() => onStep(1)} className="pos-btn" aria-label="Sumar una unidad"
            style={{ width: 'var(--pos-tap-sm)', height: 'var(--pos-tap-sm)', borderRadius: 10, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-raised))', color: 'hsl(var(--text-primary))', cursor: 'pointer', display: 'grid', placeItems: 'center' }}><RIco name="plus" size={18} /></button>
        </div>
        <div style={{ textAlign: 'right' }}>
          {needs
            ? <RMoney value={null} />
            : <>
                <div style={{ fontSize: 12, color: 'hsl(var(--text-tertiary))', fontFamily: 'var(--font-mono)' }}><RMoney value={v.precio} size="sm" /> × {line.qty}</div>
                <RMoney value={subtotal} size="md" />
              </>}
        </div>
      </div>
      {/* Guardar como producto — SOLO para la línea genérica. Vive en la línea (no al
          cerrar): es donde están sus datos y donde el cajero decide por ítem. La venta se
          registra igual sin tocar esto; el catálogo no se ensucia por defecto. */}
      {v.generic && (
        <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px dashed hsl(var(--border-subtle))' }}>
          <button type="button" onClick={() => onSaveProduct(line)} className="pos-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: 'var(--pos-tap-sm)', padding: '0 12px', borderRadius: 10, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-raised))', color: 'hsl(var(--text-secondary))', cursor: 'pointer', font: '500 13px var(--font-ui)' }}>
            <RIco name="package" size={17} />Guardar como producto
          </button>
        </div>
      )}
    </div>
  );
}

function TotalRow({ label, value, strong }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
      <span style={{ fontSize: strong ? 15 : 13, fontWeight: strong ? 600 : 500, color: strong ? 'hsl(var(--text-primary))' : 'hsl(var(--text-secondary))', textTransform: strong ? 'uppercase' : 'none', letterSpacing: strong ? '.06em' : 0 }}>{label}</span>
      <RMoney value={value} size={strong ? 'lg' : 'sm'} />
    </div>
  );
}

function Cart({ lines, customer, onOpenQty, onStep, onRemove, onSaveProduct, onConsumidorFinal, onOpenPicker, onCobrar }) {
  const { PosLabel, CustomerBar } = window;
  const empty = lines.length === 0;
  // Render stand-in de totales (autoridad real = backend). Catálogo y genérica suman
  // igual; se excluyen las líneas a resolver (SIN PRECIO de catálogo o precio en cero).
  const views = lines.map((l) => window.PosData.lineView(l));
  const priced = views.filter((v) => !window.PosData.needsPrice(v));
  const subtotal = priced.reduce((s, v) => s + v.precio * v.qty, 0);
  const iva = priced.reduce((s, v) => s + v.precio * v.qty * (v.iva / 100), 0);
  const total = subtotal + iva;
  const sinPrecioCount = views.filter((v) => window.PosData.needsPrice(v)).length;
  const catalogNoPrice = views.filter((v) => !v.generic && window.PosData.needsPrice(v)).length;
  const genericNoPrice = views.filter((v) => v.generic && window.PosData.needsPrice(v)).length;
  const blocked = empty || sinPrecioCount > 0;
  const totalItems = views.reduce((s, v) => s + v.qty, 0);

  return (
    <aside aria-label="Carrito" style={{ flex: 'none', width: 'var(--pos-cart-w)', display: 'flex', flexDirection: 'column', minHeight: 0, borderLeft: '1px solid hsl(var(--border-subtle))', background: 'hsl(var(--surface-sunken))' }}>
      <CustomerBar customer={customer} onConsumidorFinal={onConsumidorFinal} onOpenPicker={onOpenPicker} />

      <div style={{ flex: 'none', padding: '14px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <PosLabel>Carrito</PosLabel>
        {!empty && <span style={{ fontSize: 12, color: 'hsl(var(--text-tertiary))', fontFamily: 'var(--font-mono)' }}>{totalItems} {totalItems === 1 ? 'ítem' : 'ítems'} · {lines.length} {lines.length === 1 ? 'línea' : 'líneas'}</span>}
      </div>

      {/* Carrito vacío — estado de PRIMERA CLASE (así arranca cada venta), no un error. */}
      {empty ? (
        <div style={{ flex: 1, minHeight: 0, display: 'grid', placeItems: 'center', padding: 28 }}>
          <div style={{ textAlign: 'center', maxWidth: 300 }}>
            <div style={{ width: 64, height: 64, borderRadius: 16, margin: '0 auto 16px', display: 'grid', placeItems: 'center', background: 'hsl(var(--surface-base))', border: '1px solid hsl(var(--border-subtle))', color: 'hsl(var(--text-tertiary))' }} aria-hidden="true"><RIco name="shopping-cart" size={28} strokeWidth={1.8} /></div>
            <div style={{ font: '600 17px/22px var(--font-ui)', color: 'hsl(var(--text-primary))' }}>Carrito vacío</div>
            <p style={{ margin: '6px 0 0', fontSize: 14, color: 'hsl(var(--text-secondary))', lineHeight: 1.5 }}>Buscá o escaneá un producto a la izquierda para empezar la venta.</p>
          </div>
        </div>
      ) : (
        <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '4px 16px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {lines.map((l) => <CartLine key={l.key} line={l} onOpenQty={() => onOpenQty(l)} onStep={(d) => onStep(l, d)} onRemove={() => onRemove(l)} onSaveProduct={onSaveProduct} />)}
        </div>
      )}

      {/* Totales + Cobrar — legibles a distancia de brazo. */}
      <div style={{ flex: 'none', padding: 16, borderTop: '1px solid hsl(var(--border-subtle))', background: 'hsl(var(--surface-raised))' }}>
        {sinPrecioCount > 0 && (
          <div role="alert" style={{ marginBottom: 12, padding: '12px 14px', borderRadius: 10, background: 'hsl(var(--warning-bg))', border: '1px solid hsl(var(--warning-border))', color: 'hsl(var(--warning-fg))', fontSize: 13, lineHeight: 1.45, fontWeight: 500 }}>
            {sinPrecioCount === 1
              ? (catalogNoPrice === 1
                  ? '1 línea de catálogo sin precio bloquea el cobro. Quitala o cargá su precio en la lista aplicable para continuar.'
                  : '1 ítem rápido con precio en cero bloquea el cobro. Asignale un precio o quitalo para continuar.')
              : (genericNoPrice === 0
                  ? sinPrecioCount + ' líneas de catálogo sin precio bloquean el cobro. Quitalas o cargá su precio en la lista aplicable para continuar.'
                  : catalogNoPrice === 0
                    ? sinPrecioCount + ' ítems rápidos con precio en cero bloquean el cobro. Asignales un precio o quitalos para continuar.'
                    : sinPrecioCount + ' líneas bloquean el cobro. La de catálogo se resuelve con precio en la lista aplicable o quitándola; el ítem rápido, poniéndole precio.')}
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
          <TotalRow label="Subtotal" value={subtotal} />
          <TotalRow label="IVA" value={iva} />
          <div style={{ height: 1, background: 'hsl(var(--border-subtle))', margin: '2px 0' }} />
          <TotalRow label="Total" value={total} strong />
        </div>
        <button type="button" onClick={blocked ? undefined : onCobrar} disabled={blocked} aria-disabled={blocked}
          style={{ width: '100%', height: 'var(--pos-tap-lg)', borderRadius: 14, cursor: blocked ? 'default' : 'pointer', font: '600 18px var(--font-ui)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            background: blocked ? 'hsl(var(--surface-sunken))' : 'hsl(var(--brand-primary))',
            color: blocked ? 'hsl(var(--text-disabled))' : 'hsl(var(--brand-foreground))',
            border: blocked ? '1px solid hsl(var(--border-subtle))' : 0 }}>
          <RIco name="receipt" size={22} />Cobrar{!blocked && <span style={{ fontVariantNumeric: 'tabular-nums', opacity: .9 }}>· <RMoneyInline value={total} /></span>}
        </button>
        <p style={{ margin: '8px 0 0', textAlign: 'center', fontSize: 12, color: 'hsl(var(--text-tertiary))' }}>
          {empty ? 'Agregá al menos un producto para cobrar.' : sinPrecioCount > 0 ? 'Resolvé las líneas sin precio para habilitar el cobro.' : 'El cobro (vuelto, medios de pago, cierre) es el siguiente corte.'}
        </p>
      </div>
    </aside>
  );
}

/* Total en línea dentro del botón Cobrar (mismo formato es-EC). */
function RMoneyInline({ value }) {
  const [ent, dec] = Math.abs(value).toFixed(2).split('.');
  const miles = ent.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return <span>${miles},{dec}</span>;
}

Object.assign(window, { Cart, QtySheet, GenericItemSheet });
