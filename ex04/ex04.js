const btnModalElement = document.querySelector("#btn-modal");
const modalElement = document.querySelector("#modal");
const bodyElement = document.querySelector("#body");
const closeElement = document.querySelector(".close");

btnModalElement.addEventListener("click", function () {
  modalElement.classList.remove("hidden");
  bodyElement.classList.add("bg-blur");
  bodyElement.classList.remove("bg-none");
});

closeElement.onclick = function () {
  modalElement.classList.add("hidden");
  bodyElement.classList.add("bg-none");
  bodyElement.classList.remove("bg-blur");
};
