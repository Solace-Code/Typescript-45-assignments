// Assignment 18 Invited Guest //

// Objective Print out the number of invited guest //

// Creating Guest list in an array
const invitedGuests = ["M.Ahmed", "Ali", "Muneeb", "Faraz", "Danial", "Omer"];

// Creating an announcement
const invitedAnnouncement = "\nWe can only invite two people due to some circumstances";

// Creating an invitation message
const invitedInvite = "\nWe want to let you know you are still Invited";

// Creating an apology message for those who are not invited
const invitedApology = "\nWe would like to sincerely apologize due to some unfortunate events we can't invite you\t";

// Creating logic for the uninvited and still invited guests
while (invitedGuests.length > 2) {
    let unInvited = invitedGuests.pop();
    console.log(`${invitedApology} for ${unInvited}`);
}

if (invitedGuests.length === 2) {
    console.log(invitedAnnouncement);
    invitedGuests.forEach(guest => {
        console.log(`${invitedInvite} for ${guest}`);
    });
}

// Print out the number of invited guests //

console.log(`\nNumber of invited guests: ${invitedGuests.length}`);
