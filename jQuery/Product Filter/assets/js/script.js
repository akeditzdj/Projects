function updateTextInput(val) {
  document.getElementById("priceValue").innerHTML = "Rs." + val;
}

const brandList = document.getElementById("brandList");
const ramList = document.getElementById("ramList");
const internalList = document.getElementById("internalList");
// const reviewList = document.getElementById("reviewList");

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
  const selectedCategory = products.reduce((acc, cur) => {
    acc.push(cur[categoryType]);
    return acc;
  }, []);
  const uniqueSet = new Set(selectedCategory);
  let uniqueData = [];
  let brandData = [];
  let storageData = [];

  if (categoryType == "brand") {
    uniqueData = Array.from(uniqueSet);
    brandData = uniqueData.sort();
  } else {
    uniqueData = Array.from(uniqueSet).map((data) => Number(data));
    storageData = uniqueData.sort((a, b) => a - b);
  }
  let dataAttr = `data-${categoryType}='All'`;
  element.innerHTML = `
<li>
    <lable><input ${dataAttr} type="checkbox"> All</lable>
    </li>
    `;

  brandData.forEach((item) => {
    dataAttr = `data-${categoryType}='${item}'`;
    const liItem = `
    <option ${dataAttr}>${item}</option>`;
    element.innerHTML += liItem;
  });

  storageData.forEach((item) => {
    dataAttr = `data-${categoryType}='${item}'`;
    const liItem = `
    <ul><li>
    <lable><input ${dataAttr} type='checkbox'> ${item} ${
      categoryType != "brand" ? "GB" : ""
    }</lable>
    </li></ul>`;
    element.innerHTML += liItem;
  });
}

// Load products
let showProduct = document.getElementById("showProduct");
function loadProducts(products) {
  let output = "";
  if (products.length > 0) {
    products.forEach((product) => {
      output += `
               <div class="card product">
                        <img src="${product.img}" alt="${product.title}" title="${product.title}">
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
                            <p><span>RAM</span> : ${product.ram}</p>
                            <p><span>Internal</span> : ${product.internal}</p>
                        </div>
                        <button class="btn-cart">Add To Cart</button>
                    </div>
`;
      showProduct.innerHTML = output;
    });
  } else {
    showProduct.innerHTML = "<p>Products Not Found</p>";
  }
}

window.addEventListener("load", async function () {
  const fetchedProducts = await fetchProduct();
  categoryFilter("brand", brandList, fetchedProducts);
  categoryFilter("ram", ramList, fetchedProducts);
  categoryFilter("internal", internalList, fetchedProducts);
  loadProducts(fetchedProducts);
});
