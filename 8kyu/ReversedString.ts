export function reverseWords(str: string): string {
    let stringReversed: string = str.split(" ").reverse().join(" ");

    return stringReversed;
}