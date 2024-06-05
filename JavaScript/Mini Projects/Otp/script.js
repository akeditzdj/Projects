const inputs = document.querySelector(".inputs");
const btnSubmit = document.getElementById("btnSubmit");

inputs.addEventListener("input", function (e) {
  const target = e.target;
  const val = target.value;

  if (isNaN(val)) {
    target.value = "";
    return;
  }

  if (val != "") {
    const nextInput = target.nextElementSibling;
    if (nextInput) {
      nextInput.focus();
    }
  }
});

inputs.addEventListener("keyup", function (e) {
  const target = e.target;
  const key = e.key.toLowerCase();

  if (key == "backspace" || key == "delete") {
    target.value = "";
    const prevInput = target.previousElementSibling;

    if (prevInput) {
      prevInput.focus();
    }
    return;
  }
});


