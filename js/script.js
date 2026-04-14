document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", clickMenu);

  function clickMenu(e) {
    const target = e.target;
    if (target.closest(".menu__icon")) {
      document.documentElement.classList.toggle("menu-active");
    }
    if (target.closest(".menu__link")) {
      document.documentElement.classList.remove("menu-active");
    }
    if (target.closest(".form__button")) {
      e.preventDefault();
    }
  }
});
