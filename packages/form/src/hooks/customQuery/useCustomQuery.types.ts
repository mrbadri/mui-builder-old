import { TFormId } from '../../components/Forms/FormBuilder/FormBuilder.types';
import { TApiConfig, TQueryOPtions } from '../../types/public';

export type TUseCustomQueryProps = [TApiConfig, TFormId, Omit<TQueryOPtions, 'queryFn'>?];
