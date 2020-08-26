// Cache DOM
const filterButtons = document.querySelectorAll(".filter-btns div");
const products = document.querySelectorAll(".product");
const images = document.querySelectorAll(".card-img img");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
let imagesArray = [];

// Event Listeners
filterButtons.forEach(function(filterButton) {
  filterButton.addEventListener("click", function() {
    filterButtons.forEach(function(filter) {
      filter.classList.remove("active");
    });
    filterButton.classList.add("active");
    filterItems(filterButton);
  });
});

images.forEach(function(image) {
  image.addEventListener("click", function() {
    openModal(image);
  });
});

closeBtn.addEventListener("click", function() {
  modal.classList.remove("modal-open");
});

window.addEventListener("DOMContentLoaded", function() {
  for (let i = 0; i < products.length; i++) {
    products[i].classList.add("visible");
  }
});

// Functions

function filterItems(filterButton) {
  const filter = filterButton.dataset.filter;
  for (let i = 0; i < products.length; i++) {
    if (filter == "all") {
      products[i].style.display = "block";
      products[i].classList.add("visible");
      products[i].classList.remove("hidden");
    } else if (products[i].dataset.item.includes(filter)) {
      products[i].style.display = "block";
      products[i].classList.add("visible");
      products[i].classList.remove("hidden");
    } else {
      products[i].style.display = "none";
      products[i].classList.add("hidden");
      products[i].classList.remove("visible");
    }
  }
}

function openModal(image) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].classList.contains("visible")) {
      imagesArray.push(products[i]);
    }
  }
  modal.classList.add("modal-open");
  console.log(imagesArray[0].children.firstChild);
  imagesArray = [];
}

function displayImages() {}
