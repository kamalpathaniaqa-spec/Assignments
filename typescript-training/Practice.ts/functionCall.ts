// TypeScript Function call
function greet(): void {
    console.log("Hello World");
}
// 1- Call the function
greet();
console.log("Function called successfully.");


// 2-Arguments are values you pass to the function when you call it.
function greet1(name: string): void {
    console.log("Hello, " + name + "!");
}
//Pass argument to the function
greet1("Kamal");




// 3-We can pass different Arguments to the Function
function greet2(name: string): void {
    console.log('HELLO, ' + name + '!');
}

//Pass "Kamal" as Argument to the Function
 greet2("Kamal");

 //Pass "Pathania" as Argument to the Function
 greet2("Pathania"); 


///Example2: TypeScript Function to Add two numbers
function addNumbers(num1: number, num2: number) {
    let sum = num1 + num2;
    console.log('Sum: ${sum}');
}
// Call the function with different arguments
addNumbers(5, 10); // Output: Sum: 15
addNumbers(20, 30); // Output: Sum: 50



// The return Statement
function findSquare(num: number): number {
   // Return the square of the number
   return num*num;
}
// Call the function and store the returned value
let  square = findSquare(3);
console.log("Square of 2 is: " + square); // Output: Square of 2 is: 4


export {};