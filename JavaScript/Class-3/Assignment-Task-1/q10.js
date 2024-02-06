function townPopulation() {
  let input1 = document.getElementById("population");
  let input2 = document.getElementById("men");
  let input3 = document.getElementById("literacy");
  let input4 = document.getElementById("literatemen");

  let population = Number(input1.value);
  let men = Number(input2.value);
  let literacy = Number(input3.value);
  let literatemen = Number(input4.value);

  let totalpop = document.getElementById("pop");
  let totalpopmen = document.getElementById("popmen");
  let totalpopwomen = document.getElementById("popwomen");
  let totallitmen = document.getElementById("litmen");
  let totallitwomen = document.getElementById("litwomen");
  let totalilitmen = document.getElementById("ilitmen");
  let totalilitwomen = document.getElementById("ilitwomen");
  let totallitmenwomen = document.getElementById("totallitmenwomen");
  let totalillitmenwomen = document.getElementById("totalillitmenwomen");

  let pop = population;
  let popmen = (men * pop) / 100;
  let popwomen = pop - popmen;
  let poplit = (literacy * pop) / 100;
  let litmen = (literatemen * poplit) / 100;
  let litwomen = poplit - litmen;
  let ilitmen = popmen - litmen;
  let ilitwomen = popwomen - litwomen;
  let popillit = ilitmen + ilitwomen;

  totalpop.innerHTML = "Total Population =" + pop;
  totalpopmen.innerHTML = "Population Men =" + popmen;
  totalpopwomen.innerHTML = "Population Women =" + popwomen;
  totallitmenwomen.innerHTML = "Total Literate Men & Women = " + poplit;
  totalillitmenwomen.innerHTML = "Total Illiterate Men & Women = " + popillit;
  totallitmen.innerHTML = "Total Literate Men = " + litmen;
  totallitwomen.innerHTML = "Total Literate Women = " + litwomen;
  totalilitmen.innerHTML = "Total Illiterate Men = " + ilitmen;
  totalilitwomen.innerHTML = "Total Illiterate Women = " + ilitwomen;
}

const button10 = document.getElementById("btn10");
button10.addEventListener("click", townPopulation);
