import { AxiosStatic } from 'axios';
import { ReactNode } from 'react';

export interface TConfigProviderProps {
  children: ReactNode;
  //TODO: this type must be dynamic
  api?: AxiosStatic;
}
