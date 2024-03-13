const library = [
    {
        title: "The Road Ahead",
        author: "Ayush khatri",
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: "the road behind",
        author: "billy",
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: "road to the future",
        author: "frank",
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];

library.map((book) => {
    book.status.read = true;
});
// library.status.read = true;
const { title: firstname } = library[0];
const l2 = JSON.stringify(library);
console.log(l2);
