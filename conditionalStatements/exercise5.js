// Exercise 5: Do While loops

// 1. Print numbers from 1 to 10.
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

// 2. Calculate the sum of all numbers from 1 to 100 and print the result.
let j = 1;
let sum = 0;
do {
  sum += j;
  j++;
} while (j <= 100);
console.log('Sum of all numbers is:', sum);

// 3. Prompt the user to enter a number greater than 10. Keep asking until they enter a valid number.
let number;
do {
  number = parseInt(prompt("Enter a number greater than 10: "), 10);
} while (number <= 10);
console.log("You entered a valid number:", number);

// 4. Create a simple guessing game where the user must guess a number between 1 and 10. The game continues until the user guesses the correct number.
const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
  guess = parseInt(prompt("Guess a number between 1 and 10: "), 10);
  if (guess !== correctNumber) {
    console.log("Wrong guess, try again.");
  }
} while (guess !== correctNumber);
console.log("Congratulations! You guessed the correct number:", correctNumber);
