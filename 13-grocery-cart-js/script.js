// Cache DOM
const filterButtons = document.querySelectorAll(".filter-btns div");
const productsContainer = document.querySelector(".products-container");
const totalPrice = 0;
const totalItems = 0;

// Functions

function filterItems(filterButton) {
  const filter = filterButton.dataset.filter;
  const products = productsContainer.children;
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

// Event Listeners
filterButtons.forEach(function (filterButton) {
  filterButton.addEventListener("click", function () {
    filterButtons.forEach(function (filter) {
      filter.classList.remove("active");
    });
    filterButton.classList.add("active");
    filterItems(filterButton);
  });
});

// Create Items

function Item(title, price, img, category) {
  this.title = title;
  this.price = price;
  this.img = img;
  this.category = category;
  this.displayItem = function () {
    const productWrap = document.createElement("div");
    productWrap.classList.add("product");
    productWrap.setAttribute("data-item", this.category);
    productWrap.innerHTML = `
    <div class="product" data-item="${this.category}">
      <div class="card">
        <div class="card-img">
          <img src="images/${this.img}" alt="cake image " />
        </div>
        <div class="card-body">
          <h3>${this.title}</h3>
          <span class="price">$${this.price}</span>
        </div>
        <div>
          <a class="add-to-cart-btn" href="">Add to cart</a>
        </div>
      </div>
    </div>
    `;
    productsContainer.appendChild(productWrap);
    console.log(productsContainer.children);
  };
}

var donut1 = new Item("Donut", 5, "donuts-1.jpg", "donut");
donut1.displayItem();

var donut2 = new Item("Donut", 4.99, "donuts-2.jpg", "donut");
donut2.displayItem();

var cake1 = new Item("Cake", 5, "cake-1.jpg", "cake");
cake1.displayItem();

// Display amount and price

// Open Shopping cart

const shoppingCart = document.querySelector(".shopping-cart");
const openCartBtn = document.getElementById("open-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");

openCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);

function openCart() {
  shoppingCart.classList.add("cart-open");
  console.log("hi");
}

function closeCart() {
  shoppingCart.classList.remove("cart-open");
  console.log("hi");
}

// Add Item to cart

const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");

addToCartBtns.forEach(function (btn) {
  btn.addEventListener("click", addToCart);
});

function addToCart(e) {
  e.preventDefault();
  const img = e.target.parentElement.parentElement.querySelector(
    ".card-img img"
  ).src;
  const title = e.target.parentElement.parentElement.querySelector(
    ".card-body h3"
  ).innerText;
  const price = e.target.parentElement.parentElement
    .querySelector(".card-body span")
    .innerText.substring(1);
  displayCartItem(img, title, price);
}

function displayCartItem(img, title, price) {
  const cartItemsContainer = shoppingCart.querySelector(
    ".cart-items-container"
  );

  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `
  <div>
    <img src="${img}" alt="" />
    <div class="cart-item-body">
      <span>${title}</span>
      <span>${price}</span>
    </div>
  </div>
  <div>
    <a href="" id="cartDeleteBtn">Remove</a>
  </div>
  `;
  cartItemsContainer.appendChild(cartItem);

  console.log(cartItemsContainer);
}
