function registerUser(user = "bot") {
    return user + " is registered!";
}

console.log(registerUser());

function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6));

// Objects as params
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in `;
}

const user = {
    id: 21,
    name: "Ayush",
};

console.log(loginUser(user));

// Arrays as params
function getRandom(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(item);
}

getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
