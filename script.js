// literals
console.log("amazing"); // string literal
console.log(40 + 8 + 23 - 10); // number(expression) literal

// variables
let firstName = "Jonas";
let age = 23;
console.log(firstName);
console.log(age);

// naming convention
/*
    undefined variable names
    let 3years = 3; // cannot start with a number
    let jonas&matilda = 'JM'; // cannot contain special characters
    let first-name = 'Jonas'; // cannot contain hyphens
    let new = 27; // reserved keyword
    let function = 27; // reserved keyword
    let name = 'Jonas'; // reserved
    let Name = 'Jonas'; // case sensitive
*/

// good variable names
let $function = 27;
let _function = 27;
let first_name = "Jonas";
let firstNamePerson = "Jonas"; // best practice: lower camel case
let first_name_person = "Jonas";
let personAge = 27;
let PI = 3.1415;

// identifiers must be unique and descriptive
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

// these identifiers are not unique and descriptive
let job1 = "Programmer";
let job2 = "Teacher";
