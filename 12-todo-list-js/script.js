// DOM Elements

const formInput = document.getElementById("formInput");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");
const itemWrapper = document.querySelector(".item-wrapper");
const itemArray = [];

// Event Listeners

submitBtn.addEventListener("click", checkInput);

// Functions

function checkInput(e) {
  e.preventDefault();
  const inputValue = formInput.value;

  if (inputValue === "") {
    return;
  } else {
    addItem(inputValue);
  }
}

function addItem(value) {
  const newItem = document.createElement("div");
  newItem.classList.add("item");
  itemWrapper.appendChild(newItem);

  const title = document.createElement("h3");
  title.innerHTML = value;
  newItem.appendChild(title);

  const icons = document.createElement("div");
  icons.classList.add("icons");
  icons.innerHTML = `
  <div class="icon check" id="check">
    <i class="far fa-check-circle"></i>
  </div>
  <div class="icon edit" id="edit">
    <i class="far fa-edit"></i>
  </div>
  <div class="icon delete" id="delete">
    <i class="far fa-times-circle"></i>
  </div>`;
  newItem.appendChild(icons);
  itemArray.push(newItem);
}
