// Assignment 33 Pizza //
// Objective create a for loop for pizza flavours in an array and than print out a statement for each pizza//
// Creating and array for the pizza flavours //
var pizzaFlavour = ["Pepperoni", "BBQ Chicken", "Margherita"];
// Creating a starting title statement //
console.log("\nMy most favourite flavours of pizza");
// Creating a variable to print out each pizza flavour name //
for (var _i = 0, pizzaFlavour_1 = pizzaFlavour; _i < pizzaFlavour_1.length; _i++) {
    var pizza = pizzaFlavour_1[_i];
    console.log("\n" + pizza);
}
// Printing the name of each pizza with a sentence //
for (var _a = 0, pizzaFlavour_2 = pizzaFlavour; _a < pizzaFlavour_2.length; _a++) {
    var pizza = pizzaFlavour_2[_a];
    console.log("\nI love " + pizza + " pizza");
}
// Printing out a statment about how much we like pizza //
console.log("\nPizza's are my favourite go to food");
