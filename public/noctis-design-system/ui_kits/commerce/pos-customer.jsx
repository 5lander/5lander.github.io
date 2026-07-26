/* Noctis · commerce POS-a — CLIENTE. Consumidor Final de UN TOQUE (caso mayoritario
   en una PYME ecuatoriana: cédula 9999999999999, convención fiscal) como camino
   obvio y rápido; el picker de cliente registrado es el secundario. */
const CUNS = window.NoctisCommerceDesignSystem_4dfd35;
const { Sheet: CSheet } = CUNS;
const CIco = window.PosIcon;

/* Barra de cliente arriba del carrito. Muestra el cliente activo; el par
   {Consumidor Final de un toque · Elegir cliente} deja claro cuál es el camino
   rápido. La selección activa usa el acento del tenant (uno de los 4 puntos). */
function CustomerBar({ customer, onConsumidorFinal, onOpenPicker }) {
  const { PosLabel } = window;
  const esFinal = customer.final;
  return (
    <div style={{ flex: 'none', padding: '14px 16px', borderBottom: '1px solid hsl(var(--border-subtle))', background: 'hsl(var(--surface-raised))' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <PosLabel>Cliente</PosLabel>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'hsl(var(--text-tertiary))' }}>{customer.docTipo} {customer.doc}</span>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {/* Consumidor Final — UN TOQUE, camino obvio. Activo = selección con acento. */}
        <button type="button" onClick={onConsumidorFinal} aria-pressed={esFinal}
          style={{ flex: 1, minHeight: 'var(--pos-field-sm)', display: 'flex', alignItems: 'center', gap: 10, padding: '0 14px', borderRadius: 12, cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-ui)',
            border: esFinal ? '1px solid hsl(var(--brand-primary))' : '1px solid hsl(var(--border-strong))',
            background: esFinal ? 'hsl(var(--brand-primary))' : 'hsl(var(--surface-base))',
            color: esFinal ? 'hsl(var(--brand-foreground))' : 'hsl(var(--text-primary))',
            outline: esFinal ? '3px solid hsl(var(--brand-primary) / .25)' : 'none' }}>
          <CIco name="user-round" size={22} style={{ flex: 'none' }} />
          <span style={{ minWidth: 0 }}>
            <span style={{ display: 'block', fontSize: 15, fontWeight: 600, lineHeight: 1.2 }}>Consumidor Final</span>
            <span style={{ display: 'block', fontSize: 12, opacity: esFinal ? .85 : .7 }}>Venta rápida sin datos</span>
          </span>
        </button>
        {/* Elegir cliente registrado — secundario. */}
        <button type="button" onClick={onOpenPicker} className="pos-btn"
          style={{ flex: 'none', minWidth: 132, minHeight: 'var(--pos-field-sm)', padding: '0 14px', borderRadius: 12, cursor: 'pointer', border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <CIco name="users" size={20} />Elegir cliente
        </button>
      </div>
      {!esFinal && (
        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, background: 'hsl(var(--surface-sunken))', border: '1px solid hsl(var(--border-subtle))' }}>
          <div style={{ width: 36, height: 36, flex: 'none', borderRadius: 9, display: 'grid', placeItems: 'center', background: 'hsl(var(--brand-primary))', color: 'hsl(var(--brand-foreground))' }} aria-hidden="true"><CIco name="user-round" size={18} /></div>
          <div style={{ minWidth: 0, lineHeight: 1.25 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'hsl(var(--text-primary))', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{customer.nombre}</div>
            <div style={{ fontSize: 12, color: 'hsl(var(--text-tertiary))', fontFamily: 'var(--font-mono)' }}>{customer.docTipo} {customer.doc}</div>
          </div>
        </div>
      )}
    </div>
  );
}

/* Picker de cliente registrado — Sheet bottom (táctil). Dos modos dentro del MISMO Sheet
   del núcleo (sin Dialog nuevo): `list` (buscar/elegir) y `create` (alta inline). El alta
   siempre está disponible («Nuevo cliente»); sin coincidencias, el CTA precarga lo tecleado. */
function ClientPicker({ open, onClose, onPick, onConsumidorFinal, activeId, clientes, onCreate }) {
  const [q, setQ] = React.useState('');
  const [mode, setMode] = React.useState('list');
  React.useEffect(() => { if (!open) { setQ(''); setMode('list'); } }, [open]);
  const ql = q.trim().toLowerCase();
  const source = clientes || window.PosData.CLIENTES;
  const list = source.filter((c) => !ql || c.nombre.toLowerCase().includes(ql) || c.doc.includes(ql));
  const creating = mode === 'create';

  const startCreate = () => setMode('create');

  return (
    <CSheet open={open} onClose={onClose} placement="bottom" title={creating ? 'Nuevo cliente' : 'Elegir cliente'}>
      {creating ? (
        <window.ClientForm seed={q.trim()} onCancel={() => setMode('list')} onSubmit={(data) => onCreate(data)}
          submitLabel="Crear y usar en la venta" submitIcon="user-round" back={{ label: 'Volver a elegir cliente', onClick: () => setMode('list') }} />
      ) : (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 320 }}>
        <button type="button" onClick={onConsumidorFinal}
          style={{ display: 'flex', alignItems: 'center', gap: 12, minHeight: 'var(--pos-tap-lg)', padding: '0 16px', borderRadius: 12, cursor: 'pointer', textAlign: 'left', border: '1px solid hsl(var(--brand-primary))', background: 'hsl(var(--brand-primary))', color: 'hsl(var(--brand-foreground))', fontFamily: 'var(--font-ui)' }}>
          <CIco name="user-round" size={24} style={{ flex: 'none' }} />
          <span><span style={{ display: 'block', fontSize: 16, fontWeight: 600 }}>Consumidor Final</span><span style={{ display: 'block', fontSize: 13, opacity: .85 }}>Cédula 9999999999999 · venta rápida</span></span>
        </button>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flex: 1 }}>
            <span style={{ position: 'absolute', left: 14, color: 'hsl(var(--text-tertiary))' }} aria-hidden="true"><CIco name="search" size={20} /></span>
            <input value={q} onChange={(e) => setQ(e.target.value)} aria-label="Buscar cliente registrado" placeholder="Buscar por nombre o documento…"
              style={{ width: '100%', height: 'var(--pos-field-sm)', padding: '0 14px 0 46px', borderRadius: 12, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-primary))', font: '400 16px var(--font-ui)', outline: 'none' }}
              onFocus={(e) => { e.target.style.borderColor = 'hsl(var(--focus-ring))'; e.target.style.boxShadow = '0 0 0 3px hsl(var(--focus-ring) / .28)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'hsl(var(--border-strong))'; e.target.style.boxShadow = 'none'; }} />
          </div>
          <button type="button" onClick={startCreate} className="pos-btn" aria-label="Crear un cliente nuevo"
            style={{ flex: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, height: 'var(--pos-field-sm)', padding: '0 16px', borderRadius: 12, cursor: 'pointer', border: '1px solid hsl(var(--brand-primary))', background: 'hsl(var(--brand-primary) / .1)', color: 'hsl(var(--brand-primary))', fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600, whiteSpace: 'nowrap' }}>
            <CIco name="plus" size={20} />Nuevo cliente
          </button>
        </div>
        <div style={{ maxHeight: 300, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {list.length === 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '20px 8px', textAlign: 'center' }}>
              <div style={{ color: 'hsl(var(--text-tertiary))', fontSize: 14, maxWidth: '40ch' }}>Sin coincidencias. Puede crear el cliente aquí mismo y continuar la venta.</div>
              <button type="button" onClick={startCreate}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, minHeight: 'var(--pos-tap-lg)', padding: '0 18px', borderRadius: 12, cursor: 'pointer', border: '1px solid hsl(var(--brand-primary))', background: 'hsl(var(--brand-primary))', color: 'hsl(var(--brand-foreground))', fontFamily: 'var(--font-ui)', fontSize: 15, fontWeight: 600 }}>
                <CIco name="plus" size={20} />{q.trim() ? 'Crear cliente «' + q.trim() + '»' : 'Crear cliente'}
              </button>
            </div>
          )}
          {list.map((c) => {
            const active = c.id === activeId;
            return (
              <button key={c.id} type="button" onClick={() => onPick(c)} className="pos-btn" aria-pressed={active}
                style={{ display: 'flex', alignItems: 'center', gap: 12, minHeight: 'var(--pos-tap-lg)', padding: '0 14px', borderRadius: 12, cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-ui)',
                  border: '1px solid ' + (active ? 'hsl(var(--brand-primary))' : 'hsl(var(--border-subtle))'),
                  background: active ? 'hsl(var(--brand-primary) / .1)' : 'hsl(var(--surface-base))', color: 'hsl(var(--text-primary))' }}>
                <span style={{ width: 20, flex: 'none', color: active ? 'hsl(var(--brand-primary))' : 'transparent' }} aria-hidden="true">✓</span>
                <span style={{ minWidth: 0, flex: 1 }}>
                  <span style={{ display: 'block', fontSize: 15, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.nombre}</span>
                  <span style={{ display: 'block', fontSize: 12, color: 'hsl(var(--text-tertiary))', fontFamily: 'var(--font-mono)' }}>{c.docTipo} {c.doc}{c.celular ? ' · ' + c.celular : ''}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
      )}
    </CSheet>
  );
}

Object.assign(window, { CustomerBar, ClientPicker });
