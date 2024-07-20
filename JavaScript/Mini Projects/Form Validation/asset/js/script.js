const form = document.getElementById("form");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const confirm_PasswordElement = document.getElementById("confirm-password");
const f_NameElement = document.getElementById("f-name");
const l_NameElement = document.getElementById("l-name");
const gederElement = document.querySelectorAll("gender");
const countryElement = document.getElementById("country");
const termsElement = document.getElementById("terms");
const newsLetterElement = document.getElementById("newsletter");
const btnSubmit = document.getElementById("submit");

btnSubmit.addEventListener("click", function (e) {
  const email = emailElement.value.trim();
  const password = passwordElement.value.trim();
  const cpassword = confirm_PasswordElement.value.trim();
  const fName = f_NameElement.value.trim();
  const lName = l_NameElement.value.trim();
  const gender = male.checked ? "Male" : female.checked ? "Female" : "Others";
  const country = countryElement.value;
  const terms = termsElement.value;
  const newsletter = newsLetterElement.value;

  e.preventDefault();

  if (email === "") {
    setError(emailElement, "Please enter your email");
    return;
  } else {
    const emailformat =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailformat.test(email)) {
      setSuccess(emailElement);
    } else {
      setError(emailElement, "Please enter valid email");
      return;
    }
    setSuccess(emailElement);
  }

  if (password === "") {
    setError(passwordElement, "Please enter your password");
    return;
  } else {
    // const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    // const upperCase = /[A-Z]/g;
    // const lowerCase = /[a-z]/g;
    // const number = /[0-9]/g;
    // const symbol = /^(?=.*[!@#$%^&*])$/;

    if (password.length < 8) {
      setError(passwordElement, "Password should be at least 8 characters");
      return
    } else if (password.length > 16) {
      setError(passwordElement, "Password should not exceed 16 characters");
        return;
    } else if (!/[A-Z]/.test(password)) {
      setError(passwordElement, "Password should have at least 1 uppercase");
        return;
    } else if (!/[a-z]/.test(password)) {
      setError(passwordElement, "Password should have at least 1 lowercase");
        return;
    } else if (!/[0-9]/.test(password)) {
      setError(passwordElement, "Password should have at least 1 number");
        return;
    } else if (!/(?=.[$#%£&§@])/.test(password)) {
      setError(
        passwordElement,
        "Password should have at least 1 special character"
      );
        return;
    } else {
      setSuccess(passwordElement);
    }
  }

  if (cpassword === "") {
    setError(confirm_PasswordElement, "Please enter your confirm password");
    return
  } else {
     if (cpassword != password) {
      setError(confirm_PasswordElement, "Confirm password dose not match");
      return;
    } else
    setSuccess(confirm_PasswordElement);
  }


  if (fName === "") {
    setError(f_NameElement, "First name is required");
    return
  } else {
    setSuccess(f_NameElement);
  }

  if (lName === "") {
    setError(l_NameElement, "Last name is required");
    return
  } else {
    setSuccess(l_NameElement);
  }

  if (country === "") {
    setError(countryElement, "Please select your country");
    return
  } else {
    setSuccess(countryElement);
  }
  // if (terms!= (terms.checked)) {

  // } else {

  // }
});

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

//password show/hide
let password_svg = document.querySelector(".pass");
let password_input = document.querySelector("#password");

password_svg.addEventListener("click", function () {
  if (password_input.getAttribute("type") == "password") {
    password_input.setAttribute("type", "text");
    password_svg.classList.remove("fa-eye");
    password_svg.classList.add("fa-eye-slash");
  } else {
    password_input.setAttribute("type", "password");
    password_svg.classList.add("fa-eye");
    password_svg.classList.remove("fa-eye-slash");
  }
});

let c_password_svg = document.querySelector(".c-pass");
let c_password_input = document.querySelector("#confirm-password");
c_password_svg.addEventListener("click", function () {
  if (c_password_input.getAttribute("type") == "password") {
    c_password_input.setAttribute("type", "text");
    c_password_svg.classList.remove("fa-eye");
    c_password_svg.classList.add("fa-eye-slash");
  } else {
    c_password_input.setAttribute("type", "password");
    c_password_svg.classList.add("fa-eye");
    c_password_svg.classList.remove("fa-eye-slash");
  }
});
