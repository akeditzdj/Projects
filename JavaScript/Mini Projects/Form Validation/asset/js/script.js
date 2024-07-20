// Get values in inputs fields

const formEl = document.forms.registration;
const btnEl = document.querySelector("form button");

const formSubmit = (event) => {
  event.preventDefault();

  const {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    gender,
    country,
    terms,
    newsletter,
  } = formEl;

if( email,
    password,
    confirmPassword,
    firstName,
    lastName,
    gender,
    country,
    terms,
  newsletter) {
    //Form custom validation
    if (email.value === "") {
      setError(email, "Please enter your email");
      return;
    } else {
      const emailformat =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (emailformat.test(email.value)) {
        setSuccess(email);
      } else {
        setError(email, "Please enter valid email");
        return;
      }
      setSuccess(email);
    }

    if (password.value === "") {
      setError(passwordElement, "Please enter your password");
      return;
    } else {
      if (password.value.length < 8) {
        setError(password, "Password should be at least 8 characters");
        return;
      } else if (password.value.length > 16) {
        setError(password, "Password should not exceed 16 characters");
        return;
      } else if (!/[A-Z]/.test(password.value)) {
        setError(password, "Password should have at least 1 uppercase");
        return;
      } else if (!/[a-z]/.test(password.value)) {
        setError(password, "Password should have at least 1 lowercase");
        return;
      } else if (!/[0-9]/.test(password.value)) {
        setError(password, "Password should have at least 1 number");
        return;
      } else if (!/(?=.[$#%£&§@])/.test(password.value)) {
        setError(password, "Password should have at least 1 special character");
        return;
      } else {
        setSuccess(password);
      }
    }
    if (confirmPassword.value === "") {
      setError(confirmPassword, "Please enter your confirm password");
      return;
    } else {
      if (confirmPassword.value != password.value) {
        setError(confirmPassword, "Confirm password dose not match");
        return;
      } else setSuccess(confirmPassword);
    }

    if (firstName.value === "") {
      setError(firstName, "First name is required");
      return;
    } else {
      setSuccess(firstName);
    }

    if (lastName.value === "") {
      setError(lastName, "Last name is required");
      return;
    } else {
      setSuccess(lastName);
    }

    if (country.value === "") {
      setError(country, "Please select your country");
      return;
    } else {
      setSuccess(country);
    }

    const formData = new FormData(formEl);

    console.log([...formData.entries()]);

    console.log("Email:" + " " + email.value);
    console.log("Password:" + " " + password.value);
    console.log("Confirm Password:" + " " + confirmPassword.value);
    console.log("First Name:" + " " + firstName.value);
    console.log("Last Name:" + " " + lastName.value);
    console.log("Gender:" + " " + gender.value);
    console.log("Country:" + " " + country.value);
    console.log("Terms Of Condition:" + " " + terms.value);
    console.log("Newsletter:" + " " + newsletter.value);
  }

};

formEl.addEventListener("submit", formSubmit);

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

// //password show/hide
function passwordShowAndHide() {
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
  let c_password_input = document.querySelector("#confirmPassword");
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
}
passwordShowAndHide();
