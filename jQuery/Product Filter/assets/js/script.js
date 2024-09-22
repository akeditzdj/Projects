let products = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81Z1scL6HvL._SL1500_.jpg",
    title: "Redmi 13C 5G",
    star: 4,
    review: "4000",
    old_price: 13999,
    new_price: 10498,
    brand: "Redmi",
    color: "silver",
    ram: "4GB",
    internal: "128GB",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/81ndCd07RuL._SL1500_.jpg",
    title: "Redmi 13 5g",
    star: 3.8,
    review: "5000",
    old_price: 17999,
    new_price: 13998,
    brand: "Redmi",
    color: "green",
    ram: "4GB",
    internal: "4GB",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/61SmnheBBRL._SL1500_.jpg",
    title: "Redmi 12 5G Moonstone Silver",
    star: 4,
    review: "2000",
    old_price: 19999,
    new_price: 13998,
    brand: "Redmi",
    color: "silver",
    ram: "8GB",
    internal: "256GB",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/81KFSdWCCEL._SL1500_.jpg",
    title: "Redmi 13C 5G Startrail Green",
    star: 4,
    review: "1000",
    old_price: 15999,
    new_price: 11998,
    brand: "Redmi",
    color: "green",
    ram: "6GB",
    internal: "128GB",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/71MGSe0lcML._SL1500_.jpg",
    title: "Redmi Note 13 5G",
    star: 3.7,
    review: "500",
    old_price: 20999,
    new_price: 15689,
    brand: "Redmi",
    color: "Chromatic Purple",
    ram: "6GB",
    internal: "128GB",
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/71VW8LmqqPL._SL1500_.jpg",
    title: "Redmi Note 13 5G Arctic White",
    star: 3.7,
    review: "1000",
    old_price: 20999,
    new_price: 16998,
    brand: "Redmi",
    color: "Arctic White",
    ram: "6GB",
    internal: "128GB",
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/81vqHyDCSCL._SL1500_.jpg",
    title: "Samsung Galaxy S21 FE 5G",
    star: 3.8,
    review: "4000",
    old_price: 74999,
    new_price: 26999,
    brand: "Samsung",
    color: "Graphite",
    ram: "4GB",
    internal: "256GB",
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/I/81juPhKSZJL._SL1500_.jpg",
    title: "Samsung Galaxy M14 4G",
    star: 3.8,
    review: "2000",
    old_price: 13999,
    new_price: 8269,
    brand: "Samsung",
    color: "Arctic Blue",
    ram: "8GB",
    internal: "256GB",
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/I/81K450cOJML._SL1500_.jpg",
    title: "Samsung Galaxy M35 5G",
    star: 4.1,
    review: "3000",
    old_price: 24499,
    new_price: 19998,
    brand: "Samsung",
    color: "Moonlight Blue",
    ram: "6GB",
    internal: "128GB",
  },
  {
    id: 10,
    img: "https://m.media-amazon.com/images/I/71qFJqFePsL._SL1500_.jpg",
    title: "Samsung Galaxy F15 5G",
    star: 3.8,
    review: "1000",
    old_price: 16999,
    new_price: 13525,
    brand: "Samsung",
    color: "Ash Black",
    ram: "6GB",
    internal: "128GB",
  },
  {
    id: 11,
    img: "https://m.media-amazon.com/images/I/617l83eY1rL._SL1500_.jpg",
    title: "SAMSUNG GALAXY S23 FE 5G",
    star: 3.8,
    review: "500",
    old_price: 84999,
    new_price: 39840,
    brand: "Samsung",
    color: "green",
    ram: "8GB",
    internal: "256GB",
  },
  {
    id: 12,
    img: "https://m.media-amazon.com/images/I/71GLMJ7TQiL._SL1500_.jpg",
    title: "Apple iPhone 13",
    star: 4.5,
    review: "500",
    old_price: 59900,
    new_price: 49900,
    brand: "Apple",
    color: "Starlight",
    ram: "12GB",
    internal: "256GB",
  },
  {
    id: 13,
    img: "https://m.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg",
    title: "Apple iPhone 15",
    star: 4.5,
    review: "1000",
    old_price: 79900,
    new_price: 69900,
    brand: "Apple",
    color: "Black",
    ram: "12GB",
    internal: "256GB",
  },
  {
    id: 14,
    img: "https://m.media-amazon.com/images/I/618Bb+QzCmL._SL1500_.jpg",
    title: "Apple iPhone 14",
    star: 4.5,
    review: "500",
    old_price: 69900,
    new_price: 59900,
    brand: "Apple",
    color: "Starlight",
    ram: "6GB",
    internal: "128GB",
  },
  {
    id: 15,
    img: "https://m.media-amazon.com/images/I/71v2jVh6nIL._SL1500_.jpg",
    title: "Apple iPhone 15",
    star: 4.5,
    review: "200",
    old_price: 79900,
    new_price: 69900,
    brand: "Apple",
    color: "Pink",
    ram: "6GB",
    internal: "128GB",
  },
  {
    id: 16,
    img: "https://m.media-amazon.com/images/I/619f09kK7tL._SL1500_.jpg",
    title: "Apple iPhone 14",
    star: 4.5,
    review: "100",
    old_price: 69900,
    new_price: 59900,
    brand: "Apple",
    color: "Purple",
    ram: "6GB",
    internal: "128GB",
  },
  {
    id: 17,
    img: "https://m.media-amazon.com/images/I/61cwywLZR-L._SL1500_.jpg",
    title: "Apple iPhone 14",
    star: 4.5,
    review: "500",
    old_price: 69900,
    new_price: 59900,
    brand: "Apple",
    color: "Midnight",
    ram: "6GB",
    internal: "128GB",
  },
  {
    id: 18,
    img: "https://m.media-amazon.com/images/I/71nvkHnPpZL._SL1500_.jpg",
    title: "Apple iPhone 15",
    star: 4.5,
    review: "200",
    old_price: 89900,
    new_price: 79900,
    brand: "Apple",
    color: "Green",
    ram: "6GB",
    internal: "256GB",
  },
  {
    id: 19,
    img: "https://m.media-amazon.com/images/I/61cecOpZrxL._SL1500_.jpg",
    title: "Apple iPhone 13",
    star: 4.5,
    review: "50",
    old_price: 69900,
    new_price: 61999,
    brand: "Apple",
    color: "Midnight",
    ram: "6GB",
    internal: "256GB",
  },
  {
    id: 20,
    img: "https://m.media-amazon.com/images/I/81Os1SDWpcL._SL1500_.jpg",
    title: "Apple iPhone 15 Pro Max",
    star: 4.4,
    review: "337",
    old_price: 179900,
    new_price: 166600,
    brand: "Apple",
    color: "Black Titanium",
    ram: "8GB",
    internal: "512GB",
  },
  {
    id: 21,
    img: "https://m.media-amazon.com/images/I/81qlME2wWmL._SL1500_.jpg",
    title: "Apple iPhone 15 Pro",
    star: 4.3,
    review: "326",
    old_price: 164900,
    new_price: 156500,
    brand: "Apple",
    color: "White Titanium",
    ram: "8GB",
    internal: "512GB",
  },
  {
    id: 22,
    img: "https://m.media-amazon.com/images/I/81CFCXH1tVL._SL1500_.jpg",
    title: "OPPO F27 5G",
    star: 3.5,
    review: "200",
    old_price: 28999,
    new_price: 24999,
    brand: "Oppo",
    color: "Emerald Green",
    ram: "8GB",
    internal: "256GB",
  },
  {
    id: 23,
    img: "https://m.media-amazon.com/images/I/91wPh6RMcdL._SL1500_.jpg",
    title: "OPPO F27 Pro+ 5G",
    star: 3.9,
    review: "200",
    old_price: 32999,
    new_price: 27999,
    brand: "Oppo",
    color: "Midnight Navy",
    ram: "8GB",
    internal: "128GB",
  },
  {
    id: 24,
    img: "https://m.media-amazon.com/images/I/81Tx+kozw2L._SL1500_.jpg",
    title: "OPPO A3X 5G",
    star: 3.7,
    review: "400",
    old_price: 15999,
    new_price: 13499,
    brand: "Oppo",
    color: "Starry Purple",
    ram: "4GB",
    internal: "128GB",
  },
  {
    id: 25,
    img: "https://m.media-amazon.com/images/I/81ZFLjC0JJL._SL1500_.jpg",
    title: "OPPO A3 Pro 5G",
    star: 4,
    review: "400",
    old_price: 20999,
    new_price: 17999,
    brand: "Oppo",
    color: "Moonlight Purple",
    ram: "8GB",
    internal: "128GB",
  },
  {
    id: 26,
    img: "https://m.media-amazon.com/images/I/81KH1T4WGGL._SL1500_.jpg",
    title: "OPPO A3X 5G",
    star: 3.7,
    review: "100",
    old_price: 15999,
    new_price: 13499,
    brand: "Oppo",
    color: "Sparkle Black",
    ram: "4GB",
    internal: "128GB",
  },
  {
    id: 27,
    img: "https://m.media-amazon.com/images/I/810HI-4wV+L._SL1500_.jpg",
    title: "Oppo F25 Pro 5G",
    star: 4,
    review: "200",
    old_price: 28999,
    new_price: 23999,
    brand: "Oppo",
    color: "Lava Red",
    ram: "8GB",
    internal: "128GB",
  },
  {
    id: 28,
    img: "https://m.media-amazon.com/images/I/719YgMLrtjL._SL1500_.jpg",
    title: "OPPO A3X 5G",
    star: 3.7,
    review: "100",
    old_price: 15999,
    new_price: 13499,
    brand: "Oppo",
    color: "Starlight White",
    ram: "4GB",
    internal: "128GB",
  },
  {
    id: 29,
    img: "https://m.media-amazon.com/images/I/81FeGlImflL._SL1500_.jpg",
    title: "Oppo F25 Pro 5G",
    star: 4,
    review: "100",
    old_price: 28999,
    new_price: 23999,
    brand: "Oppo",
    color: "Ocean Blue",
    ram: "8GB",
    internal: "128GB",
  },
  {
    id: 30,
    img: "https://m.media-amazon.com/images/I/71SgqjoTNzL._SL1500_.jpg",
    title: "Oppo Reno10 Pro 5G",
    star: 3.9,
    review: "50",
    old_price: 44999,
    new_price: 29410,
    brand: "Oppo",
    color: "Glossy Purple",
    ram: "12GB",
    internal: "256GB",
  },
  {
    id: 31,
    img: "https://m.media-amazon.com/images/I/91AnvgyG1sL._SL1500_.jpg",
    title: "OPPO F27 Pro+ 5G",
    star: 3.9,
    review: "200",
    old_price: 34999,
    new_price: 29999,
    brand: "Oppo",
    color: "Dusk Pink",
    ram: "8GB",
    internal: "256GB",
  },
  {
    id: 32,
    img: "https://m.media-amazon.com/images/I/71e-HtTY61L._SL1500_.jpg",
    title: "Oppo F21s Pro",
    star: 4.1,
    review: "2025",
    old_price: 27999,
    new_price: 19190,
    brand: "Oppo",
    color: "Dawnlight Gold",
    ram: "8GB",
    internal: "128GB",
  },
  {
    id: 33,
    img: "https://m.media-amazon.com/images/I/81zSqgluuZL._SL1500_.jpg",
    title: "OPPO F27 5G",
    star: 3.5,
    review: "50",
    old_price: 26999,
    new_price: 22999,
    brand: "Oppo",
    color: "Amber Orange",
    ram: "8GB",
    internal: "128GB",
  },
  {
    id: 34,
    img: "https://m.media-amazon.com/images/I/81K-xfO1qIL._SL1500_.jpg",
    title: "OPPO A3 Pro 5G",
    star: 4,
    review: "100",
    old_price: 22999,
    new_price: 19999,
    brand: "Oppo",
    color: "Starry Black",
    ram: "8GB",
    internal: "256GB",
  },
  {
    id: 35,
    img: "https://m.media-amazon.com/images/I/41ZyErUwKYL._SL1042_.jpg",
    title: "Oppo Reno 12 Pro 5G",
    star: 4.6,
    review: "100",
    old_price: 53999,
    new_price: 36400,
    brand: "Oppo",
    color: "Sunset Gold",
    ram: "12GB",
    internal: "256GB",
  },
  {
    id: 36,
    img: "https://m.media-amazon.com/images/I/41kslLtLL8L._SL1060_.jpg",
    title: "Oppo Reno 12 5G",
    star: 5,
    review: "1",
    old_price: 43999,
    new_price: 30799,
    brand: "Oppo",
    color: "Sunset Peach",
    ram: "8GB",
    internal: "256GB",
  },
  {
    id: 37,
    img: "https://m.media-amazon.com/images/I/81O6C8PjpEL._SL1500_.jpg",
    title: "Oppo A17",
    star: 3.4,
    review: "6",
    old_price: 14999,
    new_price: 8990,
    brand: "Oppo",
    color: "Lake Blue",
    ram: "4GB",
    internal: "64GB",
  },
  {
    id: 38,
    img: "https://m.media-amazon.com/images/I/51AVBqkFR6L._SL1280_.jpg",
    title: "Oppo Reno 12 Pro 5G",
    star: 2.3,
    review: "4",
    old_price: 53999,
    new_price: 35349,
    brand: "Oppo",
    color: "Space Brown",
    ram: "12GB",
    internal: "256GB",
  },
  {
    id: 39,
    img: "https://m.media-amazon.com/images/I/41Fvm7HOJML.jpg",
    title: "Oppo Reno 11 Pro 5G",
    star: 3.4,
    review: "50",
    old_price: 44999,
    new_price: 29905,
    brand: "Oppo",
    color: "Pearl White",
    ram: "12GB",
    internal: "256GB",
  },
  {
    id: 40,
    img: "https://m.media-amazon.com/images/I/51opYSjGFmL._SL1280_.jpg",
    title: "Oppo Reno 12 5G",
    star: 4,
    review: "1",
    old_price: 43999,
    new_price: 29499,
    brand: "Oppo",
    color: "Matte Brown",
    ram: "8GB",
    internal: "256GB",
  },
  {
    id: 41,
    img: "https://m.media-amazon.com/images/I/41JVwkBzqGL._SL1058_.jpg",
    title: "Oppo Reno 12 5G",
    star: 4,
    review: "933",
    old_price: 43999,
    new_price: 29499,
    brand: "Oppo",
    color: "Astro Silver",
    ram: "8GB",
    internal: "256GB",
  },
  {
    id: 42,
    img: "https://m.media-amazon.com/images/I/51VHf1Be-XL.jpg",
    title: "Oppo Reno 11 Pro 5G",
    star: 3.8,
    review: "16",
    old_price: 44999,
    new_price: 30500,
    brand: "Oppo",
    color: "Rock Grey",
    ram: "12GB",
    internal: "256GB",
  },
  {
    id: 43,
    img: "https://m.media-amazon.com/images/I/61Gq6YKRQlL._SL1000_.jpg",
    title: "Oppo Reno 11 5G",
    star: 4.2,
    review: "88",
    old_price: 38999,
    new_price: 27849,
    brand: "Oppo",
    color: "Wave Green",
    ram: "8GB",
    internal: "128GB",
  },
  {
    id: 44,
    img: "https://m.media-amazon.com/images/I/71TFnrSIs-L._SL1500_.jpg",
    title: "Oppo F21s Pro 5G",
    star: 4,
    review: "270",
    old_price: 31999,
    new_price: 22390,
    brand: "Oppo",
    color: "Starlight Black",
    ram: "8GB",
    internal: "128GB",
  },
  {
    id: 45,
    img: "https://m.media-amazon.com/images/I/81fOvheIt1L._SL1500_.jpg",
    title: "Oppo A17",
    star: 3.4,
    review: "10",
    old_price: 14999,
    new_price: 8990,
    brand: "Oppo",
    color: "Midnight Black",
    ram: "4GB",
    internal: "64GB",
  },
  {
    id: 46,
    img: "https://m.media-amazon.com/images/I/6164FpYjsGL._SL1200_.jpg",
    title: "vivo Y18i",
    star: 2.8,
    review: "12",
    old_price: 11999,
    new_price: 7999,
    brand: "Vivo",
    color: "Gem Green",
    ram: "4GB",
    internal: "64GB",
  },
  {
    id: 47,
    img: "https://m.media-amazon.com/images/I/61Coi7KOHiL._SL1200_.jpg",
    title: "vivo Y18i",
    star: 2.8,
    review: "12",
    old_price: 11999,
    new_price: 7999,
    brand: "Vivo",
    color: "Space Black",
    ram: "4GB",
    internal: "64GB",
  },
  {
    id: 48,
    img: "https://m.media-amazon.com/images/I/614-Moic6PL._SL1200_.jpg",
    title: "Vivo Y27",
    star: 4,
    review: "870",
    old_price: 18999,
    new_price: 10999,
    brand: "Vivo",
    color: "Garden Green",
    ram: "6GB",
    internal: "128GB",
  },
  {
    id: 49,
    img: "https://m.media-amazon.com/images/I/61VxzkiD1EL._SL1500_.jpg",
    title: "Vivo T3 Lite 5G",
    star: 3.5,
    review: "7",
    old_price: 14999,
    new_price: 10779,
    brand: "Vivo",
    color: "Vibrant Green",
    ram: "4GB",
    internal: "128GB",
  },
  {
    id: 50,
    img: "https://m.media-amazon.com/images/I/81eJJYFsztL._SL1500_.jpg",
    title: "Vivo T3x 5G",
    star: 4.4,
    review: "14",
    old_price: 18999,
    new_price: 14185,
    brand: "Vivo",
    color: "Celestial Green",
    ram: "6GB",
    internal: "128GB",
  },
  {
    id: 51,
    img: "https://m.media-amazon.com/images/I/71B1AhbuGVL._SL1500_.jpg",
    title: "vivo Y28e 5G",
    star: 3.8,
    review: "39",
    old_price: 14999,
    new_price: 10999,
    brand: "Vivo",
    color: "Vintage Red",
    ram: "4GB",
    internal: "64GB",
  },
  {
    id: 52,
    img: "https://m.media-amazon.com/images/I/61-UGEw5EYL._SL1200_.jpg",
    title: "Vivo Y200 5G",
    star: 3.9,
    review: "181",
    old_price: 28999,
    new_price: 22999,
    brand: "Vivo",
    color: "Desert Gold",
    ram: "8GB",
    internal: "256GB",
  },
  {
    id: 53,
    img: "https://m.media-amazon.com/images/I/618RKy-9R7L._SL1200_.jpg",
    title: "Vivo Y27",
    star: 4,
    review: "870",
    old_price: 18999,
    new_price: 11000,
    brand: "Vivo",
    color: "Sea Blue",
    ram: "6GB",
    internal: "128GB",
  },
  {
    id: 54,
    img: "https://m.media-amazon.com/images/I/61LVKXu1hOL._SL1200_.jpg",
    title: "vivo Y18e",
    star: 3.9,
    review: "133",
    old_price: 11999,
    new_price: 7999,
    brand: "Vivo",
    color: "Gem Green",
    ram: "4GB",
    internal: "64GB",
  },
];

// Range value

function updateTextInput(val) {
  document.getElementById("priceValue").innerHTML = "Rs." + val;
}

// Load products
let showProduct = document.getElementById("showProduct");
let output = "";
function loadProducts() {
  products.forEach((product) => {
    output += `
               <div class="card product">
                        <img src="${product.img}" alt="">
                        <h2>${product.title}</h2>
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
}

loadProducts();

// Load brand in selecet box
let uniqueBrand = [...new Set(products.map((product) => product.brand))];
let brandList = document.getElementById("brand");

uniqueBrand.forEach(function (item) {
  let brand = document.createElement("option");
  brand.list = item;
  brand.text = item;
  brandList.appendChild(brand);
});

$(document).ready(function () {
  $("#brand").on("change", function () {
    let selectedBrand = $(this).val();

    // RAM selection
    $("#4gb, #6gb, #8gb, #12gb").on("change", function () {
      let selectedRAM = $(this).val();
      filterProducts();
    });

    // Internal storage selection
    $("#4_gb, #64gb, #128gb, #256gb, #512gb").on("change", function () {
      let selectedInternal = $(this).val();
      filterProducts();
    });

    // Price range selection
    $("#price-range").on("change", function () {
      let selectedPrice = $(this).val();
      filterProducts();
    });

    // Review selection
    $("#bad, #good, #best").on("change", function () {
      let review = $(this).val();
      filterProducts();
    });

    function filterProducts() {
      let productBrand = products.map((product) => product.brand);
      let selectedRAM = $(
        "#4gb:checked, #6gb:checked, #8gb:checked, #12gb:checked"
      )
        .map((_, el) => $(el).val())
        .get();
      let selectedInternal = $(
        "#4_gb:checked, #64gb:checked, #128gb:checked, #256gb:checked, #512gb:checked"
      )
        .map((_, el) => $(el).val())
        .get();
      let selectedPrice = $("#price-range").val();
      let selectedReview = $("#bad:checked, #good:checked, #best:checked")
        .map((_, el) => $(el).val())
        .get();

      $(".product").each(function () {
        let brandMatch =
          selectedBrand === "all" || $(this).data("brand") === selectedBrand;
        let ramMatch =
          selectedRAM.length === 0 || selectedRAM.includes($(this).data("ram"));
        let internalMatch =
          selectedInternal.length === 0 ||
          selectedInternal.includes($(this).data("internal"));
        let priceMatch =
          selectedPrice === "" || $(this).data("new_price") <= selectedPrice; // Adjust based on how price is structured
        let reviewMatch =
          selectedReview.length === 0 ||
          selectedReview.includes(getReviewCategory($(this).data("review")));

        if (
          brandMatch &&
          ramMatch &&
          internalMatch &&
          priceMatch &&
          reviewMatch
        ) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }

    function getReviewCategory(review) {
      if (review < 500) {
        return "Bad";
      } else if (review < 2000) {
        return "Good";
      } else {
        return "Best"; // Assume best is for reviews above 2000
      }
    }
  });
});
