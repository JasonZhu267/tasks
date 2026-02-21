/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let num: number[] = [...numbers];
    if (num.length == 0) {
        return [];
    } else if (num.length == 1) {
        return [num[0], num[0]];
    } else {
        return [num[0], num[num.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let num: number[] = [...numbers];
    for (let i = 0; i < num.length; i++) {
        num[i] *= 3;
    }
    return num;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let str: string[] = [...numbers];
    let num: number[] = [];
    for (let i = 0; i < str.length; i++) {
        if (isNaN(parseInt(str[i].toString()))) {
            num[i] = 0;
        } else {
            num[i] = parseInt(str[i].toString());
        }
    }
    return num;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let str: string[] = [...amounts];
    let num: number[] = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i][0] == "$") {
            str[i] = str[i].slice(1);
        }
        if (isNaN(parseInt(str[i].toString()))) {
            num[i] = 0;
        } else {
            num[i] = parseInt(str[i].toString());
        }
    }
    return num;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let str: string[] = [...messages];
    let newStr: string[] = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i][str[i].length - 1] == "!") {
            newStr.push(str[i].toUpperCase());
        } else if (str[i][str[i].length - 1] != "?") {
            newStr.push(str[i]);
        }
    }
    return newStr;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let str: string[] = [...words];
    let ct: number = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].length < 4) {
            ct++;
        }
    }
    return ct;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let color: string[] = [...colors];
    if (color.length == 0) {
        return true;
    }
    for (let i = 0; i < color.length; i++) {
        if (color[i] != "red" && color[i] != "blue" && color[i] != "green") {
            return false;
        }
    }
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let num: number[] = [...addends];
    if (num.length == 0) {
        return "0=0";
    } else {
        let sum: number = 0;
        let str: string = "";

        for (let i = 0; i < num.length; i++) {
            sum += num[i];
        }

        str += sum.toString() + "=";

        for (let i = 0; i < num.length; i++) {
            str += num[i].toString() + "+";
        }

        str = str.slice(0, str.length - 1);

        return str;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let num: number[] = [...values];
    let num2: number[] = [];
    let sum: number = 0;
    let i: number = 0;

    if (num.length == 0) {
        return [0];
    }

    while (i < num.length && num[i] >= 0) {
        sum += num[i];
        num2.push(num[i]);
        i++;
    }

    if (num[i] < 0) {
        num2.push(num[i]);
    }

    if (i == 0) {
        num2.push(0);
    } else {
        num2.push(sum);
    }

    i++;

    while (i < num.length) {
        num2.push(num[i]);
        i++;
    }

    return num2;
}
