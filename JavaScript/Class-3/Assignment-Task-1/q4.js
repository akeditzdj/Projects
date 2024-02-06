function getTemprature() {
  let inputElement = document.getElementById("temp");
  let outputTemperature = document.getElementById("output5");
  let fheatElement = Number(inputElement.value);

  const result = (fheatElement - 32) * 5 / 9;
  const fresult = Math.round(result)

  outputTemperature.innerHTML = "Temprature = " + fresult + "&deg;C";
}

const button4 = document.getElementById("btn4");
button4.addEventListener("click", getTemprature);
