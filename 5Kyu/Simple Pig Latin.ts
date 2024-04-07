export const pigIt = (a: string): string => {
    return a.split(" ").map(word => {
        if(word.toLowerCase() === word.toUpperCase()) {
            return word
        }
        return word.slice(1) + word[0] + 'ay'
    }).join(" ")
};

