const stock_products = [
  {
    id: "1",
    name: "Fila",
    color: "Black",
    size: "M",
    variant: "Standard Casual",
    price: "49",
    picture: "images/t-shirt -1.jpg",
  },
  {
    id: "2",
    name: "Adidas",
    color: "DimGray",
    size: "L",
    variant: "Men's Adult T-Shirt",
    price: "45",
    picture: "images/t-shirt -2.jpg",
  },
  {
    id: "3",
    name: "Gildan Hammer",
    color: "Black",
    size: "XL",
    variant: "Men's T-Shirt",
    price: "40",
    picture: "images/t-shirt -3.jpg",
  },
  {
    id: "4",
    name: "Icebreaker Merino",
    color: "SlateGray",
    size: "M",
    variant: "Men's Performance T-Shirt",
    price: "47.80",
    picture: "images/t-shirt -4.jpg",
  },
  {
    id: "5",
    name: "Colambia",
    color: "MidnightBlue",
    size: "S",
    variant: "Standard Casual",
    price: "35.30",
    picture: "images/t-shirt -5.jpg",
  },
  {
    id: "6",
    name: "Galaxy",
    color: "LightSlateGray",
    size: "2XL",
    variant: "Men's Adult T-Shirt",
    price: "49.40",
    picture: "images/t-shirt -6.jpg",
  },
  {
    id: "7",
    name: "Gildan Hammer",
    color: "OrangeRed",
    size: "XS",
    variant: "Men's T-Shirt",
    price: "49",
    picture: "images/t-shirt -7.jpg",
  },
  {
    id: "8",
    name: "Fila",
    color: "Navy",
    size: "3XL",
    variant: "Men's Performance T-Shirt",
    price: "43",
    picture: "images/t-shirt -8.jpg",
  },
];

/*************** Product output ****************/

const container = document.querySelector("#productContainer");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector("#modalProduct");
const subTotalAmt = document.querySelector("#subTotal");
const discountAmt = document.querySelector("#discount");
const deliveryAmt = document.querySelector("#delivery");
const taxAmt = document.querySelector("#tax");
const netAmt = document.querySelector("#net");


let cart_items = [];

function loadProductPage() {
  let output = "";
  stock_products.forEach((product) => {
    output += `  
<div class="card">
         <div class="card-img-top">
             <img class="img-fluid card-img-top" src="${product.picture}" width="260" alt="${product.name}">
         </div>
         <div class="card-body d-flex justify-content-center flex-column align-items-center text-center">
             <div class="color d-flex justify-content-center align-items-center gap-2">
                 <input class="form-check-input bg-danger" type="radio" name="size">
                 <input class="form-check-input bg-dark" type="radio" name="color">
                 <input class="form-check-input bg-warning" type="radio" name="color">
                 <input class="form-check-input bg-primary" type="radio" name="color">
                 <input class="form-check-input bg-body-tertiary" type="radio" name="color">
                 <input class="form-check-input bg-info" type="radio" name="color">
             </div>
             <div class="mt-3 d-flex justify-content-center align-items-center gap-3">
                 <label for="size">Size:</label>
                 <select class="form-select form-select-sm" name="size" id="size">
                   <option hidden value="">Size</option>
                     <option value="XS">XS</option>
                     <option value="S">S</option>
                     <option value="M">M</option>
                     <option value="L">L</option>
                     <option value="XL">XL</option>
                     <option value="2XL">2XL</option>
                     <option value="3XL">3XL</option>
                 </select>
             </div>
             <h5 class="mt-2">${product.name}</h5>
             <p class="fw-bold">${product.variant}</p>
             <div class="star fs-6">
                 <i class="bi bi-star-fill text-warning"></i>
                 <i class="bi bi-star-fill text-warning"></i>
                 <i class="bi bi-star-fill text-warning"></i>
                 <i class="bi bi-star-fill text-warning"></i>
                 <i class="bi bi-star-fill text-warning"></i>
             </div>
             <span class="mt-2 fw-bold">$ ${product.price}</span>
             <div class="mt-2"><img src="images/prime logo.png" width="50" alt="prime-logo"></div>
             <div class="mt-2">FREE international delivery</div>
             <button data-pid='${product.id}' class="btn btn-sm mt-4 btn-outline-secondary mt-2 add-item btnAdd" >Add to cart</button>
         </div>
       </div>

    `;
  });
  container.innerHTML = output;

  const btnAdd = document.querySelectorAll(".btnAdd");
  btnAdd.forEach((button) => {
    button.addEventListener("click", addItems);
  });
}

function cartCountInnerHtml() {
  let cartCount = document.querySelector("#cart-count");
  const btnAdd = document.querySelectorAll(".btnAdd");
  btnAdd.addEventListener("click", function () {
    cartCount.innerHTML = "hi";
  });
  
}

cartCountInnerHtml();

/*************** Modal output ****************/

function cartDetails() {
  let outputProduct = " ";
  cart_items.forEach((product, index) => {
    outputProduct += `
              <tr>

              <td class="td-flex">${index + 1}<img src="${
      product.picture
    }" width="100" alt="${product.name}">
                <div class="p-details">
              <h6 class="pb-1 fs-6">${product.name}</h6>
                
                <span class="text-secondary">Color:<small class="text-dark fw-medium"> ${
                  product.color
                }</small><span>
                <br>
                 <span class="text-secondary">Size:<small class="text-dark fw-medium"> ${
                   product.size
                 } </small></span>
                  <span class="text-secondary">Variant:<small class="text-dark  text-truncate fw-medium"> ${
                    product.variant
                  }</small></span>
                  </div>
                  </td>
         
            <td class=" product-price"><h6 class=" fs-6 text-end">$ ${
              product.price
            }</h6></td>
            <td><input type="number" data-id='${product.id}' value='${
      product.quantity
    }' min="1" class=" form-control text-center txtQty"></td>
            <td class="amount fw-bold fs-6 text-end"><h6 class="fw-bold fs-6 text-end ">$ ${
              product.amount
            }</h6></td>
            <td>
         <button onclick="deleteItem(${
           product.id
         })" class=" btn btn-danger"><i class="bi bi-trash3-fill"></i></button></td>
             
</tr>
      
    `;
  });

  modalBody.innerHTML = outputProduct;

  const productsQty = document.querySelectorAll(".txtQty");
  productsQty.forEach((txtqty) => {
    txtqty.addEventListener("change", function (e) {
      const productId = e.target.dataset.id;
      const newQuantity = parseInt(e.target.value);
      const productIndex = cart_items.findIndex(
        (item) => item.id === productId
      );

      if (productIndex !== -1) {
        cart_items[productIndex].quantity = newQuantity;
        cart_items[productIndex].amount =
          cart_items[productIndex].price * newQuantity;

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

loadProductPage();

function addItems(e) {
  const button = e.target;
  button.style.background = "green";
  button.style.color = "white";
  button.textContent = "Added";
  button.disabled = true;

  const pid = button.dataset.pid;
  const selected_product = stock_products.filter(
    (product) => product.id == pid
  )[0];
  const new_product = {
    ...selected_product,
    quantity: 1,
    amount: selected_product.price,
  };

  cart_items.push(new_product);
  getTotal();
}

function getTotal() {
  const product_amount = document.querySelectorAll(".amount");
  let total = 0;

  product_amount.forEach((product) => {
    total += parseInt(product.textContent);
  });

  subTotalAmt.textContent = total.toFixed(2);
  discountAmt.textContent = ((total / 100) * 5).toFixed(2);
  deliveryAmt.textContent = (5).toFixed(2);
  taxAmt.textContent = (total * 0.09).toFixed(2);
  netAmt.textContent = (total + total * 0.09 + 5).toFixed(2);
}

function deleteItem(id) {
  if (confirm("Are You sure to delete?")) {
    let updated_cart = cart_items.filter((product) => product.id != id);
    cart_items = updated_cart;

    cartDetails();
    getTotal();
  }
}
