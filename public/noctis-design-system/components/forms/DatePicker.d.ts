import * as React from 'react';

/**
 * DatePicker localizado es-EC: formato DD/MM/YYYY, semana con lunes primero,
 * meses en español. El día seleccionado toma el acento del tenant.
 *
 */
export interface DatePickerProps {
  /** Fecha seleccionada. */
  value?: Date;
  onChange?: (date: Date) => void;
  label?: string;
}

export function DatePicker(props: DatePickerProps): React.JSX.Element;
