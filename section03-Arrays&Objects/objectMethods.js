let x;

const todo = new Object();

todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;

x = todo;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
x = obj3;

const todos = [
    { id: 1, name: "Buy Milk", completed: false },
    { id: 2, name: "Buy Bread", completed: false },
    { id: 3, name: "Buy Butter", completed: false },
];

x = todos;

console.log(x);
