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

export type TFieldProps = any;
