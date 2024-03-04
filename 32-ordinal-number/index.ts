// Assignment 32 Ordinal Numbers //

// Objective Print out Ordinal numbers from 1 to 9 //

// Creating an array for the numbers //

let numbers = [1,2,3,4,5,6,7,8,9];

// Creating a loop to take value from the variable and assign ordinal values to each //

for (const num of numbers) {
    let ordinalEnding: string;
    if(num === 1){
        ordinalEnding = "st";
    }else if(num === 2){
        ordinalEnding = "nd";
    }else if(num === 3){
        ordinalEnding = "rd";
    }else {
        ordinalEnding = "th";
    }
    
    // Printing out the result from our for loop logic //

    console.log("\n" + `${num}${ordinalEnding}`);
}
