(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };
})();

// Burger handler

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header_nav");
  const menuClose = document.querySelector(".header_nav_close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header_nav_active");
    // console.log("9");
  });
  menuClose.addEventListener("click", () => {
    menu.classList.remove("header_nav_active");
  });
})();
