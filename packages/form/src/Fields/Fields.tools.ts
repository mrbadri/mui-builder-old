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
    let arr: any = [];
    fields.map((field: any) => {
        if (!!field?.controller) {
            arr.push(getEffectiveFields(field?.controller, field.name));
        }
    });
    console.log('flat', Array.from(new Set(arr.flat())));

    return Array.from(new Set(arr.flat()));
}