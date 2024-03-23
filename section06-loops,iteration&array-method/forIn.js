const colorObj = {
    color1: "red",
    color2: "green",
    color3: "blue",
};

for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

const colors = ["red", "green", "blue"];
for(const key in colors)
{
    console.log(key, colors[key]);
}