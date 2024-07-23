//Get data from new user

const rollEl = document.getElementById("roll");
const userNameEl = document.getElementById("username");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const cpasswordEl = document.getElementById("cpassword");
const numberEl = document.getElementById("number");
const dobEl = document.getElementById("dob");
const genderEl = document.getElementById("gender");
const cityEl = document.getElementById("city");
const pincodeEl = document.getElementById("pincode");
const addressEl = document.getElementById("address");
const termsEl = document.getElementById("terms");
const newsletterEl = document.getElementById("newsletter");







// Load user data

const tbody = document.querySelector("#usertable");
function loadUser() {
  tbody.innerHTML = "";
  userData.forEach((user, index) => {
    tbody.innerHTML += `<tr>
          <td>${index + 1}</td>
          <td>${user.roll}</td>
          <td>${user.userName}</td>
          <td>${user.email}</td>
          <td>${user.password}</td>
          <td>${user.cpassword}</td>
          <td>${user.number}</td>
          <td>${user.dob}</td>
          <td>${user.gender}</td>
          <td>${user.city}</td>
          <td>${user.pincode}</td>
          <td>${user.address}</td>
          <td>${user.terms}</td>
          <td>${user.newsletter}</td>
          <td><button class="btn btn-sm btn-primary">Edit</button></td>
          <td><button class="btn btn-sm btn-danger">Delete</button></td>
          </tr>`;
  });
}
loadUser();

// Save user data to localStorage...

function saveUsersLocalStorage() {
  localStorage.setItem("userData", userData);
  console.log("Data Saved to localStorage");
}

// Get user data from localStorage...

function getUserDetails() {
  if (localStorage.getItem("userData")) {
    userData = JSON.parse(localStorage.getItem("userData"));
  }
}
getUserDetails();



// ClearAll

function clearAll() {
  rollEl.value = "";
  userNameEl.value = "";
  emailEl.value = "";
  passwordEl.value = "";
  cpasswordEl.value = "";
  numberEl.value = "";
  dobEl.value = "";
  cityEl.value = "";
  pincodeEl.value = "";
  addressEl.value = "";
  termsEl.value = "";
  newsletterEl.value = "";
}
