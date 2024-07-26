// Get inputs from book register form
const bookIdEl = document.getElementById("bookId");
const bookNameEl = document.getElementById("bookName");
const authorNameEl = document.getElementById("authorName");
const publicationsEl = document.getElementById("publications");
const qtyEl = document.getElementById("qty");
const priceEl = document.getElementById("price");
const detailsEl = document.getElementById("details");

// Foem buttons

const btnBookAdd = document.getElementById("bookAdd");
const btnBookSave = document.getElementById("bookSave");
const btnBookClear = document.getElementById("bookClear");

// Book data table loader

const bookTableBody = document.querySelector("#booktable");

// Modal title change

const modalBookTitle = document.getElementById("titleBook");
const alertBookMsg = document.getElementById("alertBook");
// const mainModalTitle = document.getElementById("exampleModalLabel");

//Filter
const filterBook = document.getElementById("filterBook");

// Modal open and hide
const ModalBook = new bootstrap.Modal(exampleModalBook, {
  keyboard: false,
});

btnBookAdd.addEventListener("click", function () {
  ModalBook.show();
  clearAllBookInput();
});

// Add new book
btnBookSave.addEventListener("click", function () {
  const id = bookIdEl.value;
  const bookName = bookNameEl.value;
  const authorName = authorNameEl.value;
  const publications = publicationsEl.value;
  const quantity = Number(qtyEl.value);
  const price = Number(priceEl.value);
  const details = detailsEl.value;

  let bookData = getBookDetails();
  const ModalStatusBook = new bootstrap.Modal(myModalMessageBook, {
    keyboard: false,
  });

  if (bookName && authorName && publications && quantity && price && details) {
    if (id) {
      //Update tools
      let updatedBooks = bookData.map((book) => {
        if (book.id == id) {
          return {
            ...book,
            bookName: bookName,
            authorName: authorName,
            publications: publications,
            quantity: quantity,
            price: price,
            details: details,
          };
        } else {
          return book;
        }
      });
      saveBooksLocalStorage(updatedBooks);
      ModalBook.hide();
      ModalStatusBook.show();
      // mainModalTitle.innerHTML = "UPDATE USER";
      modalBookTitle.innerHTML = "Book Update Status";
      alertBookMsg.innerHTML = "Book Updated Successfully...";
      clearAllBookInput();
      loadBook();
    } else {
      //Add Tools
      const bookObj = {
        id: Math.floor(1000 + Math.random() * 9000),
        bookName: bookName,
        authorName: authorName,
        publications: publications,
        quantity: quantity,
        price: price,
        details: details,
      };

      bookData.push(bookObj);
      ModalStatusBook.show();
      // mainModalTitle.innerHTML = "ADD NEW USER";
      modalBookTitle.innerHTML = "New Book Registration";
      alertBookMsg.innerHTML = "Book Added Successfully...";
      saveBooksLocalStorage(bookData);
      clearAllBookInput();
      loadBook();
    }
    ModalBook.hide();
  } else {
    ModalStatusBook.show();
    modalBookTitle.innerHTML = "Warning";
    alertBookMsg.innerHTML = "Plaese fill all the details";
  }
});

//Edit Books
function editBooks(id) {
  ModalBook.show();

  let bookData = getBookDetails();
  const selectedBooks = bookData.filter((book) => book.id == id)[0];
  bookIdEl.value = selectedBooks.id;
  bookNameEl.value = selectedBooks.bookName;
  authorNameEl.value = selectedBooks.authorName;
  publicationsEl.value = selectedBooks.publications;
  qtyEl.value = selectedBooks.quantity;
  priceEl.value = selectedBooks.price;
  detailsEl.value = selectedBooks.details;

  loadBook();
}

// Delete Book

function deleteBook(id) {
  if (id) {
    bookData = getBookDetails();
    let updatedBooks = bookData.filter((book) => book.id != id);
    bookData = updatedBooks;
    saveBooksLocalStorage(updatedBooks);
    msgModalBook.hide();
    loadBook();
    setTimeout(deleteSuccessBookMessage, 200);
  }
}

// Delete Success message with timer

function deleteSuccessBookMessage() {
  const ModalStatusBook = new bootstrap.Modal(myModalMessageBook, {
    keyboard: false,
  });
  const modalBookTitle = document.getElementById("titleBook");
  const alertBookMsg = document.getElementById("alertBook");
  ModalStatusBook.show();
  modalBookTitle.innerHTML = "Delete Book";
  alertBookMsg.innerHTML = "Book Deleted Successfully...";
}

// Custom modal delete with confirmation

const msgModalBook = new bootstrap.Modal(myModalDeleteBook, {
  keyboard: false,
});

function showDeleteModalBook(callback) {
  msgModalBook.show();

  document.getElementById("yesBook").addEventListener("click", function () {
    callback(true);
    msgModalBook.hide();
  });

  document.getElementById("noBook").addEventListener("click", function () {
    callback(false);
    msgModalBook.hide();
  });
}

function deleteBookWithConfirmation(id) {
  showDeleteModalBook(function (confirmed) {
    if (confirmed) {
      deleteBook(id);
    }
  });
}

// Save user data to localStorage...

function saveBooksLocalStorage(bookData) {
  localStorage.setItem("bookData", JSON.stringify(bookData));
  console.log("Data Saved to localStorage");
  loadBook();
}

// Get user data from localStorage...

function getBookDetails() {
  let dataBook = [];
  if (localStorage.getItem("bookData") !== null) {
    dataBook = JSON.parse(localStorage.getItem("bookData"));
  }
  return dataBook;
}

// Load user data

function loadBook(isForSearch = 0, filterBook = []) {
  let bookData = [];
  if (isForSearch == 0) {
    bookData = getBookDetails();
  } else {
    bookData = filterBook;
  }

  bookTableBody.innerHTML = "";
  bookData.forEach((book, index) => {
    bookTableBody.innerHTML += `<tr>
          <td>${index + 1}</td>
          <td>${book.bookName}</td>
          <td>${book.authorName}</td>
          <td>${book.publications}</td>
          <td>${book.quantity}</td>
          <td>${book.price}</td>
          <td>${book.details}</td>
          <td><button id="btnEditBook" onclick="editBooks(${
            book.id
          })" class="btn btn-sm btn-primary">Edit</button></td>
          <td><button id="btnDelBook" onclick="deleteBookWithConfirmation(${
            book.id
          })" class="btn btn-sm btn-danger">Delete</button></td>
          <td><button id="btnBorrowBook" data-bs-toggle="modal" data-bs-target="#exampleModalBookReturn" class="btn btn-sm btn-warning">Borrow</button></td>

          </tr>`;
  });
}

loadBook();

// ClearAll

function clearAllBookInput() {
  bookNameEl.value = "";
  authorNameEl.value = "";
  publicationsEl.value = "";
  qtyEl.value = "";
  priceEl.value = "";
  detailsEl.value = "";
}

btnBookClear.addEventListener("click", clearAll);

//Filter Books
filterBook.addEventListener("input", function () {
  const searchQuery = this.value.toLowerCase();
  const bookData = getBookDetails();
  const filterBook = bookData.filter(
    (book) =>
      book.bookName.toLowerCase().includes(searchQuery) ||
      book.authorName.toLowerCase().includes(searchQuery)
  );
  loadBook(1, filterBook);
});

// Table row count and show on dashboard
function counter() {
  const rowBookCount = document.getElementById("bookReg").rows.length - 1;
  const totalBook = document.getElementById("totalBook");
  const totalAuthor = document.getElementById("totalAuthor");
  const totalPublications = document.getElementById("totalPublications");
  const totalPrice = document.getElementById("totalPrice");
  totalBook.innerHTML = rowBookCount;
  totalAuthor.innerHTML = rowBookCount;
  totalPublications.innerHTML = rowBookCount;
  // Total book price
  const bookData = getBookDetails();
  const bookPrice = bookData.map(({ price }) => price);
  const total = bookPrice.reduce((a, b) => a + b, 0);
  totalPrice.innerHTML =
    `<i class="bi bi-currency-rupee">` + total + " " + "/-";

  // Total Authors
  let authorCount = 0;
  const author = bookData.map(({ authorName }) => authorName);

  const indexOfAll = (arr, val) =>
    arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

  indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0, 3]
  indexOfAll([1, 2, 3], 4); // []

  console.log(author);

  console.log(authorCount);
}
counter();
