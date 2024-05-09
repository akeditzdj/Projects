const stock_products = [
  {
    id: "1",
    name: "Men Shirt",
    brand: "LEE",
    category: "MEN",
    price: "1100",
    picture: "https://m.media-amazon.com/images/I/51v71F5-FZL._AC_UL320_.jpg",
  },
  {
    id: "2",
    name: "Men Shirt",
    brand: "Wrangler",
    category: "MEN",
    price: "950",
    picture: "https://m.media-amazon.com/images/I/71w+AbeKVnL._AC_UL320_.jpg",
  },
  {
    id: "3",
    name: "Men Shirt",
    brand: "Levi's",
    category: "MEN",
    price: "1800",
    picture: "https://m.media-amazon.com/images/I/61sj7iGtj6L._AC_UL320_.jpg",
  },
  {
    id: "4",
    name: "Women Beige Cotton Straight Printed Kurta",
    brand: "BIBA",
    category: "WOMEN",
    price: "849",
    picture: "https://m.media-amazon.com/images/I/616vj-WLfbL._AC_UL320_.jpg",
  },
  {
    id: "5",
    name: "Women Yellow Cotton Printed Kurti",
    brand: "BIBA",
    category: "WOMEN",
    price: "999",
    picture: "https://m.media-amazon.com/images/I/71oH70Nj7mL._AC_UL320_.jpg",
  },
  {
    id: "6",
    name: "Women Beige Cotton Straight Printed Kurta",
    brand: "ZARA",
    category: "WOMEN",
    price: "1500",
    picture: "https://m.media-amazon.com/images/I/51Ot+6QdDlL._AC_UL320_.jpg",
  },
  {
    id: "7",
    name: "Men's Striped Regular Fit Spread-Collar Casual Shirt",
    brand: "Jack & Jones",
    category: "MEN",
    price: "1649",
    picture: "https://m.media-amazon.com/images/I/61LNVrQdi8L._AC_UL320_.jpg",
  },
  {
    id: "8",
    name: "Men's Checked Slim Fit Shirt",
    brand: "Levi's",
    category: "MEN",
    price: "1208",
    picture: "https://m.media-amazon.com/images/I/51EKtifMWmL._AC_UL320_.jpg",
  },
];

const container = document.querySelector(".container");
const modal = document.querySelector(".modal");
const modal_items = document.querySelector("#modal-items");
const total_amt = document.querySelector("#tamt");
const tax = document.querySelector("#tax");
const net = document.querySelector("#net");




function loadProductPage() {
  let output = "";
  stock_products.forEach((product) => {
    output += `  
    <div class="product">
    <div class="img">
      <img src="${product.picture}" alt="${product.name}" />
    </div>
    <div class="details">
      <h4>${product.name.length > 27 ? product.name.slice(0, 25) + "..." : product.name}</h4>
      <p>${product.brand}</p>
      <p>${product.category}</p>
      <p><b>Rs.${product.price}</b></p>
      <button class='btnAdd' data-pid='${product.id}'>Add to Cart</button>
    </div>
  </div>`;
  });
  container.innerHTML = output;

  const btnAdd = document.querySelectorAll(".btnAdd");
  btnAdd.forEach((button) => {
    button.addEventListener("click", addItems);

  });
}

let cart_items = [];

function cartDetails() {
  let output = "";
  cart_items.forEach((product, index) => {
    output += `<tr>
    <td>${index + 1}</td>
    <td><img src="${product.picture}" width="100px" height="100px" ></td>
    <td>${product.name}</td>
    <td>${product.price}</td>
    <td><input type='number' data-id='${product.id}' min="1" class='txtQty'  value='${product.quantity}'></td>
    <td class="amount">${product.amount}</td>
    <td><button onclick="deleteItem(${product.id})">Delete</button></td>
    </tr>`;
  });

  modal_items.innerHTML = output;
  //console.log(cart_items);
  const productsQty = document.querySelectorAll(".txtQty");
  productsQty.forEach((txtqty) => {
    txtqty.addEventListener("change", function (e) {
      const productId = e.target.dataset.id;
      const newQuantity = parseInt(e.target.value);
      const productIndex = cart_items.findIndex((item) => item.id === productId);

      if (productIndex !== -1) {
        cart_items[productIndex].quantity = newQuantity;
        cart_items[productIndex].amount = cart_items[productIndex].price * newQuantity;

        // Update the corresponding row in the modal
        const amountCell = txtqty.parentElement.nextElementSibling;
        // console.log(amountCell.textContent);
        if (amountCell) {
          amountCell.textContent = cart_items[productIndex].amount;
        }
      }
      getTotal();
    });
  });
}

function showCart() {
  cartDetails();
  modal.classList.add("active");
  getTotal();
}

function closeCart() {
  modal.classList.remove("active");
}

loadProductPage();

function addItems(e) {
  const button = e.target;
  button.style.background = "green";
  button.textContent = "Added";
  button.disabled = true;

  const pid = button.dataset.pid;
  const selected_product = stock_products.filter((product) => product.id == pid)[0];
  const new_product = { ...selected_product, quantity: 1, amount: selected_product.price };

  cart_items.push(new_product);
}

function getTotal() {
  const product_amount = document.querySelectorAll(".amount");
  console.log(product_amount);
  let total = 0;
  product_amount.forEach((product) => {
    total += parseInt(product.textContent);
  });
  total_amt.textContent = total.toFixed(2);
  tax.textContent = (total * 0.18).toFixed(2);
  net.textContent = (total + total * 0.18).toFixed(2);
}

function deleteItem(id) {
  if (confirm("Are You sure to delete?")) {
    let updated_cart = cart_items.filter((product) => product.id != id);
    cart_items = updated_cart;
    cartDetails();
    getTotal();
  }
}
