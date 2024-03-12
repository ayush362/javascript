let x;

const arr = [34, 55, 66, 77, 88, 99, 100];

arr.push(100);

arr.pop();

arr.unshift(0);

arr.shift();

//arr.reverse();

x = arr.includes(200);

x = arr.indexOf(88);

// does not manipulate the original array 
x = arr.slice(1, 3);

// manipulates the original array
x = arr.splice(1, 3);

console.log(x);
