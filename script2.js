// JavaScript code for form submission

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        emailAddress: document.getElementById('emailAddress').value,
        mobileNumber: document.getElementById('mobileNumber').value,
        emailSubject: document.getElementById('emailSubject').value,
        message: document.getElementById('message').value
    };

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            alert('Email sent successfully');
        } else {
            alert('Error sending email');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending email');
    });
});
