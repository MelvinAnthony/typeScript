/* 
    - Write a TypeScript program that creates a function combine that accepts two parameters of types boolean and number. 
    - It returns a value that can be either a boolean or a number. Use a union type to achieve this.  
 */

function combine(parm1:boolean, parm2:number): boolean | number {
    if(parm1){
        return parm2 * 3
    }
    else{
        return parm1
    }
}

// test the function

const result1: boolean | number = combine(true, 10)
const result2: boolean | number = combine(false, 24)

console.log(result1)
console.log(result2)

