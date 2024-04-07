export function countSmileys(arr: string[]): number {
    let count: number = 0;
    function checker(a: string, b: string): (e: string) => boolean {
        return (e: string) => e === a || e === b;
    }
    const validEye = checker(":", ";");
    const validNose = checker("-", "~");
    const validSmile = checker(")", "D");
    arr.forEach((face) => {
        if (face.length > 3) return;
        if (!validEye(face[0])) return;
        const last = face[face.length - 1];
        if (!validSmile(face[face.length - 1])) return;
        if (face.length === 3) if (!validNose(face[1])) return;
        count++;
    });
    return count;
}
