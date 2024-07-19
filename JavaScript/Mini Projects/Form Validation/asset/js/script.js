const form = document.getElementById("form");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const confirm_PasswordElement = document.getElementById("confirm-password");
const f_NameElement = document.getElementById("f-name");
const l_NameElement = document.getElementById("l-name");
// const gederElement = document.querySelectorAll("gender");
const countryElement = document.getElementById("country");
const termsElement = document.getElementById("terms");
const newsLetterElement = document.getElementById("newsletter");
const btnSubmit = document.getElementById("submit");

btnSubmit.addEventListener("click", function () {
  const email = emailElement.value.trim();
  const password = passwordElement.value.trim();
  const cpassword = confirm_PasswordElement.value.trim();
  const fName = f_NameElement.value.trim();
  const lName = l_NameElement.value.trim();
  // const gender = male.checked ? "Male" : female.checked ? "Female" : "Others";
  const country = countryElement.value;
  //   const terms = termsElement.value;
  //   const newsletter = newsLetterElement.value;

  //  e.preventDefault();

  if (email === "") {
    setError(email, "Please enter your email");
  } else {
    setSuccess(emailElement, "Looks Good");
    console.log(email);
  }

  // if (password === "") {
  //   setError(passwordElement, "Please enter your email");
  // } else {
  //   setSuccess(passwordElement, "Looks Good");
  //   console.log(password);
  // }

  // if (cpassword === "") {
  //   setError(confirm_PasswordElement, "Please enter your email");
  // } else {
  //   setSuccess(confirm_PasswordElement, "Looks Good");
  //   console.log(cpassword);
  // }

  // if (fName === "") {
  //   setError(f_NameElement, "Please enter your email");
  // } else {
  //   setSuccess(f_NameElement, "Looks Good");
  //   console.log(fName);
  // }

  // if (lName === "") {
  //   setError(l_NameElement, "Please enter your email");
  // } else {
  //   setSuccess(l_NameElement, "Looks Good");
  //   console.log(lName);
  // }

  // if (country === "") {
  //   setError(countryElement, "Please enter your email");
  // } else {
  //   setSuccess(countryElement, "Looks Good");
  //   console.log(country);
  // }

  //   console.log(email);
  //   console.log(password);
  //   console.log(cpassword);
  //   console.log(fName);
  //   console.log(lName);
  //   console.log(gender);
  //   console.log(country);
  //   console.log(terms);
  //   console.log(newsletter);

});


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
