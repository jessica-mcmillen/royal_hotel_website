//Validate payment details
function validateForm() {
    //Call functions from paymentValidation.js file, if all return true then redirect
    if (validCardName() && validCardNumber() && validMonth() && validYear() && validCVV()) {
        if (confirm("Confirm booking?")) { //Confirm pop up 
            //add check in date to unavailable dates as only one pod
            var checkin = localStorage.getItem("checkInDate");
            checkin = checkin.toString();
            //update unavailable dates in local storage
            localStorage.setItem("unavailableDate", checkin);
            window.location = "confirmation.html"; //redirect to confirmation page
            document.getElementById("paymentForm").reset(); //reset form
        }
    }
}