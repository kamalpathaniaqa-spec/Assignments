// TypeScript Comparison Operators
const a: number = 3, b: number = 2;

console.log(a > b);

// Output: true 

//1.. 1. TypeScript Equal To Operator

const greeting1: string = "hello";
const greeting2: string = "Hello";

//compare two strings using equal to operator
console.log(greeting1 == greeting2); // Output: false because "hello" is not equal to "Hello"

// Comparing a string variable with a string literal
console.log(greeting1 === "hello"); // Output: true because both are exactly the same


// Comparing identical values of number type
const myAge : number = 25;
const yourAge : number = 25;
console.log(myAge === yourAge); // Output: true because both values are identical


// Comparing a number variable with a numerical literal
console.log(myAge == 36);  // false

