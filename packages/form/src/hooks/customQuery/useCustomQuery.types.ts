import { TFormId } from '../../components/Forms/FormBuilder/FormBuilder.types';
import { TApiConfig, TQueryOPtions } from '../../types/public';

export type TEnabled = boolean | string;

export type TQuery = Omit<TQueryOPtions, 'queryFn' | 'enabled'> & { enabled?: TEnabled };

export type TUseCustomQueryProps = [TApiConfig, TFormId, TQuery?];
