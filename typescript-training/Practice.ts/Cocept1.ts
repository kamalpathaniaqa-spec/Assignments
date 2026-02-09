// where are the push , pop, slice , shift and unshift methods used when accessing array elementrs?
// Array exampole and operartions in TypeScript

const fruits: string[] = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);//output: Apple
console.log(fruits[1]);//output: Banana
console.log(fruits[2]);//output: Cherry

// Add an element to the end of the array
fruits.push("Elderberry");
console.log(fruits);//output: ["Apple", "Banana", "Cherry", "Elderberry"]

// Remove the last element from the array
const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);//output: ["Apple", "Banana", "Cherry"]

// Add an element to the begning of the array // adding Mango at the beginning
fruits.unshift("Mango")
console.log(fruits);//output: ["Mango", "Apple", "Banana", "Cherry"]

// Remove the first element from the array
const firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);//output: ["Apple", "Banana", "Cherry"]


// Extract a portion of the array
const removedFruits = fruits.slice(0, 1);
console.log(removedFruits);//output: ["Apple"]
console.log(fruits);//output: ["Apple", "Banana", "Cherry"] 

// The original array remains unchanged after slice operation

// Note: The push, pop, shift, unshift methods modify the original array, while slice returns a new array without modifying the original.   
//

