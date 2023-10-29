const sidebarMenu = document.querySelector(".sidebar-menu-icon");
const sidebar = document.querySelector(".sidebar");
const docPageContainer = document.querySelector(".doc-content");
const sidebarCloseIcon = document.querySelector(".sidebar-close-icon");
const nav = document.querySelector(".nav");
// const sidebarLinks = document.querySelectorAll("#sidebar-links");

sidebarMenu.addEventListener("click", () => {
  sidebar.style.width = "250px";
  docPageContainer.style.opacity = "0.2";
  nav.style.opacity = "0.2";
  document.body.style.overflow = "hidden";
});

sidebarCloseIcon.addEventListener("click", () => {
  sidebar.style.width = "0px";
  docPageContainer.style.opacity = "1";
  nav.style.opacity = "1";
  document.body.style.overflow = "visible";
});

// sidebarLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     sidebar.style.width = "0px";
//     docPageContainer.style.opacity = "1";
//     nav.style.opacity = "1";
//     document.body.style.overflow = "visible";
//   });
// });
