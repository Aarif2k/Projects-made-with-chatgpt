// Get the RSVP form
const rsvpForm = document.getElementById('rsvp-form');
const body = document.body
// Add event listener for form submission
rsvpForm.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the value of the attendance field
    const attendanceField = document.getElementById('attendance');
    const attendanceValue = attendanceField.value;

    // Get the confirmation message element
    const confirmationMessage = document.getElementById('confirmation-message');

    // Check if the user selected 'attending'
    if (attendanceValue === 'attending') {
        // Display a party emoji and positive message
        confirmationMessage.innerHTML = '🎉 Great! We look forward to seeing you at the GIF Gala!';
        body.style.backgroundImage = 'url("https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3R4em9qbGVleHJleGk5NndydzNuaDRzOHk5cXN5cm9wODJ2Y2ZkYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l46CvRFB1GqPYAOis/giphy.gif")'
    } else {
        // Display a message indicating they are not attending
        confirmationMessage.innerHTML = 'We\'re sorry to hear that you won\'t be able to attend. Hopefully, we can catch you at the next event!';
        body.style.backgroundImage = 'url("https://media1.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif")'
    }

    // Show the confirmation message
    confirmationMessage.style.display = 'block';
});
