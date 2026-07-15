// ============================================
// SCROLL TO SECTION FUNCTION
// ============================================
// This function smoothly scrolls to a specific section when you click a navigation link
function scrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// CONTACT FORM - SEND MESSAGE FUNCTION
// ============================================
// This function handles when someone submits the contact form
function sendMessage() {
    // Get the values from the input fields
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const message = document.getElementById('messageInput').value;
    
    // Check if all fields are filled
    if (name === '' || email === '' || message === '') {
        document.getElementById('feedbackMessage').textContent = '❌ Please fill in all fields!';
        document.getElementById('feedbackMessage').style.color = '#FF6B6B';
        return;
    }
    
    // Check if email is valid
    if (!email.includes('@')) {
        document.getElementById('feedbackMessage').textContent = '❌ Please enter a valid email!';
        document.getElementById('feedbackMessage').style.color = '#FF6B6B';
        return;
    }
    
    // Success message
    document.getElementById('feedbackMessage').textContent = '✅ Message sent! Thanks for connecting! 🐱';
    document.getElementById('feedbackMessage').style.color = '#4ECDC4';
    
    // Clear the form fields
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('messageInput').value = '';
    
    // Remove the success message after 3 seconds
    setTimeout(function() {
        document.getElementById('feedbackMessage').textContent = '';
    }, 3000);
}

// ============================================
// ADD KEYBOARD SUPPORT
// ============================================
// This allows you to press Enter in the contact form to send the message
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && document.activeElement.id === 'messageInput') {
        sendMessage();
    }
});

// ============================================
// WELCOME MESSAGE IN CONSOLE
// ============================================
// This displays a fun message in the browser console
console.log('%c🐱 Welcome to Sean\'s Cat Kingdom! 🐱', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cYou are worshiping cats with good taste!', 'font-size: 14px; color: #764ba2;');