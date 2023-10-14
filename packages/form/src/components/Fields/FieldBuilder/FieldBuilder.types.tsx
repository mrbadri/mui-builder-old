import { FieldValues, RegisterOptions } from 'react-hook-form';
import { TForm } from '../../../hooks/formController/formController.types';
import { TFormId } from '../../Forms/FormBuilder/FormBuilder.types';
import { TApi } from '../../../types/public';

export interface TFieldBuilderProps {
  type: FIELD_TYPE | 'config';
  form: TForm;
  // TODO: change type
  name: string;
  id: string;
  formid: TFormId;
}

export interface TConfig {
  spacing: string | number
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

export interface TController {
  fn: string;
  dependency: string;
}

export interface TFieldProps {
  label?: string;
  type: string;
  api?: TApi;
  id: string;
  rules?: TFieldRules;
  script?: TController;
}
