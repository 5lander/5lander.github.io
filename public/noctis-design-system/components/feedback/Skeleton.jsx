import React from 'react';

const NOCTIS_SK_CSS = `
.noctis-sk{background:linear-gradient(90deg,hsl(var(--surface-sunken)) 25%,hsl(var(--border-subtle)) 37%,hsl(var(--surface-sunken)) 63%);background-size:280% 100%;animation:noctis-shimmer 1.4s infinite;}
.noctis-sk--line{display:inline-block;height:12px;border-radius:4px;}
.noctis-sk--block{display:block;border-radius:8px;}
.noctis-sk--pill{display:inline-block;width:64px;height:20px;border-radius:999px;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-sk-css')) {
  const s = document.createElement('style'); s.id = 'noctis-sk-css'; s.textContent = NOCTIS_SK_CSS;
  document.head.appendChild(s);
}

/**
 * Skeleton — placeholder con shimmer cuando se conoce la FORMA y hay layout que
 * preservar (listas, tablas, detalle). Evita el salto de contenido. Tres formas:
 * line (texto), block (bloque), pill (estado).
 */
export function Skeleton({ variant = 'line', width, height, className = '', style, ...rest }) {
  return (
    <span
      className={['noctis-sk', `noctis-sk--${variant}`, className].filter(Boolean).join(' ')}
      aria-hidden="true"
      style={{ width, height, ...style }}
      {...rest}
    />
  );
}
