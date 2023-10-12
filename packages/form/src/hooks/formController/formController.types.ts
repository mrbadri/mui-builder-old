import { FieldValues, UseFormReturn } from 'react-hook-form';
import { TListFieldProps } from '../../components/Fields/Fields.types';
import { TListActionProps } from '../../components/Actions/Actions.types';
import { TConfigFormBuilder } from '../../components/Forms/FormBuilder/FormBuilder.types';

export type TForm = UseFormReturn<FieldValues, any, undefined>;

export interface TFormControllerValue {
  form: TForm;
  fields: TListFieldProps;
  actions: TListActionProps;
  config: TConfigFormBuilder;
  updateField?: (formId: string, fieldId: any, field: any) => void;
}

export type TFormControllerState = {
  formControllers: Record<string, TFormControllerValue>;
  setForm: (key: string, form: TFormControllerValue) => void;
  updateField: (formId: string, fieldId: any, field: any) => void;
};
