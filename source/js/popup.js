var buttonSubmit = document.querySelector(".form__submit");
// var form = document.querySelector(".form");

var popap = document.querySelector(".popup");
var popapMistake = document.querySelector(".popup--mistake");
var popapSubmit = document.querySelector(".popup--submit");
var popapBtnSubmit = document.querySelector(".popup__btn--submit");
var popapBtnMistake = document.querySelector(".popup__btn--mistake");
var surname = document.querySelector(".surname");
var name = document.querySelector(".name");
var email = document.querySelector(".email");

buttonSubmit.addEventListener("click", function () {
  if (!surname.value || !name.value || !email.value) {
    popapMistake.classList.remove("popup--none");
  } else {
    popapSubmit.classList.remove("popup--none");
  }
});

popapBtnSubmit.addEventListener("click", function () {
  popapSubmit.classList.add("popup--none");
});

popapBtnMistake.addEventListener("click", function () {
  popapMistake.classList.add("popup--none");
});
