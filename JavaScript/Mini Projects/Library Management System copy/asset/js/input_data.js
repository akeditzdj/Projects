const districtList = [
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kanchipuram",
  "Kanyakumari",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivaganga",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thoothukudi (Tuticorin)",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tirupathur",
  "Tiruppur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruvarur",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
];

districtList.forEach(function (item) {
  let district = document.createElement("option");
  district.list = item;
  district.text = item;
  city.appendChild(district);
});

//Get user id from the userData array

 userData = getUserDetails();

let UserId = userData.map(({ id }) => id);

UserId.forEach(function (item) {
  let userIdList = document.createElement("option");
  userIdList.list = item;
  userIdList.text = item;
  personId.appendChild(userIdList);
});

UserId.forEach(function (item) {
  let loginUserserIdList = document.createElement("option");
  loginUserserIdList.list = item;
  loginUserserIdList.text = item;
  loginPersonId.appendChild(loginUserserIdList);
});



bookData = getBookDetails();
let bookId = bookData.map(({ id }) => id);

bookId.forEach(function (item) {
  let bookIdList = document.createElement("option");
  bookIdList.list = item;
  bookIdList.text = item;
  bookRegId.appendChild(bookIdList);
});
