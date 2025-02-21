const now = new Date().getFullYear();
const ageJonas = now - 1991;
const ageAhmed = now - 1998;
console.log(ageJonas, ageAhmed);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// using plus operator to concatenate strings
const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100

// Increment and decrement operators
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageJonas > ageAhmed); // >, <, >=, <=
console.log(ageAhmed >= 27);

const isValidAge = ageAhmed >= 27;
console.log(isValidAge);

// Operator precedence
console.log(now - 1991 > now - 1998);
