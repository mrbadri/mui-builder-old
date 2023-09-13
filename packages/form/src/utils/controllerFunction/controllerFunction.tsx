const controllerFunction = (controller: any, values: any) => {
  if (!controller) return '';

  if (typeof controller === "function") return controller;

  return new Function('fields', controller)(values);
};

export default controllerFunction;
