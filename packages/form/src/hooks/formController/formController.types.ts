import { create } from 'zustand';
import axios from 'axios';

const useFormController = create((set) => ({
  forms: axios,
  setForms: (api: any) => set((state) => ({ api })),
}));

export default useFormController;
