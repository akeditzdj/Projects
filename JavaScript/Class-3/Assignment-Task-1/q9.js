function addNumber() {
  let inputNumber = document.getElementById("sum");
  let outputNumber = document.getElementById("outputSum");
  let number = Number(inputNumber.value);
 

  let divNumber = number;

  if (divNumber == 0) {
    error.innerHTML = "Number not be a empty";
    return;
  }

  if (isNaN(divNumber)) {
    error.innerHTML = "Please fill Numeric Data Only";
    inputNumber.value = "";
    inputNumber.focus();
    return;
  }

  if (inputNumber.value.length !== 4) {
    error.innerHTML = "Plaese enter 4 digits number";
    outputNumber.innerHTML = "";
    return;
  }
  error.innerHTML = "";



    d4 = divNumber % 10;
    divNumber = Math.floor(divNumber / 10);
    d3 = divNumber % 10;
    divNumber = Math.floor(divNumber / 10);
    d2 = divNumber % 10;
    divNumber = Math.floor(divNumber / 10);
    d1 = divNumber % 10;
  
    const result = d4 + d1;
  
    outputNumber.innerHTML = "Result =" + result;



}

document.getElementById("btn9").addEventListener("click", addNumber);


