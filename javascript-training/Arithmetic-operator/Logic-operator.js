//Logical operators

//if condition is true 
let a = 6;
let b = 5;

let cond1 = a > b; //true
let cond2 =  a === 6; //true
console.log("cond1 && cond2 =", cond1 && cond2); //true

// LOGICAL AND &&
//if condition is false
let c = 6;
let d = 5;

let condc = a > b; //false
let condd =  a === 5; //false
console.log("condc && condd =", condc && condd); //false


// if condition && is equal then passing the true value other wise false condtion
let r =6;
let s = 7;

console.log("cond1 && cond2 =", r < s && r == 7); // false

// LOGIC OR ||
// OR || CONDITION if condition T,T=T ,T,F,F=T  F,T,F=TRUE  F,F,F= FALSE 
let p =6;
let Q = 7;

console.log("cond1 || cond2 =", r < s || r == 7); // false


//LOGIC NOT ! NEGATIVE VALUE KO POSITIVE KR DETA HAI
let I =6;
let J = 5;

console.log("!(6<75) =", !(I < J)); // true



