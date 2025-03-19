const textElement = document.querySelector("#text");
const btnHideElement = document.querySelector("#btn-hide");
const btnShowElement = document.querySelector("#btn-show");

btnHideElement.addEventListener("click", function () {
  textElement.style.display = "none";
});
btnShowElement.addEventListener("click", function () {
  textElement.style.display = "block";
});
