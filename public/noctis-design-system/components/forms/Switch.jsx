import React from 'react';

const NOCTIS_SWITCH_CSS = `
.noctis-switch{position:relative;flex:none;border-radius:999px;border:1px solid hsl(var(--border-strong));background:hsl(var(--surface-sunken));cursor:pointer;padding:0;transition:background .12s,border-color .12s;}
.noctis-switch--md{width:38px;height:22px;}
.noctis-switch--sm{width:32px;height:19px;}
.noctis-switch__knob{position:absolute;top:2px;border-radius:999px;background:hsl(var(--surface-raised));box-shadow:0 1px 2px hsl(240 6% 10% / .25);transition:left .12s,background .12s;}
.noctis-switch--md .noctis-switch__knob{width:16px;height:16px;left:2px;}
.noctis-switch--sm .noctis-switch__knob{width:13px;height:13px;left:2px;}
.noctis-switch[aria-checked="true"]{background:hsl(var(--brand-primary));border-color:hsl(var(--brand-primary));}
.noctis-switch[aria-checked="true"] .noctis-switch__knob{background:hsl(var(--brand-foreground));}
.noctis-switch--md[aria-checked="true"] .noctis-switch__knob{left:18px;}
.noctis-switch--sm[aria-checked="true"] .noctis-switch__knob{left:16px;}
.noctis-switch:focus-visible{outline:2px solid hsl(var(--focus-ring)/.5);outline-offset:2px;}
.noctis-switch:disabled{opacity:.45;cursor:not-allowed;}
.noctis-switch-field{display:inline-flex;align-items:flex-start;gap:10px;}
.noctis-switch-field__text{min-width:0;}
.noctis-switch-field__label{font:400 var(--font-body)/1.35 var(--font-ui);color:hsl(var(--text-primary));}
.noctis-switch-field--disabled .noctis-switch-field__label{color:hsl(var(--text-tertiary));}
.noctis-switch-field__helper{font-size:11.5px;line-height:1.4;color:hsl(var(--text-tertiary));margin-top:2px;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-switch-css')) {
  const s = document.createElement('style'); s.id = 'noctis-switch-css'; s.textContent = NOCTIS_SWITCH_CSS;
  document.head.appendChild(s);
}

/**
 * Switch — primitivo base de encendido/apagado del núcleo. Único control de
 * activo/inactivo del sistema: lo consumen backoffice (árbol de entitlements) y
 * commerce (configuración de empresa, activo/inactivo por registro). El track usa
 * el par de marca `{--brand-primary, --brand-foreground}`, así que respeta el
 * acento del tenant donde lo haya y la marca de casa donde no.
 *
 * Accesibilidad: `role="switch"` + `aria-checked`; SIEMPRE requiere nombre
 * accesible (`label` visible, o `aria-label` cuando el nombre está en la fila).
 * `ModeToggle` NO es un Switch: es el control de chrome del modo claro/oscuro y
 * tiene su propio contrato (icono y label fijos, sin estado deshabilitado).
 */
export function Switch({ checked = false, onChange, disabled = false, size = 'md', label, helper, id, className = '', ...rest }) {
  const control = (
    <button
      type="button"
      role="switch"
      id={id}
      aria-checked={!!checked}
      disabled={disabled}
      onClick={() => !disabled && onChange && onChange(!checked)}
      className={['noctis-switch', `noctis-switch--${size}`, className].filter(Boolean).join(' ')}
      {...rest}
    >
      <span className="noctis-switch__knob" aria-hidden="true" />
    </button>
  );
  if (!label) return control;
  return (
    <span className={['noctis-switch-field', disabled ? 'noctis-switch-field--disabled' : ''].filter(Boolean).join(' ')}>
      {React.cloneElement(control, { 'aria-label': undefined, 'aria-labelledby': id ? `${id}-label` : undefined })}
      <span className="noctis-switch-field__text">
        <span className="noctis-switch-field__label" id={id ? `${id}-label` : undefined}>{label}</span>
        {helper && <span className="noctis-switch-field__helper" style={{ display: 'block' }}>{helper}</span>}
      </span>
    </span>
  );
}
