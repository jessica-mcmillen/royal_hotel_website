//Validate card name input
function validCardName() {
    var cardName = document.getElementById("cardName").value;
    var hasNumber = /\d/; //Regex to check no numbers entered
    if (cardName == "") { //Check if input is empty
        window.alert("Please enter name on the card");
        document.getElementById("cardName").style.borderColor = "red"; //Set border colour to red
        document.getElementById("cardName").focus(); //Focus on input field
        return false;
    } else if (hasNumber.test(cardName)) {
        window.alert("Please only enter letters/characters for your name");
        document.getElementById("cardName").style.borderColor = "red";
        document.getElementById("cardName").focus();
        return false;
    } else {
        document.getElementById("cardName").style.borderColor = "green";
        return true;
    }
}

//Validate card number input
function validCardNumber() {
    var cardNum = document.getElementById("cardNum").value;
    var checkNum = /^[0-9]{16}$/; //Regex to check 16 numbers are entered
    if (cardNum == "") {
        window.alert("Please enter your card number");
        document.getElementById("cardNum").style.borderColor = "red";
        document.getElementById("cardNum").focus();
        return false;
    } else if (!cardNum.match(checkNum)) {
        window.alert("Please enter 16 digit card number");
        document.getElementById("cardNum").style.borderColor = "red";
        document.getElementById("cardNum").focus();
        return false;
    } else {
        document.getElementById("cardNum").style.borderColor = "green";
        return true;
    }
}

//Validate expiry month input
function validMonth() {
    var expMonth = document.getElementById("expMonth").value;
    if (expMonth == "") {
        window.alert("Please select your expiry month");
        document.getElementById("expMonth").style.borderColor = "red";
        document.getElementById("expMonth").focus();
        return false;
    } else {
        document.getElementById("expMonth").style.borderColor = "green";
        return true;
    }
}

//Validate expiry year input
function validYear() {
    var expYear = document.getElementById("expYear").value;
    if (expYear == "") {
        window.alert("Please select your expiry year");
        document.getElementById("expYear").style.borderColor = "red";
        document.getElementById("expYear").focus();
        return false;
    } else {
        document.getElementById("expYear").style.borderColor = "green";
        return true;
    }
}

//Validate CVV input
function validCVV() {
    var cvv = document.getElementById("cvv").value;
    var checkCVV = /^[0-9]{3}$/; //Regec to check only 3 numbers entered
    if (cvv == "") {
        window.alert("Please enter CVV number");
        document.getElementById("cvv").style.borderColor = "red";
        document.getElementById("cvv").focus();
        return false;
    } else if (!cvv.match(checkCVV)) {
        window.alert("Please enter 3 digit CVV number");
        document.getElementById("cvv").style.borderColor = "red";
        document.getElementById("cvv").focus();
        return false;
    } else {
        document.getElementById("cvv").style.borderColor = "green";
        return true;
    }
}