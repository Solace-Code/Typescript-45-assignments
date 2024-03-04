// Assignment 16 Shrinking Guest List //

// Objective is to shrink the guest from the array and display a message //

// Creating Guest list in an array

const shrinkGuest = ["M.Ahmed", "Ali", "Muneeb", "Faraz", "Danial", "Omer"];

// Creating an announcement

const shrinkAnnouncement = "\nWe can only invite two people due to some circumstances";

// Creating an invitation message

const shrinkInvite = "\nWe want to let you know you are still Invited";

// Creating an apology message for those who are not invited

const shrinkApology = "\nWe would like to sincerely apologize due to some unfortunate events we can't invite you\t";

// Creating logic for the uninvited and still invited guests

while (shrinkGuest.length > 2) {
    let unInvited = shrinkGuest.pop();
    console.log(`${shrinkApology} for ${unInvited}`);
}

if (shrinkGuest.length === 2) {
    console.log(shrinkAnnouncement);
    shrinkGuest.forEach(guest => {
        console.log(`${shrinkInvite} for ${guest}`);
    });
}
