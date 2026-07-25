import * as React from 'react';

export type AlertTone = 'info' | 'success' | 'warning' | 'danger';

/**
 * Feedback inline dentro de la Card. Los errores viven aquí, nunca en toast.
 * Rol ARIA automático: alert (danger/warning), status (info/success).
 *
 */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "info" */
  tone?: AlertTone;
}

export function Alert(props: AlertProps): React.JSX.Element;
