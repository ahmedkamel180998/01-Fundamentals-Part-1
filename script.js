// concatenate a string with + operator
const firstName = "Ahmed";
const lastName = "Kamel";
const job = "Software Engineer";
const ahmed =
  "I'm " +
  firstName +
  " " +
  lastName +
  ", a " +
  (2024 - 1998) +
  " year old " +
  job +
  "!";
console.log(ahmed);

// conacatenate a string with template literals
const ahmedNew = `I'm ${firstName} ${lastName}, a ${
  2024 - 1998
} year old ${job}!`;
console.log(ahmedNew);

// using backticks to write a string value instead of using double or single quotes
console.log(`String with backticks`);

// multi-line string using escape characters
console.log("String\nwith\nescape\ncharacters");

// using backticks to write a multi-line string
console.log(`String
with
backticks`);
