console.log(10 > 20 && 20 > 10);
console.log(10 > 20 || 20 > 10);

// && - Will return first falsy value or the last value
let a;
a = 10 && 20;
a = 10 && 20 && 30 && 40;
a = 10 && "" && 0 && 40;
console.log(a);

const posts = [];
console.log(posts[0]);
posts.length > 0 && console.log(posts[0]);

// || - Will return first truthy value or the last value
let b;
b = 10 || 20;
b = 10 || 20 || 30 || 40;
b = 10 || "" || 0 || 40;
console.log(b);

// ? - Return the right side operand when the left side operand null or undefined
let c;
c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
console.log(c);
