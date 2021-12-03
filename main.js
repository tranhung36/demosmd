var loginForm = document.getElementById("signin");
var registerForm = document.getElementById("signup");

function signUp() {
    registerForm.style.left = "75%";
    loginForm.style.left = "-60%";
}

function signIn() {
    registerForm.style.left = "-60%";
    loginForm.style.left = "75%";
}