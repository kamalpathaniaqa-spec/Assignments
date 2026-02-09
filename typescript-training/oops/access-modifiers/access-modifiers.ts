//Access Modifiers in TypeScript

//Access Modifiers are keywords that we are using to control the access of class members.

//There are three access modifiers in TypeScript:
//1. public / no modifier ==> can be accessed from anywhere
//2. protected ==> can be accessed within the class and its subclasses
//3. private ==> can be accessed only within the class

class Person {
    public name : string = "John";
    protected age : number = 30;
    private ssn : string = "123-45-6789";

    printData(){
        console.log("Accessing members within the class:");
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("SSN: " + this.ssn);
    }

    printDataSubclass(){
        console.log("Accessing members from the subclass:");
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}

let person = new Person();
person.printData();

let emp = new Person(); // Use Person instead of Employee
emp.printData();

console.log("Accessing members from outside the class:");
console.log("Name: " + emp.name);