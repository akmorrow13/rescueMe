
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

function loginFacebook() {
 FB.login(function(response) {
   if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', function(response) {
       console.log('Good to see you, ' + response.name + '.');
     });
   } else {
     console.log('User cancelled login or did not fully authorize.');
   }
 });
}