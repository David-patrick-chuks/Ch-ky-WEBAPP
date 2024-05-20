

const otpform = document.getElementById('otpFORM');


const otp = Array.from({ length: 4 }, () =>
    Math.floor(Math.random() * 9) + 0)
// console.log(otp);

const input = document.querySelectorAll(".input");
const maxlength = 1;

input.forEach((inputs, index) => {
    // inputs.value = otp[index]
    inputs.type = "number";
    inputs.addEventListener("input", () => {
        if (inputs.length = maxlength) {
            inputs.value = inputs.value.slice(0, maxlength);
        }
    });
})
const darkbody = document.getElementById('dark');
darkbody.addEventListener('click', () => {
    toast.style.display = 'none';
    darkbody.style.display = 'none';
})
setTimeout(() => {
    console.log("dododo");
    otpNUMBERS.textContent = otp.join("");
    otpNUMBERS.style.fontWeight = "800"
    toast.style.display = "block";
    darkbody.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
        darkbody.style.display = "none";
    }, 5000);
}, 2000);

const otpNUMBERS = document.getElementById("otpNUMBERS");
const toast = document.getElementById("toast");
toast.addEventListener("click", () => {
    toast.style.display = "none";
    darkbody.style.display = "none";
    input.forEach((inputs, index) => {
        inputs.value = otp[index]
        inputs.type = "number";

    })
});

const resendOTP = document.getElementById("resendOTP")

resendOTP.addEventListener("click", () => {
    // console.log(otp);

    setTimeout(() => {
        console.log("dododo");
        otpNUMBERS.textContent = otp.join("");
        otpNUMBERS.style.fontWeight = "800"
        toast.style.display = "block";
        setTimeout(() => {
            toast.style.display = "none";
        }, 5000);
    }, 2000);
})







otpbackbtn.addEventListener("click", () => {
    window.location.href = "Email Sent.html";
});
const otpERROR = document.getElementById("otpERROR");
otpform.addEventListener('submit', (evt) => {
    evt.preventDefault();

    input.forEach((inputs) => {
            if (input[0].value.length == 0 && input[1].value.length == 0 && input[2].value.length == 0 && input[3].value.length == 0) {
                otpERROR.style.display = "block";
                otpERROR.textContent = "Verification Code required"
                console.log("one or all input field are empty");
            }else if (input[0].value == otp[0] && input[1].value == otp[1] && input[2].value == otp[2] && input[3].value == otp[3]) {
                window.location.href ="reset password.html";
                console.log("hmmmmmm");
                otpERROR.style.display = "none";
            }else{
                console.log("not cmplete and wrong input");
                otpERROR.style.display = "block";
                otpERROR.textContent = "Enter Correct Verification Code"

            }

            

    })


});

// document.addEventListener("DOMContentLoaded", () => {
//     const otp = Array.from({ length: 4 }, () =>
//         Math.floor(Math.random() * 9) + 1)
//     // console.log(otp);
//     setTimeout(() => {
//         console.log("dododo");
//         otpNUMBERS.textContent = otp.join("");
//         otpNUMBERS.style.fontWeight = "800"
//         toast.style.display = "block";
//         setTimeout(() => {
//             toast.style.display = "none";
//         }, 5000);
//     }, 2000);
// })