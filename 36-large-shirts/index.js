// Assignment 36 Large Shirts //
// Objective Same as Assignment 35 but this time Large shirt as default //
// Creating the function for making shirt //
function make_shirt(size, message) {
    if (size === void 0) { size = "L"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("\nThe shirt is size ".concat(size, " and it says: \"").concat(message, "\""));
}
// Make a large shirt with default message //
make_shirt();
// Make a medium shirt with default message //
make_shirt("M");
// Make a shirt of any size with a different message //
make_shirt("S", "Hello, World!");
