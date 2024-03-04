// Assignment 42 Unchanged Magicians //


// Original array with magician names// 

const magicians3 = ["Harry Potter", "Hermione Gainger", "Neveille Strongbottom"];

// Function to print each magician's name //

function displayMagicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log("\n" + magician);
    });
}

// Function to modify magician names by adding "the Great" //

function makeGreat(magicians: string[]): string[] {
    const modifiedMagicians: string[] = [];

    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians.push("the Great " + magicians[i]);
    }

    return modifiedMagicians;
}

// Display original magicians //

console.log("Original Magicians:");
displayMagicians(magicians3);

// Make a copy of the array and modify magician names to add "the Great" //

const modifiedMagicians = makeGreat([...magicians3]);

// Display original magicians again //

console.log("\nOriginal Magicians after modification:");
displayMagicians(magicians3);

// Display modified magicians //

console.log("\nModified Magicians:");
displayMagicians(modifiedMagicians);
