const contactForm = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");

(function () {
    emailjs.init("lOXIUhyYK0-Y3eOCA"); //please encrypted user id for malicious attacks
})();

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // // Simulating sending message
    simulateSendingMessage();

    // // Send form data to your email using JavaScript
    sendEmail(name, email, message);
});

function simulateSendingMessage() {
    submitButton.innerHTML = 'Sending...';
    submitButton.disabled = true;
}

function sendEmail(name, email, message) {
    var templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send('service_ssf0beh', 'template_bzl7y8t', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });

    // After successful sending, display success animation
    displaySuccessAnimation();
}

function displaySuccessAnimation() {
    submitButton.innerHTML = 'Message Sent!';
    submitButton.classList.add('success-animation');
}