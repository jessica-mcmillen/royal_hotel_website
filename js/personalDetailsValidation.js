//Options for Country select drop down
function displayCountries() {
    var output = document.getElementById("country");
    var countries = new Array(); //Array to store countries
    countries = ["United Kingdom", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua And Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia, Plurinational State Of", "Bonaire, Sint Eustatius And Saba", "Bosnia And Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic Of The", "Cook Islands", "Costa Rica", "Côte D'ivoire", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-bissau", "Guyana", "Haiti", "Heard Island And Mcdonald Islands", "Holy See (vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic Of", "Iraq", "Ireland", "Isle Of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic Of", "Korea, Republic Of", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia, The Former Yugoslav Republic Of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States Of", "Moldova, Republic Of", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State Of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Réunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthélemy", "Saint Helena, Ascension And Tristan Da Cunha", "Saint Kitts And Nevis", "Saint Lucia", "Saint Martin (french Part)", "Saint Pierre And Miquelon", "Saint Vincent And The Grenadines", "Samoa", "San Marino", "Sao Tome And Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (dutch Part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia And The South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard And Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province Of China", "Tajikistan", "Tanzania, United Republic Of", "Thailand", "Timor-leste", "Togo", "Tokelau", "Tonga", "Trinidad And Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks And Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela, Bolivarian Republic Of", "Viet Nam", "Virgin Islands, British", "Virgin Islands, U.s.", "Wallis And Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];

    //loop through countries array and each as a new option
    for (let i = 0; i < countries.length; i++) {
        var country = new Option(countries[i]);
        output.options.add(country);
    }
}

//Validate title input
function validTitle() {
    var title = document.getElementById("title").value;
    if (title == "Select") {
        window.alert("Please select your title");
        document.getElementById("title").style.borderColor = "red"; //Border colour set to red
        document.getElementById("title").focus(); //Focus on input
        return false;
    } else {
        localStorage.setItem("title", title); //set title in local storage to variable value
        document.getElementById("title").style.borderColor = "green";
        return true;
    }
}

//Validate first name input
function validFirstName() {
    var fname = document.getElementById("fname").value;
    var hasNumber = /\d/; //Regex to check only letters entered
    if (fname == "") { //Check if input is empty
        window.alert("Please enter your first name");
        document.getElementById("fname").style.borderColor = "red";
        document.getElementById("fname").focus();
        return false;
    } else if (hasNumber.test(fname)) {
        window.alert("Please only enter letters/characters for your first name");
        document.getElementById("fname").style.borderColor = "red";
        document.getElementById("fname").focus();
        return false;
    } else {
        localStorage.setItem("firstname", fname);
        document.getElementById("fname").style.borderColor = "green";
        return true;
    }
}

//Validate last name input
function validLastName() {
    var lname = document.getElementById("lname").value;
    var hasNumber = /\d/; //Regex to check only letters entered
    if (lname == "") {
        window.alert("Please enter your last name");
        document.getElementById("lname").style.borderColor = "red";
        document.getElementById("lname").focus();
        return false;
    } else if (hasNumber.test(lname)) {
        window.alert("Please only enter letters/characters for your last name");
        document.getElementById("lname").style.borderColor = "red";
        document.getElementById("lname").focus();
        return false;
    } else {
        localStorage.setItem("lastname", lname);
        document.getElementById("lname").style.borderColor = "green";
        return true;
    }
}

//Validate email input
function validEmail() {
    var email = document.getElementById("email").value;
    var checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //Regex to check valid email entered
    if (email == "") {
        window.alert("Please enter your email address");
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").focus();
        return false;
    } else if (!email.match(checkEmail)) {
        window.alert("You have entered an invalid email address");
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").focus();
        return false;
    } else {
        localStorage.setItem("email", email);
        document.getElementById("email").style.borderColor = "green";
        return true;
    }
}

//Validate phone input
function validPhone() {
    var phone = document.getElementById("phone").value;
    var checkPhone = /^[0-9]{11}$/; //Regex to check input is 11 numbers
    if (phone == "") {
        window.alert("Please enter your phone number");
        document.getElementById("phone").style.borderColor = "red";
        document.getElementById("phone").focus();
        return false;
    } else if (!phone.match(checkPhone)) {
        window.alert("You have entered an invalid phone number");
        document.getElementById("phone").style.borderColor = "red";
        document.getElementById("phone").focus();
        return false;
    } else {
        localStorage.setItem("phone", phone);
        document.getElementById("phone").style.borderColor = "green";
        return true;
    }
}

//Validate address input
function validAddress() {
    var address = document.getElementById("address").value;
    if (address == "") {
        window.alert("Please enter your address");
        document.getElementById("address").style.borderColor = "red";
        document.getElementById("address").focus();
        return false;
    } else {
        localStorage.setItem("address", address);
        document.getElementById("address").style.borderColor = "green";
        return true;
    }
}

//Validate city input
function validCity() {
    var city = document.getElementById("city").value;
    var hasNumber = /\d/; //Regex to check only letters entered
    if (city == "") {
        window.alert("Please enter your city");
        document.getElementById("city").style.borderColor = "red";
        document.getElementById("city").focus();
        return false;
    } else if (hasNumber.test(city)) {
        window.alert("Please only enter letters/characters for your city");
        document.getElementById("city").style.borderColor = "red";
        document.getElementById("city").focus();
        return false;
    } else {
        localStorage.setItem("city", city);
        document.getElementById("city").style.borderColor = "green";
        return true;
    }
}

//Validate postcode input
function validPostcode() {
    var postcode = document.getElementById("postcode").value;
    if (postcode == "") {
        window.alert("Please enter your postcode");
        document.getElementById("postcode").style.borderColor = "red";
        document.getElementById("postcode").focus();
        return false;
    } else {
        localStorage.setItem("postcode", postcode);
        document.getElementById("postcode").style.borderColor = "green";
        return true;
    }
}

//Validate country input
function validCountry() {
    var country = document.getElementById("country").value;
    if (country == "") {
        window.alert("Please select your country");
        document.getElementById("country").style.borderColor = "red";
        document.getElementById("country").focus();
        return false;
    } else {
        localStorage.setItem("country", country);
        document.getElementById("country").style.borderColor = "green";
        return true;
    }
}