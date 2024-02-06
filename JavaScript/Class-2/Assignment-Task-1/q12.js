function getProfit() {
  let sp = document.getElementById("sellingPrice");
  let p = document.getElementById("profit");
  let cpOut = document.getElementById("cpOut");

  let sellingPrice = Number(sp.value);
  let profit = Number(p.value);

  let costPrice = (sellingPrice - profit) / 15;

  cpOut.innerHTML = "Cost Price = " + costPrice;
}

const button12 = document.getElementById("btn12");
button12.addEventListener("click", getProfit);
