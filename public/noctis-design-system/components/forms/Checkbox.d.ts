import * as React from 'react';

export type CheckboxSize = 'sm' | 'md';

/**
 * Checkbox tri-estado del núcleo. `indeterminate` (→ `aria-checked="mixed"`) es el
 * padre parcialmente marcado de una jerarquía.
 *
 */
export interface CheckboxProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'children'> {
  checked?: boolean;
  /** Tercer estado: gana sobre `checked`. */
  indeterminate?: boolean;
  /** Recibe el valor propuesto (desde indeterminate, `true`). */
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  size?: CheckboxSize;
  /** Etiqueta visible. Sin ella, pase `aria-label`. */
  label?: React.ReactNode;
  id?: string;
}

export declare function Checkbox(props: CheckboxProps): React.ReactElement;
