var page = document.querySelector(".page");
const menuToggle = document.querySelector(".menu_toggle");
const content = document.querySelector(".content");

menuToggle.addEventListener("click", () => {
  page.classList.toggle("shazam");
});

content.addEventListener("click", () => {
  page.classList.remove("shazam");
});
