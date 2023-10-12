import { TFieldProps } from '../../components/Fields/FieldBuilder/FieldBuilder.types';
import { TListFieldProps } from '../../components/Fields/Fields.types';
import { TFormId } from '../../components/Forms/FormBuilder/FormBuilder.types';
import { TCol } from '../../types/public';

export interface TUpdateFieldProps {
  formId: TFormId;
  id: string;
  field: TFieldProps & { col?: TCol };
}

export interface TAddFieldsProps {
  formId: TFormId;
  fields: TListFieldProps;
}

export interface TRemoveFieldsProps {
  formId: TFormId;
  id: string;
}

export type TFIeldsState = {
  fields: Record<string, TListFieldProps>;
  addFields: (props: TAddFieldsProps) => void;
  updateField: (props: TUpdateFieldProps) => void;
  removeField: (props: TRemoveFieldsProps) => void;
};
