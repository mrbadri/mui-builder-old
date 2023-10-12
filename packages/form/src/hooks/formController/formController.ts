import { create } from 'zustand';
import { TFormControllerState } from './formController.types';

const useFormController = create<TFormControllerState>((set) => ({
  formControllers: {},
  setForm: (formId, formController) => {
    console.log('input', { formController });

    set((state) => ({
      formControllers: { ...state.formControllers, [formId]: { ...formController, updateField: state.updateField , formId } },
    }));
  },
  updateField: (formId, fieldId, field) =>
    set((state) => ({
      formControllers: {
        ...state.formControllers,
        [formId]: {
          ...state.formControllers[formId],
          fields: {
            ...state.formControllers[formId].fields,
            [fieldId]: { ...state.formControllers[formId].fields[fieldId], ...field },
          },
        },
      },
    })),
}));

export default useFormController;
