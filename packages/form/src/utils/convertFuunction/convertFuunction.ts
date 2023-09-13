import { TConvertFunctionProps } from './convertFuunction.types';

const convertFunction = (fn: TConvertFunctionProps) => {
  if (!fn)
    return () => {
      return {};
    };

  if (typeof fn === 'function') return fn;

  return new Function('fields' , "form", fn);
};

export default convertFunction;
