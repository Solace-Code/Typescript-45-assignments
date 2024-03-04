// Assignment 16 Shrinking Guest List //
// Objective is to shrink the guest from the array and display a message //
// Creating Guest list in an array
var shrinkGuest = ["M.Ahmed", "Ali", "Muneeb", "Faraz", "Danial", "Omer"];
// Creating an announcement
var shrinkAnnouncement = "\nWe can only invite two people due to some circumstances";
// Creating an invitation message
var shrinkInvite = "\nWe want to let you know you are still Invited";
// Creating an apology message for those who are not invited
var shrinkApology = "\nWe would like to sincerely apologize due to some unfortunate events we can't invite you\t";
// Creating logic for the uninvited and still invited guests
while (shrinkGuest.length > 2) {
    var unInvited = shrinkGuest.pop();
    console.log("".concat(shrinkApology, " for ").concat(unInvited));
}
if (shrinkGuest.length === 2) {
    console.log(shrinkAnnouncement);
    shrinkGuest.forEach(function (guest) {
        console.log("".concat(shrinkInvite, " for ").concat(guest));
    });
}
