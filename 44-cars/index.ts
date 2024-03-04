// Assignment 44 Cars //

// Objective Write a function that stores information about a car in a Object //

// Creating an interface //

interface CarInfo {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary other properties
}

// Creating a function //

function createCar(manufacturer: string, model: string, ...otherInfo: [string, any][]): CarInfo {
    const car: CarInfo = { manufacturer, model };
    
    // Add other properties //

    otherInfo.forEach(([key, value]) => {
        car[key] = value;
    });
    
    return car;
}

// Printing out the result //

const myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2023]);
console.log(myCar);
