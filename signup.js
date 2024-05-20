const hide_icon = document.getElementById('hide_icon');
const SignupBTN = document.getElementById('SignupBTN');
const userName = document.getElementById('userName');
const password = document.getElementById('password');
const email = document.getElementById('email');
const form = document.getElementById('form');
const mycheckbox = document.getElementById('mycheckbox');
const aggrement = document.getElementById("error_agree");
const userrealEMAIL = document.getElementById("userrealEMAIL")
const otpbackbtn = document.getElementById("otpbackbtn")
///turn off auto completion for all my inputs


document.getElementById("form").setAttribute('autocomplete', 'off');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //code for user name validation
    //error message box
    const usernameERROR = document.getElementById("error_name");
    const emailERROR = document.getElementById("error_email");
    const passwordERROR = document.getElementById("error33");

    const USERNAMEborder = document.getElementById("BBa");
    const EMAILborder = document.getElementById("BBb");
    const PASSWORDborder = document.getElementById("BBc");

    
    let completed = true;


    if (userName.value === "") {

        userName.value = userName.value.trimEnd()
        usernameERROR.textContent = "Username is required";
        usernameERROR.style.color = "brown";
        USERNAMEborder.classList.add("bbb");
        // alert("Please enter username")
        completed = false;


    } else if (userName.value.length < 3) {
        userName.value = userName.value.trim() //trimRight()
        usernameERROR.textContent = "Username must more than 2 characters";
        usernameERROR.style.color = "brown";
        USERNAMEborder.classList.add("bbb");

        // alert("username should be more than 2 characters")
    } else {
        usernameERROR.textContent = "";
        USERNAMEborder.classList.remove("bbb");



    }

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
    if (mycheckbox.checked) {
        aggrement.style.display = "none";
        console.log("checked");
    } else {
        aggrement.style.display = "block";
        console.log("unchecked");

    }

    if (completed == true && mycheckbox.checked) {
        window.location.href = "login.html";
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
signupBACKarrow.addEventListener("click", () => {
    window.location.href = "index.html";
});

const loginSignupbtn = document.getElementById("loginSignupbtn")
loginSignupbtn.addEventListener("click", () => {
    window.location.href = "login.html";
});

// SignupBTN.addEventListener("click", (evt) => {
//     // evt.preventDefault();
//     // const nametrim = userName.value.trim();
//     // const emailtrim = email.value.trim();
//     // const passtrim = password.value.trim();

//     // if (nametrim === '') {
//     //     console.log("name");
//     //     return true
//     // }else if(passtrim === ''){
//     //     console.log("pass");
//     //     return true
//     // }else if(emailtrim === ''){
//     //     console.log("email");
//     //     return true
//     // }else{
//     //     console.log("fhhfhhf");
//     //     return false
//     // }
// })








