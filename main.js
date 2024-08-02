//! First you need to make a index.html file and connect the js file to it so you can se the console.log in the browser!
//! Answer the assignments where it says "code here" (remove "code here" and replace it with your code)

// Assignment 1
// console.log hello world!
//! code here
console.log("hello world")

// Assignment 2
// define a variable that can be changed later. The variable should be a STRING equal to hello
//! code here
let start = "hello"

// Assignment 3
// define a variable that cannot be changed. The variable should be a STRING equal to world!
//! code here
const end = "world!"

// Assignment 4
// console.log the variables from assignment 2 and 3 so that it shows hello world! in the console
// Use concatenation (+) for this assignment
//! code here
console.log(start + " " + end)

// Assignment 5
// Do the same as assignment 4, but instead use template literals to do this assignment
//! code here
function helloWorld(World) {
    return `hello ${World}`
}

console.log(helloWorld("world"))


// Assignment 6
// Initialize two new variables. The variables should have an INTEGER each. The first variable should be able to change at a later time.
//! code here
let numOne = 5
const numTwo = 15

// Assignment 7
// console.log the variables you created in assignment 6. The result should be a STRING and a INTEGER in the console. Remember to use "," istead of "+" to get this result.
// There should be a console.log for each of the variables.
//! code here
// console.log(numOne,numTwo)


// Assignment 8
// initialize a new variable that sums the two variables you created in assignment 6
//! code here
// let sum = numOne + numTwo

function sum() {
    return numOne + numTwo
}

// Assignment 9
// change the value of the first variable in assignment 6 by reassigning it below (variable1 = newValue).
//! code here
numOne = 25

// Assignment 10
// console.log the variable from assignment 8. The result here is not updated correctly....
//! code here
// console.log(sum)
console.log(sum())

// Assignment 11
// update the variable from assignment 8 by reassigning it below (variableFromAssignment8 = variableOneFromAssignment6 + variableTwoFromAssignment6).
//! code here
numOne = (5 + 15)
console.log(numOne)

//Assignment 12
// initialize a new INTEGER variable that can be changed later.
//! code here
let a =20

// Assignment 13
// increase the variable in assignment 12 by 1 by using double operators.
//! code here
a++
console.log(a)

// Assignment 14
// decrease the variable in assignment 12 by 1 by using double operators.
//! code here
a--
console.log(a)

// Assignment 15
// multiply the variable in assignment 12 with itself by using double operators.
//! code here
a *=2;
console.log(a)

// Assignment 16
// divide the variable in assignment 12 with itself by using double operators.
//! code here
a /= 2;
console.log(a)

// Assignment 17
// initialize an array with atleast 4 elements (the datatypes can be of your own choosing).
//! code here
const fruits = ["banana", "orange", "apple", "mango"]

// Assignment 18
// console.log the array from assignment 17
//! code here
console.log(fruits)

// Assignment 19
// console.log the third ELEMENT in the array from assignment 17 (remember the difference between index and element?)
//! code here
console.log(fruits[2])

// Assignment 20
// console.log the second INDEX value in the array from assignment 17 (remember the difference between index and element?)
//! code here
console.log(fruits[1])

// Assignment 21
// add a new element to the end of the array from assignment 17 and console.log the result
//! code here
fruits.push("kiwi");
console.log(fruits)

// Assignment 22
// add a new element to the start of the array from assignment 17 and console.log the result
//! code here
fruits.unshift("lemon")
console.log(fruits)

// Assignment 23
//remove the last element from the array from assignment 17 and console.log the result
//! code here
fruits.pop()
console.log(fruits)

// Assignment 24
// console.log the length of the array from assignment 17
//! code here
console.log(fruits.length)



//* Getting harder from here on:



// Assignment 25
// use .splice to remove the second element from the from assignment 17 array. Console.log the result.
//! code here
fruits.splice(1,1)
console.log(fruits)

// Assignment 26
// create a function that returns the last element in the array from assignment 17. Does not have to have a parameter, but try to do so. Best here is to create two functions, one with a parameter and one without.
//! code here
function last() {
    return fruits.indexOf("mango")
}
console.log(last())



// Assignment 27
// create a object info about yourself. It should also contain an array (meaning an array inside the object.). Remember to use the right syntax.
// const exampleObject = {
//     key: "value",
//     key: "value",
//      key: ["value", "value", "value"],
//                }
//! code here
const person = {
    firstName: "martin",
    lastName: "dørmænen",
    age: "27",
    hobby: ["gaming", "makingfood"],
    fullName() {
        return `${person.firstName} ${person.lastName}`
      }
}

// Assignment 28
// create a function that returns the full name of the person. Use the object you created in assignment 27.
//! code here
console.log(person.fullName());


// Assignment 29
// console.log the first hobby of the person you created in assignment 27
//! code here
console.log(person.hobby[0]);

// Assignment 30
// create an array of 2 objects. Each object should have a firstName, lastName, age and an array of hobbies. (Strukture is similar to assignment 27, but you use "[]" first to create an array, then "{}" for each object in the array.)
//! code here
const arrObj = [
    {
        firstName: 'john',
        lastName: 'doe',
        age: 37,
        hobbys: ["driving", "music"]
    },
    {
        firstName: 'jane',
        lastName: 'doe',
        age: 34,
        hobbys: ["singing", "dancing" ],
    }
];
console.log(arrObj)
// Assignment 31
// console.log the first name of the first person in the array in assignment 30
//! code here
console.log(arrObj[0].firstName)

// Assignment 32
// console.log the last name of the second person in assignment 30
//! code here
console.log(arrObj[1].lastName)
// Assignment 33
// console.log the second hobby of the second person in assignment 30
//! code here
console.log(arrObj[1].hobbys[1])
// Assignment 34
// initialize a variable that points to the first person in the array in assignment 30. Then console.log that person's second hobby
//! code here
let firstPerson = arrObj[0]

function myHobby() {
    console.log(arrObj[1].hobbys[1])
}

myHobby()