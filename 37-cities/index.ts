// Assignment 37 Cities and Names //

// Objective create a function that takes in country and citite input and print them out with message //

// Creating the function for printing out cities in a country //

function describe_city(city: string, country: string = "USA"): void {
    console.log("\n" + `${city}` + " is in " + `${country}`);
}

// Calling the function by adding value to the function's parameters //

describe_city("New york"); // Default value we stored USA //
describe_city("Tokyo", "Japan");
describe_city("Karachi", "Pakistan");