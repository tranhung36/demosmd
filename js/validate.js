localStorage.setItem("email", "testuser@example.com");
localStorage.setItem("password", "test1234");

function Validation(element) {
  element.input.forEach((e) => {
    const ele = document.getElementById(e);
    ele.onblur = (e) => {
      if (!ele.value) {
        const mess = ele.parentElement.querySelector(".form-message");
        mess.innerText = "This field must be require";
        ele.parentElement.classList.add("invalid");
      } else {
        const mess = ele.parentElement.querySelector(".form-message");
        mess.innerText = "";
        ele.parentElement.classList.remove("invalid");
      }
    };
    ele.oninput = (e) => {
      if (!ele.value) {
        const mess = ele.parentElement.querySelector(".form-message");
        mess.innerText = "This field must be require";
        ele.parentElement.classList.add("invalid");
      } else {
        const mess = ele.parentElement.querySelector(".form-message");
        mess.innerText = "";
        ele.parentElement.classList.remove("invalid");
      }
    };
  });
}

const email = document.getElementById("email");
const password = document.getElementById("password");
const emailLocal = localStorage.getItem("email");
const passLocal = localStorage.getItem("password");
const button = document.querySelector(".form-submit");

button.onclick = (e) => {
  if (email.value == emailLocal && password.value == passLocal) {
    alert("login successfully");
    localStorage.setItem("username", "Hung Tran");
    window.location.href = "http://127.0.0.1:5500/home.html";
    return false;
  } else {
    window.location = "http://127.0.0.1:5500/login.html";
    alert("wrong email or password");
  }
};
