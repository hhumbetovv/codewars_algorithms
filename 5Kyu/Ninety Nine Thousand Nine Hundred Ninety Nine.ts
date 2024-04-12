const numbers = [null, "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const decimals = [null, "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

export function numberToEnglish(x: number): string {
    if (x == 0) return "zero";
    let aFloor = getNumber(Math.floor(x / 1000), "thousand");
    let bFloor = getNumber(Math.floor((x % 1000) / 100), "hundred");
    let cFloor = getNumber(x % 100);
    let result = [...aFloor, ...bFloor, ...cFloor].filter((el) => el);
    return result.join(" ");
}

function getNumber(
    x: number,
    label: string | null = null
): Array<string | null> {
    let b = x % 10;
    let floor: Array<string | null> = [];
    if (x > 9 && x < 20) {
        floor.push(teens[b]);
    } else {
        let a = Math.floor(x / 10);
        floor.push(decimals[a], numbers[b]);
    }
    if (floor.some((el) => el)) floor.push(label);
    return floor;
}
