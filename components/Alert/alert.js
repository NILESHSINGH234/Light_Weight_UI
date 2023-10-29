const closeIcon = document.querySelector(".icon-close");
const alertContainer = document.querySelector("#alert-with-close-icon");

closeIcon.addEventListener("click", () => {
  alertContainer.style.display = "none";
});
