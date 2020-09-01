// DOM
const output = document.querySelector(".calc-output span");
const numbers = document.querySelectorAll(".number");
const operants = document.querySelectorAll(".operant");
let previousNumber = 0;

// Event Listeners

window.addEventListener("DOMContentLoaded", () => {
  output.innerHTML = 0;
});

numbers.forEach(number => {
  number.addEventListener("click", addNumber);
});

operants.forEach(operant => {
  operant.addEventListener("click", performCalculation);
});

// Functions

function addNumber() {
  const number = this.getAttribute("data-calc");
  //   previousNumber.appendChild(number);
  previousNumber += number;
  const finalOutput = previousNumber.substring(1);
  output.innerHTML = finalOutput;
}

function performCalculation() {
  console.log(this);
}

console.log(output);
