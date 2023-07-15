import { create } from 'zustand';
import axios from 'axios';

export const useConfig = create((set) => ({
  api: axios,
  setApi: (api: any) => set(() => ({ api })),
}));
