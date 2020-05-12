var buttonSubmit = document.querySelector(".form__submit");
// var form = document.querySelector(".form");

var popap = document.querySelector(".popap");
var popapMistake = document.querySelector(".popap--mistake");
var popapSubmit = document.querySelector(".popap--submit");
var popapBtnSubmit = document.querySelector(".popap__btn--submit");
var popapBtnMistake = document.querySelector(".popap__btn--mistake");
var surname = document.querySelector(".surname");
var name = document.querySelector(".name");
var email = document.querySelector(".email");

buttonSubmit.addEventListener("click", function () {
  if (!surname.value || !name.value || !email.value) {
    popapMistake.classList.remove("popap--none");
  } else {
    popapSubmit.classList.remove("popap--none");
  }
});

popapBtnSubmit.addEventListener("click", function () {
  popapSubmit.classList.add("popap--none");
});

popapBtnMistake.addEventListener("click", function () {
  popapMistake.classList.add("popap--none");
});
