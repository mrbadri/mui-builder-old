import { create } from 'zustand';
import { TFormControllerState } from './formController.types';

const useFormController = create<TFormControllerState>((set) => ({
  forms: {},
  setForm: (formId: string, form: any) => set((state) => ({ forms: { ...state.forms, [formId]: form } })),
}));

export default useFormController;
