import { UseFormReturn, FieldValues } from 'react-hook-form/dist/types';
import { TFieldProps } from './FieldBuilder/FieldBuilder.types';
// #TODO: change types
export interface TFieldsProps {
  list: TFieldProps[];
  form: UseFormReturn<FieldValues, any, undefined>;
}
