//to allow more than one slideshow on the same page
var slideIndex = [1, 1, 1, 1];
var slideId = ["slides", "slides2", "slides3", "slides4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);


//arrows to navigate through images
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
        slideIndex[no] = 1
    }
    if (n < 1) {
        slideIndex[no] = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}

//redirect to booking page when button clicked
function bookingRedirect(type) {
    //use parameter passed in to set roomType to "Pods"
    localStorage.setItem("roomType", type);
    window.location = "booking.html";
}