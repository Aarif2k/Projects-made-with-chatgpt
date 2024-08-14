// Get the RSVP form
const rsvpForm = document.getElementById('rsvp-form');

// Add event listener for form submission
rsvpForm.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Show the confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.style.display = 'block';
});
