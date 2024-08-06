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

let userData = getUserDetails();

let userIdList=userData.map((user)=> user.id)

let personId = document.getElementById("personId");

userIdList.forEach(function (item) {
  let userId = document.createElement("option");
  userId.list = item;
  userId.text = item;
  personId.appendChild(userId);
});
