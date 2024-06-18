const textarea = document.querySelector("textarea");
const maxChar = document.querySelector(".max-char");
const charCount = document.querySelector(".char-count");
const button = document.querySelector("button");

textarea.addEventListener("input", function () {
  let length = 120;
  let content = this.value;
 button.disabled = true
  charCount.innerHTML = "Input character -" + `${content.length}`;
  maxChar.textContent = "Max allowed chacrectors -" + `${length}`;
  if (content.length <= length) {
    textarea.style.borderColor = "green";
    maxChar.style.color = "green";
    charCount.style.color="green";
    button.disabled = false
  } else {
    textarea.style.borderColor = "red";
    maxChar.style.color = "red";
     charCount.style.color = "red";
    button.disabled = true
  }
});


  button.addEventListener("click", function () {
    alert("Message Sent Successfully...");
  });