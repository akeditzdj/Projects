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
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product[categoryType]))
  );

  // Sort and prepare data based on category type
  let sortedData;
  if (categoryType === "brand") {
    sortedData = uniqueCategories.sort();
  } else {
    sortedData = uniqueCategories.map(Number).sort((a, b) => a - b);
  }

  // Clear the element's innerHTML
  element.innerHTML = "";

  // Create select element for brands with 'All' option
  if (categoryType === "brand") {
    const selectElement = document.createElement("select");
    selectElement.innerHTML = `<option value="" data-${categoryType}='All'>All</option>`;

    sortedData.forEach((item) => {
      const option = document.createElement("option");
      option.setAttribute(`data-${categoryType}`, item);
      option.value = item; // This value can be customized
      option.textContent = item;
      selectElement.appendChild(option);
    });

    element.appendChild(selectElement);
  } else {
    // Create checkboxes for other categories
    element.innerHTML += `
      <li>
        <label><input data-${categoryType}='All' type="checkbox"> All</label>
      </li>
    `;

    sortedData.forEach((item) => {
      const dataAttr = `data-${categoryType}='${item}'`;
      const listItem = `
        <ul>
          <li>
            <label><input ${dataAttr} type='checkbox'> ${item} ${
        categoryType !== "brand" ? "GB" : ""
      }</label>
          </li>
        </ul>`;

      element.innerHTML += listItem;
    });
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
  const selectedBrands = getSelectedOptions(brandList, "data-brand");
  if (selectedBrands.length > 0) {
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







// Initialize the app
window.addEventListener("load", async function () {
  fetchedProducts = await fetchProduct();
  categoryFilter("brand", brandList, fetchedProducts);
  categoryFilter("ram", ramList, fetchedProducts);
  categoryFilter("internal", internalList, fetchedProducts);
  loadProducts(fetchedProducts);
  setUpEventListeners();
});

