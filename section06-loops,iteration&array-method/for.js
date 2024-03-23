for (let i = 0; i <= 10; i++) {
    console.log(i);
    i++;
}
// nesting
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(i, j);
    }
}

// loop through an array
const names = ["John", "Jane", "Doe", "Smith"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
