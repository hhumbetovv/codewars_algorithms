export function rgb(r: number, g: number, b: number): string {
    const hexes = "0123456789ABCDEF";
    function toHex(num: number): string {
        if (num <= 0) return "00";
        if (num >= 255) return "FF";
        let result = "";
        while (num !== 0) {
            result = hexes[num % 16] + result;
            num = Math.floor(num / 16);
        }
        if (result.length === 1) result = "0" + result;
        return result;
    }
    return toHex(r) + toHex(g) + toHex(b);
}
