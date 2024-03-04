// Assignment 31 Checking user names //
// Objective create 2 arrays and match if they have simillar names or not //
// Creating an array for current users //
var currentUsers = ["Emily", "Haley", "Penny", "Shane", "Sam"];
// Creating an array for new users //
var newUsers = ["Alex", "Sebastian", "Emily", "Shane", "Leah"];
// Function to check if the username exist in either array's //
function isUserNameTaken(username) {
    return currentUsers.some(function (user) { return user.toLowerCase() === username.toLowerCase(); });
}
// Creating Loop for checking the users list //
newUsers.forEach(function (username) {
    if (isUserNameTaken(username)) {
        console.log("\nThis username " + "".concat(username) + " " + "is already taken. Please enter new username.");
    }
    else {
        console.log("\nThe Username " + "".concat(username) + " " + "is available.");
    }
});
