var i = 0;

//display loading bar
function loadBar() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("loadBar");
        var width = 1;
        var id = setInterval(frame, 40); //4 seconds

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
                window.location = "index.html"; //redirect to index page
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}