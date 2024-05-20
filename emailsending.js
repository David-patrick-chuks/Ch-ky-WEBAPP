const mainlogin = document.getElementById('mainlogin');
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

    const EMAILborder = document.getElementById("BBb");

    
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

  


    if (completed == true && regEXP.test(email.value)) {
        window.location.href = "Email Sent.html";
    }else{
        console.log("fill required info");
    }






});

const baglog = document.getElementById("baglog")
baglog.addEventListener("click", () => {
    window.location.href = "login.html";
});
