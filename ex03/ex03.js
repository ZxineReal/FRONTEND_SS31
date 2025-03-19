const btnGreenElement = document.querySelector("#btn-green");
const btnRedElement = document.querySelector("#btn-red");
const btnPurpleElement = document.querySelector("#btn-purple");
const bodyElement = document.querySelector(".body");

btnGreenElement.addEventListener("click", function () {
  bodyElement.classList.add("bg-green");
  bodyElement.classList.remove("bg-red");
  bodyElement.classList.remove("bg-purple");
});
btnRedElement.addEventListener("click", function () {
  bodyElement.classList.add("bg-red");
  bodyElement.classList.remove("bg-green");
  bodyElement.classList.remove("bg-purple");
});
btnPurpleElement.addEventListener("click", function () {
  bodyElement.classList.add("bg-purple");
  bodyElement.classList.remove("bg-red");
  bodyElement.classList.remove("bg-green");
});
