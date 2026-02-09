// Exception Handling in TypeScript
// Exception + Hnadling ==> Handling the exceptions in the different ways.

//1. Try...Catch.. Finall Block ==> When there is an exception , we can handle that particular exception and continues the execution process.
//2. Throwing our own custom exceptions using throw keyword


//1.  Try... Ctach...Finally Block

// //Before Exception Handaling
  let empName: any; // Variable Declaration


//  //create error in execution
//  console.log(empName.toLowerCase()); // This will throw an error because empName is undefined

//     console.log("Execution is completed");  // This line will not be executed due to the error above

// //After Exception Handling

// let empName1: any; // Variable Declaration

try {
    // Code that may throw an exception
    console.log(empName.toLowerCase()); // This will throw an error because empName1 is undefined
} catch (error) {
    // Code to handle the exception
    console.log("An error occurred: " + error);
} finally {
    // Code that will always execute
    console.log("Execution is completed");
}
