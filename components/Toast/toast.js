const toast = document.querySelector(".toast");
const demoBtn = document.querySelectorAll(".demo-btn");
const toastLabel = document.querySelector(".toast-label");
const actionBtn = document.querySelector(".action-btn");
const closeIcon = document.querySelector(".close-icon");

demoBtn[0].addEventListener("click", () => {
  toast.classList.add("baseline", "toast-show");
  demoBtn[1].disabled = true;
  demoBtn[2].disabled = true;
  demoBtn[3].disabled = true;
  setTimeout(() => {
    toast.classList.remove("baseline", "toast-show");
    demoBtn[1].disabled = false;
    demoBtn[2].disabled = false;
    demoBtn[3].disabled = false;
  }, 3000);
});

demoBtn[1].addEventListener("click", () => {
  toast.classList.add("leading", "toast-show");
  demoBtn[0].disabled = true;
  demoBtn[2].disabled = true;
  demoBtn[3].disabled = true;
  setTimeout(() => {
    toast.classList.remove(
      "baseline",
      "leading",
      "top-right",
      "stacked",
      "toast-show"
    );
    demoBtn[0].disabled = false;
    demoBtn[2].disabled = false;
    demoBtn[3].disabled = false;
  }, 3000);
});

demoBtn[2].addEventListener("click", () => {
  toast.classList.add("top-right", "toast-show");
  demoBtn[0].disabled = true;
  demoBtn[1].disabled = true;
  demoBtn[3].disabled = true;
  setTimeout(() => {
    toast.classList.remove(
      "baseline",
      "leading",
      "top-right",
      "stacked",
      "toast-show"
    );
    demoBtn[0].disabled = false;
    demoBtn[1].disabled = false;
    demoBtn[3].disabled = false;
  }, 3000);
});

demoBtn[3].addEventListener("click", () => {
  toast.classList.add("stacked", "toast-show");
  demoBtn[0].disabled = true;
  demoBtn[1].disabled = true;
  demoBtn[2].disabled = true;
  toastLabel.innerText = `This item already has the label "travel". You can add a new label.`;
  setTimeout(() => {
    toast.classList.remove(
      "baseline",
      "leading",
      "top-right",
      "stacked",
      "toast-show"
    );
    toastLabel.innerText = "Can't send photo. Retry in 5 seconds.";
    demoBtn[0].disabled = false;
    demoBtn[1].disabled = false;
    demoBtn[2].disabled = false;
  }, 3000);
});

actionBtn.addEventListener("click", () => {
  toast.classList.remove("toast-show");
});

closeIcon.addEventListener("click", () => {
  toast.classList.remove("toast-show");
});
