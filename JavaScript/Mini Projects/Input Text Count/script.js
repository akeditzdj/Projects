const textarea = document.querySelector("textarea");
const span = document.querySelector("span");

textarea.addEventListener("input", function () {
  let length = 120;
  let content = this.value;
  if (content.length > length) {
    this.value = this.value.slice(0, length - 1);
  }
  span.textContent = `${content.length}/${length}`;
});
