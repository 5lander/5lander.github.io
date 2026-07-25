import React from 'react';

const NOCTIS_COMBO_CSS = `
.noctis-combo{position:relative;}
.noctis-combo__btn{width:100%;height:var(--control-h);padding:0 12px;border-radius:8px;border:1px solid hsl(var(--border-strong));background:hsl(var(--surface-base));font:400 var(--font-body)/1 var(--font-ui);display:flex;align-items:center;justify-content:space-between;gap:8px;cursor:pointer;}
.noctis-combo__btn:focus-visible{outline:2px solid hsl(var(--focus-ring));outline-offset:2px;}
.noctis-combo__pop{position:absolute;z-index:20;left:0;right:0;margin-top:6px;background:hsl(var(--surface-overlay));border:1px solid hsl(var(--border-subtle));border-radius:10px;box-shadow:var(--shadow-overlay);overflow:hidden;}
.noctis-combo__search{padding:8px;border-bottom:1px solid hsl(var(--border-subtle));}
.noctis-combo__search input{width:100%;height:34px;padding:0 12px;border-radius:8px;border:1px solid hsl(var(--border-strong));background:hsl(var(--surface-base));color:hsl(var(--text-primary));font:400 var(--font-body)/1 var(--font-ui);}
.noctis-combo__opt{display:block;width:100%;text-align:left;padding:10px 12px;border:none;background:transparent;color:hsl(var(--text-primary));font:400 13px/1.3 var(--font-ui);cursor:pointer;}
.noctis-combo__opt:hover,.noctis-combo__opt:focus-visible{background:hsl(var(--surface-sunken));outline:none;}
.noctis-combo__meta{font-family:var(--font-mono);font-size:11px;color:hsl(var(--text-tertiary));}
.noctis-combo__empty{padding:14px 12px;font:400 12.5px/1.4 var(--font-ui);color:hsl(var(--text-tertiary));text-align:center;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-combo-css')) {
  const s = document.createElement('style'); s.id = 'noctis-combo-css'; s.textContent = NOCTIS_COMBO_CSS;
  document.head.appendChild(s);
}

/**
 * Combobox — picker con búsqueda que reemplaza los UUID crudos: siempre muestra
 * display_name en español, nunca el UUID. Popover flotante con sombra; opción
 * "un toque" destacada con el acento (color de marca). Base de la familia de
 * pickers (cliente, producto→variante, bodega).
 */
export function Combobox({ options = [], value, onChange, placeholder = 'Seleccione…', searchPlaceholder = 'Buscar…', label }) {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState('');
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  const sel = options.find((o) => o.value === value);
  const filtered = q ? options.filter((o) => (o.label + ' ' + (o.meta || '')).toLowerCase().includes(q.toLowerCase())) : options;

  return (
    <div className="noctis-combo" ref={ref}>
      <button
        type="button"
        className="noctis-combo__btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        style={{ color: sel ? 'hsl(var(--text-primary))' : 'hsl(var(--text-tertiary))' }}
      >
        <span>{sel ? sel.label : placeholder}</span>
        <span style={{ color: 'hsl(var(--text-tertiary))' }} aria-hidden="true">▾</span>
      </button>
      {open && (
        <div className="noctis-combo__pop" role="listbox">
          <div className="noctis-combo__search">
            <input autoFocus placeholder={searchPlaceholder} value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          {filtered.length === 0 && <div className="noctis-combo__empty">Sin resultados para «{q}».</div>}
          {filtered.map((o) => (
            <button
              key={o.value}
              type="button"
              role="option"
              aria-selected={o.value === value}
              className="noctis-combo__opt"
              style={o.accent ? { color: 'hsl(var(--brand-primary))', fontWeight: 600 } : undefined}
              onClick={() => { onChange && onChange(o.value); setOpen(false); setQ(''); }}
            >
              {o.label}{o.meta && <> <span className="noctis-combo__meta">{o.meta}</span></>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
