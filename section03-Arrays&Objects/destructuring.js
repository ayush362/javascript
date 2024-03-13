const firstname = "John";
const lastname = "Doe";
const age = 50;

const person = {
    firstname,
    lastname,
    age,
};

// Destructuring

const todo = {
    id: 1,
    name: "Buy Milk",
    completed: false,
};

const { id, name, completed } = todo;
console.log(id, name, completed);

console.log(person);
