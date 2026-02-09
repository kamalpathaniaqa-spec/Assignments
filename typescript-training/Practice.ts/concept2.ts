// Q1- What are callbacks in TypeScript, and how are they used? Provide an example.
// Callbacks in TypeScript are functions that are passed as arguments to other functions and are executed after some operation has been completed.
// They are commonly used for asynchronous operations, such as handling events, making API calls, or performing tasks that take time to complete.

// Example of a callback function in TypeScript

function fetchData(callback: (data: string) => void): void {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(() => {
        const data = "Data fetched from server";
        callback(data); // Execute the callback function with the fetched data
    }, 2000); // 2 seconds delay
}

// Using the fetchData function with a callback
fetchData((data: string) => {
    console.log(data); // Output: Data fetched from server
});

// In this example, the fetchData function takes a callback function as an argument. 
// After simulating a delay of 2 seconds, it calls the callback function with the fetched data. 
// The callback function is defined inline when calling fetchData, and it logs the received data to the console.

// Callbacks are essential for managing asynchronous code in TypeScript, allowing developers to define actions that should occur once a task is completed.              
            