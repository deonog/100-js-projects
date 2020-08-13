// Cache DOM
const inputField = document.getElementById("input-message");
const btn = document.getElementById("input-btn");
const messageDOM = document.getElementById("message");
const lastMessage = [];

function checkInput(e) {
  e.preventDefault();
  if (inputField.value == "") {
    alert("Please enter your message");
  } else {
    printMessage();
  }
}

function printMessage() {
  lastMessage.push(inputField.value);
  let message = inputField.value;

  if (lastMessage.length > 1) {
    let prev = lastMessage.pop();
    message = prev;
  }

  messageDOM.innerHTML = message;

  inputField.value = "";
}

btn.addEventListener("click", checkInput);
