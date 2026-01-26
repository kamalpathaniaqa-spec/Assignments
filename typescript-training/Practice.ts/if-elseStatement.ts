let age: number = 20;
if(age>=18)
{
    console.log("You are eligible to vote.");

}else{
    console.log("You are not eligible for vote.");
}


//2. ------------------If-Else If-Else Statement-----------------------
let quantity: number = 35

if(quantity >= 50) {
    console.log("You get a 20% discount.");
}   
else if(quantity >= 20) {
    console.log("You get a 10% discount.");
}
else if(quantity >= 10) {
    console.log("You get a 5% discount");}
else {
    console.log("Sorry, no discount available.");
}


//3. ------------------Nested If-Else Statement-----------------------
let marks: number = 85;
if (marks>= 0 && marks <=100) {
    console.log("Marks are valid");
    if(marks >=90) {
        console.log("Grade A");
    }else if(marks >= 70) {
        console.log("Grade B");
    }else if(marks >= 50) {
        console.log("Grade C");
    }else if (marks >= 35){
        console.log("Grade D");
    }
}else {
    console.log("Marks are invalid");
}   


//4. ------------------Switch Statement-----------------------
let day: number = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

//5. ------------------Ternary Operator-----------------------          
let number: number = 10;
let result: string = (number % 2 == 0) ? "Even Number" : "Odd Number";
console.log(result);  // Output: Even Number 
export{};