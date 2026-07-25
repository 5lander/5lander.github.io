import * as React from 'react';

export type MoneySize = 'sm' | 'md' | 'lg' | 'display';

/**
 * Monto con números tabulares, alineado a la derecha, formato es-EC ($1.234,56).
 * Negativos en rojo. `null`/`undefined` = "Sin precio" (nunca $0).
 *
 */
export interface MoneyDisplayProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Valor en dólares; null/undefined = precio ausente. */
  value: number | null | undefined;
  /** sm 14 · md 20 · lg 26 · display 40 (hero: total/vuelto del cobro). @default "md" */
  size?: MoneySize;
}

export function MoneyDisplay(props: MoneyDisplayProps): React.JSX.Element;
