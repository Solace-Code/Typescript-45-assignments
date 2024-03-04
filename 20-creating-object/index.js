// Assignment 20 Creating Object  //
// Objective Create an object and store data in it //
// I will be creating an object using classes //
// Defining a class using firstName lastName and age as parameter for it //
var Person = /** @class */ (function () {
    // Creating a constructor to construct the parameters //
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // Creating a functionality to give out a full name by using concatenation //
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
// Creating an instance and storing the value in the class directly //
var person1 = new Person("Ahmed", "Bilal", 25);
// Accessing the value we stored in the class and printing it out //
console.log("Retreving user information\n ");
console.log("Full Name: " + person1.getFullName());
console.log("\nAge: " + person1.age);
