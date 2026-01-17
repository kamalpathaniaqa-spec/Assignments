//Condition Statements: Writing conditions along with statements.
//so whenever Node.js is going to run the statements, first itbis going to check the condition.


//There are two different types of conditional statements.

//1. if..else statement ==. when we don't know the result of the condition before execution.
//2. switch statement ==> When we know the result of condition before execution. now , we want to choose one option among.

//1. if... else statement

let percentage : number = 85;

if(percentage >= 85){

    console.log("Grade A");

    if(percentage >= 90){
        console.log("distinction");
        console.log("Congratulations! You will get gold medal");


    }else{
        console.log("You just missed distinct by " +(90 - percentage) + " marks.");
    }

}else if (percentage >= 70) {
    console.log("Grade B");

}else if (percentage >= 50){
     console.log("Grade C");
}else {
    console.log("Sorry Bro, You are Failed₹");
}