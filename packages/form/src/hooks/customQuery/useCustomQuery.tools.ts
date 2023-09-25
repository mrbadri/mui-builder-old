import convertFunction from '../../utils/convertFuunction/convertFuunction';
import { TForm } from '../formController/formController.types';

export const enabledController = (input: boolean | string | undefined, form: TForm) => {
  return typeof input === 'boolean' ? () => input : convertFunction(input, 'form')(form);
};
