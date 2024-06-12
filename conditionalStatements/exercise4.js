//Exercise4
// 2. Re-writing the code using switch statements
let num = 18; // You can change this number to test other values

switch (true) {
    case (num % 2 === 0 && num % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (num % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (num % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
        break;
}
