function calculateSalary() {
  const bsElement = document.getElementById("bs");
  const paraElement1 = document.getElementById("output1");

  const bs = Number(bsElement.value);

  let hra = bs * 0.2;
  let da = bs * 0.4;
  let gs = bs + hra + da;

  paraElement1.innerHTML = `
    <table class="table table-dark table-striped w-50">
        <tr><th>Basic Salary</th><td>${bs}</td></tr>
        <tr><th>Dearness Allowance</th><td>${da}</td></tr>
        <tr><th>House Rent Allowance </th><td>${hra}</td></tr>
        <tr><th>Gross Salary</th><td>${gs}</td></tr>
    </table>
  `;
}
const button1 = document.getElementById("btn1");
button1.addEventListener("click", calculateSalary);
