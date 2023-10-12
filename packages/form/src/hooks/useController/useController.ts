import useFieldsStore from '../useFieldsStore/useFieldsStore';
import useFromsStore from '../useFormsStore/useFormsStore';
import useActionsStore from '../useActionsStore/useActionsStore';
import { TFormId } from '../../components/Forms/FormBuilder/FormBuilder.types';

const useController = (formId: TFormId) => {
  // TODO: #controller add useConfigStore
  return { ...useFieldsStore(), ...useFromsStore(), ...useActionsStore(), formId };
};

export default useController;
