const background = document.getElementById("body");
const btn = document.getElementById("button");
const colors = ["red", "blue", "yellow", "green", "purple", "pink"];

function changeBg() {
  background.style.background =
    colors[Math.floor(Math.random() * colors.length)];
}

btn.addEventListener("click", changeBg);
