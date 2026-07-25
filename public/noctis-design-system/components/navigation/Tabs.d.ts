import * as React from 'react';

export interface TabItem {
  id: string;
  label: React.ReactNode;
}

/**
 * Tabs del núcleo; la pestaña activa porta el acento del tenant (nav activo).
 *
 */
export interface TabsProps {
  tabs: TabItem[];
  /** id de la pestaña activa. */
  value: string;
  onChange?: (id: string) => void;
}

export function Tabs(props: TabsProps): React.JSX.Element;
