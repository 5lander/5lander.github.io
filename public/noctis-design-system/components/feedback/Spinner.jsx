import React from 'react';

const NOCTIS_SPIN_CSS = `
.noctis-spinner{border-radius:50%;display:inline-block;border-style:solid;border-color:hsl(var(--border-strong));border-top-color:hsl(var(--brand-primary));animation:noctis-spin .7s linear infinite;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-spin-css')) {
  const s = document.createElement('style'); s.id = 'noctis-spin-css'; s.textContent = NOCTIS_SPIN_CSS;
  document.head.appendChild(s);
}

const SIZES = { sm: [16, 2], md: [26, 3], lg: [34, 4] };

/**
 * Spinner — para acción puntual sin layout: gate de permiso, submit, botón en
 * loading. NUNCA para reemplazar una tabla entera (ahí va Skeleton). role="status".
 */
export function Spinner({ size = 'md', label = 'Cargando…', className = '', ...rest }) {
  const [d, bw] = SIZES[size] || SIZES.md;
  return (
    <span
      className={['noctis-spinner', className].filter(Boolean).join(' ')}
      role="status"
      aria-label={label}
      style={{ width: d, height: d, borderWidth: bw }}
      {...rest}
    />
  );
}
