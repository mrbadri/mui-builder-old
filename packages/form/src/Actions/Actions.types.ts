import { TFormId } from '../Forms/FormBuilder/FormBuilder.types';
import { TCol } from '../types/public';
import { ACTION_TYPE, TActionBuilderProps } from './ActionsBuilder/ActionsBuilder.types';

export type TListActionProps = Record<ACTION_TYPE, Omit<TActionBuilderProps & { col?: TCol }, 'formId'>>;

export interface TActionsProps {
  list: TListActionProps;
  formId: TFormId;
}
