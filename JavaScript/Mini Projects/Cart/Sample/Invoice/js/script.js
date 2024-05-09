const stock_items = [
  { id: 1, name: "Pen", amount: 15 },
  { id: 2, name: "Box", amount: 50 },
  { id: 3, name: "Pencil", amount: 5 },
  { id: 4, name: "Eraser", amount: 3 },
  { id: 5, name: "Scale", amount: 20 },
];

const productsElement = document.getElementById("products");
const qtyElement = document.getElementById("quantity");
const tbody = document.getElementById("tbody");
const subtotal = document.getElementById("subtotal");
const tax = document.getElementById("tax");
const net = document.getElementById("net");

function init() {
  let option = "<option value=''>Select Product</option>";
  stock_items.forEach((product) => {
    option += `<option value='${product.id}'>${product.name}</option>`;
  });
  productsElement.innerHTML = option;
}

const cartItems = [];
function addToCart() {
  const product_id = productsElement.value;
  const qty = qtyElement.value;
  if (product_id && qty) {
    selected_product = stock_items.filter((product) => product.id == product_id)[0];
    const product = { name: selected_product.name, unit: selected_product.amount, quantity: qty, amount: selected_product.amount * qty };
    cartItems.push(product);
    qtyElement.value = "";
    productsElement.value = "";
    loadTable();
  } else {
    alert("Please select product & Qty");
  }
}

function loadTable() {
  let output = "";
  let subtotal_amt = 0;
  cartItems.forEach((item, index) => {
    subtotal_amt += item.amount;

    output += `
    <tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.unit.toFixed(2)}</td>
        <td>${item.quantity}</td>
        <td>${item.amount.toFixed(2)}</td>
    </tr>`;
  });
  subtotal.innerHTML = subtotal_amt.toFixed(2);
  tax.innerHTML = (subtotal_amt * 0.18).toFixed(2);
  net.innerHTML = (subtotal_amt + subtotal_amt * 0.18).toFixed(2);
  tbody.innerHTML = output;
}

init();
