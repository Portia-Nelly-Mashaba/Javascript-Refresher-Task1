// Exercise 1: Temperature check

// 1. Using if-else statements
function checkTemperatureIfElse(temp) {
    if (temp < 0) {
        console.log("It's freezing!");
    } else if (temp >= 0 && temp <= 15) {
        console.log("It's cold.");
    } else if (temp >= 16 && temp <= 25) {
        console.log("It's mild.");
    } else if (temp > 25) {
        console.log("It's warm.");
    }
}

// Example usage:
checkTemperatureIfElse(-5);  // Output: It's freezing!
checkTemperatureIfElse(10);  // Output: It's cold.
checkTemperatureIfElse(20);  // Output: It's mild.
checkTemperatureIfElse(30);  // Output: It's warm.

// 2. Using switch statements
function checkTemperatureSwitch(temp) {
    switch (true) {
        case (temp < 0):
            console.log("It's freezing!");
            break;
        case (temp >= 0 && temp <= 15):
            console.log("It's cold.");
            break;
        case (temp >= 16 && temp <= 25):
            console.log("It's mild.");
            break;
        case (temp > 25):
            console.log("It's warm.");
            break;
        default:
            console.log("Invalid temperature");
    }
}

// Example usage:
checkTemperatureSwitch(-5);  // Output: It's freezing!
checkTemperatureSwitch(10);  // Output: It's cold.
checkTemperatureSwitch(20);  // Output: It's mild.
checkTemperatureSwitch(30);  // Output: It's warm.

