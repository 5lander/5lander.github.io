import * as React from 'react';

export type SwitchSize = 'sm' | 'md';

/**
 * Primitivo de encendido/apagado del núcleo (activo/inactivo, habilitar/deshabilitar).
 * El track usa el par de marca. No confundir con `ModeToggle` (chrome del modo).
 *
 */
export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'children'> {
  /** Estado encendido. */
  checked?: boolean;
  /** Recibe el nuevo valor. */
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  size?: SwitchSize;
  /** Etiqueta visible a la derecha. Sin ella, pase `aria-label`. */
  label?: React.ReactNode;
  /** Texto secundario bajo la etiqueta. */
  helper?: React.ReactNode;
  id?: string;
}

export declare function Switch(props: SwitchProps): React.ReactElement;
