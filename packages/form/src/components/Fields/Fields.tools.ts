import { TFieldProps } from './FieldBuilder/FieldBuilder.types';

export function getEffectiveFields(inputString: string = '', currentFieldName: string) {
  const regex = /fields\.(\w+)/g;
  let match;
  let names = [];

  while ((match = regex.exec(inputString)) !== null) {
    names.push(match[1]);
  }
  names.push(currentFieldName);

  return names;
}

// TODO: change base on form.getValues()
export const getLIstWatch = (fields: any) => {
  const arr: string[][] = [];
  const arrN: string[] = [];

  Object.keys(fields).map((key: string) => {
    const field: TFieldProps = fields[key];

    if (!!field?.script) {
      arrN.push(key);

      arr.push(getEffectiveFields(field?.script?.fn, field.id));
    }
  });

  return Array.from(new Set(arr.flat()));
};
