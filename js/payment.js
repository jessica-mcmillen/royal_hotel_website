//Validate payment details
function validateForm() {
    //Call functions from paymentValidation.js file, if all return true then redirect
    if (validCardName() && validCardNumber() && validMonth() && validYear() && validCVV()) {
        if (confirm("Confirm booking?")) { //Confirm pop up 
            window.location = "confirmation.html"; //redirect to confirmation page
            document.getElementById("paymentForm").reset(); //reset form
            checkin = document.getElementById("checkIn").innerHTML = localStorage.getItem("checkInDate");
            unavailableDatesPodsStored = JSON.parse(localStorage.getItem("unavailableDates"));
            //add check in date to unavailable dates as only one pod
            unavailableDatesPodsStored.push(checkInDate);
            //update unavailable dates in local storage
            localStorage.setItem("unavailableDates", JSON.stringify(unavailableDatesPodsStored));
        }
    }
}