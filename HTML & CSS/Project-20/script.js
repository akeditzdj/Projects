document.querySelector("svg").onclick = function () {
  document.querySelector(".off-canvas").classList.toggle("hide");
};

function changeNavbarBg() {
  let navbar = document.getElementById("navbar");
  let navLinks = document.querySelectorAll(".nav-light-links li a");
  let navBrand = document.getElementById("logo");
  let scrollValue = window.scrollY;
  if (scrollValue < 900) {
    navbar.classList.remove("navbar-light");
    navBrand.src = "images/logo-light.png";
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = "#fff";
    }
  } else {
    navbar.classList.add("navbar-light");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = "#000";
    }
    navBrand.src = "images/logo-dark.png";
  }
}

window.addEventListener("scroll", changeNavbarBg);
