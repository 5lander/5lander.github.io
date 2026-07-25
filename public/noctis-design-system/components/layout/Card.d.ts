import * as React from 'react';

/**
 * Superficie plana del núcleo (elevación por borde). Header/footer opcionales.
 *
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Barra superior (label en mayúsculas). */
  header?: React.ReactNode;
  /** Barra inferior (texto auxiliar). */
  footer?: React.ReactNode;
  /** Padding interno del cuerpo. @default true */
  pad?: boolean;
}

export function Card(props: CardProps): React.JSX.Element;
