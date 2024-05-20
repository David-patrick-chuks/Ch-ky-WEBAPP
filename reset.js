const hide_icon = document.getElementById("hide_icon");
const hide_icon2 = document.getElementById("hide_icon2");
const password = document.getElementById('password');
const password2 = document.getElementById("password2");
const form = document.getElementById('form');
///turn off auto completion for all my inputs

document.getElementById("form").setAttribute('autocomplete', 'off');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    ////get aLL the input values

    //code for user name validation
    //error message box
    const PASSWORDborder = document.getElementById("BBc");
    const PASSWORDborder2 = document.getElementById("BBd");

    const passwordERROR = document.getElementById("error33")
    const passwordERROR2 = document.getElementById("error44");
    let completed = true;

    const reqEXPpassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (password.value === "") {
        passwordERROR.textContent = "Password is required"
        passwordERROR.style.color = "brown";
        PASSWORDborder.classList.add("bbb");
        hide_icon2.style.display = "none"
        completed = false;


    } else if (!reqEXPpassword.test(password.value)) {
        passwordERROR.textContent = "Password must be at least 8 characters, Uppercase, Lowercase, Number."
        passwordERROR.style.color = "brown";
        PASSWORDborder.classList.add("bbb");
        hide_icon.style.display = "block"
        password.value = password.value.trim();


    } else {
        passwordERROR.textContent = "";
        PASSWORDborder.classList.remove("bbb");
        PASSWORDborder.classList.add("bbhide");
        hide_icon.style.display = "block"



    }

    if (password2.value === "") {
        passwordERROR2.textContent = "Password is required"
        passwordERROR2.style.color = "brown";
        PASSWORDborder2.classList.add("bbb");
        hide_icon2.style.display = "none"
        completed = false;
    }else if(password.value != password2.value){
        passwordERROR2.textContent = "Password not match"
        passwordERROR2.style.color = "brown";
        PASSWORDborder2.classList.add("bbb");
        hide_icon2.style.display = "block"
    }else if(password2.lenght >2){
        hide_icon2.style.display = "block"

    }else {
        passwordERROR2.textContent = "";
        PASSWORDborder2.classList.remove("bbb");
        PASSWORDborder2.classList.add("bbhide");
        hide_icon.style.display = "block"



    }



    if (completed == true && password.value == password2.value) {
        window.location.href = "set.html";
    } else {
        console.log("fill required info");
    }






});

//toggle my eye icon to view and hide password
hide_icon.addEventListener('click', () => {
    if (password2.type === "password"  && password.type === "password") {
        hide_icon2.style.backgroundColor = "transparent";
        password2.type = "text";
        hide_icon.style.backgroundColor = "transparent";
        password.type = "text";

    } else {
        password2.type = "password";
        hide_icon2.style.backgroundColor = "black";
        password.type = "password";
        hide_icon.style.backgroundColor = "black";

    }
    
})

//toggle my eye icon to view and hide password
hide_icon2.addEventListener('click', () => {
    if (password2.type === "password"  && password.type === "password") {
        hide_icon2.style.backgroundColor = "transparent";
        password2.type = "text";
        hide_icon.style.backgroundColor = "transparent";
        password.type = "text";

    } else {
        password2.type = "password";
        hide_icon2.style.backgroundColor = "black";
        password.type = "password";
        hide_icon.style.backgroundColor = "black";

    }
})