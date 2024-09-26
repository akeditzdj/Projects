const brandList = document.getElementById("brandList");
const ramList = document.getElementById("ramList");
const internalList = document.getElementById("internalList");
const showProduct = document.getElementById("showProduct");
const txtSearch = document.getElementById("searchTxt");
// const reviewList = document.getElementById("reviewList");

let fetchedProducts = [];

async function fetchProduct() {
  let products = [];
  try {
    const url = "assets/js/products.json";
    const response = await fetch(url);
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
  return products;
}



function categoryFilter(categoryType, element, products) {
  // Get unique categories from products
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product[categoryType]))
  );

  // Sort categories based on type
  const sortedData =
    categoryType === "brand"
      ? uniqueCategories.sort()
      : uniqueCategories.map(Number).sort((a, b) => a - b);

  // Clear the element's innerHTML
  element.innerHTML = "";

  if (categoryType === "brand") {
    // Create a dropdown for brands with 'All' option
    const options = sortedData
      .map((item) => `<option value='${item}'>${item}</option>`)
      .join("");
    element.innerHTML = `<option value="All">All</option>${options}`;
  } else {
    // Create checkboxes for other categories with 'All' option
    const checkboxes =
      `
      <li>
        <label><input data-${categoryType}='All' type="checkbox"> All</label>
      </li>
    ` +
      sortedData
        .map(
          (item) => `
      <ul>
        <li>
          <label>
            <input data-${categoryType}='${item}' type='checkbox'> ${item} ${
            categoryType !== "brand" ? "GB" : ""
          }
          </label>
        </li>
      </ul>
    `
        )
        .join("");

    element.innerHTML += checkboxes;
  }
}


// Load products
function loadProducts(products) {
  let output = "";
  if (products.length > 0) {
    products.forEach((product) => {
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
                            <p><span>Brand</span> : ${product.brand} </p>
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
      showProduct.innerHTML = output;
    });
  } else {
    showProduct.innerHTML = "<p>Products Not Found</p>";
  }
}

// Helper function to get selected options from checkboxes
function getSelectedOptions(listSelector, dataAttribute) {
  return [...listSelector.querySelectorAll("input[type=checkbox]:checked")]
    .map((checkbox) => checkbox.getAttribute(dataAttribute))
    .filter((option) => option !== "All");
}

// Filter products based on selected filters
function filterProducts() {
  let filteredProducts = [...fetchedProducts];

  // Filter by search
  const searchQuery = txtSearch.value.toLowerCase();
  if (searchQuery) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery)
    );
  }

  // Filter by brand

  const selectedBrands = brandList.value;

  if (selectedBrands) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedBrands.includes(product.brand)
    );
  }

  // Filter by RAM
  const selectedRams = getSelectedOptions(ramList, "data-ram");
  if (selectedRams.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedRams.includes(product.ram)
    );
  }

  // Filter by internal storage
  const selectedInternals = getSelectedOptions(internalList, "data-internal");
  if (selectedInternals.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedInternals.includes(product.internal)
    );
  }

  // Re-render filtered products
  loadProducts(filteredProducts);
}

// Set up filter event listeners
function setUpEventListeners() {
  // Search input event listener
  txtSearch.addEventListener("input", filterProducts);

  // Brand, RAM, Internal storage filter event listeners
  brandList.addEventListener("change", filterProducts);
  ramList.addEventListener("change", filterProducts);
  internalList.addEventListener("change", filterProducts);
}

// Update price function when you drag the price range

function updateTextInput(val) {
  document.getElementById("priceValue").innerHTML = "Rs." + val;
}

document.getElementById("list").addEventListener("click", function () {
  let products = document.querySelectorAll(".product");
  products.forEach(function (product) {
    // product.classList.remove("card"); // No dot here
    product.classList.add("card-list");
  });
});
document.getElementById("grid").addEventListener("click", function () {
  let products = document.querySelectorAll(".product");
  products.forEach(function (product) {
    product.classList.add("card"); // No dot here
    product.classList.remove("card-list");
  });
});
// Initialize the app
window.addEventListener("load", async function () {
  fetchedProducts = await fetchProduct();
  categoryFilter("brand", brandList, fetchedProducts);
  categoryFilter("ram", ramList, fetchedProducts);
  categoryFilter("internal", internalList, fetchedProducts);
  loadProducts(fetchedProducts);
  setUpEventListeners();
});
