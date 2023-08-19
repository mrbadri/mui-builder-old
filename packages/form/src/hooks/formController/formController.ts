import { create } from 'zustand';
import axios from 'axios';

const useFormController = create((set) => ({
  fors: axios,
  setApi: (api: any) => set(() => ({ api })),
}));

export default useFormController;
