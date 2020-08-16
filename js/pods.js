//load slides when page loads
window.onload = function() {

    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("slides");
        var dots = document.getElementsByClassName("dot");
        //for loop to loop through images 
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        //change colour of dot to show image has changed
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("activeDot", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " activeDot";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
}

//redirect to booking page when button clicked
function bookingRedirect(type) {
    //use parameter passed in to set roomType to "Pods"
    localStorage.setItem("roomType", type);
    window.location = "booking.html";
}