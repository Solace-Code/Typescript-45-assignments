// Assignment 34 Animals //

// Objective Create an array storing the name of three animals that share similar traits //

// Creating an Array for animals //

let animals = ["wolf", "dog", "coyotes"];

// Printing out each animal //

console.log("\nList of animals");

for(let animal of animals) {
    console.log("\n" + animal);
}

// Printing a statement about each animal in the array //

console.log("\nHere are some characterstics of each animal");

// Creating a for loop for animals and their statement //

for(let animal of animals) {
    switch (animal) {
        case "wolf":
            console.log("\nWolves are ancestors of dogs they are strong clever and stay in pack which show they have unity");
            break;
        case "dog":
            console.log("\nDogs are decendants of wolves they are highly intelligent loyal playful and protective of their humans");
            break;
        case "coyotes":
            console.log("\nCoyotes are not direct decendants of wolves but are smaller and slender build and highly adaptable");
    }
}

// Printing out a conclusion statement //

console.log("\nout of these 3 Dog is consider a good pet and a friend of human but you should really stay away from Wolves and Coyotes");
