const addBtn = document.getElementById("plus");
const lowerBtn = document.getElementById("minus");
const countDOM = document.getElementById("number");
let count = 0;

lowerBtn.addEventListener("click", function() {
  count--;
  countDOM.innerHTML = count;
});

addBtn.addEventListener("click", function() {
  count++;
  countDOM.innerHTML = count;
});
