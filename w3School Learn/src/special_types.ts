/* 
    - any -> is used for unable the type checking 
*/

/* // without "any" type checking active
 // it get error we cannot change the variable datatype once it was set

let a = true

a = "melvin"

console.log("Data Type of variable: "+typeof a,"\n"+"Store value of the variable: "+a ) */



/* // with "any" type checking disable
// we can change the data type of the variable. after we declare a variable datatype

let a: any = true

a = "melvin"

console.log("Data Type of variable: "+typeof a,"\n"+"Store value of the variable: "+a ) */



/* 
// "Unknown" - is a similar type of any. but it was safer

let a: unknown;
console.log("Data Type of variable: "+typeof a,"\n"+"Store value of the variable: "+a ) 

a = true ;
console.log("Data Type of variable: "+typeof a,"\n"+"Store value of the variable: "+a ) 

a = "Melvin" ;
console.log("Data Type of variable: "+typeof a,"\n"+"Store value of the variable: "+a )

a = 5
console.log("Data Type of variable: "+typeof a,"\n"+"Store value of the variable: "+a )

a = null
console.log("Data Type of variable: "+typeof a,"\n"+"Store value of the variable: "+a )

a = NaN
console.log("Data Type of variable: "+typeof a,"\n"+"Store value of the variable: "+a )
*/


/* 
// "never"  - is used for that data type can never store the variable any time of the project.

let a = true
console.log("Store value of the variable: "+a )

let b : never = true;
console.log("Store value of the variable: "+b ) */

// "undefined" and "null" 

let a: undefined = undefined; // let a: undefined;
console.log("Data Type of variable: "+typeof a,"\n"+"Store value of the variable: "+a )


let b: null = null // let b: null;
console.log("Data Type of variable: "+typeof b,"\n"+"Store value of the variable: "+ b)

