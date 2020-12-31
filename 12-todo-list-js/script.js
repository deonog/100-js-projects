// DOM Elements

const formInput = document.getElementById("formInput");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");
const itemWrapper = document.querySelector(".item-wrapper");
const itemArray = [];
const icons = document.querySelectorAll(".icons div");

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
  handleTask();
  formInput.value = "";
}

function handleTask() {
  const icons = document.querySelectorAll(".icon");
  icons.forEach(function (icon) {
    icon.addEventListener(
      "click",
      function (e) {
        const targetIcon = e.target.parentElement;
        const headings = document.querySelector(".item h3");
        if (targetIcon.classList.contains("delete")) {
          targetIcon.parentElement.parentElement.remove();
        } else if (targetIcon.classList.contains("check")) {
          headings.classList.toggle("checked");
        }
      },
      true
    );
  });
}

function clearList() {
  let listItems = itemWrapper.children;
  let counter = 0;
  while (listItems.length) {
    listItems[counter].parentNode.removeChild(listItems[counter]);
  }
  console.log(listItems.length);
  console.log(itemWrapper.children);
}

// Event Listeners

submitBtn.addEventListener("click", checkInput);
clearBtn.addEventListener("click", clearList);
