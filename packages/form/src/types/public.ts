import { UseQueryOptions } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export interface TCol {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

export type TQuery = Omit<UseQueryOptions, 'initialData'> & { initialData?: () => undefined };

export type TQueryOPtions = Omit<UseQueryOptions<unknown, any, any, any>, 'initialData' | 'onError' | 'onSuccess' | 'enabled'> & {
  initialData?: (() => undefined) | undefined;
  onError?: string | ((data: any) => void);
  onSuccess?: string | ((data: any) => void);
  enabled?: string | boolean;
};

export type TApiConfig = AxiosRequestConfig<any>;

export interface TApi {
  config: AxiosRequestConfig;
  query?: Omit<TQueryOPtions, 'queryFn'>;
}


export type TForm = UseFormReturn<FieldValues, any, undefined>;
