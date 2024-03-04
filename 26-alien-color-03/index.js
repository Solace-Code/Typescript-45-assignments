// Assignment 26 Alien Color If chain statement //
// Objective Create a If else chain to give multiple scenario for the logic of alien color //
// Creating Variable for alien colors //
var alienColor03Green = "green";
var alienColor03Red = "red";
var alienColor03Blue = "blue";
// Creating a If Else Chain for the logic //
// If chain for green //
console.log("\nGreen Alien Scenario");
if (alienColor03Green == "green") {
    console.log("\nYou have earned 5 Points for Green Alien");
}
else if (alienColor03Red == "red") {
    console.log("You have earned 10 Points for Red Alien");
}
else if (alienColor03Blue == "blue") {
    console.log("You have earned 15 Points for Blue Alien");
}
else {
    console.log("You have lost the game you did not get any Alien");
}
// If chain for Red //
console.log("\nRed Aline Scenario");
if (alienColor03Green !== "green") {
    console.log("You have earned 5 Points for Green Alien");
}
else if (alienColor03Red == "red") {
    console.log("\nYou have earned 10 Points for Red Alien");
}
else if (alienColor03Blue == "blue") {
    console.log("You have earned 15 Points for Blue Alien");
}
else {
    console.log("You have lost the game you did not get any Alien");
}
// if Chain for Blue //
console.log("\nBlue Alien Scenario");
if (alienColor03Green !== "green") {
    console.log("You have earned 5 Points for Green Alien");
}
else if (alienColor03Red !== "red") {
    console.log("You have earned 10 Points for Red Alien");
}
else if (alienColor03Blue == "blue") {
    console.log("\nYou have earned 15 Points for Blue Alien");
}
else {
    console.log("You have lost the game you did not get any Alien");
}
// If chain for none //
console.log("\nNone of the statement Scenario");
if (alienColor03Green !== "green") {
    console.log("You have earned 5 Points for Green Alien");
}
else if (alienColor03Red !== "red") {
    console.log("You have earned 10 Points for Red Alien");
}
else if (alienColor03Blue !== "blue") {
    console.log("You have earned 15 Points for Blue Alien");
}
else {
    console.log("\nYou have lost the game you did not get any Alien");
}
