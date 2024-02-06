function addNumber1() {
  let inputNumber = document.getElementById("add");
  let outputNumber = document.getElementById("outputAdd");
  let number = Number(inputNumber.value);

  let divNumber = number;
  d5 = divNumber % 10;
  divNumber = Math.floor(divNumber / 10);
  d4 = divNumber % 10;
  divNumber = Math.floor(divNumber / 10);
  d3 = divNumber % 10;
  divNumber = Math.floor(divNumber / 10);
  d2 = divNumber % 10;
  divNumber = Math.floor(divNumber / 10);
  d1 = divNumber % 10;

  let a = 1;

  const result1 = d1 + a;
  const result2 = d2 + a;
  const result3 = d3 + a;
  const result4 = d4 + a;
  const result5 = d5 + a;

  outputNumber.innerHTML =
    "Result =" + result1 + result2 + result3 + result4 + result5;
}

const button13 = document.getElementById("btn13");
button13.addEventListener("click", addNumber1);
