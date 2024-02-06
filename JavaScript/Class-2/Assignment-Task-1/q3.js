function studentMark() {
  let tamil = document.getElementById("tamil");
  let english = document.getElementById("english");
  let math = document.getElementById("math");
  let science = document.getElementById("science");
  let physics = document.getElementById("physics");
  
  let outputTotal = document.getElementById("totalMark");
  let outputAvg = document.getElementById("totalAvg");

  let mark1 = Number(tamil.value);
  let mark2 = Number(english.value);
  let mark3 = Number(math.value);
  let mark4 = Number(science.value);
  let mark5 = Number(physics.value);

 

  let totalMark = mark1 + mark2 + mark3 + mark4 + mark5;
  let totalAvg = totalMark / 5;

  outputTotal.innerHTML = "Total Mark = " + totalMark;
  outputAvg.innerHTML = "Percentage = " + totalAvg + "%";
}

const button3 = document.getElementById("btn3");
button3.addEventListener("click", studentMark);
