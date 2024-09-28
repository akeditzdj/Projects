let mainSection = document.querySelector(".main-section");

async function fetchFood() {
  try {
    const url = "assets/js/foods.json";
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
    return []; // Return empty array on error
  }
}

fetchFood();

function loadFoods(products) {
  let output = "";
  if (foods.length > 0) {
    foods.forEach((product) => {
      output += `
        <div class="card product">
          <div class="card-img"><img src="${product.img}" alt="${product.title}" title="${product.title}"></div>
          <div class="product-info">
            <h2 title="${product.title}">${product.title}</h2>
            <div class="star-rating" id="starRating">
              <span class="star" data-value="1">&#9733;</span>
              <span class="star" data-value="2">&#9733;</span>
              <span class="star" data-value="3">&#9733;</span>
              <span class="star" data-value="4">&#9733;</span>
              <span class="star" data-value="5">&#9733;</span>
              <p>Review : ${product.review}</p>
            </div>
            <div class="price">
              <h4 class="old-price">Rs.${product.old_price}/-</h4>
              <h4 class="new-price">Rs.${product.new_price}/-</h4>
            </div>
            <div class="varient">
              <p><span>Brand</span> : ${product.brand}</p>
              <p><span>Color</span> : ${product.color}</p>
            </div>
            <div class="storage">
              <p><span>RAM</span> : ${product.ram}GB</p>
              <p><span>Internal</span> : ${product.internal}GB</p>
            </div>
            <button class="btn-cart">Add To Cart</button>
          </div>
        </div>
      `;
    });
    mainSection.innerHTML = output;
  } else {
    mainSection.innerHTML = "<p>Foods Not Found</p>";
  }
}

loadFoods();