import { AxiosRequestConfig } from 'axios';
import { TForm } from '../formController/formController.types';
import { UseQueryOptions } from '@tanstack/react-query';

export interface TUseCustomQueryProps {
  apiConfig: AxiosRequestConfig<any>;
  options: Omit<UseQueryOptions<unknown, any, any, any>, 'initialData'> & {
    initialData?: (() => undefined) | undefined;
    onError?: (data: any) => void;
    onSuccess?: (data: any) => void;
  };
  form: TForm;
}
