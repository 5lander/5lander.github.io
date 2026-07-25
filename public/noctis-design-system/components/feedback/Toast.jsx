import React from 'react';

const NOCTIS_TOAST_CSS = `
.noctis-toast{display:inline-flex;align-items:center;gap:10px;background:hsl(var(--surface-overlay));border:1px solid hsl(var(--border-subtle));border-left:3px solid hsl(var(--success-fg));border-radius:10px;padding:10px 14px;box-shadow:var(--shadow-overlay);font-size:13px;color:hsl(var(--text-primary));}
.noctis-toast__icon{color:hsl(var(--success-fg));}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-toast-css')) {
  const s = document.createElement('style'); s.id = 'noctis-toast-css'; s.textContent = NOCTIS_TOAST_CSS;
  document.head.appendChild(s);
}

/**
 * Toast — acotado por decisión de sistema. SOLO confirmaciones de éxito efímeras
 * de acciones cuyo resultado NO está en pantalla (p.ej. "Invitación reenviada").
 * Autodismiss 4 s, apilable, role="status". Reglas duras: error → nunca toast
 * (va inline con Alert); prohibido en el POS.
 */
export function Toast({ children, autoDismiss = 4000, onDismiss, className = '', ...rest }) {
  React.useEffect(() => {
    if (!autoDismiss || !onDismiss) return;
    const t = setTimeout(onDismiss, autoDismiss);
    return () => clearTimeout(t);
  }, [autoDismiss, onDismiss]);
  return (
    <div className={['noctis-toast', className].filter(Boolean).join(' ')} role="status" {...rest}>
      <span className="noctis-toast__icon" aria-hidden="true">✓</span>
      <span>{children}</span>
    </div>
  );
}
