const navMenuContainer = document.querySelector(".nav-menu");
const navButton = document.querySelector(".navigation-menu-toggle");

navButton.addEventListener("click", () => {
  navMenuContainer.classList.toggle("show");
  document.body.classList.toggle("lock-scroll");
});
