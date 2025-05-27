// EmailJS configuration
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual EmailJS public key
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
    
    // Send email using EmailJS
    emailjs.send('service_your_id', 'template_your_id', {
        to_email: 'samkimari5@gmail.com',
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        // Success
        alert('Thank you for your message! We will get back to you soon.');
        document.getElementById('contact-form').reset();
    }, function(error) {
        // Error
        alert('Sorry, there was an error sending your message. Please try again later.');
        console.error('Error:', error);
    });
});
