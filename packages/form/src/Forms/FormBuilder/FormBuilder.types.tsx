import { TFieldProps } from '../../Fields/FieldBuilder/FieldBuilder.types';

export interface TFormBuilderProps {
  fields: TFieldProps[];
  onSubmit: (data: any) => void;
}
