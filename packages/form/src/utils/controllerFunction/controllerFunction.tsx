const controllerFunction = (controller: any, values: any) => {
  if (!controller) return '';

  return new Function('fields', controller || '')(values);
};

export default controllerFunction;
