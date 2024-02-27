let tamil = document.getElementById("tamil");
let english = document.getElementById("english");
let math = document.getElementById("math");
let science = document.getElementById("science");
let physics = document.getElementById("physics");

let outputTotal = document.getElementById("totalMark");
let outputAvg = document.getElementById("totalAvg");

function studentMark() {
  let mark1 = Number(tamil.value);
  let mark2 = Number(english.value);
  let mark3 = Number(math.value);
  let mark4 = Number(science.value);
  let mark5 = Number(physics.value);

  // if (mark1 === 0 || mark2 === 0 || mark3 === 0 || mark4 === 0 || mark5 === 0) {
  //   errorMsg.innerHTML = "Number not be a empty";

  //   }

  if (mark1 === 0 || mark1 > 100) {
    outputTotal.value = " ";
    outputAvg.value = " ";
    tamil.focus();
    errorMsg.innerHTML = "Number not be a empty";
    return;
  } else {
    outputTotal.value = " ";
    outputAvg.value = " ";
    english.focus();
  }

  if (mark2 === 0 || mark2 > 100) {
    outputTotal.value = " ";
    outputAvg.value = " ";
    english.focus();
    errorMsg.innerHTML = "Number not be a empty";
    return;
  } else {
    outputTotal.value = " ";
    outputAvg.value = " ";
    math.focus();
  }

  if (mark3 === 0 || mark3 > 100) {
    outputTotal.value = " ";
    outputAvg.value = " ";
    math.focus();
    errorMsg.innerHTML = "Number not be a empty";
    return;
  } else {
    outputTotal.value = " ";
    outputAvg.value = " ";
    science.focus();
  }

  if (mark4 === 0 || mark4 > 100) {
    outputTotal.value = " ";
    outputAvg.value = " ";
    science.focus();
    errorMsg.innerHTML = "Number not be a empty";
    return;
  } else {
    outputTotal.value = " ";
    outputAvg.value = " ";
    physics.focus();
  }

  if (mark5 === 0 || mark5 > 100) {
    outputTotal.value = " ";
    outputAvg.value = " ";
    physics.focus();
    errorMsg.innerHTML = "Number not be a empty";
    return;
  } else {
    outputTotal.value = "";
    outputAvg.value = "";
  }

  errorMsg.innerHTML = "";

  let totalMark = mark1 + mark2 + mark3 + mark4 + mark5;
  let totalAvg = totalMark / 5;

  outputTotal.innerHTML = "Total Mark = " + totalMark;
  outputAvg.innerHTML = "Percentage = " + totalAvg + "%";
}

const button3 = document.getElementById("btn3");
button3.addEventListener("click", studentMark);



function clear() {
  outputTotal.innerHTML = "";
  outputAvg.innerHTML = "";
  tamil.value = "";
  english.value = "";
  math.value = "";
  science.value = "";
  physics.value = "";
}

const buttonClear = document.getElementById("clear");
buttonClear.addEventListener("click", clear);