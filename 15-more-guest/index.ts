// Assignment 15 More Guest //

// Objective same as Assignment 13 Guest list but to add another value and change guest //

const moreGuest = ["M.Ahmed", "Ali", "Muneeb", "Faraz", "Danial"];
moreGuest.push("Omer");

// Printing out Invitation Message //

const moreMessage = "We would like to invite you to dinner";

// Invitation Title //

console.log("\nInvitation\n")

// Printing out invitations //

console.log("Mr: " + moreGuest[0] + " " + moreMessage + "\n");
console.log("Mr: " + moreGuest[1] + " " + moreMessage + "\n");
console.log("Mr: " + moreGuest[2] + " " + moreMessage + "\n");
console.log("Mr: " + moreGuest[3] + " " + moreMessage + "\n");
console.log("Mr: " + moreGuest[4] + " " + moreMessage + "\n");
console.log("Mr: " + moreGuest[5] + " " + moreMessage);


// Informing out guest that we have found a bigger table //

console.log("\nWe have found a bigger table which is why we would like to invite more of our humble guest");