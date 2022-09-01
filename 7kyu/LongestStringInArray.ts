export function longestConsec(strarr: string[], k: number): string {
    var arrConc: string[] = [];
    var longestWord: string = "";
    var n: number = strarr.length;
    if (n === 0 || k > n || k <= 0) return ""

    for (let i: number = 0; i < n; i++) {
        let value = strarr.slice(i, k + i).join("");
        arrConc.push(value)
    }

    arrConc.forEach((word: string) => { if (word.length > longestWord.length) longestWord = word;})

    return longestWord;
}