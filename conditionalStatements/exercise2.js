// Exercise 2: Divisibility Check

// 1. Using if else statements to check if a number is divisible by 2, 3, or both
let number = 18; // You can change this number to test other values

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

