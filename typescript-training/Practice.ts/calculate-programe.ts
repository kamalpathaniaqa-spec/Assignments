//  Simple Calculate Using switch...case
let userInput: string | null = prompt("Enter an operation1: ");
const number1 : number = Number(userInput);

//Take user input for secoond number
userInput = prompt("Enter the value of number2: ");
const number2 : number = Number(userInput);

//Take user input for operation
const operator : string | null = prompt("Enter an operation (+, -, *, or / ): ");

let result: number;

switch (operator) {
    case "+":
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case "-":
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case "*":
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case "/":
        if (number2 !== 0) {
            result = number1 / number2;
            console.log(`${number1} / ${number2} = ${result}`);
        } else {
            console.log("Error: Division by zero is not allowed.");
        }
        break;
    default:
        console.log("Error: Invalid operation. Please enter one of +, -, *, /.");
        break;
}

export {};  