//Check email input is valid 
function validEmail() {
    var email = document.getElementById("email").value;
    var checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == "") {
        window.alert("Please enter your email address");
        document.getElementById("email").focus(); //focus on input
        return false;
    } else if (!email.match(checkEmail)) {
        window.alert("You have entered an invalid email address");
        document.getElementById("email").focus();
        return false;
    } else {
        window.alert("You have been added to our mailing list!")
        return true;
    }
}