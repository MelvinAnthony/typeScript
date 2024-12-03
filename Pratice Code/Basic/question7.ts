/* 
    - Write a TypeScript program that creates type aliases for complex data types such as objects or custom types. 
    - Use them to define variables and explain how they improve code readability. 
 */

type Student ={
    id: number;
    StudentName: String;
    email: String; 
};

type point = {
    x: number;
    y: number;
};

const student1: Student  = {
    id: 1,
    StudentName: "melvin",
    email: "me@gmail.com"
};

const student2: Student = {
    id: 2,
    StudentName: "Anthony",
    email: "anthony@gmail.com",
  };


const orginPoint: point = {
    x: 0,
    y: 0
}

// function for student detials

function studentInfo(student: Student){
    console.log(`Student Id was: ${student.id} \n`)
    console.log(`Student Name was: ${student.StudentName} \n`)
    console.log(`Student Email was: ${student.email} \n`)
}

// point calcualtion
function calculateDistance(p1:point, p2:point): number {
    const dx = p1.x - p2.x
    const dy = p1.y - p2.y
    return Math.sqrt(dx * dx + dy * dy)

}

// Result Check

console.log(student1)
console.log("-------------------------------")
console.log(student2)
console.log("-------------------------------")
console.log("Distance from Orgin: "+ calculateDistance(orginPoint,{x:4, y:6}))


