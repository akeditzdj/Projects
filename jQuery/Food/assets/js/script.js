let foodList = document.querySelector(".food-list");
const priceRange = document.querySelector("#priceRange");
const priceValue = document.querySelector("#priceValue");

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

function loadFood(fooditems) {
  let output = "";
  if (fooditems.length > 0) {
    fooditems.forEach((item) => {
      output += `

<div class="col g-4">
     <div class="card">
        <div class="card-img">
            <img class="img-fluid" src="${item.img}" alt="food">
        </div>
      <div class="card-body p-3 text-center">
              <div class="food-info">
              <h4 class="text-truncate" title="${item.name}">${item.name}</h4>
              <p>${item.category}</p>
              <p>Price : Rs.${item.price}</p>
              <p>Offer Price : Rs.${item.offer_price}</p>
              <p>Customer Review : ${item.ratings}</p>
      </div>
      <div class="d-flex justify-content-center align-items-center gap-5 ">
        <div><button title="Add to Cart" class="btn btn-sm  text-white fs-4 "><i class="bi bi-cart-plus"></i></button></div>
        <div><button title="Add to Favourite" class="btn btn-sm text-white fs-4"><i class="bi bi-heart"></i></button></div>
      </div>
    </div>
    </div>
</div>
    `;
      foodList.innerHTML = output;
    });
  } else {
    foodList.innerHTML = "Food Items Not Found";
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

window.addEventListener("load", async function () {
  fetchedFood = await fetchFood();
  loadFood(fetchedFood);
  setPrices();
  counter();
});
