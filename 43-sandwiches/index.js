// Assignment 43 Sandwiches //
// Objective Write a function that accepts a array of items a person wants on a sandwich //
// Creating a function to take input for sandwiches //
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Order Summary:");
    if (items.length === 0) {
        console.log("No items selected.");
    }
    else {
        console.log("Sandwich with:");
        items.forEach(function (item) {
            console.log("- " + item);
        });
    }
    console.log("----------------------");
}
// Call the function with different number of arguments //
orderSandwich('ham', 'cheese', 'lettuce');
orderSandwich('turkey', 'bacon');
orderSandwich('tomato', 'mayo', 'mustard', 'pickles');
