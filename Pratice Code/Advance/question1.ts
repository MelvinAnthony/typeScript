/* 
    - Write a TypeScript program that declares a variable 'result' that can hold either a 'string' or a 'number'. 
    - Now write a function that takes an argument of type 'string | number | boolean' and logs its type.
 */

let result: String | Number | boolean;

function typeCheck(obj: string | number | boolean){
    if(typeof obj == "string"){
        console.log("This is come under 'String' Data Type")
    }
    else if(typeof obj == "number"){
        console.log("This is come under 'Number' Data Type")
    }
    else if(typeof obj == "boolean"){
        console.log("This is come under 'Boolean' Data Type")
    }
}

// test the function
let test = "melvin"
console.log(typeCheck(test))


