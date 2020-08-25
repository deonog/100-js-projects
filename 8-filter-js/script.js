// Cache DOM
const filterButtons = document.querySelectorAll(".filter-btns div");
const products = document.querySelectorAll(".product");

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

// Functions

function filterItems(filterButton) {
  const filter = filterButton.dataset.filter;
  for (let i = 0; i < products.length; i++) {
    if (filter == "all") {
      products[i].style.display = "block";
    } else if (products[i].dataset.item.includes(filter)) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}
