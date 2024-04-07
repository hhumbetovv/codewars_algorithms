export function getLengthOfMissingArray(arrayOfArrays: any[]): number {
    if (!arrayOfArrays.length) return 0;
    const l = arrayOfArrays.map((el) => el.length).sort((a, b) => a - b);
    for (let i = 0; i < l.length - 1; i++) {
        if (l[i + 1] - l[i] !== 1) return l[i] + 1;
    }
    return 0;
}
