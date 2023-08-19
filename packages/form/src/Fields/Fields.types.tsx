import { TFieldProps } from './FieldBuilder/FieldBuilder.types';
import { TForm } from '../hooks/formController/formController.types';

// #TODO: change types

export interface TListFieldProps {
  [key: string]: TFieldProps
}

export interface TFieldsProps {
  list: TListFieldProps;
  form: TForm;
}
