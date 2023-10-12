import { create } from 'zustand';
import { TFIeldsState } from './useFieldsStore.type';

const useFieldsStore = create<TFIeldsState>((set) => ({
  fields: {},

  addFields: ({ fields, formId }) => {
    set((state) => ({
      ...state,
      fields: { ...state.fields, [formId]: fields },
    }));
  },

  updateField: ({ formId, id, field }) =>
    set((state) => ({
      ...state,
      fields: {
        ...state.fields,
        [formId]: {
          ...state.fields[formId],
          [id]: { ...state.fields[formId][id], ...field },
        },
      },
    })),

  removeField: ({ formId, id }) => {
    set((state) => {
      const updatedForm = { ...state.fields[formId] };
      delete updatedForm[id];

      return {

        ...state , 
        fields:{

          ...state.fields,
          [formId]: updatedForm,
        }
      };
    });
  },
}));

export default useFieldsStore;
