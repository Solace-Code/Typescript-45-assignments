// Assignment 42 Unchanged Magicians //
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Original array with magician names// 
var magicians3 = ["Harry Potter", "Hermione Gainger", "Neveille Strongbottom"];
// Function to print each magician's name //
function displayMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log("\n" + magician);
    });
}
// Function to modify magician names by adding "the Great" //
function makeGreat(magicians) {
    var modifiedMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        modifiedMagicians.push("the Great " + magicians[i]);
    }
    return modifiedMagicians;
}
// Display original magicians //
console.log("Original Magicians:");
displayMagicians(magicians3);
// Make a copy of the array and modify magician names to add "the Great" //
var modifiedMagicians = makeGreat(__spreadArray([], magicians3, true));
// Display original magicians again //
console.log("\nOriginal Magicians after modification:");
displayMagicians(magicians3);
// Display modified magicians //
console.log("\nModified Magicians:");
displayMagicians(modifiedMagicians);
