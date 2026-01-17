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
let fruitAndPrices = ["Apple", 12, "Banana",60, "Mango",150,"Orange",80];
let fruitAndPriceAndValidity=["Apple",120, true, "Banana",60,true, "Mango",150, false,"Orange",80,true];

//Print banana from fruit array
console.log(fruits[1]); //output : Banana
//Print print of apple from fruitsAnd Prices array
console.log(fruitsApples[1]); //output: 120
//Print availability of Orange from fruitsAndPriceandAvailibility array
console.log(fruitsAndPriceAndAvability[11]); //output: true



//3.function ==> function represents a block of code designed to perform a partivular task.
function launchTheApplication(browserName, url){
    console.log("Launch the browser: "+browsername);
    console.log("Navigate to URL: "+ url);
    comnsole.log("Application launched successfully!");

}
//call the  function
launchTheApplication("Chrome", "https://wwww.example.com");


//4. Date ==> Date repersents date and timer in javascript.


let currentDate = newDate();

//get currenet year
console.log(currentDate.getFullYear()) ; // outputy: current year

//get current month
console.log(currentDate.getMonth()) ; //output: current month (0-based in devicePixelRatio, so adding 1)

//get current date
console.log(currentDate.getDate());// output: current date

//get current hours
console.log(currentDate.getHours()); // out : current hours

//get current minutes
console.log(currentDate.getMinutes()) //output : currentminutes

//get current seconds
console.log(currentDate.getSeconds()); //output: milliseconds

//get current millisecond
console.log(currentDate.getMillieconds()); //output: milliseconds


// 5. Map ==> Map represents a colection of key-value pairs where keys can be of any data type.

let employeeMap = new Map();
employeeMap.set("empID",101);
employeeMap.set("empName","Kamal");
employeeMap.set("havingVisa",true);


//get employee name
console.log(employeeMap.get("empName")); //output: Bharath
console.log(employeeMap);

//6.Set ==> Set repersents a collection of unique values of any data type.
let uniqeNumbers =newSet();
uniqeNumbers.add(10);
uniqeNumbers.add(20);
uniqeNumbers.add(30);
uniqeNumbers.add(20); // duplicate value , will not be added
uniqeNumbers.add(10); //deleting value 10
uniqeNumbers.size; //getting size of the set

console.log(uniqueNumbers.size);// getting size of the set
console.log(uniqueNumbers);

// 6. symbol ==> symbol repersents a unique identifier.
let productInfo={
    productName: "Oneplus 9",
    productPrice: 699,
    countryOfOrigin: "China"
};
console.log(productInfo);
