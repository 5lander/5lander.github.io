import React from 'react';

/**
 * ModeToggle — vive en el chrome. Alterna claro/oscuro; es preferencia de USUARIO,
 * persistida, y aplica a ambas apps. El círculo del switch usa el acento del tenant.
 * Forma `pill` (con label) o `icon` (cuadrado 32×32 para topbar).
 */
export function ModeToggle({ mode = 'light', onToggle, shape = 'pill' }) {
  const isDark = mode === 'dark';
  const icon = isDark ? '☾' : '☀';
  if (shape === 'icon') {
    return (
      <button
        type="button"
        onClick={onToggle}
        aria-label="Cambiar modo claro/oscuro"
        style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', cursor: 'pointer' }}
      >{icon}</button>
    );
  }
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Cambiar modo claro/oscuro"
      onClick={onToggle}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 36, padding: '0 6px 0 14px', borderRadius: 999, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', font: '500 12px/1 var(--font-ui)', cursor: 'pointer' }}
    >
      <span>{isDark ? 'Oscuro' : 'Claro'}</span>
      <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'hsl(var(--brand-primary))', color: 'hsl(var(--brand-foreground))', display: 'grid', placeItems: 'center', fontSize: 13 }}>{icon}</span>
    </button>
  );
}
