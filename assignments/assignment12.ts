// Write a program to print * pattern using right side triangle nested for loop in TypeScript

let n: number = 5; // Number of rows for right side triangle

for (let i = 1; i <= n; i++) { // Outer loop for rows
    let pattern: string = ""; // Initialize an empty string for each row
    // Add spaces for right alignment
    for (let s = 1; s <= n - i; s++) {
        pattern += " ";
    }
    // Add stars
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern); // Print the pattern for the current row
}
export {};