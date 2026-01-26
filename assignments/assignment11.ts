//Assignment--11 :Write aa  programe to perform the following tasks::
// 1. Count the total number of words in the sentence.
// 2. Reverse the sentence word by word.
// 3. Convert the entire sentence to title case (capitalize each word)

//String sentence  = "Java programming is fun and challenging";

let sentence: string = "Java programming is fun and challenging";
// count the total number of words in the sentence
let stringParts: string[] = sentence.split(' ');
console.log("Total number of words in the sentence: " + stringParts.length);

//2. Reverse the sentence word by word.
let reversedString: string = "";
for (let i = stringParts.length - 1; i >= 0; i--) {
    reversedString += stringParts[i];
}
console.log("Reversed String: '" + reversedString + "'");

{
//3. Convert the entire sentence to title case (capitalize each word)
let titleCaseString: string = sentence.replace(/\w\S*/g, word => word[0].toUpperCase() + word.slice(1).toLowerCase())
console.log("Original String: '" + sentence + "'");
console.log("Title Case String: '" + titleCaseString + "'");
}



export {};
