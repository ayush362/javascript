const people = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        email: "john@hello.com",
        phone: "1234567890",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 25,
        email: "dkjlfkl",
        phone: "1234567890",
    },
    {
        firstName: "Yoo",
        lastName: "Doe",
        age: 20,
        email: "dkjlfkl",
        phone: "1234567890",
    },
    {
        firstName: "Jill",
        lastName: "Doe",
        age: 15,
        email: "dkjlfkl",
        phone: "1234567890",
    },
];
// Challange  1
const youngPeople = people
    .filter((person) => person.age <= 20)
    .map((person) => {
        return {
            name: `${person.firstName} ${person.lastName}`,
            email: person.email,
        };
    });

console.log(youngPeople);

// challange 2
const nums = [-1, 2, -3, 4, -5, 6, -7, 8, -9];
const positiveNums = nums
    .filter((num) => num > 0)
    .reduce((acc, cur) => acc + cur, 0);

console.log(positiveNums);

// Challange 3
const words = ["hello", "world", "this", "is", "a", "test"];
const capitalized = words.map((word) => word.toUpperCase());
console.log(capitalized);