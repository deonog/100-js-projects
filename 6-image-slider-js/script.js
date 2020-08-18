// Cache DOM
const slider = document.querySelector(".slider");
const imgs = document.querySelectorAll(".slider img");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let counter = 0;

function prevImage() {
  counter--;
  if (counter < 0) {
    counter = imgs.length - 1;
  }

  imgs.forEach(function(img) {
    img.style.transform = `translateX(${counter * -100}%)`;
  });
  console.log(counter);
}

function nextImage() {
  counter++;
  if (counter > imgs.length - 1) {
    counter = 0;
  }

  imgs.forEach(function(img) {
    img.style.transform = `translateX(${counter * -100}%)`;
  });
  console.log(counter);
}

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);
