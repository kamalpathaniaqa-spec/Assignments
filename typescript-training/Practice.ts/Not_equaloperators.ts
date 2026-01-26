
//2.----------------------------------------- Not Equal To Operator-------------------------------------
// The not equal to operator != evaluates to
const myAge: number = 25;
const yourAge: number = 25;

const greeting1: string = "hello";
const greeting2: string = "Hello";

console.log(myAge != yourAge); // Output: false because both values are identical   
console.log(greeting1 != greeting2); // Output: true because "hello" is not equal to "Hello"

//Compaing  with String variable  tp String literals
console.log(greeting1 != "hello");  // Output: false because both are exactly the same

// Comparing with number variable to numerical literal
console.log(greeting2 != "Hello" );  // Output: true because 25 is not equal to 30

//Comapring with number variable to numerical literal
console.log(myAge != 30); // true because 25 is not equal to 30


//Comapreing literals of the same type and value
console.log(10 != 10); // false because both are identical
    
//Comapring literals of different types
console.log(10 != Number('10')); // false because both are identical after conversion


// 4- -----------------------Strict Equal To Operator-----------------------------------------------
 //The strict equal to operator === evaluates to

 const myAge1: number = 25;
const yourAge1: number = 25;
const stringAge: string = "25";

// Comparing identical values of number type
console.log(myAge === yourAge);  // true

// Comparing a number variable and a numerical literal
console.log(myAge === 36);  // false

// Converting stringAge to number and comparing it with myAge
// Valid code because we're comparing two number values
console.log(myAge === Number(stringAge));  // true


//5.------------------------------ Greater Than Operator--------------------------------------
//The greater than operator > returns
const myAge2: number = 48;
const yourAge2: number = 25;

// Left operand is greater
console.log(myAge > yourAge);  // true

// Both operands are equal
console.log(myAge > 48);  // false

// Left operand is smaller
console.log(36 > 48);  // false



//6. ----------------------------Greater Than Or Equal To Operator-------------------------------
//The greater than or equal to operator >= returns
const myAge3: number = 48;
const yourAge3: number = 25;

// Left operand is greater
console.log(myAge >= yourAge);  // true

// Both operands are equal
console.log(myAge >= 48);  // true

// Left operand is smaller
console.log(36 >= 48);  // false


//-7.7. ------------------------------- Less Than Operator-------------------------------
//The less than operator < returns
const myAge4: number = 48;
const yourAge4: number = 25;

// Left operand is smaller
console.log(yourAge < myAge);  // true

// Both operands are equal
console.log(myAge < 48);  // false

// Left operand is greater
console.log(48 < 36);  // false

export{};

// -8.----------------------------- Less Than Or Equal To Operator---------------------------------------------
// The less than or equal to operator <= returns
const myAge5: number = 48;
const yourAge5: number = 25;

// Left operand is smaller
console.log(yourAge5 <= myAge5);  // true
// Both operands are equal
console.log(myAge <= 48);  // true

// Left operand is greater
console.log(48 <= 36);  // false


//9.-------------------------------1. Logical AND Operator--------------------------------------
//The logical AND operator && returns true if both the expressions are true. For example,
  let x: number = 2;

// Both expressions are true
console.log((x < 4) && (3 >= x));  // true

// Only one expression is true
console.log((x <= 4) && (x == 3));  // false

// Both expressions are false
console.log((x > 4) && (x == 3));  // false


//10.------------------------------- Logical OR Operator--------------------------------------
//The logical OR operator || returns true if at least one of the expressions is true. For example,
 let y: number = 2;     
// Both expressions are true
console.log((y < 4) || (3 >= y));  // true

// Only one expression is true
console.log((y <= 4) || (y == 3));  // true

// Both expressions are false
console.log((y > 4) || (y == 3));  // false


//11.------------------------------- Logical NOT Operator--------------------------------------
//The logical NOT operator ! returns true if the expression is false. For example,
 let z: number = 2;
// Expression is true
console.log(!(z < 4));  // false

// Expression is false
console.log(!(z > 4));  // true         
export{};