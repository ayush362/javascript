// 1st challenge
const arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
arr.reverse();
console.log(arr);

// 2nd challenge
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
arr1.splice(4);
const arr3 = arr1.concat(arr2);
console.log(arr1);
