//Validate payment details
function validateForm() {
    //Call functions from paymentValidation.js file, if all return true then redirect
    if (validCardName() && validCardNumber() && validMonth() && validYear() && validCVV()) {
        if (confirm("Confirm booking?")) { //Confirm pop up 
            window.location = "confirmation.html"; //redirect to confirmation page
            document.getElementById("paymentForm").reset(); //reset form
        }
    }
}