import React from 'react';

/**
 * Card — superficie plana del núcleo. Elevación por BORDE, no por sombra (la casa
 * prefiere bordes finos; solo lo flotante recibe --shadow-overlay). Radio 12.
 * Opcionalmente lleva header y footer separados por borde.
 */
export function Card({ header, footer, pad = true, children, className = '', style, ...rest }) {
  return (
    <div
      className={className}
      style={{ background: 'hsl(var(--surface-raised))', border: '1px solid hsl(var(--border-subtle))', borderRadius: 'var(--radius-card)', overflow: 'hidden', ...style }}
      {...rest}
    >
      {header && (
        <div style={{ padding: '10px 14px', borderBottom: '1px solid hsl(var(--border-subtle))', font: '600 12px/1.3 var(--font-ui)', letterSpacing: '.05em', textTransform: 'uppercase', color: 'hsl(var(--text-tertiary))' }}>{header}</div>
      )}
      <div style={pad ? { padding: 16 } : undefined}>{children}</div>
      {footer && (
        <div style={{ padding: '10px 16px', borderTop: '1px solid hsl(var(--border-subtle))', font: '400 11px/1.4 var(--font-ui)', color: 'hsl(var(--text-tertiary))' }}>{footer}</div>
      )}
    </div>
  );
}
