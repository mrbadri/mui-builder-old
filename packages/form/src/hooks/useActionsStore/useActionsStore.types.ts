import { TListActionProps } from '../../components/Actions/Actions.types';
import { TActionBuilderProps } from '../../components/Actions/ActionsBuilder/ActionsBuilder.types';
import { TFormId } from '../../components/Forms/FormBuilder/FormBuilder.types';
import { TCol } from '../../types/public';

export interface TUpdateActionProps {
  formId: TFormId;
  id: string;
  action: TActionBuilderProps & { col?: TCol };
}

export interface TAddActionsProps {
  formId: TFormId;
  actions: TListActionProps;
}

export interface TRemoveActionsProps {
  formId: TFormId;
  id: string;
}

export type TActionsState = {
  actions: Record<string, TListActionProps>;
  addActions: (props: TAddActionsProps) => void;
  updateAction: (props: TUpdateActionProps) => void;
  removeAction: (props: TRemoveActionsProps) => void;
};
