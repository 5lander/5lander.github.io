import React from 'react';

const NOCTIS_MONEY_CSS = `
.noctis-money{font-variant-numeric:tabular-nums;font-feature-settings:'tnum';text-align:right;color:hsl(var(--text-primary));}
.noctis-money--neg{color:hsl(var(--danger-fg));}
.noctis-money--sm{font-size:14px;font-weight:500;}
.noctis-money--md{font-size:20px;font-weight:500;}
.noctis-money--lg{font-size:26px;font-weight:600;}
.noctis-money--display{font-size:40px;font-weight:700;line-height:1;}
.noctis-money__missing{display:inline-block;font:600 14px/1 var(--font-ui);color:hsl(var(--warning-fg));padding:4px 8px;border:1px dashed hsl(var(--warning-border));border-radius:6px;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-money-css')) {
  const s = document.createElement('style'); s.id = 'noctis-money-css'; s.textContent = NOCTIS_MONEY_CSS;
  document.head.appendChild(s);
}

/** Formato es-EC: miles con punto, decimales con coma, símbolo $. */
function formatEC(n) {
  const neg = n < 0;
  const [ent, dec] = Math.abs(n).toFixed(2).split('.');
  const miles = ent.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${neg ? '−' : ''}$${miles},${dec}`;
}

/**
 * MoneyDisplay — monto con números tabulares, alineado a la derecha. Los negativos
 * toman `--danger-fg`. `null` (precio ausente) NO es $0: renderiza el chip "Sin
 * precio" con contorno de atención. Formato es-EC ($1.234,56). `display` (40px) es el
 * tamaño hero para el monto que el cajero lee a distancia de brazo (total/vuelto del POS).
 */
export function MoneyDisplay({ value, size = 'md', className = '', ...rest }) {
  if (value === null || value === undefined) {
    return <span className="noctis-money__missing" {...rest}>Sin precio</span>;
  }
  return (
    <span className={['noctis-money', `noctis-money--${size}`, value < 0 && 'noctis-money--neg', className].filter(Boolean).join(' ')} {...rest}>
      {formatEC(value)}
    </span>
  );
}
