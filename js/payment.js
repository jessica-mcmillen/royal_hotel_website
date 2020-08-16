//Validate payment details
function validateForm() {
    //Call functions from paymentValidation.js file, if all return true then redirect
    if (validCardName() && validCardNumber() && validMonth() && validYear() && validCVV()) {
        var checkin = localStorage.getItem("checkInDate");
        window.alert(checkin)

        var unavailableDatesPodsStored = JSON.parse(localStorage.getItem("unavailableDates"));
        window.alert(unavailableDatesPodsStored)
            //add check in date to unavailable dates as only one pod
        unavailableDatesPodsStored.push(checkInDate);
        window.alert(unavailableDatesPodsStored)
            //update unavailable dates in local storage
        localStorage.setItem("unavailableDates", JSON.stringify(unavailableDatesPodsStored));
        if (confirm("Confirm booking?")) { //Confirm pop up 
            window.location = "confirmation.html"; //redirect to confirmation page
            document.getElementById("paymentForm").reset(); //reset form

        }
    }
}