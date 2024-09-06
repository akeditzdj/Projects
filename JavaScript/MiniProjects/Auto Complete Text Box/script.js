

const suggestBox = document.querySelector(".suggest-box");
const inputBox = document.querySelector("#searchText");

inputBox.addEventListener("keyup", filterSuggesstions);

inputBox.addEventListener("click", () => {
  inputBox.select();
});

async function filterSuggesstions() {
  const response = await fetch("./data.json");
  const KeywordsList = await response.json();
  let suggest = [];
  let input = this.value.trim();
  if (input.length) {
    suggest = KeywordsList.filter((keyword) => {
      return keyword.search.toLowerCase().includes(input.toLowerCase());
    });
  }
  display(suggest);

  if (!suggest.length) {
    suggestBox.innerHTML = "";
  }
}

function display(suggest) {
  const content = suggest.map((list) => {
    return `<li onclick='selectInput(this)'>${list.search}</li>`;
  });
  suggestBox.innerHTML = `<ul>${content.join("")}</ul>`;
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  suggestBox.innerHTML = "";
}
