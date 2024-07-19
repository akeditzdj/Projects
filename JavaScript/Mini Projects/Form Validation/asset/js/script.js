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

btnSubmit.addEventListener("click", function () {
  const email = emailElement.value.trim();
  const password = passwordElement.value.trim();
  const cpassword = confirm_PasswordElement.value.trim();
  const fName = f_NameElement.value.trim();
  const lName = l_NameElement.value.trim();
  const gender = male.checked ? "Male" : female.checked ? "Female" : "Others";
  const country = countryElement.value;
  const terms = termsElement.value;
  const newsletter = newsLetterElement.value;


  if (email === "") {
    setError(emailElement, "Please enter your email");
   
  } else {
    setSuccess(emailElement, "Looks Good");
    
  }

  if (password === "") {
    setError(passwordElement, "Please enter your password");
      
  } else {
    setSuccess(passwordElement, "Looks Good");
    
  }

  if (cpassword === "") {
    setError(confirm_PasswordElement, "Please enter your confirm password");
     
  } else {
    setSuccess(confirm_PasswordElement, "Looks Good");
    
  }

  if (fName === "") {
    setError(f_NameElement, "Please enter your first name");
    
  } else {
    setSuccess(f_NameElement, "Looks Good");
    
  }

  if (lName === "") {
    setError(l_NameElement, "Please enter your last name");
     
  } else {
    setSuccess(l_NameElement, "Looks Good");
    
  }

  if (country === "") {
    setError(countryElement, "Please select your country");
     
  } else {
    setSuccess(countryElement, "Looks Good");
    
  }
    if (terms!= (terms.checked)) {
      console.log("Not agreed")
    } else {
      console.log("Agreed")
    }
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
