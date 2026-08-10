const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const navDropdowns = document.querySelectorAll("[data-nav-dropdown]");
const year = document.querySelector("[data-year]");

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
}

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

function closeDropdown(dropdown) {
  dropdown.classList.remove("is-open");
  dropdown.querySelector("[data-dropdown-toggle]").setAttribute("aria-expanded", "false");
}

function closeAllDropdowns(except = null) {
  navDropdowns.forEach((dropdown) => {
    if (dropdown !== except) closeDropdown(dropdown);
  });
}

navDropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector("[data-dropdown-toggle]");
  toggle.addEventListener("click", () => {
    const willOpen = !dropdown.classList.contains("is-open");
    closeAllDropdowns(dropdown);
    dropdown.classList.toggle("is-open", willOpen);
    toggle.setAttribute("aria-expanded", String(willOpen));
  });
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    closeAllDropdowns();
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest("[data-nav-dropdown]")) {
    closeAllDropdowns();
  }
});

document.addEventListener("keydown", (event) => {
  const openDropdown = document.querySelector("[data-nav-dropdown].is-open");
  if (event.key === "Escape" && openDropdown) {
    const toggle = openDropdown.querySelector("[data-dropdown-toggle]");
    closeDropdown(openDropdown);
    toggle.focus();
  }
});

year.textContent = new Date().getFullYear();
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
