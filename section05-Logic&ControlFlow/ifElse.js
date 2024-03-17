const d = new Date(10, 30, 2022, 8, 0, 0);
const hour = d.getHours();

if (hour < 12) {
    console.log("Good morning");
} else if (hour < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}

// nested
if (hour < 12) {
    console.log("Good morning");
    if (hour === 6) {
        console.log("Time to wake up");
    }
} else {
    console.log("Good evening");
    if (hour >= 20) {
        console.log("Time to sleep");
    }
}
