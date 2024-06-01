// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('contact-form');
//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const message = document.getElementById('message').value;

//         if (name && email && message) {
//             console.log('Form submitted with:', { name, email, message });
//             alert('Thank you for your message!');
//             form.reset();
//         } else {
//             alert('Please fill out all fields.');
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        // Allow the form to submit to Formspree
        setTimeout(function() {
            form.reset(); // Reset the form after submission
        }, 1000); // Adjust the timeout as necessary
    });
});
