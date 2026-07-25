import * as React from 'react';

export type BadgeTone = 'neutral' | 'success' | 'info' | 'warning' | 'danger' | 'terminal' | 'brand';

/**
 * Pill de estado del núcleo. Los tonos semánticos son estables; solo `brand` porta
 * el acento del tenant. `terminal` = estado cancelado/anulado (contorno neutro).
 *
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Rol del estado. @default "neutral" */
  tone?: BadgeTone;
  /** Punto de estado a la izquierda (p.ej. "● Activa"). @default false */
  dot?: boolean;
}

export function Badge(props: BadgeProps): React.JSX.Element;
