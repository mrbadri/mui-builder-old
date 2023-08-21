import { TListActionProps } from '../../Actions/Actions.types';
import { TListFieldProps } from '../../Fields/Fields.types';
import { TForm } from '../../hooks/formController/formController.types';


export interface TFormBuilderProps {
  id?: string;
  form?: TForm,
  fields: TListFieldProps;
  actions: TListActionProps;
  onSubmit?: (data: any) => void;
}

export type TFormId = string;
