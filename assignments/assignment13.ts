// Assigmnet { Array and Loops}
 // Given value are 12,34,11,36,87,98,93.
 /* Store the values in Array and Print second and third largest number from 
  the above value without using collectrions and default sort methods*/

let arr: number[] = [12, 34, 11, 36, 87, 98, 93];

//Sorting (Ascending Order)

for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        //Comparing and swapping
        if(arr[i] > arr[j]){
            //  Swapping
            let temp = arr[i];
            // Swapping smallervalues to left side
            arr[i] = arr[j];
            // Swapping bigger values to temp/right side
            arr[j] = temp;      
          }
    }
}
//Printing the sorted array in accending order
console.log("Array in Ascending Order:", arr);

//Getting second and third largest number
let secondLargestNumber = arr[arr.length - 2];
let thirdLargesatNumber = arr[arr.length - 3];

//Printing the second and third largest number
console.log("Second Largest Number:", secondLargestNumber);
console.log("Third Largest Number:", thirdLargesatNumber);

//Sum of second and third largest number
let sum = secondLargestNumber + thirdLargesatNumber;
console.log("Sum of Second and Third Largest Number:", sum);

export {};