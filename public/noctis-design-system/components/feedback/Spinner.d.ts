import * as React from 'react';

export type SpinnerSize = 'sm' | 'md' | 'lg';

/**
 * Spinner del núcleo para acción puntual sin layout. Para reemplazar contenido con
 * forma conocida (listas, tablas, detalle) usa Skeleton, no Spinner.
 */
export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "md" */
  size?: SpinnerSize;
  /** Nombre accesible. @default "Cargando…" */
  label?: string;
}

export function Spinner(props: SpinnerProps): React.JSX.Element;
