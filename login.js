// const mainlogin = document.getElementById('mainlogin');
const hide_icon = document.getElementById('hide_icon');
const password = document.getElementById('password');
const email = document.getElementById('email');
const form = document.getElementById('form');
const aggrement = document.getElementById("error_agree");
const userrealEMAIL = document.getElementById("userrealEMAIL")
///turn off auto completion for all my inputs

document.getElementById("form").setAttribute('autocomplete', 'off');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    ////get aLL the input values

    //code for user name validation
    //error message box
    const emailERROR = document.getElementById("error_email");
    const passwordERROR = document.getElementById("error33");

    const EMAILborder = document.getElementById("BBb");
    const PASSWORDborder = document.getElementById("BBc");

    
    let completed = true;

    const regEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //email validation
    if (email.value === "") {
        emailERROR.textContent = "Email is required";
        emailERROR.style.color = "brown";
        EMAILborder.classList.add("bbb");
        completed = false;


    } else if (!regEXP.test(email.value)) {
        emailERROR.style.color = "brown";
        email.value = email.value.trim()
        email.value = email.value.toLowerCase()
        EMAILborder.classList.add("bbb");
        emailERROR.textContent = "Enter a valid Email address";


    } else {
        // emailERROR.style.color = "brown";
        emailERROR.textContent = "";
        // userrealEMAIL.textContent = email.value
        EMAILborder.classList.remove("bbb");
        EMAILborder.classList.add("bbhide");



    }

    const reqEXPpassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (password.value === "") {
        passwordERROR.textContent = "Password is required"
        passwordERROR.style.color = "brown";
        PASSWORDborder.classList.add("bbb");
        hide_icon.style.display = "none"
        completed = false;


    } else if (!reqEXPpassword.test(password.value)) {
        passwordERROR.textContent = "Password must be at least 8 characters and contain Uppercase, Lowercase and Number."
        passwordERROR.style.color = "brown";
        PASSWORDborder.classList.add("bbb");
        hide_icon.style.display = "block"
        password.value = password.value.trim();


    } else {
        passwordERROR.textContent = "";
        PASSWORDborder.classList.remove("bbb");
        PASSWORDborder.classList.add("bbhide");



    }


    if (completed == true && regEXP.test(email.value) && reqEXPpassword.test(password.value)) {
        window.location.href = "set.html";
        console.log("readdy");

    }else{
        console.log("fill required info");
    }






});



//toggle my eye icon to view and hide password
hide_icon.addEventListener('click', () => {
    if (password.type === "password") {
        hide_icon.style.backgroundColor = "transparent";
        password.type = "text";

    } else {
        password.type = "password";
        hide_icon.style.backgroundColor = "black";

    }
})
const signupBACKarrow = document.getElementById("signupBACKarrow")
const fp = document.getElementById("fp")
fp.addEventListener("click", () => {
    window.location.href = "Forgot Password.html";
});
signupBACKarrow.addEventListener("click", () => {
    window.location.href = "index.html";
});

const backtosignup = document.getElementById("backtosignup")
backtosignup.addEventListener("click", () => {
    window.location.href = "sign up.html";
});
