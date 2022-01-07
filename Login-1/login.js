let eInput = document.getElementById("emailInput");
let pInput = document.getElementById("passwordInput");
let submitBtn = document.getElementById("submit");
let loginGreen = document.getElementById("loginSuccessfull");
let loginRed = document.getElementById("loginFailed");
let decider = 0
// let forms = document.getElementById("forForms");


// let toAuthorize = () => {
//     if(eInput === "deepu@gmail.com" && pInput === "12345678"){
//         console.log("login successfull")
//     }else{
//         console.log("login unsuccessfull")
//     }
// }

submitBtn.addEventListener("click", () => {
    if (eInput.value === "deepu@gmail.com" && pInput.value === "qwerty") {
        decider = 1
        // alert("login successfull");
        loginColors();
        $(function() {
            $('#forForms').delay(3000).submit();
        });
    } else {
        // alert("login failed");
        loginColors();
        setTimeout(() => {
            if (decider === 0) {
                eInput.value = ""
                pInput.value = ""
                loginRed.style.visibility = "hidden";
            }
        }, 2000);
        
    }
})

let toDashboard = () => {
    if (decider === 1) {
        return true
    } else {
        return false
    }
}

let loginColors = () => {
    if (decider === 1) {
        loginGreen.style.visibility = "visible";
    } else {
        loginRed.style.visibility = "visible";
    }
}