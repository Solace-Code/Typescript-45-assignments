// Assignment 36 Large Shirts //

// Objective Same as Assignment 35 but this time Large shirt as default //

// Creating the function for making shirt //

function make_shirt(size: string = "L", message: string = "I love TypeScript"): void {
    console.log(`\nThe shirt is size ${size} and it says: "${message}"`);
}

// Make a large shirt with default message //

make_shirt();

// Make a medium shirt with default message //

make_shirt("M");

// Make a shirt of any size with a different message //

make_shirt("S", "Hello, World!");
