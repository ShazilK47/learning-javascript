// Data memory mein kis tarah se store hota hai and kis tarah se hum apne data ko access krte hen is bunyad per datatypes ko to category mein devide kia gaya hai
//like.. in C: call by reference and call by value

// ## Note: JavaScript is dynamically type language.
// ## Note: JavaScript is loosely type language.
//avaScript is a dynamically typed language, which means that
// data types of variables are determined by the value they hold at runtime
//and can change throughout the program as we assign different values to them.

// 1. Primitive datatypes
// 2. Non primitive datatypes  / Reference datatypes

//# Primitive Datatypes  (7 types)   => call by value
// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. symbol

//use of symbol type

const id = Symbol(123);
const anotherId = Symbol(123); //the symbol makes the value unique.
//let's compare both
console.log(id === anotherId); //false

// 7. BigInt             eg: let numer = 35555555948593n         ---> store value greater then intiger.

//# Reference datatypes
// 1. Arrays
// 2. Objects
// 3. Functions

//1. Arrays
//syntax:
//let arrayName = [value0,value1,value2]
const friends = ["Bilal", "Subhan", "Imran", "Haseeb"];

//2. Objects
//syntax:
// const objectName = {key1: value1, key2: value2, key3
let myObj = {
  name: "Shazil",
  age: 20,
};

//4. Function
//syntax:
// function functionName() {
//   //code to be executed
// }

//let use function as a variable

const myFunction = function () {
  console.log("Hello World");
};
console.log(myFunction());

//typeof myFunction: function object / object function

//Here you can learn more about typeof
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// ************************************************************************************************************

//Memory in JS

// 1.Stack (primitive) => gives copy of value,
// 2. Heap(Non - primitve / Reference) => gives reference of value

//Example: (stack memory)
//let a = 10;
//let b = a;        --> here we have given reference of a to b:      it copy value of a in b
//a = 20;                   //changed the value of a
//console.log(a); //20
//console.log(b); //10       => although we change the value of (reference - a). but value in (b) is still same because it got the copy of a

//Example: (Heap memory)
let userOne = {
  name: "Shazil Khan",
  email: "shazil.akn@gmail.com",
};

let userTwo = userOne;

userTwo.email = "akn.shazil@gmail.com"; //=> changed the value in userTwo
console.log(userOne.email); //akn.shazil@gmail.com              => see! value also changed in userOne

// ************************************************************************************************************
