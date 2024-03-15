// Challenge 1
const getCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

console.log(getCelsius(38));

// Challenge 2

const minMax = (...numbers) => {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    return {
        min,
        max,
    };
};
console.log(minMax(1, 2, 34, 4, 5, 6, 7, 8, 9, 10));
