// nesting concatinating and spread operator

let x;

const fruits = ["Apple", "Banana", "Orange", "Pear"];
const berries = ["Strawberry", "Blueberry", "Raspberry"];
const allFruits = [fruits, berries];

//fruits.push(berries);

//x = fruits[4][2];

// concat
x = fruits.concat(berries);

// spread operator
x = [...fruits, ...berries];

// Flatten Arrays
const arr = [1, 2, [3, 4], 7, [5, 6]];
x = arr.flat();

// Static Methods on Array object
x = Array.isArray(fruits);

x = Array.from("12345");

const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);
console.log(x);
