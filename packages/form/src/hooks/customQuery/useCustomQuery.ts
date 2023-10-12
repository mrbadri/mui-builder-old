import { useConfig } from '../config/useConfig';
import { useQuery } from '@tanstack/react-query';
import { enabledController } from './useCustomQuery.tools';
import { TUseCustomQueryProps } from './useCustomQuery.types';
import convertFunction from '../../utils/convertFuunction/convertFuunction';
import handleQueryFn from '../../utils/handleQueryFn/handleQueryFn';
import useFormController from '../formController/formController';

const useCustomQuery = (...args: TUseCustomQueryProps) => {
  const [config, formId, options] = args;
  const { enabled, onSuccess, onError, ...otherOptons } = options || {};

  const { formControllers } = useFormController();
  const controller = formControllers[formId];

  const { api } = useConfig();

  return useQuery({
    queryFn: () => {
      handleQueryFn({ api, config, controller });
    },
    onSuccess: (res: any) => {
      convertFunction(onSuccess, 'res', 'controller')(res, controller);
    },
    onError: (res: any) => {
      convertFunction(onError, 'res', 'controller')(res, controller);
    },
    enabled: enabledController(enabled, controller?.form)(),
    ...otherOptons,
  });
};

export default useCustomQuery;
