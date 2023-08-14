import { ACTION_TYPE, TActionBuilderProps } from './ActionsBuilder/ActionsBuilder.types';

export interface TActionsProps {
  list: { [key in ACTION_TYPE]: TActionBuilderProps };
}
