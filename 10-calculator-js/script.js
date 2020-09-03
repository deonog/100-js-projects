// DOM
const output = document.querySelector(".calc-output span");
const numbers = document.querySelectorAll(".number");
const operants = document.querySelectorAll(".operant");
let pendingValue = "";
let displayValue = 0;
let calculation = "";

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
  pendingValue += number;
  displayValue = pendingValue;
  output.innerHTML = displayValue;
}

function performCalculation() {
  const operant = this.getAttribute("data-calc");
  calculation += pendingValue;
  pendingValue = "";
  displayValue = pendingValue;
  output.innerHTML = 0;
  console.log(operant);
  if (operant == "clear") {
    calculation = 0;
    output.innerHTML = calculation;
  } else if (operant == "+") {
    calculation += "+";
  } else if (operant == "-") {
    calculation += "-";
  } else if (operant == "x") {
    calculation += "x";
  } else if (operant == "/") {
    calculation += "/";
  } else if (operant == "=") {
    const finalResult = eval(calculation);
    output.innerHTML = finalResult;
    console.log(finalResult);
  }
  console.log(calculation);
}
