// DOM Elements

const billInput = document.getElementById("price");
const guestInput = document.getElementById("guest");
const serviceOption = document.querySelector("select");
const submitBtn = document.getElementById("submit-btn");
const errorWrap = document.getElementById("error-wrapper");
const billError = document.getElementById("bill-error");
const guestError = document.getElementById("guest-error");
const serviceError = document.getElementById("tip-error");
const resultWrap = document.getElementById("result");
const tipResult = document.getElementById("tip-result");
const guestResult = document.getElementById("guest-result");
const totalResult = document.getElementById("total-result");

// Functions

function validateForm(e) {
  e.preventDefault();
  if (
    guestInput.value <= 0 ||
    guestInput.value == "" ||
    billInput.value == "" ||
    serviceOption.value == "choose"
  ) {
    showError();
  } else {
    calculate();
  }
}

function showError() {
  guestError.style.display = "none";
  billError.style.display = "none";
  serviceError.style.display = "none";
  errorWrap.style.display = "block";
  if (guestInput.value == "") {
    guestError.style.display = "block";
  }

  if (billInput.value == "") {
    billError.style.display = "block";
  }

  if (serviceOption.value === "choose") {
    serviceError.style.display = "block";
  }
}

function calculate() {
  errorWrap.style.display = "none";
  resultWrap.style.display = "block";
  const bill = parseInt(billInput.value);
  const guest = guestInput.value;
  const service = serviceOption.value;

  const tipAmount = (bill / 100) * service;
  tipResult.innerText = tipAmount;
  const totalAmount = eval(bill + tipAmount);
  totalResult.innerHTML = totalAmount;
  const guestAmount = totalAmount / guest;
  guestResult.innerHTML = guestAmount;

  console.log(typeof bill);
}

// Event Listeners

submitBtn.addEventListener("click", validateForm);
