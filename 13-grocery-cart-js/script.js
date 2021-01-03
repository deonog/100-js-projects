/* Cache DOM */
const shoppingCart = document.querySelector(".shopping-cart");
const openCartBtn = document.getElementById("open-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const filterButtons = document.querySelectorAll(".filter-btns div");
const productsContainer = document.querySelector(".products-container");
const cartItemsContainer = document.querySelector(".cart-items-container");
const totalPriceEl = document.getElementById("cart-items-total-price");
const totalItemsEl = document.getElementById("cart-items-amount");
const cartTotalItemsEl = document.getElementById("cart-total-items");
const cartTotalPriceEl = document.getElementById("cart-total-price");
let totalPrice = 0;
let totalItems = 0;

/* Event Listeners */
filterButtons.forEach(function (filterButton) {
  filterButton.addEventListener("click", function () {
    filterButtons.forEach(function (filter) {
      filter.classList.remove("active");
    });
    filterButton.classList.add("active");
    filterItems(filterButton);
  });
});

// Open and close shopping cart

openCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);

// Clear Cart

clearCartBtn.addEventListener("click", clearCart);

/* Functions */
(function init() {
  totalPriceEl.textContent = totalPrice;
  totalItemsEl.textContent = totalItems;
})();

// Open Shopping cart
function openCart() {
  shoppingCart.classList.add("cart-open");
}

// Close Shopping Cart
function closeCart() {
  shoppingCart.classList.remove("cart-open");
}

// Filter Items
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
  };
}

var donut1 = new Item("Donut", 5, "donuts-1.jpg", "donut");
donut1.displayItem();

var donut2 = new Item("Donut", 4.99, "donuts-2.jpg", "donut");
donut2.displayItem();

var cake1 = new Item("Cake", 5, "cake-1.jpg", "cake");
cake1.displayItem();

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
  totalPrice += parseInt(price);
  updateCart();
}

// Display Item in Cart

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
      <span class="cart-item-title">${title}</span>
      <span class="cart-item-price">${price}</span>
    </div>
  </div>
  <div>
    <a href="" class="cart-delete-btn">Remove</a>
  </div>
  `;
  cartItemsContainer.appendChild(cartItem);
  const cartDeleteBtns = document.querySelectorAll(".cart-delete-btn");

  cartDeleteBtns.forEach(function (deleteBtn) {
    deleteBtn.addEventListener("click", removeItem);
  });
}

// Remove Items from Cart

function removeItem(e) {
  e.preventDefault();
  const itemRemoved = e.target.parentElement.parentElement;
  const itemPrice = e.target.parentElement.parentElement.querySelector(
    ".cart-item-price"
  ).textContent;
  totalPrice -= parseInt(itemPrice);
  itemRemoved.remove();
  updateCart();
}

// Update cart amount and total price

function updateCart() {
  const redDot = document.querySelector(".red-dot");
  const redDotContent = document.querySelector(".red-dot span");
  const items = shoppingCart.querySelector(".cart-items-container").children
    .length;
  totalItems = items;

  if (items > 0) {
    redDot.classList.add("show-red-dot");
    redDotContent.textContent = totalItems;
  } else {
    redDot.classList.remove("show-red-dot");
  }

  totalItemsEl.textContent = totalItems;
  cartTotalItemsEl.textContent = totalItems;
  cartTotalPriceEl.textContent = totalPrice;
  totalPriceEl.textContent = totalPrice;
}

// Clear Cart

function clearCart(e) {
  e.preventDefault();
  const cartItems = cartItemsContainer.children;
  Array.from(cartItems).forEach(function (item) {
    item.remove();
  });
  totalPrice = 0;
  updateCart();
}
