// Assignment 41 Great Magician //

// Objective Similar to Assignment 40 but this time add Great Magician //

// Creating an array with magician names //

const magicians2 = ["Harry Potter", "Hermione Gainger", "Neveille Strongbottom"];

// Creating the function to print each magician name //

function show_magicians2(magicians2: string[]) {
    magicians2.forEach(magician => {
        console.log("\n" + magician);
    });
}

// Creating the function to modify magician names //

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians2[i] = "the Great " + magicians2[i];
    }
}

// Printing out original magicians //

console.log("Original Magicians:");
show_magicians2(magicians2);

// Modifying magician names to add "the Great" //

make_great(magicians2);

// Printing out modified magicians //

console.log("\nModified Magicians:");
show_magicians2(magicians2);
