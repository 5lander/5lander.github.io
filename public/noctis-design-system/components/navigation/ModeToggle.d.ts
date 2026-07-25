import * as React from 'react';

export type Mode = 'light' | 'dark';

/**
 * Toggle de modo claro/oscuro del chrome. Preferencia de usuario persistida,
 * aplica a ambas apps. El consumidor refleja `mode` en [data-mode] del wrapper.
 */
export interface ModeToggleProps {
  mode?: Mode;
  onToggle?: () => void;
  /** pill (con label) o icon (32×32 topbar). @default "pill" */
  shape?: 'pill' | 'icon';
}

export function ModeToggle(props: ModeToggleProps): React.JSX.Element;
