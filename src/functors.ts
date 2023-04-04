const plus1 = (value: number) => value + 1;
const minus1 = (value: number) => value - 1;

const strFunctor = (str: string, fn: (val: number) => number ) => {
    const chars = str.split('')
    return chars.map((char) => {
        return String.fromCharCode(fn(char.charCodeAt(0)))
    }).join('')
}

console.log(plus1(4))
console.log(minus1(4))

console.log([2, 3].map(plus1))
console.log([2, 3].map(minus1))

console.log(strFunctor("ABC", plus1))
console.log(strFunctor("XYZ", minus1))

export {}