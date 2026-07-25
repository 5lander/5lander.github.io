import React from 'react';

const NOCTIS_SELECT_CSS = `
.noctis-select-wrap{position:relative;}
.noctis-select{width:100%;height:var(--control-h);padding:0 32px 0 12px;border-radius:10px;border:1px solid hsl(var(--border-strong));background:hsl(var(--surface-base));color:hsl(var(--text-primary));font:400 var(--font-body)/1 var(--font-ui);appearance:none;cursor:pointer;}
.noctis-select:focus{outline:2px solid hsl(var(--focus-ring)/.4);outline-offset:0;border-color:hsl(var(--focus-ring));}
.noctis-select:disabled{opacity:.5;cursor:not-allowed;background:hsl(var(--surface-sunken));}
.noctis-select__chev{position:absolute;right:12px;top:50%;transform:translateY(-50%);color:hsl(var(--text-tertiary));pointer-events:none;font-size:11px;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-select-css')) {
  const s = document.createElement('style'); s.id = 'noctis-select-css'; s.textContent = NOCTIS_SELECT_CSS;
  document.head.appendChild(s);
}

/**
 * Select — select nativo simple estilizado con chevron propio. En táctil escala a
 * bottom-sheet (ver Sheet). Para búsqueda por nombre/ID usar Combobox.
 */
export function Select({ options = [], children, className = '', ...rest }) {
  return (
    <div className="noctis-select-wrap">
      <select className={['noctis-select', className].filter(Boolean).join(' ')} {...rest}>
        {children || options.map((o) => {
          const value = typeof o === 'string' ? o : o.value;
          const label = typeof o === 'string' ? o : o.label;
          return <option key={value} value={value}>{label}</option>;
        })}
      </select>
      <span className="noctis-select__chev" aria-hidden="true">▾</span>
    </div>
  );
}
