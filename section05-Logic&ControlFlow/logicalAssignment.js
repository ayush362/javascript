// ||=

let a = false;

// if (!a) {
//     a = 20;
// }

// a = a || 10;
a ||= 10;

console.log(a);

// &&=
let b = 20;
if (b) {
    b = 30;
}

b = b && 20;
b &&= 20;
console.log(b);

// ??=
let c = null;
if (c === null || c === undefined) {
    c = 10;
}
c = c ?? 10;
c ??= 10;
console.log(c);
