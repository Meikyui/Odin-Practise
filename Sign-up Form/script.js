const form = document.getElementById("FormContainer");
const passwordInput = document.getElementById("inputPassword");
const confirmPasswordInput = document.getElementById("inputConfirmPassword");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const formOutput = document.getElementById("FormOutput");
const firstname = document.getElementById("inputFirstName");
const lastname = document.getElementById("inputLastName");
const email = document.getElementById("inputEmail");
const phoneNumber = document.getElementById("inputPhoneNumber");


form.addEventListener("submit", function(event) {
     event.preventDefault();
    let valid = true;
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

outputFirstName = form.elements['firstName'].value;
outputLastname = form.elements['lastName'].value;
outputEmail = form.elements['email'].value;
outputPhoneNumber = form.elements['phoneNumber'].value;

formOutput.innerHTML = `<p>Firstname: ${outputFirstName}</p>
<p>Lastname: ${outputLastname}</p>
<p>Email: ${outputEmail}</p>
<p>Phone Number: ${outputPhoneNumber}</p>
<p>Password: ${passwordInput.value}</p>`;

    if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        valid = false;
    }

    if(!/[A-Z]/.test(passwordInput.value)) {
        passwordError.textContent = "Password must contain at least one uppercase letter.";
        valid = false;
    }

    if(!/[0-9]/.test(passwordInput.value)){
        passwordError.textContent = "Password must contain at least one number.";
        valid = false;
    }

    if(!/[^a-zA-Z0-9]/.test(passwordInput.value)){
        passwordError.textContent = "Password must contain at least one special character.";
        valid = false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        valid = false;
    }

    if (valid) {
        form.reset();
    }

    // if(!valid) {
    //     event.preventDefault();
    // }
});

