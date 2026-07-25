import React from 'react';

const NOCTIS_BADGE_CSS = `
.noctis-badge{display:inline-flex;align-items:center;gap:5px;padding:3px 10px;border-radius:999px;font:600 12px/1.4 var(--font-ui);border:1px solid;white-space:nowrap;}
.noctis-badge--neutral{background:hsl(var(--surface-sunken));border-color:hsl(var(--border-strong));color:hsl(var(--text-secondary));}
.noctis-badge--success{background:hsl(var(--success-bg));border-color:hsl(var(--success-border));color:hsl(var(--success-fg));}
.noctis-badge--info{background:hsl(var(--info-bg));border-color:hsl(var(--info-border));color:hsl(var(--info-fg));}
.noctis-badge--warning{background:hsl(var(--warning-bg));border-color:hsl(var(--warning-border));color:hsl(var(--warning-fg));}
.noctis-badge--danger{background:hsl(var(--danger-bg));border-color:hsl(var(--danger-border));color:hsl(var(--danger-fg));}
.noctis-badge--terminal{background:transparent;border-color:hsl(var(--border-strong));color:hsl(var(--text-tertiary));}
.noctis-badge--brand{background:hsl(var(--brand-primary));border-color:transparent;color:hsl(var(--brand-foreground));}
.noctis-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-badge-css')) {
  const s = document.createElement('style'); s.id = 'noctis-badge-css'; s.textContent = NOCTIS_BADGE_CSS;
  document.head.appendChild(s);
}

/**
 * Badge / StatusPill — pill de estado. Los tonos semánticos son ESTABLES (no los
 * toca el tenant); solo `brand` usa el acento (p.ej. "Predeterminada"). `terminal`
 * es el estado cancelado/anulado (contorno neutro).
 */
export function Badge({ tone = 'neutral', dot = false, children, className = '', ...rest }) {
  return (
    <span className={['noctis-badge', `noctis-badge--${tone}`, className].filter(Boolean).join(' ')} {...rest}>
      {dot && <span className="noctis-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
