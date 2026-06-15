const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
}

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

year.textContent = new Date().getFullYear();
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
