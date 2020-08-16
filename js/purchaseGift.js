//Validate user input
function validateForm() {
    //Call functions from personalDetailsValidation.js and paymentValidation.js files, if all return true then redirect
    if (validVoucherAmount() && validFirstName() && validLastName() && validEmail() && validAddress() && validCity() && validPostcode() && validCountry() && validCardName() && validCardNumber() && validMonth() && validYear() && validCVV()) {
        var voucherAmount = localStorage.getItem("voucher");
        if (confirm("Confirm purchase of £" + voucherAmount + " voucher?")) {
            window.location = "confirmation.html";
            document.getElementById("paymentForm").reset();
            document.getElementById("detailsForm").reset();
        }
    }
}

//Validate voucher amount input
function validVoucherAmount() {
    var voucher = document.getElementById("voucher").value;
    var checkLetters = /^[0-9]+$/; //Check only numbers entered
    if (voucher == "") { //Check if empty
        window.alert("Please enter an amount for voucher");
        document.getElementById("voucher").style.borderColor = "red"; //Set border colour to red
        document.getElementById("voucher").focus(); //Focus on input
        return false;
    } else if (!voucher.match(checkLetters)) {
        window.alert("You have entered an invalid voucher amount");
        document.getElementById("voucher").style.borderColor = "red";
        document.getElementById("voucher").focus();
        return false;
    } else if (voucher < 10) { //Check input greater than 10
        window.alert("Voucher value must be more than £10");
        document.getElementById("voucher").style.borderColor = "red";
        document.getElementById("voucher").focus();
        return false;
    } else {
        localStorage.setItem("voucher", voucher); //Set voucher value in local storage
        document.getElementById("voucher").style.borderColor = "green";
        return true;
    }
}