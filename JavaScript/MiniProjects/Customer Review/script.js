document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");
  const indicators = [...document.querySelectorAll(".indicators button")];
  let currentIndex = 0;
  indicators.forEach((button, index) => {
    button.addEventListener("click", () => {
      indicators[currentIndex].classList.remove("active");
      wrapper.style.marginLeft = `-${100 * index}%`;
      button.classList.add("active");
      currentIndex = index;
    });
  });
});
