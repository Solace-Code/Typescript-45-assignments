// Assignment 18 Invited Guest //
// Objective Print out the number of invited guest //
// Creating Guest list in an array
var invitedGuests = ["M.Ahmed", "Ali", "Muneeb", "Faraz", "Danial", "Omer"];
// Creating an announcement
var invitedAnnouncement = "\nWe can only invite two people due to some circumstances";
// Creating an invitation message
var invitedInvite = "\nWe want to let you know you are still Invited";
// Creating an apology message for those who are not invited
var invitedApology = "\nWe would like to sincerely apologize due to some unfortunate events we can't invite you\t";
// Creating logic for the uninvited and still invited guests
while (invitedGuests.length > 2) {
    var unInvited = invitedGuests.pop();
    console.log("".concat(invitedApology, " for ").concat(unInvited));
}
if (invitedGuests.length === 2) {
    console.log(invitedAnnouncement);
    invitedGuests.forEach(function (guest) {
        console.log("".concat(invitedInvite, " for ").concat(guest));
    });
}
// Print out the number of invited guests //
console.log("\nNumber of invited guests: ".concat(invitedGuests.length));
