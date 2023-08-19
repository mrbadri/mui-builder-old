import { create } from 'zustand';
import axios from 'axios';
import { TConfigState } from './useConfig.types';

export const useConfig = create<TConfigState>((set) => ({
  api: axios,
  setApi: (api: any) => set(() => ({ api })),
}));
