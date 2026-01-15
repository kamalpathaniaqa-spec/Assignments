/*Data type are two different categories. *
Primitive data type  and Non prinitive data type*/


/********************************Primitive Data Types***********************/

//1. number ==> number represents with decimals and without decimals.(without quotes)
let num =123;  //number without decimals
let floatNum = 12.24; //number with decimals
console.log(typeof num);
console.lof(typeof floatNum);

//2 . string ==> string represents text / sequence of character wrapped inside the single or double quotes.
let str1 = 'Hellow, World!'; //string with single quotes
let str2 = "JavaScript is fun!"; //string with double quotes
console.log(typeof str1); //output: string
console.log(typeof str2); // output: string

//3. Boolean ==> booelan represenrts result of condition : true or false
 let isJavaScriptFun = true; // boolean false
 let isSkyGreen =false; // boolean false
console.log(typeof isJavaScriptFun); //output : boolean

//4. under ==> undefined repersents a veriable that has been declared but not assigned a value \
let undefVar; // variable declared but not asssigned
console.log(typeof underFvar); // output: underfined 

//5.null ==> null represents a unique identifier value.
let nullVar = null;

//6.symbol ===> symbol represents a unque identifier.



//****************************NON-PRIMITIVE DATA TYPE***********************/
//1. OBJECT ==> OBJECT IS A COLLECTION OF KEY-PAIR
let empDetails={
    empid: 101,
    empName: "John Doe",
    havingVisa: true,
    address:{
        city: "New Year",
        zipCode: 10001,
        state: "NY",
        country: "USA",
    }
};

//Print employee name
console.log(empDetails.empNmae); //output: John Doe
//print employee zip code
console.log(empDetails.address.zipCode);
//print entire employee details
console.log(empDetails);


//2.array ==> array represents an orderd collection of iteams.
let fruits = ["Apple", "Banana", "Mango","Orange"];
let fruitAndPrices = ["Apple", 12, "Banana",60, "Mango",150,true,"Orange",80,true];