//-----Q-2-------//

function convert() {
  const distanceElement = document.getElementById("distance");
  const paraElement2 = document.getElementById("output2");

  const distance = Number(distanceElement.value);

  let meter =( distance * 1000).toFixed(3)
  let feet = distance * 3280.84;
  let inches = distance * 39370;
  let cm = distance * 100000;

  paraElement2.innerHTML = `
  <table class="table table-primary striped w-50">
  <tr><th>Meter</th><td>${meter}</td></tr>
  <tr><th>Feet</th><td>${feet}</td></tr>
  <tr><th>Inches</th><td>${inches}</td></tr>
  <tr><th>Centimeter</th><td>${cm}</td></tr>
  </table>
  `;
}

const button2 = document.getElementById("btn2");
 button2.addEventListener("click", convert);


