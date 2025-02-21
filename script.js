// mutable variable
let age = 25;
age = 26;
console.log(age);

// immutable variable
const birthYear = 1998;
//birthYear = 2022; // typeError : Assignment to constant variable
console.log(birthYear);

// immutable variable
//const job; // SyntaxError: Missing initializer in const declaration
//console.log(job);

/*
    In JavaScript, we have two types of mutable variables:
    - let => mutable block scope variable
    - var => mutable function scope variable

    And we have one type of immutable variable:
    - const => immutable block scope variable
*/

// terrible practice
// JavaScript allows you to declare a variable without a keyword, JavaScript will create a property on the global object.
// This is a terrible practice and should be avoided.
lastName = "kamel";
console.log(lastName);
