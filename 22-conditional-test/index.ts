// Assignment 22 Conditional Test //

// Objective Create 10 conditional test and evaluate them //

let car: string = 'subaru'; // Explicitly annotate the type as string //

// Ensure the value of car is correct //

console.log("Value of car:", car);

// Test 1: Is car equal to 'subaru'? //

console.log("Is car == 'subaru'? I predict True.");

console.log(car == 'subaru'); // True //

// Test 2: Is car equal to 'honda'? //

console.log("Is car == 'honda'? I predict False.");

console.log(car == 'honda'); // False //

// Test 3: Is car not equal to 'toyota'? //

console.log("Is car != 'toyota'? I predict True.");

console.log(car != 'toyota'); // True //

// Test 4: Is car not equal to 'subaru'? //

console.log("Is car != 'subaru'? I predict False.");

console.log(car != 'subaru'); // False //

// Test 5: Is car equal to 'subaru' and not equal to 'honda'? //

console.log("Is car == 'subaru' and car != 'honda'? I predict True.");

console.log(car === 'subaru', car !== 'honda'); // True //

// Test 6: Is car equal to 'subaru' or equal to 'honda'? //

console.log("Is car == 'subaru' || car == 'honda'? I predict True.");

console.log(car == 'subaru' || car == 'honda'); // True //

// Test 7: Is car length equal to 6? //

console.log("Is car length == 6? I predict True.");

console.log(car.length == 6); // True //


// Test 8: Is car length not equal to 7? //

console.log("Is car length != 7? I predict True.");

console.log(car.length != 7); // True //

// Test 9: Is typeof car equal to 'string'? //

console.log("Is typeof car == 'string'? I predict True.");

console.log(typeof car == 'string'); // True //

// Test 10: Is typeof car equal to 'number'? //

console.log("Is typeof car == 'number'? I predict False.");

console.log(typeof car == 'number'); // False //
