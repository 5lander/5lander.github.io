import * as React from 'react';

/**
 * Toast del núcleo — acotado. Solo éxito efímero de acciones sin resultado visible
 * en pantalla. Los errores NUNCA usan toast (van inline con Alert). Prohibido en POS.
 */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** ms hasta autodismiss (llama onDismiss). @default 4000 */
  autoDismiss?: number;
  onDismiss?: () => void;
}

export function Toast(props: ToastProps): React.JSX.Element;
