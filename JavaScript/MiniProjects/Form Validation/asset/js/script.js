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

  if (
    (email,
    password,
    confirmPassword,
    firstName,
    lastName,
    gender,
    country,
    terms,
    newsletter)
  ) {
    //Form custom validation
    if (email.value === "") {
      email.focus();
      setError(email, "Please enter your email");

      return;
    } else {
      const emailformat =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (emailformat.test(email.value)) {
        setSuccess(email);
      } else {
        email.focus();
        setError(email, "Please enter valid email");
        return;
      }
      setSuccess(email);
    }

    if (password.value === "") {
      password.focus();
      setError(password, "Please enter your password");
      return;
    } else {
      if (password.value.length < 8) {
        password.focus();
        setError(password, "Password should be at least 8 characters");
        return;
      } else if (password.value.length > 16) {
        password.focus();
        setError(password, "Password should not exceed 16 characters");
        return;
      } else if (!/[A-Z]/.test(password.value)) {
        password.focus();
        setError(password, "Password should have at least 1 uppercase");

        return;
      } else if (!/[a-z]/.test(password.value)) {
        password.focus();
        setError(password, "Password should have at least 1 lowercase");
        return;
      } else if (!/[0-9]/.test(password.value)) {
        password.focus();
        setError(password, "Password should have at least 1 number");
        return;
      } else if (!/(?=.[$#%£&§@])/.test(password.value)) {
        password.focus();
        setError(password, "Password should have at least 1 special character");
        return;
      } else {
        setSuccess(password);
      }
    }
    if (confirmPassword.value === "") {
      confirmPassword.focus();
      setError(confirmPassword, "Please enter your confirm password");
      return;
    } else {
      if (confirmPassword.value != password.value) {
        confirmPassword.focus();
        setError(confirmPassword, "Confirm password dose not match");
        return;
      } else setSuccess(confirmPassword);
    }

    if (firstName.value === "") {
      firstName.focus();
      setError(firstName, "First name is required");
      return;
    } else {
      if (firstName.value.length < 3) {
        firstName.focus();
        setError(firstName, "Name should have atleast 3 charecters");
        return;
      }
      setSuccess(firstName);
    }

    if (lastName.value === "") {
      lastName.focus();
      setError(lastName, "Last name is required");
      return;
    } else {
      if (lastName.value.length < 3) {
        lastName.focus();
        setError(lastName, "Name should have atleast 3 charecters");
        return;
      }
      setSuccess(lastName);
    }

    if (country.value === "") {
      country.focus();
      setError(country, "Please select your country");
      return;
    } else {
      setSuccess(country);
    }

    if (!terms.checked) {
      const check = document.querySelector(".checkbox");
      check.style.color = "red";
      return;
    } else {
      const check = document.querySelector(".checkbox");

      check.style.color = "black";
    }

    if (!newsletter.checked) {
      const news = document.querySelector(".newsletter");
      news.style.color = "red";
      return;
    } else {
      const news = document.querySelector(".newsletter");
       news.style.color = "black";
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

btnEl.addEventListener("click", formSubmit);

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
