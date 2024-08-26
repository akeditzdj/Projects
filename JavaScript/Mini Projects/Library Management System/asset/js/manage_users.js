// user details
let users = [
  {
    id: 1653,
    role: "Staff",
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
    role: "Student",
    userName: "Ram Kumar",
    email: "ram@gmail.com",
    password: "Ajith195@",
    cpassword: "Ajith195@",
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
    role: "Student",
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
    role: "Student",
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
    role: "Student",
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
const roleEl = document.getElementById("role");
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
const btnUserData = document.getElementById("btnUserData");
const btnTransaction = document.getElementById("btnTransaction");
const btnChart = document.getElementById("btnChart");
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
  const role = roleEl.value;
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
  if (role === "") {
    roleEl.focus();
    setError(roleEl, "Please select your role");
    return;
  } else {
    setSuccess(roleEl);
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
          role: role,
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
    counter();
    loadUserDetails();
    clearAll();
  } else {
    //Add users
    const userObj = {
      id: Math.floor(1000 + Math.random() * 9000),
      role: role,
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
    loadUser();
    counter();
    loadUserDetails();
    clearAll();
    customModal("New User Registration", "User Added Successfully...");
  }
  bsTab.show();
});
//Edit users
function editUsers(id) {
  mainModal.show();
  const selectedUsers = users.filter((user) => user.id == id)[0];
  idEl.value = selectedUsers.id;
  roleEl.value = selectedUsers.role;
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
  <td>${user.role}</td>
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
  roleEl.value = "";
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

// Table row count and show on dashboard

console.log(users);
// counter();
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
  console.log(users);

  users.forEach((user) => {
    if (user.role === "Staff") {
      staff++;
    } else if (user.role === "Student") {
      student++;
    }

    if (user.gender === "Male") {
      male++;
    } else if (user.gender === "Female") {
      female++;
    } else if (user.gender === "Others") {
      others++;
    }
  });
  // Update the counts
  totalStaff.innerHTML = staff;
  totalStudent.innerHTML = student;
  totalMale.innerHTML = "Male - " + male;
  totalFemale.innerHTML = "Female - " + female;
  totalOthers.innerHTML = "Others - " + others;
}

// Call the function
counter();

// Login page

btnLogin.addEventListener("click", function () {
  function login() {
    let loginEmailEl = document.getElementById("loginEmail");
    let loginPasswordEl = document.getElementById("loginPassword");
    let loginEmail = loginEmailEl.value;
    let loginPassword = loginPasswordEl.value;
    let role = "Staff";

    // Function to validate user credentials
    function validateCredentials(email, password) {
      const user = users.find((user) => user.email === email);
      if (user && user.password === password) {
        return user; // Return the user object to get the role
      }
      return null;
    }

    // Check email field
    if (loginEmail === "") {
      loginEmailEl.focus();
      setError(loginEmailEl, "Please enter your email");
      return;
    } else {
      const emailFormat =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailFormat.test(loginEmail)) {
        setSuccess(loginEmailEl);
      } else {
        loginEmailEl.focus();
        setError(loginEmailEl, "Please enter a valid email");
        return;
      }
    }

    // Check password field
    if (loginPassword === "") {
      loginPasswordEl.focus();
      setError(loginPasswordEl, "Please enter your password");
      return;
    } else {
      setSuccess(loginPasswordEl);
    }

    // Validate credentials and check role
    const user = validateCredentials(loginEmail, loginPassword);
    if (user) {
      if (user.role === role) {
        loginEmailEl.value = "";
        loginPasswordEl.value = "";
        mainModal.hide();
        btnUserData.style.display = "block";
        btnTransaction.style.display = "block";
        btnChart.style.display = "block";
        customModal("Staff Login", "Staff Login Successful...");
      } else {
        loginEmailEl.value = "";
        loginPasswordEl.value = "";
        mainModal.hide();
        btnUserData.style.display = "none";
        btnTransaction.style.display = "none";
        btnChart.style.display = "none";
        customModal("User Login", "User Login Successful...");
      }
    } else {
      customModal("Warning", "User details do not match");
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
  const modal = document.querySelector("#customModal");
  let loadModal = `
   <div class="modal fade" id="myCustomModal">
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

// Terms and Condition
function termsAndCondition() {
  customModal(
    `<h3 class="text-dark fw-bold fst-italic">Terms and Conditions</h3>`,

    `  <div class="p-2">                       <h5> 1. Introduction </h5>
                               <p> Welcome to Library Management System. These Terms and Conditions govern your use of our website and services. By accessing or using our Website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Website.</p>

                               <h5>2. Services</h5>

                               <p>Library Management System provides a platform for managing library resources, including cataloging books, managing user accounts, and facilitating the borrowing and returning of library materials.</p>

                               <h5> 3. User Accounts</h5>

                               <p> Registration: To access certain features of our Website, you may need to register for an account. You agree to provide accurate and complete information during registration and to update your information as necessary.
                                Responsibility: You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                              <h5> 4. Use of Website</h5>

                               <p> Permitted Use: You agree to use the Website only for lawful purposes and in accordance with these Terms. You shall not use the Website to engage in any illegal or unauthorized activities.
                                Prohibited Activities: You agree not to engage in activities such as hacking, data scraping, or any other form of unauthorized access or use of the Website.</p>
                               <h5>5. Intellectual Property</h5>

                              <p>Ownership: All content, including text, graphics, logos, and software on the Website, is the property of [Your Library Management System] or its licensors and is protected by intellectual property laws.
                                Restrictions: You may not reproduce, distribute, or create derivative works based on the content without our express written permission.</p>
                              <h5> 6. Privacy Policy</h5>

                               <p> Your use of the Website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using the Website, you consent to the practices described in the Privacy Policy.</p>

                               <h5>7. Limitation of Liability</h5>

                              <p> Disclaimer: The Website is provided "as is" without any warranties, express or implied. We do not guarantee that the Website will be available at all times or that it will be free from errors or viruses.
                                Limitation: In no event shall [Your Library Management System] be liable for any indirect, incidental, or consequential damages arising out of or in connection with your use of the Website.</p>
                              <h5> 8. Changes to Terms</h5>

                              <p>  We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on the Website. Your continued use of the Website after any changes constitutes your acceptance of the updated Terms.</p>

                               <h5>9. Termination</h5>

                              <p> We reserve the right to suspend or terminate your access to the Website at any time, with or without cause, if we believe you have violated these Terms.</p>

                               <h5>10. Governing Law</h5>

                               <p> These Terms shall be governed by and construed in accordance with the laws of authority . Any disputes arising out of or relating to these Terms or the Website shall be subject to the exclusive jurisdiction of the courts in authority .</p>

                               <h5>11. Contact Us</h5>

                              <p>  If you have any questions about these Terms, please contact us at <a target="_blank" href="https://akeditz.com">www.akeditz.com</a></p>
                              </div>
`
  );
}
// Window refresh
// function reload() {
//   mainModal.show();
// }
// reload();
