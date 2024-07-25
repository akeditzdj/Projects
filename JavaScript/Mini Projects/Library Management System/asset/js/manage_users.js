//Get data from new user
const idEl = document.getElementById("id");
const rollEl = document.getElementById("roll");
const userNameEl = document.getElementById("userName");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const cpasswordEl = document.getElementById("cpassword");
const numberEl = document.getElementById("number");
const dobEl = document.getElementById("dob");
const cityEl = document.getElementById("city");
const pincodeEl = document.getElementById("pincode");
const addressEl = document.getElementById("address");
const termsEl = document.getElementById("terms");
const newsletterEl = document.getElementById("newsletter");

const maleEl = document.getElementById("male");
const femaleEl = document.getElementById("female");
const othersEl = document.getElementById("others");
let genderVal = "";
// Buttons
const btnAdd = document.getElementById("btnAdd");
const btnSave = document.getElementById("submit");
const btnClear = document.getElementById("clear");

// Modal title change

const modalTitle = document.getElementById("title");
const alertMsg = document.getElementById("alert");
// const mainModalTitle = document.getElementById("exampleModalLabel");

//Filter
const filterUser = document.getElementById("filterUser");

// Load data in table
const userTableBody = document.querySelector("#usertable");

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
  const gender = male.checked ? "Male" : female.checked ? "Female" : "Others";
  const city = cityEl.value;
  const pincode = pincodeEl.value;
  const address = addressEl.value;
  const terms = termsEl.checked ? "Agreed" : "Disagree";
  const newsletter = newsletterEl.checked ? "Agreed" : "Disagree";
  let userData = getUserDetails();
  const ModalStatus = new bootstrap.Modal(myModalMessage, {
    keyboard: false,
  });

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
            city: city,
            pincode: pincode,
            address: address,
            terms: terms,
            newsletter: newsletter,
          };
        } else {
          return user;
        }
      });
      saveUsersLocalStorage(updatedUsers);
      Modal.hide();
      ModalStatus.show();
      // mainModalTitle.innerHTML = "UPDATE USER";
      modalTitle.innerHTML = "User Update Status";
      alertMsg.innerHTML = "User Updated Successfully...";
      clearAll();
      loadUser();
    } else {
      //Add Tools
      const userObj = {
        id: Math.floor(1000 + Math.random() * 9000),
        roll: roll,
        userName: userName,
        email: email,
        password: password,
        cpassword: cpassword,
        number: number,
        dob: dob,
        gender: gender,
        city: city,
        pincode: pincode,
        address: address,
        terms: terms,
        newsletter: newsletter,
      };

      userData.push(userObj);
      ModalStatus.show();
      // mainModalTitle.innerHTML = "ADD NEW USER";
      modalTitle.innerHTML = "New User Registration";
      alertMsg.innerHTML = "User Added Successfully...";
      saveUsersLocalStorage(userData);
      clearAll();
      loadUser();
      counter();
    }
    Modal.hide();
  } else {
    ModalStatus.show();
    modalTitle.innerHTML = "Warning";
    alertMsg.innerHTML = "Plaese fill all the details";
  }
});

//Edit users
function editUsers(id) {
  Modal.show();

  let userData = getUserDetails();
  const selectedUsers = userData.filter((user) => user.id == id)[0];
  idEl.value = selectedUsers.id;
  rollEl.value = selectedUsers.roll;
  userNameEl.value = selectedUsers.userName;
  emailEl.value = selectedUsers.email;
  passwordEl.value = selectedUsers.password;
  cpasswordEl.value = selectedUsers.cpassword;
  numberEl.value = selectedUsers.number;
  dobEl.value = selectedUsers.dob;
  cityEl.value = selectedUsers.city;
  pincodeEl.value = selectedUsers.pincode;
  addressEl.value = selectedUsers.address;

  genderVal == "Male"
    ? (maleEl.checked = true)
    : genderVal == "Female"
    ? (femaleEl.checked = true)
    : (othersEl.checked = true);

  loadUser();
}

// Delete user

function deleteUser(id) {
  if (id) {
    userData = getUserDetails();
    let updatedUsers = userData.filter((user) => user.id != id);
    userData = updatedUsers;
    saveUsersLocalStorage(updatedUsers);
    msgModal.hide();
    loadUser();
    counter();
    setTimeout(deleteSuccessMessage, 200);
  }
}

// Delete Success message with timer

function deleteSuccessMessage() {
  const ModalStatus = new bootstrap.Modal(myModalMessage, {
    keyboard: false,
  });
  const modalTitle = document.getElementById("title");
  const alertMsg = document.getElementById("alert");
  ModalStatus.show();
  modalTitle.innerHTML = "Delete User";
  alertMsg.innerHTML = "User Deleted Successfully...";
}

// Custom modal delete with confirmation

const msgModal = new bootstrap.Modal(myModalDelete, {
  keyboard: false,
});

function showDeleteModal(callback) {
  msgModal.show();

  document.getElementById("yes").addEventListener("click", function () {
    callback(true);
    msgModal.hide();
  });

  document.getElementById("no").addEventListener("click", function () {
    callback(false);
    msgModal.hide();
  });
}

function deleteUserWithConfirmation(id) {
  showDeleteModal(function (confirmed) {
    if (confirmed) {
      deleteUser(id);
    }
  });
}

// Save user data to localStorage...

function saveUsersLocalStorage(userData) {
  localStorage.setItem("userData", JSON.stringify(userData));
  console.log("Data Saved to localStorage");
  loadUser();
}

// Get user data from localStorage...

function getUserDetails() {
  let data = [];
  if (localStorage.getItem("userData") !== null) {
    data = JSON.parse(localStorage.getItem("userData"));
  }
  return data;
}

// Load user data

function loadUser(isForSearch = 0, filterUser = []) {
  let userData = [];
  if (isForSearch == 0) {
    userData = getUserDetails();
  } else {
    userData = filterUser;
  }

  userTableBody.innerHTML = "";
  userData.forEach((user, index) => {
    userTableBody.innerHTML += `<tr>
          <td>${index + 1}</td>
          <td>${user.id}</td>
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
          <td><button id="btnEdit" onclick="editUsers(${
            user.id
          })" class="btn btn-sm btn-primary">Edit</button></td>
          <td><button id="btnDel" onclick="deleteUserWithConfirmation(${
            user.id
          })" class="btn btn-sm btn-danger">Delete</button></td>
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
}

btnClear.addEventListener("click", clearAll);

//Filter users
filterUser.addEventListener("input", function () {
  const searchQuery = this.value.toLowerCase();
  const userData = getUserDetails();
  const filterUser = userData.filter(
    (user) =>
      user.userName.toLowerCase().includes(searchQuery) ||
      user.number.toLowerCase().includes(searchQuery)
  );
  loadUser(1, filterUser);
});

function reloadPage() {
  location.reload();
}

// Table row count and show on dashboard
function counter() {
  const rowCount = document.getElementById("userReg").rows.length - 1;
  const totalUser = document.getElementById("totalUser");
  totalUser.innerHTML = rowCount;
  const totalStaff = document.getElementById("totalStaff");
  const totalStudent = document.getElementById("totalStudent");
  const totalMale = document.getElementById("totalMale");
  const totalFemale = document.getElementById("totalFemale");
  const totalOthers = document.getElementById("totalOthers");

  const userData = getUserDetails();
  let staff = 0;
  let student = 0;
  let male = 0;
  let female = 0;
  let others = 0;

  userData.forEach((user) => {
    user.roll;
    user.gender;
    if (user.roll == "Staff") {
      staff++;
    }
    if (user.roll == "Student") {
      student++;
    }
    if (user.gender == "Male") {
      male++;
    }
    if (user.gender == "Female") {
      female++;
    }
    if (user.gender == "Others") {
      others++;
    }

    totalStaff.innerHTML = staff;
    totalStudent.innerHTML = student;
    totalMale.innerHTML = "Male" + " - " + male;
    totalFemale.innerHTML = "Female" + " - " + female;
    totalOthers.innerHTML = "Others" + " - " + others;
  });
}
counter();

// function reload() {
//   Modal.show();
// }
// reload();
