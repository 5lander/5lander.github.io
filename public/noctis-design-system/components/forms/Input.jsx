import React from 'react';

const NOCTIS_INPUT_CSS = `
.noctis-field{display:flex;flex-direction:column;}
.noctis-label{display:block;font:500 var(--type-label-size,13px)/1.2 var(--font-ui);margin-bottom:6px;color:hsl(var(--text-primary));}
.noctis-input{width:100%;height:var(--control-h);padding:0 12px;border-radius:10px;border:1px solid hsl(var(--border-strong));background:hsl(var(--surface-base));color:hsl(var(--text-primary));font:400 var(--font-body)/1 var(--font-ui);transition:border-color .12s,box-shadow .12s;}
.noctis-input::placeholder{color:hsl(var(--text-tertiary));}
.noctis-input:focus{outline:2px solid hsl(var(--focus-ring)/.4);outline-offset:0;border-color:hsl(var(--focus-ring));}
.noctis-input--error{border-color:hsl(var(--danger-fg));}
.noctis-input:disabled{opacity:.5;cursor:not-allowed;background:hsl(var(--surface-sunken));}
.noctis-help{font:400 var(--type-caption-size,12px)/1.4 var(--font-ui);color:hsl(var(--text-tertiary));margin-top:5px;}
.noctis-err{font:400 var(--type-caption-size,12px)/1.4 var(--font-ui);color:hsl(var(--danger-fg));margin-top:5px;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-input-css')) {
  const s = document.createElement('style'); s.id = 'noctis-input-css'; s.textContent = NOCTIS_INPUT_CSS;
  document.head.appendChild(s);
}

let _uid = 0;

/**
 * Input — campo de texto del núcleo con label, helper y error por campo (patrón RHF+Zod).
 * El error inline es la regla: nunca se muestra por toast.
 */
export function Input({ label, helper, error, id, className = '', ...rest }) {
  const [autoId] = React.useState(() => id || `noctis-in-${++_uid}`);
  return (
    <div className="noctis-field">
      {label && <label className="noctis-label" htmlFor={autoId}>{label}</label>}
      <input
        id={autoId}
        className={['noctis-input', error && 'noctis-input--error', className].filter(Boolean).join(' ')}
        aria-invalid={error ? true : undefined}
        {...rest}
      />
      {error ? <div className="noctis-err">{error}</div> : helper ? <div className="noctis-help">{helper}</div> : null}
    </div>
  );
}
