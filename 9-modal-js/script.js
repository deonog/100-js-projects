// Cache DOM
const filterButtons = document.querySelectorAll(".filter-btns div");
const products = document.querySelectorAll(".product");
const images = document.querySelectorAll(".card-img img");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content img");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let currentIndex;
let imagesArray = [];

// Event Listeners
window.addEventListener("DOMContentLoaded", function() {
  for (let i = 0; i < products.length; i++) {
    products[i].classList.add("visible");
  }
});

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

prevBtn.addEventListener("click", prevImg);

nextBtn.addEventListener("click", nextImg);

closeBtn.addEventListener("click", function() {
  modal.classList.remove("modal-open");
  imagesArray = [];
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

  displayImages(image);
}

function displayImages(image) {
  imagesArray.forEach(function(img) {
    const imgSrc = img.firstElementChild.firstElementChild.firstElementChild;
    if (image === imgSrc) {
      modalContent.src = imgSrc.src;
      const index = imagesArray.indexOf(img);
      currentIndex = index;
    }
  });
}

function prevImg() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imagesArray.length - 1;
  }
  const currentImg =
    imagesArray[currentIndex].firstElementChild.firstElementChild
      .firstElementChild;
  modalContent.src = currentImg.src;
}

function nextImg() {
  currentIndex++;
  if (currentIndex == imagesArray.length) {
    currentIndex = 0;
  }
  const currentImg =
    imagesArray[currentIndex].firstElementChild.firstElementChild
      .firstElementChild;
  modalContent.src = currentImg.src;
}
