const inputs = document.querySelector(".inputs");
const button = document.querySelector("#btnSubmit");
const outputPassElement = document.getElementById("password");
const counterElement = document.getElementById("countdown");

console.log(outputPassElement.value);

inputs.addEventListener("input", function (e) {
  const target = e.target;
  const value = target.value;

  console.log(value);

  if (isNaN(value)) {
    target.value = "";
    return;
  }

  if (value != "") {
    const nextElement = target.nextElementSibling;

    if (nextElement) {
      nextElement.focus();
      return;
    } else {
      if (checkDigits() && value) {
        button.disabled = false;
        button.addEventListener("click", function () {
          alert("OTP Sumitted successfully.");
          location.reload();
        });
      } else {
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

outputPassElement.innerHTML = generateOTP();

let countDown = 10;

//Countdown Timer

function countdown() {
  setInterval(function () {
    if (countDown === 0) {
      location.reload();
      return;
    }
    countDown--;
    counterElement.innerHTML = countDown + " " + "seconds remaining";
    return countDown;
  }, 1000);
}

countdown();
