const listSubmit = document.getElementById("grocery-list-submit");
const listItemsContainer = document.getElementById("grocery-list-items");
const listItemsClear = document.getElementById("grocery-list-clear");
const modal = document.getElementById("modal-container");
const modalCloseBtn = document.getElementById("modal-close");
const listItems = [];

function addItem(e) {
  e.preventDefault();
  const listInput = document.getElementById("grocery-list-input");
  const listItem = document.createElement("div");
  if (listInput.value == "") {
    return;
  } else {
    listItem.classList.add("col-sm-12");
    listItem.classList.add("grocery-list-item");
    listItem.classList.add("border");
    listItem.classList.add("border-dark");
    listItem.innerHTML = `
      <div class="d-flex align-items-center justify-content-between p-2">
          <p class="mb-0" id="grocery-item-name">${listInput.value}</p>
          <a class="btn btn-danger" id="grocery-item-delete-btn">
              <i class="fas fa-trash"></i>
          </a>
      </div>`;
    listItemsContainer.appendChild(listItem);
    listItems.push(listItem);
    openModal("btn-success", "Item added.");
    listInput.value = "";
  }
  if (listItems.length > 0) {
    const listItemsDeleteBtns = document.querySelectorAll(
      "#grocery-item-delete-btn"
    );
    handleDelete(listItemsDeleteBtns);
  } else {
    return;
  }
}

function handleDelete(btn) {
  btn.forEach(function (deleteBtn) {
    deleteBtn.addEventListener("click", function () {
      deleteBtn.parentElement.parentElement.remove();
      openModal("btn-danger", "Item removed.");
    });
  });
}

function openModal(cssClass, message) {
  const modalMessage = document.getElementById("modal-message");
  if (cssClass == "btn-success") {
    modal.style.visibility = "visible";
    modalMessage.innerHTML = message;
    modalMessage.classList.add("btn-success");
    if (modalMessage.classList.contains("btn-danger")) {
      modalMessage.classList.remove("btn-danger");
    }
  } else if (cssClass == "btn-danger") {
    modal.style.visibility = "visible";
    modalMessage.innerHTML = message;
    modalMessage.classList.add("btn-danger");
    if (modalMessage.classList.contains("btn-success")) {
      modalMessage.classList.remove("btn-success");
    }
  }
}

function closeModal(e) {
  e.preventDefault();
  modal.style.visibility = "hidden";
}

function clearAll(e) {
  e.preventDefault();
  const allItems = listItemsContainer.children;
  if (allItems.length <= 0) {
    return;
  } else {
    for (let i = 0; i < allItems.length; i++) {
      allItems[i].remove();
      openModal("btn-danger", "Items cleared.");
    }
  }
}

listSubmit.addEventListener("click", addItem);
listItemsClear.addEventListener("click", clearAll);
modalCloseBtn.addEventListener("click", closeModal);
