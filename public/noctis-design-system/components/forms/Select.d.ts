import * as React from 'react';

export type SelectOption = string | { value: string; label: string };

/**
 * Select nativo simple del núcleo, con chevron propio. Para pickers con búsqueda
 * (cliente, producto→variante, bodega) usa Combobox, que reemplaza los UUID crudos.
 *
 */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Opciones; string o {value,label}. Ignorado si pasas children <option>. */
  options?: SelectOption[];
}

export function Select(props: SelectProps): React.JSX.Element;
