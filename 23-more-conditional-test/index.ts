// Assignment 23 More Conditional Test //

// Objective create more conditional test //

// Tests for equality and inequality with strings //

let fruit1: string = 'apple';
let fruit2: string = 'banana';

console.log("Is fruit1 equal to 'apple'? I predict True.");
console.log(fruit1 === 'apple'); // True //

console.log("Is fruit2 not equal to 'apple'? I predict True.");
console.log(fruit2 !== 'apple'); // True //

// Tests using the lower case function //

let city: string = 'New York';

console.log("Is the lowercase of 'New York' equal to 'new york'? I predict True.");
console.log(city.toLowerCase() === 'new york'); // True //

// Numerical tests //

let number1: number = 5;
let number2: number = 10;

console.log("Is number1 greater than number2? I predict False.");
console.log(number1 > number2); // False //

console.log("Is number1 less than or equal to number2? I predict True.");
console.log(number1 <= number2); // True //

// Tests using "and" and "or" operators //

let sunny: boolean = true;
let warm: boolean = false;

console.log("Is it sunny and warm? I predict False.");
console.log(sunny && warm); // False //

console.log("Is it sunny or warm? I predict True.");
console.log(sunny || warm); // True //

// Test whether an item is in an array //

let fruits: string[] = ['apple', 'banana', 'orange'];

console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.indexOf('banana') !== -1); // True //

// Test whether an item is not in an array //

console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(fruits.indexOf('grape') === -1); // True //
