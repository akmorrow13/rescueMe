
// validates user input on signup
function validateCredentials() {
    console.log("signup");
    var decoratorEmail = document.getElementById("paperEmail");
    var inputEmail = document.getElementById("inputEmail");
    
    var decoratorPassword = document.getElementById("paperPassword");
    var inputPassword = document.getElementById("inputPassword");
    
    decoratorEmail.isInvalid = !inputEmail.validity.valid;
    decoratorPassword.isInvalid = !inputPassword.validity.valid;
}

function validateLogin(){
    validateCredentials();
}