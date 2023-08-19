import { TFormId } from '../Forms/FormBuilder/FormBuilder.types';
import { ACTION_TYPE, TActionBuilderProps } from './ActionsBuilder/ActionsBuilder.types';

export type TListActionProps = {
  [Key in ACTION_TYPE]: TActionBuilderProps;
};

export interface TActionsProps {
  list: TListActionProps;
  formId: TFormId;
}
