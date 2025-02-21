let inputYear = 1991;
console.log(String(inputYear) + 18); // 199118
console.log(inputYear + 18); // 2009

inputYear = "ahmed";
console.log(Number(inputYear) + 18); // NaN
console.log(typeof Number(inputYear));

// Type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1; // '11'
n = n - 1; // 10
console.log(n);

n = 2 + 3 + 4 + "5"; // 95
console.log(n);

n = "10" - "4" - "3" - 2 + "5"; // 15
console.log(n);
