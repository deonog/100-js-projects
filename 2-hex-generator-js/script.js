const heading = document.getElementById("hex-code");
const btn = document.getElementById("button");
const body = document.getElementById("body");
const figures = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
];

function generateHex() {
  let code = "#";
  for (let i = 0; i < 6; i++) {
    code += figures[Math.floor(Math.random() * figures.length)];
  }
  heading.innerHTML = code;
  body.style.background = code;
}

btn.addEventListener("click", generateHex);
