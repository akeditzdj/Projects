// user details
let users = [
  {
    id: 1653,
    roll: "Student",
    userName: "Ajith Kumar",
    email: "ajithkumar@gmail.com",
    password: "Ajith195@",
    cpassword: "Ajith195@",
    number: "9786000352",
    dob: "2012-04-09",
    gender: "Male",
    city: "Pudukkottai",
    pincode: "123456",
    address: "Sint dolor tempora ",
    terms: "Agreed",
    newsletter: "Agreed",
  },
  {
    id: 1733,
    roll: "Staff",
    userName: "Ram Kumar",
    email: "hafyzi@mailinator.com",
    password: "Pa$$w0rd!",
    cpassword: "Pa$$w0rd!",
    number: "9786000352",
    dob: "2012-04-09",
    gender: "Male",
    city: "Thoothukudi (Tuticorin)",
    pincode: "123456",
    address: "Sint dolor tempora ",
    terms: "Agreed",
    newsletter: "Agreed",
  },
  {
    id: 9094,
    roll: "Staff",
    userName: "Senthil",
    email: "volygasowa@mailinator.com",
    password: "Pa$$w0rd!",
    cpassword: "Pa$$w0rd!",
    number: "1234567890",
    dob: "2010-03-14",
    gender: "Female",
    city: "Tirunelveli",
    pincode: "123456",
    address: "Sunt quae sunt cill",
    terms: "Agreed",
    newsletter: "Agreed",
  },
  {
    id: 7301,
    roll: "Student",
    userName: "Balamurugan",
    email: "litu@mailinator.com",
    password: "Pa$$w0rd!",
    cpassword: "Pa$$w0rd!",
    number: "8486516511",
    dob: "1990-07-09",
    gender: "Others",
    city: "Ramanathapuram",
    pincode: "646316",
    address: "Nisi non sit sint l",
    terms: "Agreed",
    newsletter: "Agreed",
  },
  {
    id: 7623,
    roll: "Staff",
    userName: "Syamlal",
    email: "henykago@mailinator.com",
    password: "Pa$$w0rd!",
    cpassword: "Pa$$w0rd!",
    number: "6616516515",
    dob: "2005-11-10",
    gender: "Female",
    city: "Kanyakumari",
    pincode: "212151",
    address: "Et eum est debitis ",
    terms: "Agreed",
    newsletter: "Disagree",
  },
];
//Get data from new user
//Get Registration inputs
const formEl = document.querySelector("form");
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
//Get Login inputs
let loginRollEl = document.getElementById("loginRoll");
let loginEmailEl = document.getElementById("loginEmail");
let loginPasswordEl = document.getElementById("loginPassword");
// Buttons
const btnAdd = document.getElementById("btnAdd");
const btnSave = document.getElementById("submit");
const btnClear = document.getElementById("clear");
const btnLogin = document.getElementById("btnLogin");
//Filter
const filterUser = document.getElementById("filterUser");
// Load data in table
const userTableBody = document.querySelector("#usertable");
// Modal open and hide
const mainModal = new bootstrap.Modal(exampleModal, {
  keyboard: false,
});
const modalDelete = new bootstrap.Modal(deleteModal, {
  keyboard: false,
});
btnAdd.addEventListener("click", function () {
  mainModal.show();
  clearAll();
});
// Show and hide tab
const bsTab = new bootstrap.Tab("#login-tab");
// form validation error message
function setError(element, message) {
  const formGroup = element.parentElement;
  const errorElement = formGroup.querySelector(".error");
  errorElement.innerHTML = message;
  formGroup.classList.add("error");
  formGroup.classList.remove("success");
}
function setSuccess(element) {
  const formGroup = element.parentElement;
  const errorElement = formGroup.querySelector(".error");
  errorElement.innerText = "";
  formGroup.classList.add("success");
  formGroup.classList.remove("error");
}
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
  // Form validation
  if (roll === "") {
    rollEl.focus();
    setError(rollEl, "Please select your roll");
    return;
  } else {
    setSuccess(rollEl);
  }
  if (userName === "") {
    userNameEl.focus();
    setError(userNameEl, "Name is required");
    return;
  } else {
    if (userName.length < 3) {
      userNameEl.focus();
      setError(userNameEl, "Name should have atleast 3 charecters");
      return;
    }
    setSuccess(userNameEl);
  }
  if (email === "") {
    emailEl.focus();
    setError(emailEl, "Please enter your email");
    return;
  } else {
    const emailformat =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailformat.test(email)) {
      setSuccess(emailEl);
    } else {
      emailEl.focus();
      setError(emailEl, "Please enter valid email");
      return;
    }
    setSuccess(emailEl);
  }
  if (password === "") {
    passwordEl.focus();
    setError(passwordEl, "Please enter your password");
    return;
  } else {
    if (password.length < 8) {
      passwordEl.focus();
      setError(passwordEl, "Password should be at least 8 characters");
      return;
    } else if (password.length > 16) {
      passwordEl.focus();
      setError(passwordEl, "Password should not exceed 16 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      passwordEl.focus();
      setError(passwordEl, "Password should have at least 1 uppercase");
      return;
    } else if (!/[a-z]/.test(password)) {
      passwordEl.focus();
      setError(passwordEl, "Password should have at least 1 lowercase");
      return;
    } else if (!/[0-9]/.test(password)) {
      passwordEl.focus();
      setError(passwordEl, "Password should have at least 1 number");
      return;
    } else if (!/(?=.[$#%£&§@])/.test(password)) {
      passwordEl.focus();
      setError(passwordEl, "Password should have at least 1 special character");
      return;
    } else {
      setSuccess(passwordEl);
    }
  }
  if (cpassword === "") {
    cpasswordEl.focus();
    setError(cpasswordEl, "Please enter your confirm password");
    return;
  } else {
    if (cpassword != password) {
      cpasswordEl.focus();
      setError(cpasswordEl, "Confirm password dose not match");
      return;
    } else {
      setSuccess(cpasswordEl);
    }
  }
  // let numberReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (number === "") {
    numberEl.focus();
    setError(numberEl, "Please enter your mobile number");
    return;
  } else {
    if (number.length != 10) {
      numberEl.focus();
      setError(numberEl, "Please 10 digits number only");
      return;
    }
    if (isNaN(number)) {
      numberEl.focus();
      setError(numberEl, "Please enter number only");
      return;
    } else {
      setSuccess(numberEl);
    }
  }
  if (dob === "") {
    dobEl.focus();
    setError(dobEl, "Please enter your date of birth");
    return;
  } else {
    setSuccess(dobEl);
  }
  if (city === "") {
    cityEl.focus();
    setError(cityEl, "Please select your country");
    return;
  } else {
    setSuccess(cityEl);
  }
  if (pincode === "") {
    pincodeEl.focus();
    setError(pincodeEl, "Please enter your pin code");
    return;
  } else {
    if (pincode.length != 6) {
      pincodeEl.focus();
      setError(pincodeEl, "Please enter 6 digits pin code");
      return;
    }
    if (isNaN(pincode)) {
      pincodeEl.focus();
      setError(pincodeEl, "Please enter number only");
      return;
    } else {
      setSuccess(pincodeEl);
    }
  }
  if (address === "") {
    addressEl.focus();
    setError(addressEl, "Please enter your address");
    return;
  } else {
    setSuccess(addressEl);
  }
  if (id) {
    //Update users
    let updatedUsers = users.map((user) => {
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
    users = updatedUsers;
    mainModal.hide();
    customModal("User Update Status", "User Updated Successfully...");
    loadUser();
    clearAll();
  } else {
    //Add users
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
    users.push(userObj);
    clearAll();
    loadUser();
    counter();
    customModal("New User Registration", "User Added Successfully...");
  }
  bsTab.show();
});
//Edit users
function editUsers(id) {
  mainModal.show();
  const selectedUsers = users.filter((user) => user.id == id)[0];
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
  genderVal === "Male"
    ? (maleEl.checked = true)
    : genderVal === "Female"
    ? (femaleEl.checked = true)
    : (othersEl.checked = true);
  loadUser();
}
// Delete user
function deleteUser(id) {
  if (id) {
    let updatedUsers = users.filter((user) => user.id != id);
    users = updatedUsers;
    loadUser();
    counter();
    setTimeout(deleteSuccessMessage, 200);
  }
}
// Delete Success message with timer
function deleteSuccessMessage() {
  customModal("Delete User", "User Deleted Successfully...");
}
// Custom modal delete with confirmation
function showDeleteModalForConfirm(callback) {
  modalDelete.show();
  document.getElementById("yes").addEventListener("click", function () {
    callback(true);
    modalDelete.hide();
  });
  document.getElementById("no").addEventListener("click", function () {
    callback(false);
    modalDelete.hide();
  });
}
function deleteUserWithConfirmation(id) {
  showDeleteModalForConfirm(function (confirmed) {
    if (confirmed) {
      deleteUser(id);
    }
  });
}
// Load user data
function loadUser(isForSearch = 0, filterUser = []) {
  if (isForSearch == 0) {
    userData = users;
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
  <td>${user.number}</td>
  <td>${user.dob}</td>
  <td>${user.gender}</td>
  <td>${user.city}</td>
  <td>${user.pincode}</td>
  <td>${user.address}</td>
  <td>${user.terms}</td>
  <td>${user.newsletter}</td>
  <td><button onclick="editUsers(${
    user.id
  })" class="btn btn-sm btn-primary btnDel">Edit</button></td>
  <td><button  onclick="deleteUserWithConfirmation(${
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
  const filterUser = users.filter(
    (user) =>
      user.userName.toLowerCase().includes(searchQuery) ||
      user.id.toString().includes(searchQuery)
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
  let staff = 0;
  let student = 0;
  let male = 0;
  let female = 0;
  let others = 0;
  users.forEach((user) => {
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
// Window refresh
function reload() {
  mainModal.show();
}
reload();
// Login page
btnLogin.addEventListener("click", function () {
  function login() {
    let loginEmailEl = document.getElementById("loginEmail");
    let loginPasswordEl = document.getElementById("loginPassword");
    let loginEmail = loginEmailEl.value;
    let loginPassword = loginPasswordEl.value;
    function validateCredentials(loginEmail, loginPassword) {
      const user = users.find((user) => user.email === loginEmail);
      if (user && user.password === loginPassword) {
        return true;
      }
      return false;
    }
    if (loginEmail === "") {
      loginEmailEl.focus();
      setError(loginEmailEl, "Please enter your email");
      return;
    } else {
      const emailformat =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailformat.test(loginEmail)) {
        setSuccess(loginEmailEl);
      } else {
        loginEmailEl.focus();
        setError(loginEmailEl, "Please enter valid email");
        return;
      }
      setSuccess(loginEmailEl);
    }
    if (loginPassword === "") {
      loginPasswordEl.focus();
      setError(loginPasswordEl, "Please enter your password");
      return;
    } else {
      setSuccess(loginPasswordEl);
    }
    if (validateCredentials(loginEmail, loginPassword)) {
      loginEmailEl = "";
      loginPasswordEl = "";
      mainModal.hide();
      customModal("User Login", "User Login Successfull...");
      btnAdd.style.display = "none";
    } else {
      customModal("Warning", "User details does not match");
      setError(loginEmailEl, "");
      setError(loginPasswordEl, "");
    }
  }
  login();
  loadUser();
});
// password show/hide
function passwordShowAndHide() {
  const passwordInputs = document.querySelectorAll(".password-text");
  passwordInputs.forEach((password) => {
    const eye = password.parentElement.querySelector("i");
    eye.addEventListener("click", function () {
      password.getAttribute("type") === "password"
        ? password.setAttribute("type", "text")
        : password.setAttribute("type", "password");
      eye.getAttribute("class") === "bi-eye-slash"
        ? eye.setAttribute("class", "bi-eye")
        : eye.setAttribute("class", "bi-eye-slash");
    });
  });
}
passwordShowAndHide();
// custom modal dialog box
function customModal(title, content) {
  const modal = document.getElementById("modal");
  let loadModal = `
   <div class="modal fade" id="myCustomModal" >
   <div class="modal-dialog">
       <div class="modal-content">
           <div class="modal-header bg-white ">
               <h5 id="title" class="modal-title text-dark">${title}</h5>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
         <p>${content}</p></div>
           <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
           </div>
       </div>
   </div>
</div>`;
  modal.innerHTML = loadModal;
  // Modal open and hide
  const modalDialog = new bootstrap.Modal(myCustomModal, {
    keyboard: false,
  });
  modalDialog.show();
}
