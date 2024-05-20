const SignupBTN = document.getElementById("SignupBTN");
const loginBTN = document.getElementById("loginBTN");

//Redirect to the signup page-->
SignupBTN.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "sign up.html";
});

loginBTN.addEventListener("click", (ev) => {
    ev.preventDefault();
    window.location.href = "login.html";
});