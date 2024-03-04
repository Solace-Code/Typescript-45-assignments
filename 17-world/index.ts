// Assignment 17 World //

// Define the array of locations //

let locations: string[] = ["\nTokyo", "Paris", "Machu Picchu", "Santorini", "New York City"];

// Print the array in its original order //

console.log("\nOriginal order:", locations + "\n");

// Print the array in alphabetical order without modifying the original list //

console.log("\nAlphabetical order:", [...locations].sort());

// Print the array to show it's still in its original order //

console.log("\nOriginal order (unchanged):", locations);

// Print the array in reverse alphabetical order without modifying the original list //

console.log("\nReverse alphabetical order:", [...locations].sort().reverse());

// Print the array to show it's still in its original order // 

console.log("\nOriginal order (unchanged):", locations);

// Reverse the order of the list //

locations.reverse();
console.log("\nReversed order:", locations);

// Reverse the order of the list again to return to the original order //

locations.reverse();
console.log("\nBack to original order:", locations);

// Sort the array so it's stored in alphabetical order //

locations.sort();
console.log("\nSorted in alphabetical order:", locations);

// Sort the array to change it to reverse alphabetical order //

locations.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:", locations);
