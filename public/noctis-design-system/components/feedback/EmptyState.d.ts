import * as React from 'react';

/**
 * Estado vacío con marca de casa Noctis. Solo para el default sin tenant.
 *
 */
export interface EmptyStateProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Acción primaria (normalmente un <Button>). */
  action?: React.ReactNode;
  /** Muestra el mark grafito/plata. @default true */
  mark?: boolean;
}

export function EmptyState(props: EmptyStateProps): React.JSX.Element;
