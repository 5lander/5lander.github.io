import React from 'react';

const SIZES = { sm: [24, 8, 14], md: [26, 9, 15], lg: [34, 12, 19] };

/**
 * Wordmark — marca de plataforma Noctis: mark grafito con punto de plata + wordmark.
 * Identidad de casa (negro y plata, disciplina de hardware). NO es el logo del
 * tenant: el shell tiene además un slot de logo de tenant variable. `onDark` invierte
 * para el "momento negro" (login, sin tenant).
 */
export function Wordmark({ size = 'md', showName = true, onDark = false }) {
  const [box, dot, fs] = SIZES[size] || SIZES.md;
  const markBg = onDark ? '#E5E5EA' : 'hsl(var(--text-primary))';
  const dotBg = onDark ? '#1C1C1E' : 'hsl(var(--surface-raised))';
  const nameColor = onDark ? '#F5F5F7' : 'hsl(var(--text-primary))';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <span style={{ width: box, height: box, borderRadius: box * 0.27, background: markBg, display: 'grid', placeItems: 'center', flex: 'none' }}>
        <span style={{ width: dot, height: dot, borderRadius: '50%', background: dotBg }} />
      </span>
      {showName && <span style={{ font: `600 ${fs}px/1 var(--font-ui)`, letterSpacing: '-.02em', color: nameColor }}>Noctis Commerce</span>}
    </span>
  );
}
