export function getListWatch(inputString: string = '') {
    const regex = /fields\.(\w+)/g;
    let match;
    let names = [];

    while ((match = regex.exec(inputString)) !== null) {
        names.push(match[1]);
    }

    return names;
}