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

// userData = getUserDetails();

// userData.forEach((user) => {
//   const userID = user.id;
//   userID;
// });

// console.log(userID);

// userID.forEach(function (item) {
//   let userIdList = document.createElement("option");
//   userIdList.list = item;
//   userIdList.text = item;
//   city.appendChild(userIdList);
// });
