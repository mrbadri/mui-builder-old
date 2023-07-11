import { TFieldProps } from "./FieldBuilder/FieldBuilder.types";

export function getEffectiveFields(inputString: string = '', currentFieldName: string) {
    const regex = /fields\.(\w+)/g;
    let match;
    let names = [];

    while ((match = regex.exec(inputString)) !== null) {
        names.push(match[1]);
    }
    names.push(currentFieldName)

    return names;
}


export const getLIstWatch = (fields: any) => {
    const arr: string[][] = [];

    Object.keys(fields).map((key: string) => {
        const field:TFieldProps = fields[key];

        if (!!field?.controller) {
            arr.push(getEffectiveFields(field?.controller, field.name));
        }
    });

    return Array.from(new Set(arr.flat()));
}