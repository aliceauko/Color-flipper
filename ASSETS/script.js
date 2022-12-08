const button = document.querySelector("button");
const body = document.querySelector("body");
const color = [
  "red",
  "orange",
  "yellow",
  "green",
  "black",
  "indigo",
  "violet",
  "pink",
  "maroon",
];

body.style.backgroundColor = "gold";

button.addEventListener("click", changeA);

function changeA() {
  const colorIndex = parseInt(Math.random() * color.length);
  body.style.backgroundColor = color[colorIndex];
}
