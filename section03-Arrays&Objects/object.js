let x;

const person = {
    name: "Ayush",
    age: 19,
    isAdmin: true,
    address: {
        city: "Delhi",
        country: "India",
    },
    greet: function () {
        console.log(`Hello ${this.name}`);
    },
};
person.name = "Ayush khatri";
person.greet();

x = person;
delete person.age;

console.log(x);
