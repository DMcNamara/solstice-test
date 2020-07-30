export function sortBy(a, b, field: string) {
    if (a[field] === b[field]) {
        return 0;
    } else {
        return a[field] < b[field] ? -1 : 1;
    }
}
