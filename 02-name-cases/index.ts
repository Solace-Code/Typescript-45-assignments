// Assignment 02 Name Cases //

// Storing a name inside a variable //

const myName = "Ahmed";

// Upper Case //

let upperCase = myName.toUpperCase();

// Lower Case //

let lowerCase = myName.toLowerCase();

// Title Case //

let titleCase = myName.replace(/\b\w/g, (char) => char.toUpperCase());

// Printing out each case //

// Upper case //

console.log("Hello " + upperCase);

// Lower case //

console.log("Hello " + lowerCase);

// Title case //

console.log("Hello " + titleCase);