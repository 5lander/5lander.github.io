import * as React from 'react';

/**
 * Teclado numérico del núcleo para el POS táctil. Teclas 64×64, 3×4, teclado físico
 * soportado, feedback scale+color al presionar. No depende del teclado del sistema.
 *
 */
export interface NumericKeypadProps {
  /** Valor controlado (string de dígitos). Omitir para modo no controlado. */
  value?: string;
  onChange?: (value: string) => void;
  /** Máximo de dígitos. @default 9 */
  maxLength?: number;
}

export function NumericKeypad(props: NumericKeypadProps): React.JSX.Element;
