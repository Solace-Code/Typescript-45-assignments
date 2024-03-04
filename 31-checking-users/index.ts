// Assignment 31 Checking user names //

// Objective create 2 arrays and match if they have simillar names or not //

// Creating an array for current users //

let currentUsers = ["Emily", "Haley", "Penny", "Shane", "Sam"];

// Creating an array for new users //

let newUsers = ["Alex", "Sebastian", "Emily", "Shane", "Leah"];

// Function to check if the username exist in either array's //

function isUserNameTaken(username: string): boolean {
    return currentUsers.some(user => user.toLowerCase() === username.toLowerCase());
}


// Creating Loop for checking the users list //

newUsers.forEach(username => {
    if(isUserNameTaken(username)) {
        console.log("\nThis username " + `${username}` + " " + "is already taken. Please enter new username.");
    }else {
        console.log("\nThe Username " + `${username}` + " " + "is available.");
    }
})
