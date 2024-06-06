const inputs = document.querySelector(".inputs");
const inputElement = document.querySelectorAll(".input");
const button = document.querySelector("#btnSubmit");
const counterElement = document.getElementById("countdown");
const passwordElement = document.getElementById("password");
const modalElement = document.getElementById("modal");
const btnClose = document.getElementById("btnClose");

let otpNumber;

inputs.addEventListener("input", function (e) {
  const target = e.target;
  const value = target.value;

  if (isNaN(value)) {
    target.value = "";
    return
  }

  if (value != "") {
    const nextElement = target.nextElementSibling;

    if (nextElement) {
      nextElement.focus();
      return;
    } else {
      let otpInput = [];
      inputElement.forEach((input) => otpInput.push(input.value));

      let result = otpInput.reduce((total, input) => {
        return total + input;
      }, "");
       
      if (checkDigits() && result == otpNumber) {
        passwordElement.classList.remove("error");
        button.disabled = false;
        button.addEventListener("click", function () {
             modalElement.classList.add("show")
        });
      } else {
        passwordElement.classList.add("error");
        button.disabled = true;
      }
    }
  }
});

inputs.addEventListener("keyup", function (e) {
  const target = e.target;
  const key = e.key.toLowerCase();
  if (key == "backspace" || key == "delete") {
    target.value = "";
    button.disabled = true;
    const prevElement = target.previousElementSibling;
    if (prevElement) {
      prevElement.focus();
    } 
  }
});

function checkDigits() {
  const textboxs = inputs.querySelectorAll(".input");
  const isfilled = true;
  textboxs.forEach((textbox) => {
    if (textbox.value.trim() === "") {
      isfilled = false;
    }
  });
  return isfilled;
}

// Function to generate OTP
function generateOTP() {
  let digits = "0123456789";
  let OTP = "";
  let len = digits.length;
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * len)];
  }

  return OTP;
}

function refreshDiv() {
  otpNumber = generateOTP();
  document.getElementById("password").innerHTML = otpNumber;
 
}
refreshDiv();

window.setInterval("refreshDiv()", 30000);

function refreshCount() {
  //Countdown Timer
  let countDown = 30;

  function countdown() {
    setInterval(function () {
      if (countDown == 0) {
        return
      }
      countDown--;
      counterElement.innerHTML = "Timer" + " : " + countDown;
    }, 1000);
    return countdown;
  }
  countdown();
}

window.setInterval("refreshCount()", 30000);
refreshCount();

btnClose.addEventListener("click", function () {
  modalElement.classList.remove("show");
  location.reload();
})
