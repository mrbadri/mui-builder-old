import { TFormId } from '../Forms/FormBuilder/FormBuilder.types';
import { ACTION_TYPE, TActionBuilderProps } from './ActionsBuilder/ActionsBuilder.types';

export type TListActionProps = Record<ACTION_TYPE, Omit<TActionBuilderProps, 'formId'>>;

export interface TActionsProps {
  list: TListActionProps;
  formId: TFormId;
}
