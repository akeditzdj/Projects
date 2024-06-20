const tagContainer = document.querySelector(".tag-container");
const input = document.querySelector(".tag-container input");
const btnRemoveAll = document.querySelector("#removeAll");
const btnCopy = document.querySelector("#copy");

let tags = [];

/*
<div class="tag">
  <span>HTML</span>
  <ion-icon name="close-circle-outline"></ion-icon>
</div>
*/
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

function reset() {
  const tagElements = document.querySelectorAll(".tag");
  tagElements.forEach((tag) => {
    tag.parentElement.removeChild(tag);
  });
}

btnRemoveAll.addEventListener("click", function () {
  tags = [];
  reset();
});

function addTags() {
  reset();
  tags
    .slice()
    .reverse()
    .forEach((tag) => {
      tagContainer.prepend(createTag(tag));
    });
}

document.addEventListener("click", function (e) {
  if (e.target.tagName == "ION-ICON") {
    const data = e.target.getAttribute("data-item");
    const filterTags = tags.filter((tag) => {
      return tag != data;
    });
    tags = filterTags;
    addTags();
  }
});

btnCopy.addEventListener("click", function () {
  if (tags.length) {
    navigator.clipboard
      .writeText(tags.toString())
      .then(() => {
        alert("Tag Copied to Clipboard !");
      })
      .catch((error) => {
        console.error("Failed to Copy", error);
      });
  }
});
