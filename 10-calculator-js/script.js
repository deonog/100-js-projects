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
  const regex = /(\..*){2,}/;
  pendingValue += number;
  if (regex.test(pendingValue)) {
    pendingValue = pendingValue.substring(0, pendingValue.length - 1);
  }
  displayValue = pendingValue;
  output.innerHTML = displayValue;
}

function performCalculation() {
  const operant = this.getAttribute("data-calc");
  calculation += pendingValue;
  pendingValue = "";
  displayValue = pendingValue;
  console.log(operant);

  switch (operant) {
    case "clear":
      calculation = 0;
      output.innerHTML = calculation;
      break;
    case "+":
      calculation += "+";
      break;
    case "-":
      calculation += "-";
      break;
    case "x":
      calculation += "x";
      break;
    case "/":
      calculation += "/";
      break;
    case "=":
      const finalResult = eval(calculation);
      output.innerHTML = finalResult;
      console.log(finalResult);
      break;
  }
  console.log(calculation);
}
