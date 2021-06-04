const modal = document.querySelector(".modal-background");
const modalBox = document.querySelector(".modal");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");

openModal.addEventListener("click", function () {
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
  modalBox.style.marginTop = "0";
});

closeModal.addEventListener("click", function () {
  modal.style.visibility = "hidden";
  modal.style.opacity = "0";
  modalBox.style.marginTop = "1000px";
});
