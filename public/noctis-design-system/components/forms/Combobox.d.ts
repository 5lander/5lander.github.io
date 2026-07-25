import * as React from 'react';

export interface ComboboxOption {
  value: string;
  /** display_name en español — nunca el UUID. */
  label: string;
  /** Metadato mono a la derecha (RUC/CI/SKU). */
  meta?: string;
  /** Resalta la opción con el acento del tenant (p.ej. "Consumidor Final"). */
  accent?: boolean;
}

/**
 * Picker con búsqueda del núcleo. Base de todos los pickers que reemplazan UUID
 * crudos por display_name. Popover flotante con sombra-overlay.
 *
 */
export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  label?: string;
}

export function Combobox(props: ComboboxProps): React.JSX.Element;
