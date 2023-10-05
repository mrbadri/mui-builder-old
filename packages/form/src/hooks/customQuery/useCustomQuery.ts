import { useConfig } from '../config/useConfig';
import { useQuery } from '@tanstack/react-query';
import { enabledController } from './useCustomQuery.tools';
import { TUseCustomQueryProps } from './useCustomQuery.types';
import convertFunction from '../../utils/convertFuunction/convertFuunction';
import handleQueryFn from '../../utils/handleQueryFn/handleQueryFn';

const useCustomQuery = (...args: TUseCustomQueryProps) => {
  const [ApiConfig, form, options] = args;
  const { enabled, onSuccess, onError, ...otherOptons } = options || {};

  const { api } = useConfig();

  return useQuery({
    queryFn: () => {
      handleQueryFn({ api, ApiConfig, form });
    },
    onSuccess: (res: any) => {
      convertFunction(onSuccess, 'res', 'form')(res, form);
    },
    onError: (res: any) => {
      convertFunction(onError, 'res', 'form')(res, form);
    },
    enabled: enabledController(enabled, form)(),
    ...otherOptons,
  });
};

export default useCustomQuery;
