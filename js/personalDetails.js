//Validate personal details
function validateForm() {
    //Call functions from personalDetailsValidation.js file, if all return true then redirect
    if (validTitle() && validFirstName() && validLastName() && validEmail() && validPhone() && validAddress() && validCity() && validPostcode() && validCountry()) {
        window.location = "summary.html"; //redirect to summary page
        document.getElementById("detailsForm").reset();
    }
}