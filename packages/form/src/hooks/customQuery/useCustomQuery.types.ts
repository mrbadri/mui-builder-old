import { TApiConfig, TQueryOPtions } from '../../types/public';
import { TForm } from '../formController/formController.types';

export type TUseCustomQueryProps = [TApiConfig, TForm, Omit<TQueryOPtions, 'queryFn'>];
