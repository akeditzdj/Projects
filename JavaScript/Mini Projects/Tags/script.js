const closebtn = document.querySelector(".close");
const copybtn = document.querySelector(".copy");
const inputTags = document.querySelector(".input-tags");

closebtn.addEventListener("click", function () {
  inputTags.innerHTML = "";
});

copybtn.addEventListener("click", function () {
  const tags = inputTags.querySelectorAll(".tag span");
  let tagsArray = [];
  tags.forEach((span) => tagsArray.push(span.textContent));
  copyToClipboard(tagsArray.toString());
});

function copyToClipboard(text) {
  const element = document.createElement("textarea");
  element.value = text;
  document.body.appendChild(element);
  element.select();
  document.execCommand("Copy");
  document.body.removeChild(element);

  let obj = document.styleSheets[1].cssRules[12];
  obj.style.content = '"Copied"';

  setTimeout(() => {
    obj.style.content = '"Copy"';
  }, 2000);
}

function createTag(tag) {
  const div = document.createElement("div");
  div.setAttribute("class", "tag");
  const span = document.createElement("span");
  span.innerHTML = tag;
  const icon = document.createElement("ion-icon");
  icon.setAttribute("name", "close-circle-outline");
  icon.setAttribute("data-item", tag);
  div.appendChild(span);
  div.appendChild(icon);
  return div;
}
