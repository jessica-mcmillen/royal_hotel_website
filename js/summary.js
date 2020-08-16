//Display all details stored in local storage for booking and output to page for user to review before booking
function displaySummary() {
    document.getElementById("title").innerHTML = localStorage.getItem("title");
    document.getElementById("firstname").innerHTML = localStorage.getItem("firstname");
    document.getElementById("lastname").innerHTML = localStorage.getItem("lastname");
    document.getElementById("email").innerHTML = localStorage.getItem("email");
    document.getElementById("phone").innerHTML = localStorage.getItem("phone");
    document.getElementById("address").innerHTML = localStorage.getItem("address");
    document.getElementById("city").innerHTML = localStorage.getItem("city");
    document.getElementById("postcode").innerHTML = localStorage.getItem("postcode");
    document.getElementById("country").innerHTML = localStorage.getItem("country");

    document.getElementById("roomType").innerHTML = localStorage.getItem("roomType");
    document.getElementById("checkIn").innerHTML = localStorage.getItem("checkInDate");
    document.getElementById("checkOut").innerHTML = localStorage.getItem("checkOutDate");
    document.getElementById("totalNights").innerHTML = localStorage.getItem("totalNights");
    document.getElementById("adultNo").innerHTML = localStorage.getItem("adultCount");
    document.getElementById("childNo").innerHTML = localStorage.getItem("childCount");
    //Check if late check out is chosen by user, if not don't display cost
    if (localStorage.getItem("lateCheckOutTotal") == 0) {
        document.getElementById("lateCheckout").innerHTML = "No";
    } else {
        document.getElementById("lateCheckout").innerHTML = "&#xa3;" + localStorage.getItem("lateCheckOutTotal");
    }
    //Check if breakfast is chosen by user, if not don't display cost
    if (localStorage.getItem("breakfastTotal") == 0) {
        document.getElementById("breakfastTotal").innerHTML = "No";
    } else {
        document.getElementById("breakfastTotal").innerHTML = "&#xa3;" + localStorage.getItem("breakfastTotal");
    }
    //Check if dinner is chosen by user, if not don't display cost
    if (localStorage.getItem("dinnerTotal") == 0) {
        document.getElementById("dinnerTotal").innerHTML = "No";
    } else {
        document.getElementById("dinnerTotal").innerHTML = "&#xa3;" + localStorage.getItem("dinnerTotal");
    }
    document.getElementById("roomRate").innerHTML = "&#xa3;" + localStorage.getItem("roomRate");
    document.getElementById("bookingTotal").innerHTML = "&#xa3;" + localStorage.getItem("bookingTotal");
}

function toPayment() {
    window.location = "payment.html"; //redirect to payment page
}