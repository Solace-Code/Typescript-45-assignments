// Assignment 44 Cars //
// Creating a function //
function createCar(manufacturer, model) {
    var otherInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherInfo[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    // Add other properties //
    otherInfo.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Printing out the result //
var myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2023]);
console.log(myCar);
