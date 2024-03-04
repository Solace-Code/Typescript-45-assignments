// Assignment 21 Intentional Errpr //
// Objective Create an error intentionally and solve it at the end of the program //
// Creating an Array //
var myArray = [1, 2, 3, 4, 5];
// Accessing an index that is out of bounds //
var indexOutOfRange = myArray[10]; // Trying to access the 11th element in a 5-element array //
console.log(indexOutOfRange); // This line will throw an error //
// Correcting the error //
if (indexOutOfRange !== undefined) {
    console.log("Value at index 10:", indexOutOfRange);
}
else {
    console.log("\nIndex out of range, array doesn't have index 10.");
}
