let fetchedFood = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let favrt = JSON.parse(localStorage.getItem("favrt")) || [];
let countCartItem = 0;
let countFavItem = 0;

// DOM Elements
const showFoodItems = document.querySelector(".show-food-items");
const priceRange = document.querySelector("#priceRange");
const priceValue = document.querySelector("#priceValue");
const categoryList = document.querySelector("#categoryList");
const foodItemList = document.querySelector("#foodList");
const searchFood = document.querySelector("#searchFood");
const cartItemCount = document.getElementById("cartItemCount");
const favItemCount = document.getElementById("favItemCount");
const cartItems = document.getElementById("cartItems");
const favItems = document.getElementById("favItems");
const cartTotalOutput = document.querySelector("#cartTotalOutput");
// Fetch food data from server
async function fetchFood() {
  try {
    const url = "assets/js/fooditems.json";
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
    return []; // Return empty array on error
  }
}

// Load categories
function loadCategories() {
  const categories = [...new Set(fetchedFood.map((item) => item.category))];
  categories.sort();
  categories.forEach((item) => {
    let cat = document.createElement("option");
    cat.value = item;
    cat.text = item;
    categoryList.appendChild(cat);
  });
}

// Load food names
function loadFoodNameList() {
  const foodNames = [...new Set(fetchedFood.map((item) => item.name))];
  foodNames.sort();
  foodNames.forEach((item) => {
    let foodName = document.createElement("option");
    foodName.value = item;
    foodName.text = item;
    foodItemList.appendChild(foodName);
  });
}

// Filter food data
categoryList.addEventListener("change", function () {
  loadFood(this.value);
});

searchFood.addEventListener("input", function () {
  const qry = this.value.trim().toLowerCase();
  const cat = categoryList.value;

  let data =
    cat === "All"
      ? fetchedFood
      : fetchedFood.filter((food) => food.category === cat);
  const searchFilterFood = data.filter((food) =>
    food.name.toLowerCase().includes(qry)
  );

  loadFood(cat, "Search", searchFilterFood);
});

// Load food items
function loadFood(cat = "All", type = "Filter", searchData = []) {
  let output = "";
  let data =
    cat === "All"
      ? fetchedFood
      : fetchedFood.filter((food) => food.category === cat);

  if (type === "Search") {
    data = searchData;
  }

  if (data.length > 0) {
    data.forEach((item) => {
      output += `
        <div class="col">
          <div class="card border-0 shadow">
            <div class="card-img">
              <img class="img-fluid" src="${item.img}" alt="food">
            </div>
            <div class="card-body p-3 text-center">
              <div class="food-info">
                <h4 class="text-truncate" title="${item.name}">${item.name}</h4>
                <p>${item.category}</p>
                <p class="text-decoration-line-through">Price: Rs.${item.price}</p>
                <p>Offer Price: Rs.${item.offer_price}</p>
                <p>Customer Review: ${item.ratings}</p>
              </div>
              <div class="d-flex justify-content-center align-items-center gap-5">
                <div>
                  <button title="Add to Cart" class="btn btn-sm text-white fs-4 add-to-cart" data-id="${item.id}">
                    <i class="bi bi-cart-plus"></i>
                  </button>
                </div>
                <div>
                  <button title="Add to Favourite" class="btn btn-sm text-white fs-4 add-to-fav" data-id="${item.id}">
                    <i class="bi bi-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });
    showFoodItems.innerHTML = output;
    attachAddToCartEvent();
    attachAddToFavEvent();
  } else {
    showFoodItems.innerHTML = "Food Items Not Found";
  }
}

// Attach event listener to add to cart buttons
function attachAddToCartEvent() {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const itemId = this.getAttribute("data-id");
      const foodItem = fetchedFood.find((item) => item.id == itemId);

      // Check if item is already in cart
      if (!cart.some((item) => item.id === foodItem.id)) {
        cart.push(foodItem);
        countCartItem++;
        saveCart();
        updateCartCount();
        loadCartItems();
      }

      // Toggle icon
      toggleCartIcon(this);
    });
  });
}
// Load cart items in the cart section
function loadCartItems() {
  let output = "";
  let total = 0;

  cart.forEach((item) => {
    output += `
      <div class="cart-list pe-2">
        <img src="${item.img}" alt="${item.name}">
        <h5 class="ms-0 fs-6 fw-bold w-100"> ${item.name}</h5>
        <button class="btn" onclick="removeFromCart(${item.id})">
          <h5><i class="bi bi-trash3-fill"></i></h5>
        </button>
        <h5 class="fs-6 text-end fw-bold">Rs.${item.offer_price}/-</h5>
      </div>
    `;
    total += item.offer_price; // Calculate the total before GST
  });

  // Calculate total with 9% GST
  const gst = total * 0.09;
  const grandTotal = total + gst;

  cartItems.innerHTML = output;
  cartTotalOutput.innerHTML = `
    <div class="cart-total">
    <div class="w-100 d-flex justify-content-between align-items-center py-2">
    <h6>Total: </h6>
    <h6 class="text-end">Rs.${total.toFixed(2)}</h6>
    </div>
    <div class="w-100 d-flex justify-content-between align-items-center py-2">
    <h6>GST (9%): </h6>
    <h6 class="text-end">Rs.${gst.toFixed(2)}</h6>
    </div>
    <div class="w-100 d-flex justify-content-between align-items-center py-2">
    <h6>Grand Total: </h6>
    <h6 class="text-end">Rs.${grandTotal.toFixed(2)}</h6>
    </div>
    </div>
  `;

  updateCartCount();
}

// Function to remove item from cart (add this for the button to work)
function removeFromCart(itemId) {
  cart = cart.filter((item) => item.id !== itemId); // Remove item from cart
  saveCart(); // Save updated cart
  loadCartItems(); // Reload cart items
}
// Call loadCartItems on page load or when cart is updated
loadCartItems();

// Attach event listener to add to favorites buttons
function attachAddToFavEvent() {
  const addToFavButtons = document.querySelectorAll(".add-to-fav");
  addToFavButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const itemId = this.getAttribute("data-id");
      const foodItem = fetchedFood.find((item) => item.id == itemId);

      // Logic to handle favorite items

      if (!favrt.some((item) => item.id === foodItem.id)) {
        favrt.push(foodItem);
        countFavItem++;
        saveFavrt();
        updateFavCount();
        loadFavItems();
      }
      // Toggle icon
      toggleFavIcon(this);
    });
  });
}
function loadFavItems() {
  let output = "";
  favrt.forEach((item, index) => {
    output.innerHTML = "";
    output += `

<div class="cart-list pe-2">
<img src="${item.img}">
<h5 class=" ms-0 fs-6 fw-bold w-100">${item.name}</h5>
<button class="btn" onclick="removeFromFav(${item.id})">
<h5><i class="bi bi-trash3-fill"></i></h5></button>
<h5 class="fs-6 text-end fw-bold ">Rs.${item.offer_price}/-</h5>
</div>
  `;
    favItems.innerHTML = output;
  });
  updateFavCount();
}

function removeFromFav(itemId) {
  favrt = favrt.filter((item) => item.id !== itemId); // Remove item from favrt
  saveFavrt(); // Save updated cart
  loadFavItems(); // Reload cart items
}
// Call loadFavItems on page load or when favrt is updated
loadFavItems();

// Save cart to local storage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function saveFavrt() {
  localStorage.setItem("favrt", JSON.stringify(favrt));
}

// Update cart item count
function updateCartCount() {
  cartItemCount.textContent = cart.length;
}
updateCartCount();
// Update favrt item count
function updateFavCount() {
  favItemCount.textContent = favrt.length;
}
updateFavCount();

// Toggle cart icon
function toggleCartIcon(button) {
  const icon = button.querySelector("i");
  if (button) {
    icon.classList.remove("bi-cart-plus");
    icon.classList.add("bi-cart-plus-fill");
  } else {
    icon.classList.add("bi-cart-plus");
    icon.classList.remove("bi-cart-plus-fill");
  }
}

// Toggle favorite icon
function toggleFavIcon(button) {
  const icon = button.querySelector("i");
  if (button) {
    icon.classList.remove("bi-heart");
    icon.classList.add("bi-heart-fill");
  } else {
    icon.classList.add("bi-heart");
    icon.classList.remove("bi-heart-fill");
  }
}

// Set prices in range bar
function setPrices() {
  const priceList = fetchedFood.map((item) => item.offer_price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);
  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceValue.textContent = "Rs." + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "Rs." + e.target.value;
  });
}

// On page load
window.addEventListener("load", async function () {
  fetchedFood = await fetchFood();
  loadCategories();
  loadFoodNameList();
  setPrices();
  updateCartCount();
  loadCartItems();
  updateFavCount();
  loadFavItems();
  loadFood();
});
