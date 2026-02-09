//2. throwing an customized error

let age: number = 20; // Invalid age

if (age < 18) {
    throw new Error("Age cannot be negative");
}else {
 console.log("Valid age: " + age);
}
  console.log("Execution completed...");
  
  
  export {};