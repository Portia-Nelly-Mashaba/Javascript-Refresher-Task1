//Exercise 2: Boolean and Operators
// 1. Use comparison operators to compare two numbers and store the results in boolean variables.
let num1 = 8;
let num2 = 12;

let isGreater = num1 > num2; // false
let isLessOrEqual = num1 <= num2; // true
let isEqual = num1 === num2; // false
let isNotEqual = num1 !== num2; // true

// 2. Declare two variables x and y with the values 8 and 12 respectively.
let x = 8;
let y = 12;

// Use comparison operators to check and print the following:
console.log("Is x greater than y?", x > y); // false
console.log("Is x less than or equal to y?", x <= y); // true
console.log("Is x equal to y?", x === y); // false
console.log("Is x not equal to y?", x !== y); // true

// 3. Declare the variables a and b with values true and false, determine and print the result of the following logical operations:
let a = true;
let b = false;

console.log("a AND b:", a && b); // false
console.log("a OR b:", a || b); // true
console.log("NOT a:", !a); // false

// 4. Declare variable p and assign it a value of 10. Use the following assignment operators to modify the value of p with any number and print the result each time:
let p = 10;

p += 5; // p = p + 5
console.log("p after += 5:", p); // 15

p -= 3; // p = p - 3
console.log("p after -= 3:", p); // 12

p *= 2; // p = p * 2
console.log("p after *= 2:", p); // 24

p /= 4; // p = p / 4
console.log("p after /= 4:", p); // 6

p %= 5; // p = p % 5
console.log("p after %= 5:", p); // 1

