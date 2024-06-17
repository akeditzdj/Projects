const context = document.querySelector(".context-menu");

function menu(show = true) {
  context.style.display = show ? "block" : "none";
}

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  menu();
  //console.log(e.y, e.x);
  const topPx =
    e.y + context.offsetHeight > window.innerHeight
      ? window.innerHeight - context.offsetHeight
      : e.y;
  const leftPx =
    e.x + context.offsetWidth > window.innerWidth
      ? window.innerWidth - context.offsetWidth
      : e.x;
  context.style.top = topPx + "px";
  context.style.left = leftPx + "px";
});

window.addEventListener("click", () => {
  menu(false);
});
