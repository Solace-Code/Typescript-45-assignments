// Assignment 43 Sandwiches //

// Objective Write a function that accepts a array of items a person wants on a sandwich //

// Creating a function to take input for sandwiches //

function orderSandwich(...items: string[]): void {
    console.log("Order Summary:");
    if (items.length === 0) {
        console.log("No items selected.");
    } else {
        console.log("Sandwich with:");
        items.forEach(item => {
            console.log("- " + item);
        });
    }
    console.log("----------------------");
}

// Call the function with different number of arguments //

orderSandwich('ham', 'cheese', 'lettuce');
orderSandwich('turkey', 'bacon');
orderSandwich('tomato', 'mayo', 'mustard', 'pickles');
