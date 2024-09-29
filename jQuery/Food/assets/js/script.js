let showFoodItems = document.querySelector(".show-food-items");
const priceRange = document.querySelector("#priceRange");
const priceValue = document.querySelector("#priceValue");
const categoryList = document.querySelector("#categoryList");
const foodItemList = document.querySelector("#foodList");
const searchFood = document.querySelector("#searchFood");

// Fetch food data from server
async function fetchFood() {
  try {
    const url = "assets/js/fooditems.json";
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
    return []; // Return empty array on error
  }
}

// Load categoryList and food name list in select box
function loadCategories() {
  const categories = [...new Set(fetchedFood.map((item) => item.category))];
  categories.sort();
  categories.forEach(function (item) {
    let cat = document.createElement("option");
    cat.value = item; // Set the value properly
    cat.text = item;
    categoryList.appendChild(cat);
  });
}

function loadFoodNameList() {
  const foodNames = [...new Set(fetchedFood.map((item) => item.name))];
  foodNames.sort();
  foodNames.forEach(function (item) {
    let foodName = document.createElement("option");
    foodName.value = item; // Set the value properly
    foodName.text = item;
    foodItemList.appendChild(foodName);
  });
}

// Filter food data by search input
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

// Load food items based on category and search
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
                  <button title="Add to Cart" class="btn btn-sm text-white fs-4">
                    <i class="bi bi-cart-plus"></i>
                  </button>
                </div>
                <div>
                  <button title="Add to Favourite" class="btn btn-sm text-white fs-4">
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
  } else {
    showFoodItems.innerHTML = "Food Items Not Found";
  }
}

//Cart count and Fav count
function counter() {
  // Select all elements with the class 'bi-cart-plus' and 'bi-heart'
  let cartBtn = document.querySelectorAll(".bi-cart-plus");
  let favBtn = document.querySelectorAll(".bi-heart");
  let cartItemCount = document.getElementById("cartItemCount");
  let favItemCount = document.getElementById("favItemCount");

  // Initialize the count
  let countCartItem = 0;
  let countFavItem = 0;

  // Add a click event listener to each cart icon
  cartBtn.forEach((icon) => {
    icon.addEventListener("click", function (e) {
      // Toggle between filled and unfilled cart icons
      if (icon.classList.contains("bi-cart-plus")) {
        icon.classList.remove("bi-cart-plus");
        icon.classList.add("bi-cart-plus-fill");
        countCartItem += 1; // Increment count
      } else {
        icon.classList.remove("bi-cart-plus-fill");
        icon.classList.add("bi-cart-plus");
        countCartItem -= 1; // Decrement count
      }
      // Prevent negative count
      countCartItem = Math.max(countCartItem, 0);
      // Update the displayed cart item count
      cartItemCount.textContent = countCartItem;
    });
  });

  // Add functionality for the favorite icons
  favBtn.forEach((icon) => {
    icon.addEventListener("click", function (e) {
      // Toggle logic for favorite icon
      if (icon.classList.contains("bi-heart")) {
        icon.classList.remove("bi-heart");
        icon.classList.add("bi-heart-fill");
        countFavItem += 1; // Increment count
      } else {
        icon.classList.remove("bi-heart-fill");
        icon.classList.add("bi-heart");
        countFavItem -= 1; // Decrement count
      }
      // Prevent negative count
      countFavItem = Math.max(countFavItem, 0);
      // Update the displayed favorite item count
      favItemCount.textContent = countFavItem;
    });
  });
}

// Set price in range bar

function setPrices() {
  const priceList = fetchedFood.map((item) => item.offer_price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);
  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceValue.textContent = "Rs." + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "Rs." + e.target.value;
    // displayProducts(data.filter((product) => product.amt <= e.target.value));
  });
}

// DOM Content Loader

window.addEventListener("load", async function () {
  fetchedFood = await fetchFood();
  // categoryFilter( "category", categoryList, fetchedFood );
  loadCategories();
  loadFoodNameList();
  loadFood(fetchedFood);
  loadFood();
  setPrices();
  counter();
});
