import * as React from 'react';

/**
 * Sheet — el primitivo de overlay del núcleo. Centrado en desktop, bottom-sheet en
 * táctil. Solo flujos multi-paso o de foco. Las confirmaciones destructivas NO se
 * mudan aquí: siguen con confirm inline de 2 pasos.
 *
 */
export interface SheetProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  /** center (desktop) o bottom (táctil). @default "center" */
  placement?: 'center' | 'bottom';
  children?: React.ReactNode;
  /** Zona de acciones al pie (normalmente botones). */
  footer?: React.ReactNode;
}

export function Sheet(props: SheetProps): React.JSX.Element | null;
