// const socials = ["facebook", "twitter", "instagram", "youtube", "linkedin"];
// socials.forEach((item) => {
// console.log(item);
// });

function logSocials(item) {
    console.log(item);
}

// socials.forEach(logSocials);

const objSocials = [
    { name: "facebook.com", url: "facebook.com" },
    { name: "twitter.com", url: "twitter.com" },
    { name: "instagram.com", url: "instagram.com" },
    { name: "youtube.com", url: "youtube.com" },
    { name: "linkedin.com", url: "linkedin.com" },
];

objSocials.forEach((item) => {
    console.log(item.name, item.url);
});
