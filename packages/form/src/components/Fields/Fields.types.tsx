import { TFieldProps } from './FieldBuilder/FieldBuilder.types';
import { TCol } from '../../types/public';
import { TFormId } from '../Forms/FormBuilder/FormBuilder.types';

// #TODO: change types

// export interface TListFieldProps {
//   [key: string]: TFieldProps
// }

export type TListFieldProps = Record<string, Omit<(TFieldProps & { col?: TCol }), 'id'>>;

export interface TFieldsProps {
  formId: TFormId
}
