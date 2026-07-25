import * as React from 'react';

/**
 * Campo de texto del núcleo. El error se muestra SIEMPRE inline bajo el campo
 * (nunca por toast). Con `disabled` toma la superficie sunken.
 *
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Etiqueta sobre el campo. */
  label?: string;
  /** Texto auxiliar bajo el campo (se oculta si hay error). */
  helper?: string;
  /** Mensaje de error inline; activa el borde de peligro y aria-invalid. */
  error?: string;
}

export function Input(props: InputProps): React.JSX.Element;
