// Falsy Values:
// false
// 0
// ""
// null
// undefined
// NaN

// Everything else is truthy
// Example:
//  true
//  '0'
//  ' '
//  []
//  {}
//  function() {}
//  'false'

const x = [];

if (x) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// Truty and Falsy caveats

const children = 0;
if (!isNaN(children)) {
    console.log(`We have ${children} children`);
} else {
    console.log("Please enter the number of children");
}

// Checking for empty array
const posts = [];
if (posts.length > 0) {
    console.log("There are posts");
} else {
    console.log("There are no posts");
}

// Checking for empty objects
const user = {};

if (Object.keys(user).length > 0) {
    console.log("list user");
} else {
    console.log("No user");
}
