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

    if (!!field?.controller) {
      console.log({ field });

      arrN.push(key);

      arr.push(getEffectiveFields(field?.controller?.fn, field.id));
    }
  });

  console.log({ arrN  , old: Array.from(new Set(arr.flat()))});

  return Array.from(new Set(arr.flat()));
};
