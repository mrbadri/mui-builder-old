// import { TListActionProps } from '../../Actions/Actions.types';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { TListFieldProps } from '../../Fields/Fields.types';

export interface TFormBuilderProps {
  id: string;
  form?: UseFormReturn<FieldValues, any, undefined>
  fields: TListFieldProps;
  actions: any;
  onSubmit: (data: any) => void;
}

export type TFormId = string;
