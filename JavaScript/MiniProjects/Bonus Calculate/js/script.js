const inputElement = document.getElementById("salary");
const exp = document.getElementById("exp");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");
const button = document.getElementById("btn");
// const button_reset = document.getElementById("btn_reset");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");

button.addEventListener("click", validation);
const salaryVal = Number(inputElement.value);
//validate input element

function validation() {
  if (inputElement.value == 0) {
    inputElement.focus();
    error1.innerHTML = "Please enter value";
    return;
  } else if (exp.value == 0) {
    error1.innerHTML = "";
    exp.focus();
    error2.innerHTML = "Please choose your option";
  } else {
    error2.innerHTML = "";
    calculateBonus();
  }
}

function calculateBonus() {
  const salaryVal = Number(inputElement.value);

  // Get the selected option
  let selectedOption = exp.options[exp.selectedIndex];
  let expVal = selectedOption.value;

  const bonusValue = (salaryVal * expVal) / 100;
  const result = salaryVal + bonusValue;
  output1.innerHTML = salaryVal;
  output2.innerHTML = bonusValue;
  output3.innerHTML = result;
}
