var i = 0;

//loading bar
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("loadBar");
        var width = 1;
        var id = setInterval(frame, 30); //3 seconds

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
                window.location = "contact.html"; //redirect to contact page
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

document.getElementById("emailOut").innerHTML = localStorage.getItem("email"); //get email address from local storage from contact form