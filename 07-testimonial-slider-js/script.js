const nameDOM = document.getElementById("name");
const messageDOM = document.getElementById("text");
let img = document.getElementById("img");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let counter = 0;

const testimonials = [
  {
    name: "Sandy",
    picture: "img/ui-face-1.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut doloribus sunt suscipit! Non, ut deserunt."
  },
  {
    name: "Flex",
    picture: "img/ui-face-2.jpg",
    message: "baby, when we gone slide?"
  },
  {
    name: "Boogie",
    picture: "img/ui-face-3.jpg",
    message: "We up til six in the morning!"
  }
];

function init() {
  nameDOM.innerHTML = testimonials[counter].name;
  img = testimonials[counter].picture;
  messageDOM.innerHTML = testimonials[counter].message;
  console.log(img);
}

init();

function moveLeft() {
  counter--;
  if (counter < 0) {
    counter = testimonials.length - 1;
  }
  nameDOM.innerHTML = testimonials[counter].name;
  img = testimonials[counter].picture;
  messageDOM.innerHTML = testimonials[counter].message;
  console.log(img);
}

function moveRight() {
  counter++;
  if (counter > testimonials.length - 1) {
    counter = 0;
  }
  nameDOM.innerHTML = testimonials[counter].name;
  img = testimonials[counter].picture;
  messageDOM.innerHTML = testimonials[counter].message;
  console.log(img);
}

prevBtn.addEventListener("click", moveLeft);
nextBtn.addEventListener("click", moveRight);
