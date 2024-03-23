const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

const cart = [
    { name: "Widget", price: 9.95 },
    { name: "Gadget", price: 22.95 },
    { name: "Doohickey", price: 34.95 },
];

const total = cart.reduce((acc, cur) => acc + cur.price, 0);
console.log(total);
