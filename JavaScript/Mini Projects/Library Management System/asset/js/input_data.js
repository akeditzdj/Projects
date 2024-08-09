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

let userData = users;

let userIdList = userData.map((user) => user);

let personId = document.getElementById("personId");

personId.innerHTML = ` <option value="">Select your User </option>`;

userIdList.forEach((user) => {
  personId.innerHTML += `<option value='${user.id}'>${user.userName} (${user.id})</option>`;
});
