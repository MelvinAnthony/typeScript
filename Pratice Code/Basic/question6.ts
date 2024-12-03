/* 
    - Write a TypeScript program that converts a variable of one type to another using type assertions 
    - And type conversion functions like parseInt(). 
 */

let num: number;
num = 20
console.log(typeof num)

// to change the number to string

let numberToString: string = num.toString()
console.log(typeof numberToString)

// change to String to number

let stringToNumber: number = parseInt(numberToString)
console.log(typeof stringToNumber)