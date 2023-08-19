import { FieldValues, RegisterOptions} from 'react-hook-form';
import { TForm } from '../../hooks/formController/formController.types';

export interface TFieldBuilderProps {
  type: FIELD_TYPE;
  form: TForm;
  // TODO: change type
  name: string;
}

export enum FIELD_TYPE {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  MULTI_SELECT = 'multiSelect',
  DATE_PICKER = 'datepicker',
  ATTACHEMNT = 'attachment',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  TOGGLE = 'toggle',
}

export type TFieldRules =
  | Omit<RegisterOptions<FieldValues, string>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>
  | undefined;

export interface TFieldProps {
  label?: string;
  type: string;
  name: string;
  rules?: TFieldRules;
  controller?: string;
}
