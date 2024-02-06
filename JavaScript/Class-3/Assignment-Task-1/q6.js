function interChangeData() {
  let input1 = document.getElementById("inputc");
  let input2 = document.getElementById("inputd");
  let output1 = document.getElementById("outputc");
  let output2 = document.getElementById("outputd");

  let inputc = Number(input1.value);
  let inputd = Number(input2.value);

  let temp = inputc;
  inputc = inputd;
  inputd = temp;

  output1.innerHTML = "C = " + inputc;
  output2.innerHTML = "D = " + inputd;
}

const buttoninterchange = document.getElementById("btninterchange");
buttoninterchange.addEventListener("click", interChangeData);
