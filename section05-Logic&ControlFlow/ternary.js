const age = 19;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// using a ternary operator
age >= 18 ? console.log("you can vote") : console.log("you cannot vote");

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
console.log(canVote);

// Multiple conditions
const auth = true;
// let redirect;
// if (auth) {
//     console.log("welcome the the dashboard");
//     redirect = "/dashboard";
// } else {
//     console.log("access denied");
//     redirect = "/login";
// }

const redirect = auth
    ? (console.log("welcome"), "/dashboard")
    : (console.log("Acces denied"), "/login");
console.log(redirect);
