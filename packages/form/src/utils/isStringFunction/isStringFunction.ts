const isStringFunction = (fn: string) => {
  return fn.includes('return');
};

export default isStringFunction;
