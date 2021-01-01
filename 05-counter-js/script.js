const addBtn = document.getElementById("plus");
const lowerBtn = document.getElementById("minus");
const countDOM = document.getElementById("number");
let count = 0;

function checkColor() {
  if (count < 0) {
    countDOM.classList.add("red");
  } else if (count === 0) {
    countDOM.classList.remove("red");
    countDOM.classList.remove("green");
  } else {
    countDOM.classList.add("green");
  }
}

lowerBtn.addEventListener("click", function() {
  count--;
  countDOM.innerHTML = count;
  checkColor();
});

addBtn.addEventListener("click", function() {
  count++;
  countDOM.innerHTML = count;
  checkColor();
});
