// Assignment 40 Magician //

// Objective create an array with magician names and than print each one of them //

// Creating an array with magician names //

const magicians = ["Harry Potter", "Hermione Gainger", "Neveille Strongbottom"];

// Creating the function print each magician names //

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log("\n" + magician);
    });
}

// Printing out magicians //

show_magicians(magicians);