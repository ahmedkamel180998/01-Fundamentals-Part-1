const now = new Date().getFullYear();
const ageJonas = now - 1991;
const ageAhmed = now - 1998;
console.log(ageJonas, ageAhmed);

let averageAge = (ageJonas + ageAhmed) / 2;
console.log(averageAge);

averageAge = ageJonas + ageAhmed / 2;
console.log(averageAge); // logical error
