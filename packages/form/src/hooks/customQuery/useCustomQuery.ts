import { useConfig } from '../config/useConfig';
import { useQuery } from '@tanstack/react-query';
import { enabledController } from './useCustomQuery.tools';
import { TUseCustomQueryProps } from './useCustomQuery.types';
import convertFunction from '../../utils/convertFuunction/convertFuunction';

const useCustomQuery = ({ apiConfig, options, form }: TUseCustomQueryProps) => {
  const { api } = useConfig();
  const { enabled , onSuccess, onError, ...otherOptons } = options;

  return useQuery({
    queryFn: () => {
      api(apiConfig);
    },
    onSuccess: (res: any) => {
      convertFunction(onSuccess, 'res', 'form')(res, form);
    },
    onError: (res: any) => {
      convertFunction(onError, 'res', 'form')(res, form);
    },
    enabled: enabledController(enabled, form),
    ...otherOptons,
  });
};

export default useCustomQuery;
