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
