import { TActionsProps } from '../../Actions/Actions.types';
import { TListFieldProps } from '../../Fields/Fields.types';

export interface TFormBuilderProps {
  fields: TListFieldProps;
  onSubmit: (data: any) => void;
  actions: TActionsProps;
}
