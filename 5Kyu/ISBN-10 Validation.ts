export function validISBN10(isbn: string): boolean {
    if (isbn.length !== 10) return false;
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        let pattern = "0123456789";
        if (i === 9) pattern += "X";
        if (!pattern.includes(isbn[i])) return false;
        const num = isbn[i] === "X" ? 10 : +isbn[i];
        sum += +num * (i + 1);
    }
    return sum % 11 === 0;
}

console.log(validISBN10("048665088X"));
