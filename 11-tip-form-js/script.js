// DOM Elements

const billInput = document.getElementById("price");
const guestInput = document.getElementById("guest");
const serviceOption = document.querySelectorAll("select option");
const submitBtn = document.getElementById("submit-btn");
const errorWrap = document.getElementById("error-wrapper");
const billError = document.getElementById("bill-error");
const guestError = document.getElementById("guest-error");
const tipError = document.getElementById("tip-error");
const resultWrap = document.getElementById("result");
const tipResult = document.getElementById("tip-result");
const guestResult = document.getElementById("guest-result");
const totalResult = document.getElementById("total-result");

// Functions

function validateForm(e) {
  e.preventDefault();
  if (billInput.value == "" && guestInput.value <= 0) {
    alert("error");
  } else {
    calculate();
  }
}

function calculate() {
  alert("working");
}

// Event Listeners

submitBtn.addEventListener("click", validateForm);
