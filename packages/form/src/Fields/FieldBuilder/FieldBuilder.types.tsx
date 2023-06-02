import { FieldValues, RegisterOptions } from 'react-hook-form';

export interface TFieldBuilderProps {
  type: FIELD_TYPE;
}

export enum FIELD_TYPE {
  TEXT = 'text',
  SELECT = 'select',
  MULTI_SELECT = 'multiSelect',
  DATE_PICK = 'datePicker',
  ATTACHEMNT = 'attachment',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  TOGGLE = 'toggle',
  TEXTAREA = 'textarea',
}

export interface TFieldProps {
  label: string;
  type: string;
  name: string;
  rules:
    | Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>
    | undefined;
  controller?: string;
}
