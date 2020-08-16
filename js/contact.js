//if all validation functions return true then redirect
function validateForm() {
    //validation functions are called from personalDetailsValidatio.js file
    if (validEmail() && validFirstName() && validLastName() && validCountry() && validMessage()) {
        window.location = "enquirySubmitted.html";
        document.getElementById("contactForm").reset(); //reset form
    }
}

//check if message input is valid
function validMessage() {
    var message = document.getElementById("message").value;
    if (message == "") {
        window.alert("Please enter your message"); //error alert
        document.getElementById("message").style.borderColor = "red"; //border set to red
        document.getElementById("message").focus(); //focus on input
        return false;
    } else {
        document.getElementById("message").style.borderColor = "green"; //border set to green
        return true;
    }
}