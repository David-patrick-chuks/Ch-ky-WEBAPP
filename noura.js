
///call all the input field

const inputName = document.getElementById("inputName")
const inputEmail = document.getElementById("inputEmail")
const inputPassWord = document.getElementById("inputPassWord")


//call all your Error TEXT Box

const wrongName = document.getElementById("wrongName")
const wrongEmail = document.getElementById("wrongEmail")
const wrongPassWord = document.getElementById("wrongPassword")


//call the FORM 
const Myform = document.getElementById('form');
// turn off autocomplete i.e disable suggestions
Myform.setAttribute('autocomplete', 'off');
/// add a submit event to the form //make sure your button type is set to 'submit'

Myform.addEventListener('submit', (event) => {
    // use the preventDefault to prevent the from submitting the input
    event.preventDefault();
    //----use a boolean to check if all fields are filled----//
    let allFields = true;

    //validating the name input

    if (inputName.value === "") { /// checks if the input is empty
        wrongName.textContent = "enter your first name"
        wrongName.style.color = "red"  // change the text color
        allFields = false;
    } else if (inputName.value.length <= 2) {
        wrongName.textContent = "name must be more 2 characters"
        wrongName.style.color = "red"  // change the text color
        
    } else {
        wrongName.textContent = "" // clear the message if input passes the coniditions

    }

    /// validating the email address input
    const regEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    ///regular expression to test() if the string is a valid email address 
    if (inputEmail.value == "") {/// checks if the input is empty
        wrongEmail.textContent = "enter your email address"
        wrongEmail.style.color = "red"  // change the text color
        allFields = false;
    } else if (!regEXP.test(inputEmail.value)) {
        wrongEmail.textContent = " email address is not valid"
        wrongEmail.style.color = "red"  // change the text color
    } else {
        wrongEmail.textContent = "" // clear the message if input passes the coniditions

    }

    /// validating the password input

    // inputPassWord.setAttribute("type", "password");// set to password type
    const reqEXPpassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    /// A regular expression RULE that says password must contain at least 8 passwords with one uppercase, lowercase, and number
    if (inputPassWord.value == "") {/// check if the input is empty
        wrongPassWord.textContent = "enter your password"
        wrongPassWord.style.color = "red"  // change the text color
        allFields = false;
    } else if (!reqEXPpassword.test(inputPassWord.value)) {
        wrongPassWord.textContent = "at least 8 password required"
        wrongPassWord.style.color = "red"  // change the text color

    } else {
        wrongPassWord.textContent = "" // clear the message if input passes the coniditions

    }





    /// this check all fields  if they are not empty or not
    if (allFields == true) {
        console.log("success all field is filled");
        ////you can link another HTML FILE to your Button here 
        // window.location.href = "chuks.html";----->
    } else {
        console.log("allFields are yet to be filled")
    }


})


