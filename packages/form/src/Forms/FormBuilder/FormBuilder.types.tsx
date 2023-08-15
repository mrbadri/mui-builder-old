// import { TListActionProps } from '../../Actions/Actions.types';
import { TListFieldProps } from '../../Fields/Fields.types';

export interface TFormBuilderProps {
  list?: any;
  fields: TListFieldProps;
  actions: any;
  onSubmit: (data: any) => void;
}
