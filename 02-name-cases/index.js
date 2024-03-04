// Assignment 02 Name Cases //
// Storing a name inside a variable //
var myName = "Ahmed";
// Upper Case //
var upperCase = myName.toUpperCase();
// Lower Case //
var lowerCase = myName.toLowerCase();
// Title Case //
var titleCase = myName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
// Printing out each case //
// Upper case //
console.log("Hello " + upperCase);
// Lower case //
console.log("Hello " + lowerCase);
// Title case //
console.log("Hello " + titleCase);
