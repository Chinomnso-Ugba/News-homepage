const navToggle = document.getElementById("navToggle");
const navClose = document.getElementById("navClose");
const navOverlay = document.getElementById("navOverlay");

function openNav() {
  document.body.classList.add("nav-open");
}

function closeNav() {
  document.body.classList.remove("nav-open");
}

navToggle.addEventListener("click", openNav);
navClose.addEventListener("click", closeNav);
navOverlay.addEventListener("click", closeNav);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeNav();
});
