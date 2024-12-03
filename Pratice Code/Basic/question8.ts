/* 
    - Write a TypeScript program that declares an array of a specific data type. 
    - It will demonstrates common array operations like adding elements, removing elements, and iterating through the array. 
 */

let arr = [1,2,3,4]

// Add the new element in the array
arr.push(10)

console.log(arr)

// Update the element if already exists
arr[2] = 11

console.log(arr)

// delete the array in last element

arr.pop()
console.log(arr)

// Remove the Specific elemet

let slice_specific = arr.slice(1)
console.log(slice_specific)


// String 

const color: String[] =["Green","Red","Blue","Yellow"]

// push the data mean add the new data 
color.push("Gray")
color.push("Orange")
console.log(color)

// remove the data from the array from last element
color.pop()
console.log(color)

// iterate the all the colour
for(const i of color){
    console.log(i)
}

// check if the element was present or not in an array
const colorSearch = "Green";

const isPresentArray = color.includes(colorSearch)
console.log(`${colorSearch} is present in array? ${isPresentArray? 'yes':'no'} `)

// find the index of the element value

const indexSearch = "Yellow"

const isIndexPresent = color.indexOf(indexSearch)
console.log(`The index of ${indexSearch} is : ${isIndexPresent}`)

// remove the specific element
if (isIndexPresent !== -1) {
    color.splice(isIndexPresent, 1);
  }

// Display the modified array
console.log("Modified Array:");
console.log(color);
