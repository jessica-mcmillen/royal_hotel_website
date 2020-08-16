document.getElementById("roomTypeOutput").innerHTML = localStorage.getItem("roomType"); //output type of room selected by user 

var room = localStorage.getItem("roomType");
var checkInDate;
var checkOutDate;
var adultNo;
var childNo;
var adultNum;;
var childNum;
var today = new Date(); //set todays date
var unavailableDatesPods = ["12/08/2020", "24/08/2020", "28/08/2020", "02/09/2020", "12/09/2020"];
var unavailableDatesPodsStored;
var totalNights;
var maxPeople;
var totalPeople;

var twinCost = 100;
var doubleCost = 100;
var deluxeCost = 129;
var juniorSuiteCost = 159;

var podTwoCost = 150;
var podThreeCost = 139;
var podFourCost = 129;

var lateCheckOutCost = 10;
var breakfastCost = 10;
var dinnerCost = 25;

var breakfastTotal;
var dinnerTotal;

var bookingTotal;


//jQuery to display calendars for date input
$(function() {
    $("#datepickerCheckIn").datepicker({
        onSelect: function(checkIn) {
            checkInDate = checkIn;
            var min = $(this).datepicker('getDate'); // Get selected date
            $("#datepickerCheckOut").datepicker('option', 'minDate', min || '0'); // Set other min, default to today

        },
        minDate: today, //date before today's date can't be selected
        dateFormat: 'dd/mm/yy' //set date format
    })
    $("#datepickerCheckOut").datepicker({
        onSelect: function(checkOut) {
            checkOutDate = checkOut;
        },
        dateFormat: 'dd/mm/yy'
    });
})

function calculateTotalNights() {
    var start = $("#datepickerCheckIn").datepicker("getDate"); //get check in date selected
    var end = $("#datepickerCheckOut").datepicker("getDate"); //get check out date selected
    totalNights = (end - start) / (1000 * 60 * 60 * 24);
    localStorage.setItem("totalNights", totalNights); //set total nights in local storage
}

//display room details depending on what user selects
function displayRoomDetails() {
    calculateTotalPeople(); //call function
    if (room == "Twin Room") {
        document.getElementById('image').innerHTML += "<img src='../media/galleryImages/rooms/twin.jpg' alt='Twin Room' width='100%' height='100%'>";
        document.getElementById('roomName').innerHTML += "Twin Room"
        document.getElementById('info').innerHTML += "Relax in one of the hotels twin rooms, elegantly decorated and designed to provide comfortable surrounding for living, working or sleeping."
        document.getElementById('details').innerHTML += "&#163;" + twinCost + " per night";
        return "twin";
    } else if (room == "Double Room") {
        document.getElementById('image').innerHTML += "<img src='../media/galleryImages/rooms/doubleSmall.jpg' alt='Double Room' width='100%' height='100%'>";
        document.getElementById('roomName').innerHTML += "Double Room"
        document.getElementById('info').innerHTML += "Relax in one of the hotels double rooms, elegantly decorated and designed to provide comfortable surrounding for living, working or sleeping."
        document.getElementById('details').innerHTML += "&#163;" + doubleCost + " per night";
        return "double";
    } else if (room == "Deluxe Double") {
        document.getElementById('image').innerHTML += "<img src='../media/galleryImages/rooms/double.jpg' alt='Deluxe Double Room' width='100%' height='100%'>";
        document.getElementById('roomName').innerHTML += "Deluxe Double Room"
        document.getElementById('info').innerHTML += "Our spacious deluxe double rooms reflect the very best in luxury with sleek uncompromising style. These expansive rooms comprise of beautiful throws, dramatic floor length curtains, antique and bespoke furnishings and works of art all to complement these gracious high ceilinged rooms."
        document.getElementById('details').innerHTML += "&#163;" + deluxeCost + " per night";
        return "doubleDeluxe";
    } else if (room == "Junior Suite") {
        document.getElementById('image').innerHTML += "<img src='../media/galleryImages/rooms/juniorSuite.jpg' alt='Junior Suite' width='100%' height='100%'>";
        document.getElementById('roomName').innerHTML += "Junior Suite"
        document.getElementById('info').innerHTML += "Relax and unwind in one of our beautifully decorated suites. With all the space and comfort you need for a magical break away."
        document.getElementById('details').innerHTML += "&#163;" + juniorSuiteCost + " per night <br> Max 2 people";
        return "suite";
    } else if (room == "Pods") {
        var pod;
        document.getElementById('image').innerHTML += "<img src='../media/pod.jpg' alt='Glamping Pod' width='100%' height='100%'>";
        document.getElementById('roomName').innerHTML += "Glamping Pod"
        document.getElementById('info').innerHTML += "Relax and enjoy the countryside in a pod. With all the space and comfort you need for a magical break away, including private use of your own hot tub."
        if (totalPeople == '2') {
            document.getElementById('details').innerHTML += "&#163;" + podTwoCost + " per night <br> Max 4 people";
            pod = "pod2";
        } else if (totalPeople == '3') {
            document.getElementById('details').innerHTML += "&#163;" + podThreeCost + " per night <br> Max 4 people";
            pod = "pod3";
        } else if (totalPeople == '4') {
            document.getElementById('details').innerHTML += "&#163;" + podFourCost + " per night <br> Max 4 people";
            pod = "pod4";
        }
        return pod;
    }
}

//run when search button clicked
function searchBooking() {
    unavailableDatesPodsStored = JSON.parse(localStorage.getItem("unavailableDates")); //get unavailable dates stored in array in local storage
    window.alert(unavailableDatesPodsStored)
    calculateTotalPeople(); // call function
    //check if dates aren't selected
    if ((checkInDate == null) || (checkOutDate == null)) {
        window.alert("Please select dates");
        location.reload(); // refresh page
    } else if (checkInDate == checkOutDate) { //check if dates are the same
        window.alert("Please select at least one night");
        location.reload(); // refresh page
    } else if (totalPeople > maxPeople) { //check if the total people selected are more than max people for room selected
        if ((room == "Twin Room") || (room == "Double Room") || (room == "Deluxe Double") || (room == "Junior Suite")) {
            window.alert("Maximum people for this room is 2. Please change your number or purchase another room.")
        } else {
            window.alert("Maximum people for this room is 4. Please change your number or purchase another room.")
        }
    } else {
        unavailable.style.display = "none"; //div "unavailable" hidden until condition met 
        if (room == "Pods") {
            if ((unavailableDatesPods.indexOf(checkInDate) >= 0) || (unavailableDatesPodsStored.indexOf(checkInDate) >= 0)) {
                unavailable.style.display = "block"; //display unavailable info
            } else {
                //store inputted values in loocal storage
                localStorage.setItem("checkInDate", checkInDate);
                localStorage.setItem("checkOutDate", checkOutDate);
                localStorage.setItem("adultCount", adultNum);
                localStorage.setItem("childCount", childNum);
                available.style.display = "block"; //display room info
                displayRoomDetails(); //call function
            }
        } else {
            localStorage.setItem("checkInDate", checkInDate);
            localStorage.setItem("checkOutDate", checkOutDate);
            localStorage.setItem("adultCount", adultNum);
            localStorage.setItem("childCount", childNum);
            available.style.display = "block"; //display room info
            displayRoomDetails(); //call function
        }
    }
}

//calculate total number of people selected for booking
function calculateTotalPeople() {
    adultNo = document.getElementById("adultCount").value;
    childNo = document.getElementById("childCount").value;
    adultNum = parseInt(adultNo, 10); //convert string to number
    childNum = parseInt(childNo, 10); //convert string to number
    totalPeople = adultNum + childNum;
    //set max people depending on room type
    if ((room == "Twin Room") || (room == "Double Room") || (room == "Deluxe Double") || (room == "Junior Suite")) {
        maxPeople = 2;
    } else {
        maxPeople = 4;
    }
}

function booking() {
    calculateTotalNights(); //call function
    var lateCheckOutValue = document.getElementById("lateCheckOut").value;
    var breakfastValue = document.getElementById("breakfast").value;
    var dinnerValue = document.getElementById("dinner").value;

    //set late checkout depending on user selection
    if (lateCheckOutValue == "yes") {
        localStorage.setItem("lateCheckOutTotal", lateCheckOutCost);
    } else {
        lateCheckOutCost = 0;
        localStorage.setItem("lateCheckOutTotal", lateCheckOutCost);
    }

    //set breakfast depending on user selection
    if (breakfastValue == "yes") {
        var breakfastSubTotal = breakfastCost * (adultNum + childNum);
        breakfastTotal = breakfastSubTotal * totalNights;
        localStorage.setItem("breakfastTotal", breakfastTotal);
    } else {
        breakfastTotal = 0;
        localStorage.setItem("breakfastTotal", breakfastTotal);
    }

    //set dinner depending on user selection
    if (dinnerValue == "yes") {
        dinnerTotal = dinnerCost * (adultNum + childNum);
        localStorage.setItem("dinnerTotal", dinnerTotal);
    } else {
        dinnerTotal = 0;
        localStorage.setItem("dinnerTotal", dinnerTotal);
    }

    //set room cost
    if (displayRoomDetails() == "twin") {
        roomRate = totalNights * twinCost;
    } else if (displayRoomDetails() == "double") {
        roomRate = totalNights * doubleCost;
    } else if (displayRoomDetails() == "doubleDeluxe") {
        roomRate = totalNights * deluxeCost;
    } else if (displayRoomDetails() == "suite") {
        roomRate = totalNights * juniorSuiteCost;
    } else if (displayRoomDetails() == "pod2") {
        roomRate = totalNights * podTwoCost;
    } else if (displayRoomDetails() == "pod3") {
        roomRate = totalNights * podThreeCost;
    } else if (displayRoomDetails() == "pod4") {
        roomRate = totalNights * podFourCost;
    }

    //convert string to number
    bookingTotal = parseInt(bookingTotal, 10);
    breakfastTotal = parseInt(breakfastTotal, 10);
    dinnerTotal = parseInt(dinnerTotal, 10);
    roomRate = parseInt(roomRate, 10);

    bookingTotal = lateCheckOutCost + breakfastTotal + dinnerTotal + roomRate; //calculate booking total

    localStorage.setItem("roomRate", roomRate);
    localStorage.setItem("bookingTotal", bookingTotal);
    window.location = "personalDetails.html"; //redirect to person details page
    document.getElementById("form").reset(); //reset form
    document.getElementById("formBook").reset();
}