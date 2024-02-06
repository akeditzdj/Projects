const email = document.getElementById("email");
const password = document.getElementById("password");

email.addEventListener("input", () => {
  const emailBox = document.querySelector(".emailBox");
  const emailText = document.querySelector(".emailText");
  const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

  if (email.value.match(emailPattern)) {
    emailBox.classList.add("valid");
    emailBox.classList.remove("invalid");
    emailText.innerHTML = "Your Email Address In valid";
  } else {
    emailBox.classList.add("invalid");
    emailBox.classList.remove("valid");
    emailText.innerHTML = "Must be valid a email address";
  }
});

password.addEventListener("input", () => {
  const passwordBox = document.querySelector(".passwordBox");
  const passwordText = document.querySelector(".passwordText");
  const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

  if (password.value.match(passwordPattern)) {
    passwordBox.classList.add("valid");
    passwordBox.classList.remove("invalid");
    passwordText.innerHTML = "Your Password In valid";
  } else {
    passwordBox.classList.add("invalid");
    passwordBox.classList.remove("valid");
    passwordText.innerHTML =
      "Your password must be at least 6 charecters as well as contain at least one uppercase, one lowercase, and one number.";
  }
});




