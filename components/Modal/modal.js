const openModalBtn = document.querySelector("#open-modal-btn");
const modal = document.querySelector(".modal");
const cancelBtn = document.querySelector("#cancel-btn");
const modalCloseIcon = document.querySelector("#modal-close");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
});

cancelBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  document.body.style.overflow = "visible";
});

modalCloseIcon.addEventListener("click", () => {
  modal.classList.remove("show");
  document.body.style.overflow = "visible";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "visible";
  }
});
