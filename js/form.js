const loginLink = document.querySelector(".contacts .contacts-link");
const loginPopup = document.querySelector(".modal-form");
const loginClose = loginPopup.querySelector(".modal-form__close-btn");
const loginForm = loginPopup.querySelector(".modal-form__inner");
const loginLogin = loginPopup.querySelector("[name=fname]");
const loginEmail = loginPopup.querySelector("[name=email]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
  if (storage) {
    loginLogin.value = storage;
    loginEmail.focus();
  } else {
    loginLogin.focus();
  }
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginEmail.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("email", loginLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});