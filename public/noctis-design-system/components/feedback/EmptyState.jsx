import React from 'react';

/**
 * EmptyState — estado vacío con marca de casa. Aparece SOLO donde no hay tenant
 * (default sin color): el mark grafito/plata de Noctis, título, descripción y una
 * acción primaria opcional. Cero ilustración, cero editorial dentro del shell.
 */
export function EmptyState({ title, description, action, mark = true }) {
  return (
    <div style={{ textAlign: 'center', padding: '16px 10px', border: '1px dashed hsl(var(--border-strong))', borderRadius: 10 }}>
      {mark && (
        <div style={{ width: 40, height: 40, margin: '0 auto 8px', borderRadius: 11, background: 'hsl(var(--text-primary))', display: 'grid', placeItems: 'center' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'hsl(var(--surface-raised))' }} />
        </div>
      )}
      <div style={{ font: '500 17px/1.2 var(--font-ui)', letterSpacing: '-.015em' }}>{title}</div>
      {description && <div style={{ fontSize: 12, color: 'hsl(var(--text-tertiary))', margin: '4px 0 10px' }}>{description}</div>}
      {action}
    </div>
  );
}
