import { create } from 'zustand';
import { TFormState } from './useFieldsStore.types';

const useFromsStore = create<TFormState>((set) => ({
  forms: {},

  addForms: ({ formId, form }) => {
    set((state) => ({
      ...state,
      forms: {
        ...state.forms,
        [formId]: form,
      },
    }));
  },
}));

export default useFromsStore;
