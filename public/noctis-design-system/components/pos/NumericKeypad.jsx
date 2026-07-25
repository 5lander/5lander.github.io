import React from 'react';

const NOCTIS_KP_CSS = `
.noctis-kp{border:1px solid hsl(var(--border-subtle));border-radius:16px;padding:18px;background:hsl(var(--surface-raised));width:264px;max-width:100%;}
.noctis-kp__display{background:hsl(var(--surface-sunken));border:1px solid hsl(var(--border-subtle));border-radius:10px;padding:12px 14px;text-align:right;font-variant-numeric:tabular-nums;font-feature-settings:'tnum';font:600 26px/1.2 var(--font-ui);margin-bottom:14px;overflow:hidden;}
.noctis-kp__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;}
.noctis-kp__key{height:var(--kp-key);min-width:var(--kp-key);border-radius:12px;border:1px solid hsl(var(--border-subtle));background:hsl(var(--surface-base));color:hsl(var(--text-primary));font:500 22px/1 var(--font-ui);font-variant-numeric:tabular-nums;cursor:pointer;transition:transform .06s,background .06s;}
.noctis-kp__key--alt{background:hsl(var(--surface-sunken));color:hsl(var(--text-secondary));font-size:20px;}
.noctis-kp__key:active{transform:scale(.96);background:hsl(var(--brand-primary));color:hsl(var(--brand-foreground));}
.noctis-kp__key:focus-visible{outline:2px solid hsl(var(--focus-ring));outline-offset:2px;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-kp-css')) {
  const s = document.createElement('style'); s.id = 'noctis-kp-css'; s.textContent = NOCTIS_KP_CSS;
  document.head.appendChild(s);
}

/**
 * NumericKeypad — componente del núcleo (se funda aquí aunque el POS se dibuje en
 * commerce). Teclas ≥60×60 (64×64), layout 3×4, no depende del teclado del sistema,
 * soporta teclado físico. Feedback táctil inmediato: scale(.96) + fondo de marca.
 * Sirve para cantidad, precio y cobro. C limpia, ⌫ borra.
 */
export function NumericKeypad({ value, onChange, maxLength = 9 }) {
  const [internal, setInternal] = React.useState('');
  const controlled = value !== undefined;
  const v = controlled ? value : internal;
  const set = (next) => { if (controlled) { onChange && onChange(next); } else { setInternal(next); onChange && onChange(next); } };
  const push = (k) => {
    if (k === 'C') return set('');
    if (k === 'del') return set(String(v).slice(0, -1));
    set((String(v).replace(/^0$/, '') + k).slice(0, maxLength));
  };
  React.useEffect(() => {
    const onKey = (e) => {
      if (/^[0-9]$/.test(e.key)) push(e.key);
      else if (e.key === 'Backspace') push('del');
      else if (e.key === 'Escape' || e.key.toLowerCase() === 'c') push('C');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
  const K = ({ k, alt, label, children }) => (
    <button type="button" className={['noctis-kp__key', alt && 'noctis-kp__key--alt'].filter(Boolean).join(' ')} onClick={() => push(k)} aria-label={label}>{children}</button>
  );
  return (
    <div className="noctis-kp">
      <div className="noctis-kp__display">{v || '0'}</div>
      <div className="noctis-kp__grid">
        {['1','2','3','4','5','6','7','8','9'].map((n) => <K key={n} k={n}>{n}</K>)}
        <K k="C" alt label="Limpiar">C</K>
        <K k="0">0</K>
        <K k="del" alt label="Borrar">⌫</K>
      </div>
    </div>
  );
}
