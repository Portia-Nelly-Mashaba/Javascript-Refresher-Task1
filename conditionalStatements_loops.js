// // Exercise 1: Temperature check

// // 1. Using if-else statements
// function checkTemperatureIfElse(temp) {
//     if (temp < 0) {
//         console.log("It's freezing!");
//     } else if (temp >= 0 && temp <= 15) {
//         console.log("It's cold.");
//     } else if (temp >= 16 && temp <= 25) {
//         console.log("It's mild.");
//     } else if (temp > 25) {
//         console.log("It's warm.");
//     }
// }

// // Example usage:
// checkTemperatureIfElse(-5);  // Output: It's freezing!
// checkTemperatureIfElse(10);  // Output: It's cold.
// checkTemperatureIfElse(20);  // Output: It's mild.
// checkTemperatureIfElse(30);  // Output: It's warm.

// // 2. Using switch statements
// function checkTemperatureSwitch(temp) {
//     switch (true) {
//         case (temp < 0):
//             console.log("It's freezing!");
//             break;
//         case (temp >= 0 && temp <= 15):
//             console.log("It's cold.");
//             break;
//         case (temp >= 16 && temp <= 25):
//             console.log("It's mild.");
//             break;
//         case (temp > 25):
//             console.log("It's warm.");
//             break;
//         default:
//             console.log("Invalid temperature");
//     }
// }

// // Example usage:
// checkTemperatureSwitch(-5);  // Output: It's freezing!
// checkTemperatureSwitch(10);  // Output: It's cold.
// checkTemperatureSwitch(20);  // Output: It's mild.
// checkTemperatureSwitch(30);  // Output: It's warm.


// // Exercise 2: Divisibility Check

// // 1. Using if else statements to check if a number is divisible by 2, 3, or both
// let number = 18; // You can change this number to test other values

// if (number % 2 === 0 && number % 3 === 0) {
//     console.log("Divisible by both.");
// } else if (number % 2 === 0) {
//     console.log("Divisible by 2.");
// } else if (number % 3 === 0) {
//     console.log("Divisible by 3.");
// } else {
//     console.log("Not divisible by 2 or 3.");
// }

// Exercise 3: For loops

// 1. Print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print all even numbers between 1 and 20.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. Calculate the sum of all numbers from 1 to 100 and print the result.
let totalSum = 0;
for (let i = 1; i <= 100; i++) {
    totalSum += i;
}
console.log(totalSum);

// 4. Given the array of numbers, print each element to the console.
const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}


// // 2. Re-writing the code using switch statements
// let num = 18; // You can change this number to test other values

// switch (true) {
//     case (num % 2 === 0 && num % 3 === 0):
//         console.log("Divisible by both.");
//         break;
//     case (num % 2 === 0):
//         console.log("Divisible by 2.");
//         break;
//     case (num % 3 === 0):
//         console.log("Divisible by 3.");
//         break;
//     default:
//         console.log("Not divisible by 2 or 3.");
//         break;
// }

// // Exercise 5: Do While loops

// // 1. Print numbers from 1 to 10.
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// // 2. Calculate the sum of all numbers from 1 to 100 and print the result.
// let j = 1;
// let sum = 0;
// do {
//   sum += j;
//   j++;
// } while (j <= 100);
// console.log('Sum of all numbers is:', sum);

// // 3. Prompt the user to enter a number greater than 10. Keep asking until they enter a valid number.
// let number;
// do {
//   number = parseInt(prompt("Enter a number greater than 10: "), 10);
// } while (number <= 10);
// console.log("You entered a valid number:", number);

// // 4. Create a simple guessing game where the user must guess a number between 1 and 10. The game continues until the user guesses the correct number.
// const correctNumber = Math.floor(Math.random() * 10) + 1;
// let guess;
// do {
//   guess = parseInt(prompt("Guess a number between 1 and 10: "), 10);
//   if (guess !== correctNumber) {
//     console.log("Wrong guess, try again.");
//   }
// } while (guess !== correctNumber);
// console.log("Congratulations! You guessed the correct number:", correctNumber);



