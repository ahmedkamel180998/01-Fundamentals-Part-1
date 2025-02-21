const age = 15;
if (age >= 18) {
  console.group(`Your're old enough to drive a car 🚗`);
} else {
  console.log(
    `You are too young to drive a car, You've to wait ${18 - age} Years!`
  );
}

const birthYear = 1990;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
