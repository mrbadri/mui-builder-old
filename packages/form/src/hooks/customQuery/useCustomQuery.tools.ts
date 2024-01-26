import convertFunction from '../../utils/convertFunction/convertFunction';
import { TController } from '../useController/useController.types';

export const enabledController = (enabled: boolean | string | undefined = false, controller: TController) => {
  return typeof enabled === 'boolean' ? () => enabled : () => convertFunction(enabled, 'controller')(controller);
};
