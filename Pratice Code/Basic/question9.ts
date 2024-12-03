/* 
    - Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 'White' and Blue. 
    - Create a variable 'selectedColor' of type 'Color' and assign it one of the enumeration values.
 */

enum Color{
    Red,
    Green,
    Blue,
    Yellow,
    Gray
}
console.log(Color)


// selece the specific color

let selectedColor: Color = Color.Yellow

console.log(selectedColor)
