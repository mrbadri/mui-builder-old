import { AxiosRequestConfig } from 'axios';
import { TFormId } from '../../Forms/FormBuilder/FormBuilder.types';
import { TForm } from '../../hooks/formController/formController.types';

// export interface TActionBuilderApi {
//   method: string;
//   url: string;
//   body: object;
//   params: object;
// }

export enum ACTION_TYPE {
  SUBMIT = 'submit',
  RESET = 'reset',
}

export interface TActionBuilderProps {
  api?: AxiosRequestConfig;
  type: ACTION_TYPE;
  title: string;
  formId: TFormId;
  onSuccess?: (responseApi: unknown, form: TForm) => void;
  onError?: (responseApi: unknown, form: TForm) => void;
}
