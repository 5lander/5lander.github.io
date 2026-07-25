import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'danger-ghost';
export type ButtonSize = 'md' | 'sm';

/**
 * Botón del núcleo Noctis. `primary` porta el acento quirúrgico del tenant; el resto
 * es neutro de casa o semántico. Nunca uses color decorativo fuera de estas variantes.
 *
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Rol visual. `primary` = acento del tenant. @default "primary" */
  variant?: ButtonVariant;
  /** md (control-h) o sm (control-h-sm). @default "md" */
  size?: ButtonSize;
  /** Muestra spinner y bloquea el botón. @default false */
  loading?: boolean;
}

export function Button(props: ButtonProps): React.JSX.Element;
