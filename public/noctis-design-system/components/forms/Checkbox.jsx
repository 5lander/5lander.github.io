import React from 'react';

const NOCTIS_CHECKBOX_CSS = `
.noctis-checkbox{width:20px;height:20px;flex:none;border-radius:6px;border:1px solid hsl(var(--border-strong));background:hsl(var(--surface-base));color:hsl(var(--brand-foreground));display:grid;place-items:center;cursor:pointer;padding:0;font:600 12px/1 var(--font-ui);transition:background .12s,border-color .12s;}
.noctis-checkbox--sm{width:17px;height:17px;border-radius:5px;font-size:10px;}
.noctis-checkbox[aria-checked="true"],.noctis-checkbox[aria-checked="mixed"]{background:hsl(var(--brand-primary));border-color:hsl(var(--brand-primary));}
.noctis-checkbox:focus-visible{outline:2px solid hsl(var(--focus-ring)/.5);outline-offset:2px;}
.noctis-checkbox:disabled{opacity:.45;cursor:not-allowed;}
.noctis-checkbox-field{display:inline-flex;align-items:flex-start;gap:10px;}
.noctis-checkbox-field__label{font:400 var(--font-body)/1.35 var(--font-ui);color:hsl(var(--text-primary));min-width:0;}
.noctis-checkbox-field--disabled .noctis-checkbox-field__label{color:hsl(var(--text-tertiary));}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-checkbox-css')) {
  const s = document.createElement('style'); s.id = 'noctis-checkbox-css'; s.textContent = NOCTIS_CHECKBOX_CSS;
  document.head.appendChild(s);
}

/**
 * Checkbox — primitivo de selección del núcleo, con estado TRI-ESTADO. El tercer
 * estado (`indeterminate`) es el padre de una jerarquía cuyos hijos están
 * parcialmente marcados: backoffice lo usa en el árbol de entitlements
 * (módulo→submódulos), y sirve igual para cualquier selección de lista con
 * "seleccionar todo" parcial.
 *
 * Contrato de estado: `indeterminate` gana sobre `checked` y expone
 * `aria-checked="mixed"`. Al pulsar en indeterminate, el consumidor decide la
 * resolución (encender todo o apagar todo) — el componente solo informa.
 */
export function Checkbox({ checked = false, indeterminate = false, onChange, disabled = false, size = 'md', label, id, className = '', ...rest }) {
  const state = indeterminate ? 'mixed' : !!checked;
  const control = (
    <button
      type="button"
      role="checkbox"
      id={id}
      aria-checked={state}
      disabled={disabled}
      onClick={() => !disabled && onChange && onChange(indeterminate ? true : !checked)}
      className={['noctis-checkbox', size === 'sm' ? 'noctis-checkbox--sm' : '', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <span aria-hidden="true">{indeterminate ? '–' : checked ? '✓' : ''}</span>
    </button>
  );
  if (!label) return control;
  return (
    <span className={['noctis-checkbox-field', disabled ? 'noctis-checkbox-field--disabled' : ''].filter(Boolean).join(' ')}>
      {React.cloneElement(control, { 'aria-label': undefined, 'aria-labelledby': id ? `${id}-label` : undefined })}
      <span className="noctis-checkbox-field__label" id={id ? `${id}-label` : undefined}>{label}</span>
    </span>
  );
}
