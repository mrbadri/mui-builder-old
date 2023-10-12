import { create } from 'zustand';
import { TActionsState } from './useActionsStore.types';

const useActionsStore = create<TActionsState>((set) => ({
  actions: {},

  addActions: ({ actions, formId }) => {
    console.log({ actions, formId });

    set((state) => ({
      ...state,
      actions: { ...state.actions, [formId]: actions },
    }));
  },

  updateAction: ({ formId, id, action }) =>
    set((state) => ({
      ...state.actions,
      [formId]: {
        ...state.actions[formId],
        [id]: { ...state.actions[formId][id], ...action },
      },
    })),

  removeAction: ({ formId, id }) => {
    set((state) => {
      const updatedForm = { ...state.actions[formId] };
      delete updatedForm[id];

      return {
        ...state,
        actions: {
          ...state.actions,
          [formId]: updatedForm,
        },
      };
    });
  },
}));

export default useActionsStore;
