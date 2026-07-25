import * as React from 'react';

export interface ShellNavItem {
  label: React.ReactNode;
  /** Ítem activo — único uso del acento del tenant en el chrome. */
  active?: boolean;
  /** Pill a la derecha (p.ej. "Pronto"). */
  badge?: React.ReactNode;
  disabled?: boolean;
  /** Sub-ítems indentados. */
  children?: React.ReactNode[];
}

export interface ShellNavGroup {
  section?: string;
  items: ShellNavItem[];
}

/**
 * Esqueleto de aplicación compartido (topbar + sidebar + slots). El chrome es
 * neutro de casa; solo el ítem de nav activo usa el acento. Cada app llena los
 * slots (logo tenant, CompanySelector) distinto.
 *
 */
export interface ShellProps {
  /** Slot de logo del tenant (arriba-izquierda). */
  tenantLogo?: React.ReactNode;
  /** Slot de selector de empresa (commerce). */
  companySelector?: React.ReactNode;
  /** Texto de usuario/contexto en el topbar. */
  user?: React.ReactNode;
  mode?: 'light' | 'dark';
  onToggleMode?: () => void;
  onLogout?: () => void;
  nav?: ShellNavGroup[];
  footerLegal?: React.ReactNode;
  children?: React.ReactNode;
}

export function Shell(props: ShellProps): React.JSX.Element;
