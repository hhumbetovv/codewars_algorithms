export const josephus = <T>(items: T[], k: number): T[] => {
    if (k === 1) return items;
    let result: T[] = [];
    let target = 0;
    while (items.length !== 0) {
        target = (target + k - 1) % items.length;
        items = items.filter((el, i) => {
            if (i !== target) return true;
            result.push(el);
            return false;
        });
    }
    return result;
};

josephus([1, 2, 3, 4, 5, 6, 7], 3);
