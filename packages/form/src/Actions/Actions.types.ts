import { ACTION_TYPE, TActionBuilderProps } from './ActionsBuilder/ActionsBuilder.types';

export type TListActionProps = {
  [Key in ACTION_TYPE]: TActionBuilderProps;
};

export interface TActionsProps {
  // TODO: #type base on TActionBuilderProps list
  list: TListActionProps;
  // list: { [key in ACTION_TYPE]: TActionBuilderProps };
}
