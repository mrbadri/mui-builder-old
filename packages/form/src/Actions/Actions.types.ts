import { TActionBuilderProps } from './ActionsBuilder/ActionsBuilder.types';

export interface TListActionProps {
  // TODO: handle key type in ACTION_TYPE
  [key: string]: TActionBuilderProps;
}

export interface TActionsProps {
  // TODO: #type base on TActionBuilderProps list
  list: TListActionProps;
  // list: { [key in ACTION_TYPE]: TActionBuilderProps };
}
