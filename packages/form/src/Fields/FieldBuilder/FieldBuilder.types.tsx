import { FieldValues, RegisterOptions, UseFormReturn } from 'react-hook-form';

export interface TFieldBuilderProps {
  type: FIELD_TYPE;
  form: UseFormReturn<FieldValues, any, undefined>;
  // TODO: change type
  name: string;
}

export enum FIELD_TYPE {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  MULTI_SELECT = 'multiSelect',
  DATE_PICK = 'datePicker',
  ATTACHEMNT = 'attachment',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  TOGGLE = 'toggle',
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
