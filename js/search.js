var input = document.getElementById("search");

input.addEventListener("keyup", function(event) {
    //Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        //Cancel the default action, if needed
        event.preventDefault();
        //Trigger the button element with a click
        document.getElementById("searchInput").click();
    }
});

//Possible search redirects depending on user input
function search() {
    var searchVal = document.getElementById("search").value;
    searchVal = searchVal.toLowerCase();

    if (searchVal == 'contact' || searchVal == 'address' || searchVal.includes("email") || searchVal.includes("phone")) {
        window.location = "contact.html";
    } else if (searchVal == 'about' || searchVal == 'reviews') {
        window.location = "about.html";
    } else if (searchVal == 'photos' || searchVal == 'images') {
        window.location = "gallery.html";
    } else if (searchVal.includes("gift") || searchVal.includes("vouchers")) {
        window.location = "giftVouchers.html";
    } else
    if (searchVal == 'restaurants' || searchVal.includes("menu")) {
        window.location = "restaurant.html";
    } else if (searchVal.includes("afternoon") || searchVal.includes("tea")) {
        window.location = "afternoonTea.html";
    } else if (searchVal.includes("glamping") || searchVal.includes("pods")) {
        window.location = "glampingPods.html";
    } else if (searchVal == 'careers' || searchVal == 'jobs') {
        window.location = "careers.html";
    } else {
        alert("Sorry this can't be found on our website. Please amend your search")
    }

}