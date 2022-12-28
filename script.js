const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

dropdownTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    const dropdown = trigger.nextElementSibling;
    dropdown.classList.toggle("visible");
  });
});
