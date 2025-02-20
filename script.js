let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true); // boolean
console.log(typeof javascriptIsFun); // boolean
console.log(typeof 23); // number
console.log(typeof "Jonas"); // string

// Dynamic typing
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun); // string

let year;
console.log(year); // undefined
console.log(typeof year); // undefined
console.log(typeof undefined); // undefined

year = 1991;
console.log(year); // 1991
console.log(typeof year); // number

year = null;
console.log(year); // null
console.log(typeof year); // object
console.log(typeof null); // object
