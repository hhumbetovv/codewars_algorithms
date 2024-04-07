export function josephusSurvivor(n: number, k: number) {
    if (k === 1 || n === 1) return n;
    const people = Array.from({ length: n }, (_, i) => i + 1);
    let target = 0;
    while (true) {
        target = (target + k - 1) % people.length;
        people.splice(target, 1);
        if (people.length === 1) return people[0];
    }
}
