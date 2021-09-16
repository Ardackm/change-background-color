const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
    "#000",
    "#4CE155",
    "#F16161",
    "#6191F1",
    "#F161C7",
    "#61F1E2",
    "#68E483",
    "#DDF866",
    "#666AF8",
    "#8EA489",
];

button.addEventListener("click", changeBackground);

let order = 0;

function changeBackground() {
    
    // random color
    const randomColor = Math.floor(Math.random() * colors.length);
    const chosenColor = colors[randomColor];
    console.log(randomColor, chosenColor);
    body.style.backgroundColor = chosenColor;

}