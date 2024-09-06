const navtab = document.getElementById("nav-tab");

navtab.addEventListener("click", tabclick);

function tabclick(event) {
  //Get all The active Tabs
  const activeTabs = document.querySelectorAll(".active");

  activeTabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  const pages = document.querySelectorAll(".page");

  pages.forEach((page) => {
    page.classList.remove("page-active");
  });

  //event.target.parentElement.classList.add('active');
  event.target.parentElement.className += "active";

  let id = event.target.href.split("#")[1];
  const page = document.getElementById(id);
  page.classList.add("page-active");
}
