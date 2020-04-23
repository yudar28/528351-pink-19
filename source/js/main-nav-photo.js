var header = document.querySelector(".page-header");
var topMenu = document.querySelector(".page-header__top-menu");
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".page-header__toggle");
var titleUserPhoto = document.querySelector(".user-photos__title");

header.classList.remove("page-header--nojs");

navToggle.addEventListener("click", function() {
  navToggle.classList.toggle("page-header__toggle--close");
  if (navToggle.classList.contains("page-header__toggle--close")) {
    navMain.classList.remove("main-nav--closed");
    topMenu.classList.add("page-header__top-menu--active");
    titleUserPhoto.classList.add("user-photos__title--notop");
  } else {
    navMain.classList.add("main-nav--closed");
    topMenu.classList.remove("page-header__top-menu--active");
    titleUserPhoto.classList.remove("user-photos__title--notop");
  }
});
