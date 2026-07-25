import * as React from 'react';

/** Nombres Lucide disponibles en el set del núcleo. Se amplía en Icon.jsx. */
export type IconName =
  | 'globe'
  | 'package' | 'shopping-cart' | 'receipt' | 'users' | 'tag' | 'tags'
  | 'warehouse' | 'truck' | 'file-text' | 'wallet' | 'landmark'
  | 'chart-column' | 'banknote' | 'settings' | 'building-2' | 'shield-check'
  | 'store' | 'chevrons-left' | 'chevrons-right'
  | 'search' | 'scan-barcode' | 'trash-2' | 'x' | 'plus' | 'minus' | 'user-round' | 'log-out';

/** Ids de módulo del universo objetivo (commerce + backoffice). El mapa vive en el sistema. */
export type ModuleId =
  | 'pos' | 'ventas' | 'clientes' | 'productos' | 'categorias' | 'precios'
  | 'inventario' | 'compras' | 'facturacion' | 'tesoreria' | 'contabilidad'
  | 'reportes' | 'nomina' | 'config.empresa' | 'config.usuarios' | 'administracion';

/**
 * Icon — iconografía del núcleo (Lucide, line, un solo peso). Decisión de SISTEMA:
 * ambas apps heredan el mismo set y el mismo mapa módulo→ícono. Nunca filled con line.
 */
export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Nombre Lucide directo. */
  name?: IconName;
  /** Id de módulo — resuelve al ícono del sistema (usar en sidebars). */
  module?: ModuleId;
  /** Grilla 16 · 20 · 24. @default 20 */
  size?: number;
  /** Peso de trazo (1.5–2). @default 2 */
  strokeWidth?: number;
  /** Nombre accesible; sin él, el ícono es aria-hidden. */
  title?: string;
}

export function Icon(props: IconProps): React.JSX.Element | null;
