import * as React from 'react';

export type WordmarkSize = 'sm' | 'md' | 'lg';

/**
 * Marca de plataforma Noctis (mark grafito + punto de plata + wordmark). Identidad
 * de casa, distinta del logo del tenant. Solo aparece donde no hay tenant.
 *
 */
export interface WordmarkProps {
  /** @default "md" */
  size?: WordmarkSize;
  /** Mostrar el texto "Noctis Commerce". @default true */
  showName?: boolean;
  /** Invertir para superficies negras (login, sin tenant). @default false */
  onDark?: boolean;
}

export function Wordmark(props: WordmarkProps): React.JSX.Element;
