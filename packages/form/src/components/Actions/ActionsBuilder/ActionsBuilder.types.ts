import { TFormId } from '../../Forms/FormBuilder/FormBuilder.types';
import { TForm } from '../../../hooks/formController/formController.types';
import { SxProps, Theme } from '@mui/material';
import { TApi } from '../../../types/public';

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
  api?: TApi;
  type: ACTION_TYPE;
  title: string;
  formId: TFormId;
  onSuccess?: (responseApi: unknown, form: TForm) => void;
  onError?: (responseApi: unknown, form: TForm) => void;
  // Material Types
  loading?: boolean;
  loadingIndicator?: React.ReactNode;
  gPosition?: 'start' | 'end' | 'center';
  sx?: SxProps<Theme>;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  disabled?: boolean;
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
}
