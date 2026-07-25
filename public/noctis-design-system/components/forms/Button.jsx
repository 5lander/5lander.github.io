import React from 'react';

/* Inyecta una vez las reglas de hover/focus/active que el estilo inline no cubre. */
const NOCTIS_BTN_CSS = `
.noctis-btn{height:var(--control-h);padding:0 16px;border-radius:10px;font:var(--type-h3-weight,600) 13px/1 var(--font-ui);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap;transition:filter .12s,background .12s,transform .06s;}
.noctis-btn--sm{height:var(--control-h-sm);padding:0 10px;border-radius:8px;font-weight:500;font-size:12px;gap:6px;}
.noctis-btn--primary{background:hsl(var(--brand-primary));color:hsl(var(--brand-foreground));border:none;}
.noctis-btn--primary:hover:not(:disabled){filter:brightness(.93);}
.noctis-btn--secondary{background:hsl(var(--surface-raised));color:hsl(var(--text-primary));border:1px solid hsl(var(--border-strong));}
.noctis-btn--secondary:hover:not(:disabled){background:hsl(var(--surface-sunken));}
.noctis-btn--ghost{background:transparent;color:hsl(var(--text-secondary));border:1px solid transparent;}
.noctis-btn--ghost:hover:not(:disabled){background:hsl(var(--surface-sunken));}
.noctis-btn--danger{background:hsl(var(--danger-fg));color:hsl(var(--danger-foreground));border:none;}
.noctis-btn--danger:hover:not(:disabled){filter:brightness(.93);}
.noctis-btn--danger-ghost{background:transparent;color:hsl(var(--danger-fg));border:1px solid hsl(var(--danger-border));}
.noctis-btn--danger-ghost:hover:not(:disabled){background:hsl(var(--danger-bg));}
.noctis-btn:focus-visible{outline:2px solid hsl(var(--focus-ring));outline-offset:2px;}
.noctis-btn:active:not(:disabled){transform:scale(.985);}
.noctis-btn:disabled{opacity:.45;cursor:not-allowed;}
.noctis-btn__spin{width:14px;height:14px;border:2px solid hsl(var(--brand-foreground)/.4);border-top-color:hsl(var(--brand-foreground));border-radius:50%;display:inline-block;animation:noctis-spin .7s linear infinite;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-btn-css')) {
  const s = document.createElement('style'); s.id = 'noctis-btn-css'; s.textContent = NOCTIS_BTN_CSS;
  document.head.appendChild(s);
}

/**
 * Button — primitivo reexpresado. `primary` es el ÚNICO lugar (junto a nav-activo,
 * foco y selección) donde vive el acento del tenant. Estados: default · hover ·
 * active · focus-visible (anillo) · disabled · loading.
 */
export function Button({ variant = 'primary', size = 'md', loading = false, disabled = false, children, className = '', ...rest }) {
  const cls = [
    'noctis-btn',
    size === 'sm' && 'noctis-btn--sm',
    `noctis-btn--${variant}`,
    className,
  ].filter(Boolean).join(' ');
  return (
    <button className={cls} disabled={disabled || loading} aria-busy={loading || undefined} {...rest}>
      {loading && <span className="noctis-btn__spin" aria-hidden="true" />}
      {children}
    </button>
  );
}
