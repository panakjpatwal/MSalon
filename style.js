// facial-treatment.js

// Function to validate form input
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    if (name === "" || email === "" || phone === "" || date === "" || time === "") {
        alert("Please fill out all fields.");
        return false;
    }

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address.");
        return false;
    }

    var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        alert("Invalid phone number. Please use the format XXX-XXX-XXXX.");
        return false;
    }

    return true;
}

// Function to submit form
function submitForm() {
    if (validateForm()) {
        var formData = new FormData(document.getElementById("book-appointment-form"));
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/book-appointment", true);
        xhr.send(formData);
        alert("Appointment booked successfully!");
    }
}

// Add event listener to submit button
document.getElementById("book-appointment-submit").addEventListener("click", submitForm);

// Function to display facial treatment types
function displayFacialTreatmentTypes() {
    var facialTreatmentTypes = document.getElementById("facial-treatment-types");
    var facialTreatmentTypesList = facialTreatmentTypes.children[0];

    // Create facial treatment types list items
    var basicFacial = document.createElement("li");
    basicFacial.innerHTML = "<h3>Basic Facial</h3><p>A customized facial treatment that includes a thorough skin analysis, cleansing, exfoliating, and moisturizing.</p><p>Duration: 60 minutes | Price: $75</p>";
    facialTreatmentTypesList.appendChild(basicFacial);

    var advancedFacial = document.createElement("li");
    advancedFacial.innerHTML = "<h3>Advanced Facial</h3><p>A more intense facial treatment that includes a deep cleansing, exfoliating, and moisturizing, as well as a facial massage and mask.</p><p>Duration: 90 minutes | Price: $120</p>";
    facialTreatmentTypesList.appendChild(advancedFacial);

    var microdermabrasionFacial = document.createElement("li");
    microdermabrasionFacial.innerHTML = "<h3>Microdermabrasion Facial</h3><p>A non-invasive exfoliating treatment that helps to remove dead skin cells and improve skin texture.</p><p>Duration: 60 minutes | Price: $100</p>";
    facialTreatmentTypesList.appendChild(microdermabrasionFacial);

    var chemicalPeelFacial = document.createElement("li");
    chemicalPeelFacial.innerHTML = "<h3>Chemical Peel Facial</h3><p>A treatment that uses a solution to remove the top layers of the skin, revealing smoother and brighter skin.</p><p>Duration: 60 minutes | Price: $150</p>";
    facialTreatmentTypesList.appendChild(chemicalPeelFacial);
}

// Call function to display facial treatment types
displayFacialTreatmentTypes();