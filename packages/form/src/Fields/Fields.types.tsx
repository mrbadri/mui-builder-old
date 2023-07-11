import { UseFormReturn, FieldValues } from 'react-hook-form/dist/types';
import { TFieldProps } from './FieldBuilder/FieldBuilder.types';
// #TODO: change types

export interface TListFieldProps {
  [key: string]: TFieldProps
}

export interface TFieldsProps {
  list: TListFieldProps;
  form: UseFormReturn<FieldValues, any, undefined>;
}
