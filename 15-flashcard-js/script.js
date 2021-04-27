// DOM Elements
const addNewBtn = document.getElementById("add-new-btn");
const newQuestion = document.getElementById("new-question");
const newAnswer = document.getElementById("new-answer");
const submitBtn = document.getElementById("submit");
const flashcardForm = document.querySelector(".flashcard-form");
const flashcardContainer = document.getElementById("flashcard-container");

function Person(question, answer) {
  this.question = question;
  this.answer = answer;
  this.toggle = false;
}

// Functions

function Person(question, answer) {
  this.question = question;
  this.answer = answer;
}

function addNew(e) {
  e.preventDefault();
  flashcardForm.classList.add("flashcard-form--show");
}

function submitForm(e) {
  e.preventDefault();
  let questionValue = newQuestion.value;
  let answerValue = newAnswer.value;
  validateForm(questionValue, answerValue);
  clearForm();
}

function validateForm(question, answer) {
  if (question === "" || answer === "") {
    alert("enter details");
  } else {
    addCard(question, answer);
  }
}

function clearForm() {
  newQuestion.value = "";
  newAnswer.value = "";
}

function addCard(question, answer) {
  // Add flashcard to DOM
  const card = new Person(question, answer);
  const newCardEl = document.createElement("div");
  addCardToUI(card, newCardEl);
}

function addCardToUI(card, newCardEl) {
  newCardEl.classList.add("col-sm-12");
  newCardEl.classList.add("col-md-6");
  newCardEl.classList.add("col-lg-4");
  newCardEl.classList.add("flashcard");
  newCardEl.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="mb-0">${card.question}</h5>
        <a class="my-3 d-inline-block" href id="toggle-answer"
          >Show/hide answer</a
        >
        <p id="answer" class="answer mb-4">
          ${card.answer}
        </p>
        <div class="btns d-flex">
          <button class="btn btn-secondary w-50 mr-4">Edit</button>
          <button class="btn btn-danger w-50">Delete</button>
        </div>
      </div>
    </div>
    `;
  flashcardContainer.appendChild(newCardEl);
  flashcardForm.classList.remove("flashcard-form--show");
  const toggleBtn = document.querySelector("#toggle-answer");
  toggleAnswer(toggleBtn);
}

function toggleAnswer(btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target);
  });
}

// Event Listener
addNewBtn.addEventListener("click", addNew);
submitBtn.addEventListener("click", submitForm);
