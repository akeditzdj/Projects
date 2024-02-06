function getCurrencyNotesCount() {
  let inputAmount = document.getElementById("amount");
  let hunOut = document.getElementById("hundred");
  let fiftyOut = document.getElementById("fifty");
  let tenOut = document.getElementById("ten");
  let remainOut = document.getElementById("remain");

  let amount = Number(inputAmount.value);

  let outHun = Math.floor(amount / 100);

  let r1 = outHun;

  let balance1 = amount % 100;
  let outFifty = Math.floor(balance1 / 50);
  let r2 = outFifty;

  let balance2 = balance1 % 50;
  let outTen = Math.floor(balance2 / 10);
  let r3 = outTen;

  let balance3 = balance2 % 10;
  let outRemain = balance3;

  let r4 = outRemain;

  hunOut.innerHTML = "required notes of rs 100 = " + r1;
  fiftyOut.innerHTML = "required notes of rs 50 = " + r2;
  tenOut.innerHTML = "required notes of rs 10 = " + r3;
  remainOut.innerHTML = "Amount still remaining = " + r4;
}

const button11 = document.getElementById("btn11");
button11.addEventListener("click", getCurrencyNotesCount);
