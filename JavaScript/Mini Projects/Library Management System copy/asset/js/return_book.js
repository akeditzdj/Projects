// // Get Book borrow inputs
// const bookRegIdEl = document.getElementById("bookRegId");
// const personIdEl = document.getElementById("personId");
// const personNameEl = document.getElementById("personName");
// const borrowDateEl = document.getElementById("borrowDate");
// const borrowBookNameEl = document.getElementById("borrowBookName");
// const borrowBookQtyEl = document.getElementById("borrowBookQty");
// const borrowBookPriceEl = document.getElementById("borrowBookPrice");

// // Get Book borrow bUttons

// const bookBorrowClear = document.getElementById("bookBorrowClear");
// const bookBorrowSave = document.getElementById("bookBorrowSave");
// // const btnBorrowBook = document.getElementById("btnBorrowBook");

// // Add new book Borrow
// bookBorrowSave.addEventListener("click", function () {
//    const bookRegId = bookRegIdEl.value;
//   const personId = personIdEl.value;
//   const personName = personNameEl.value;
//   const borrowBookName = borrowBookNameEl.value;
//   const borrowBookQty = borrowBookQtyEl.value;
//   const borrowBookPrice = Number(borrowBookPriceEl.value);

//   //   let bookBorrowData = getBookBorrowDetails();

//   if (bookRegId&&
//     personId &&
//     personName &&
//     borrowBookName &&
//     borrowBookQty &&
//     borrowBookPrice
//   ) {
//     const borrowBookObj = {
//       personId: personId,
//       personName: personName,
//       borrowBookName: borrowBookName,
//       borrowBookQty: borrowBookQty,
//       borrowBookPrice: borrowBookPrice,
//     };
//     borrowBookData.push(borrowBookObj);
//     saveReturnBook(borrowBookData);
//     clearAllBorrowBookInput();
//     loadBorrowBook();
//   } else {
//     alert("Plz fill all details");
//   }
// });



// // Save user data to localStorage...

// function saveReturnBook(borrowBookData) {
//   localStorage.setItem("borrowBookData", JSON.stringify(borrowBookData));
//   console.log("Data Saved to localStorage");
//   // loadBorrowBook();
// }

// // Get user data from localStorage...

// function getBorrowBookDetails() {
//   let br_BookData = [];
//   if (localStorage.getItem("borrowBookData") !== null) {
//      br_BookData = JSON.parse(localStorage.getItem("borrowBookData"));
//   }
//   return br_BookData;
// }