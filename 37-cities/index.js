// Assignment 37 Cities //
// Objective create a function that takes in country and citite input and print them out with message //
// Creating the function for printing out cities in a country //
function describe_city(city, country) {
    if (country === void 0) { country = "USA"; }
    console.log("\n" + "".concat(city) + " is in " + "".concat(country));
}
// Calling the function by adding value to the function's parameters //
describe_city("New york"); // Default value we stored USA //
describe_city("Tokyo", "Japan");
describe_city("Karachi", "Pakistan");
