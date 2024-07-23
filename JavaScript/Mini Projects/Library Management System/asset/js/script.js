//Get data from new user
const idEl = document.getElementById("id");
const rollEl = document.getElementById("roll");
const userNameEl = document.getElementById("userName");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const cpasswordEl = document.getElementById("cpassword");
const numberEl = document.getElementById("number");
const dobEl = document.getElementById("dob");
const maleEl = document.getElementById("male");
const cityEl = document.getElementById("city");
const pincodeEl = document.getElementById("pincode");
const addressEl = document.getElementById("address");
const termsEl = document.getElementById("terms");
const newsletterEl = document.getElementById("newsletter");

// Buttons 
const btnAdd = document.getElementById("btnAdd");
const btnSave = document.getElementById("submit");
const btnClear = document.getElementById("clear");

// Load data in table
const tbody = document.getElementById("usertable");

// Modal open and hide
const Modal = new bootstrap.Modal(exampleModal, {
  keyboard: false,
});

btnAdd.addEventListener("click", function () {
  Modal.show();
  clearAll();
});

// Add new user
btnSave.addEventListener("click", function () {
  const id = idEl.value;
  const roll = rollEl.value;
  const userName = userNameEl.value;
  const email = emailEl.value;
  const password = passwordEl.value;
  const cpassword = cpasswordEl.value;
  const number = numberEl.value;
  const dob = dobEl.value;
  const gender = maleEl.checked ? "Male" : "Female";
  const city = cityEl.value;
  const pincode = pincodeEl.value;
  const address = addressEl.value;
  const terms = termsEl.value;
  const newsletter = newsletterEl.value;
  let userData = getUserDetails();

  if (
    roll &&
    userName &&
    email &&
    password &&
    cpassword &&
    number &&
    dob &&
    gender &&
    city &&
    pincode &&
    address &&
    terms &&
    newsletter
  ) {

    console.log(roll)
    console.log(userName);
    console.log(email);
    console.log(password);
    console.log(cpassword);
    console.log(number);
    console.log(dob);
    console.log(gender);
    console.log(pincode);
    console.log(address);
    console.log(terms);
    console.log(newsletter);
    if (id) {
      //Update tools
      let updatedUsers = userData.map((user) => {
        if (user.id == id) {
          return {
            ...user,
            roll: roll,
            userName: userName,
            email: email,
            password: password,
            cpassword: cpassword,
            number: number,
            dob: dob,
            gender: gender,
            pincode: pincode,
            address: address,
            terms: terms,
            unit: unit,
            newsletter: newsletter,
          };
        } else {
          return user;
        }
      });
      saveUsersLocalStorage(updatedUsers);
      Modal.hide();
      clearAll();
      loadUser();
    } else {
      //Add Tools
      const userObj = {
        id: Date.now(),
        roll: roll,
        userName: userName,
        email: email,
        password: password,
        cpassword: cpassword,
        number: number,
        dob: dob,
        gender: gender,
        pincode: pincode,
        address: address,
        terms: terms,
        newsletter: newsletter,
      };

      userData.push(userObj);
      console.log("User added succesfully");
      saveUsersLocalStorage(userData);
      clearAll();
      loadUser();
    }
    Modal.hide();
  } else {
    alert("Plaese fill all the details");
  }
});

// Save user data to localStorage...

function saveUsersLocalStorage() {
  localStorage.setItem("userData", JSON.stringify(userData));
  console.log("Data Saved to localStorage");
}

// Get user data from localStorage...

function getUserDetails() {
  if (localStorage.getItem("userData")) {
    userData = JSON.parse(localStorage.getItem("userData"));
  }
}

// Load user data

function loadUser() {
  let userData = [];
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

btnClear.addEventListener("click", clearAll);
