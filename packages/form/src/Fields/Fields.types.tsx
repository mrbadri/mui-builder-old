import { TFieldProps } from './FieldBuilder/FieldBuilder.types';
import { TForm } from '../hooks/formController/formController.types';
import { TCol } from '../types/public';

// #TODO: change types

// export interface TListFieldProps {
//   [key: string]: TFieldProps
// }

export type TListFieldProps = Record<string, (TFieldProps & { col?: TCol })>;

export interface TFieldsProps {
  list: TListFieldProps;
  form: TForm;
}