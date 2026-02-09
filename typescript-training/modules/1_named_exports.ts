// Named Exports : Export the data functions with its name separately.

export function add(a: number, b: number): number {
    return a + b;
}   

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}
const PI: number = 3.14159;
export function getPi(): number {
    return PI;
}
export { subtract, multiply };

// Example usage (can be removed in actual module file)
// console.log("Addition: ", add(5, 3));         // Output: 8
// console.log("Subtraction: ", subtract(5, 3)); // Output: 2
// console.log("Multiplication: ", multiply(5, 3)); // Output: 15