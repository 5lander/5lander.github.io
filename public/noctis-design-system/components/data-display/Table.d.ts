import * as React from 'react';

export interface TableColumn {
  /** Clave de la celda en cada fila. */
  key: string;
  /** Encabezado. */
  label: React.ReactNode;
  /** Alinea a la derecha + números tabulares. */
  numeric?: boolean;
  /** Alineación forzada. */
  align?: 'left' | 'right';
}

/**
 * Tabla de trabajo del núcleo. Paginación por keyset ("Cargar más"): sin números
 * de página ni total. Las celdas aceptan nodos (pills, botones, MoneyDisplay).
 *
 */
export interface TableProps {
  columns: TableColumn[];
  /** Filas como objetos indexados por column.key. */
  rows: Record<string, React.ReactNode>[];
  /** Nota al pie a la izquierda. */
  footNote?: React.ReactNode;
  /** Si se pasa, muestra el botón "Cargar más". */
  onLoadMore?: () => void;
  loadMoreLabel?: string;
  /** Ancho mínimo antes de scroll horizontal. @default 640 */
  minWidth?: number;
}

export function Table(props: TableProps): React.JSX.Element;
