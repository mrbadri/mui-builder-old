import { AxiosStatic } from 'axios';

export interface TConfigState {
  api: AxiosStatic;
  setApi: (api: AxiosStatic) => void;
}
