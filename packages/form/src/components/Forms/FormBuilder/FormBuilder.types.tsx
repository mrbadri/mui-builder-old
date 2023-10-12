import { TListActionProps } from '../../Actions/Actions.types';
import { TListFieldProps } from '../../Fields/Fields.types';
import { TForm } from '../../../hooks/formController/formController.types';
import { GridBaseProps } from '@mui/system/Unstable_Grid';


export interface TConfigFormBuilder {
  layout?: GridBaseProps
}

export interface TFormBuilderProps {
  formId?: TFormId;
  form?: TForm,
  fields: TListFieldProps;
  actions: TListActionProps;
  onSubmit?: (data: any) => void;
  config?: TConfigFormBuilder;
}

export type TFormId = string;
