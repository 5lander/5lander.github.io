import * as React from 'react';

export type SkeletonVariant = 'line' | 'block' | 'pill';

/**
 * Placeholder con shimmer para contenido de forma conocida (evita el salto de
 * layout). Para acciones puntuales sin layout usa Spinner.
 */
export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** line (texto) · block (bloque) · pill (estado). @default "line" */
  variant?: SkeletonVariant;
  width?: number | string;
  height?: number | string;
}

export function Skeleton(props: SkeletonProps): React.JSX.Element;
