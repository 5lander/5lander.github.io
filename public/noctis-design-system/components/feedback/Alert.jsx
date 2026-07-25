import React from 'react';

const NOCTIS_ALERT_CSS = `
.noctis-alert{padding:12px 14px;border-radius:10px;font-size:13px;border:1px solid;line-height:1.45;}
.noctis-alert--info{background:hsl(var(--info-bg));border-color:hsl(var(--info-border));color:hsl(var(--info-fg));}
.noctis-alert--success{background:hsl(var(--success-bg));border-color:hsl(var(--success-border));color:hsl(var(--success-fg));}
.noctis-alert--warning{background:hsl(var(--warning-bg));border-color:hsl(var(--warning-border));color:hsl(var(--warning-fg));}
.noctis-alert--danger{background:hsl(var(--danger-bg));border-color:hsl(var(--danger-border));color:hsl(var(--danger-fg));}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-alert-css')) {
  const s = document.createElement('style'); s.id = 'noctis-alert-css'; s.textContent = NOCTIS_ALERT_CSS;
  document.head.appendChild(s);
}

/**
 * Alert — feedback inline dentro de la Card. Es el mecanismo por defecto: el error
 * SIEMPRE va inline (nunca por toast). `danger`/`warning` usan role="alert";
 * `info`/`success` usan role="status".
 */
export function Alert({ tone = 'info', role, children, className = '', ...rest }) {
  const autoRole = role || (tone === 'danger' || tone === 'warning' ? 'alert' : 'status');
  return (
    <div className={['noctis-alert', `noctis-alert--${tone}`, className].filter(Boolean).join(' ')} role={autoRole} {...rest}>
      {children}
    </div>
  );
}
