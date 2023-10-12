import { TFormId } from '../../components/Forms/FormBuilder/FormBuilder.types';
import { TActionsState } from '../useActionsStore/useActionsStore.types';
import { TFIeldsState } from '../useFieldsStore/useFieldsStore.type';
import { TFormState } from '../useFormsStore/useFieldsStore.types';

export type TController = TFormState & TFIeldsState & TActionsState & { formId: TFormId };
