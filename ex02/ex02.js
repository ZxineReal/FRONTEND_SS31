const btnToggleElement = document.querySelector("#btn-toggle");
const bodyElement = document.querySelector(".body");

btnToggleElement.addEventListener("click", function () {
  bodyElement.classList.toggle("darkMode");
});
