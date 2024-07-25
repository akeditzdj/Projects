// Get Book borrow inputs

const personIdEl = document.getElementById("personId");
const personNameEl = document.getElementById("personName");
const borrowDateEl = document.getElementById("borrowDate");
const borrowBookNameEl = document.getElementById("borrowBookName");
const borrowBookQtyEl = document.getElementById("borrowBookQty");
const borrowBookPriceEl = document.getElementById("borrowBookPrice");

// Get Book borrow bUttons

const bookBorrowClear = document.getElementById("bookBorrowClear");
const bookBorrowSave = document.getElementById("bookBorrowSave");
// const btnBorrowBook = document.getElementById("btnBorrowBook");

// Add new book Borrow
bookBorrowSave.addEventListener("click", function () {
  const personId = personIdEl.value;
  const personName = personNameEl.value;
  const borrowBookName = borrowBookNameEl.value;
  const borrowBookQty = borrowBookQtyEl.value;
  const borrowBookPrice = Number(borrowBookPriceEl.value);

  //   let bookBorrowData = getBookBorrowDetails();

  if (
    personId &&
    personName &&
    borrowBookName &&
    borrowBookQty &&
    borrowBookPrice
  ) {
    const borrowBookObj = {
      personId: personId,
      personName: personName,
      borrowBookName: borrowBookName,
      borrowBookQty: borrowBookQty,
      borrowBookPrice: borrowBookPrice,
    };
    BorrowBookData.push(borrowBookObj);
    saveBorrowBooksLocalStorage(BorrowBookData);
    clearAllBorrowBookInput();
    loadBorrowBook();
  } else {
    alert("Plz fill all details");
  }
});
