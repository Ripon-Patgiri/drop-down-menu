document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropDown;
  if (isDropdownButton) {
    currentDropDown = e.target.closest("[data-dropdown]");
    if (currentDropDown) {
      currentDropDown.classList.toggle("active");
    }
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown && dropdown !== currentDropDown) {
      dropdown.classList.remove("active");
    }
  });
});
