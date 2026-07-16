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
// CAT FACT GENERATOR
// ============================================
const catFacts = [
    "Cats spend 70% of their lives sleeping. That's a lot of napping! 😴",
    "A slow blink is a 'cat kiss'. It means they trust and love you. 😘",
    "Cats can make over 100 vocal sounds, while dogs can only make about 10. 🗣️",
    "The first cat in space was a French cat named Félicette in 1963. She survived the trip! 🚀",
    "Cats use their whiskers to detect if they can fit through a space. 📏",
    "A cat's purr vibrates at a frequency that can actually help heal bones and muscles! 🩹",
    "The oldest known pet cat was found in a 9,500-year-old grave on Cyprus. 🇨🇾"
];

const factCard = document.getElementById('fact-card');
const factText = document.getElementById('fact-text');

if (factCard && factText) {
    factCard.addEventListener('click', function() {
        // Pick a random fact from the array
        const randomIndex = Math.floor(Math.random() * catFacts.length);
        const randomFact = catFacts[randomIndex];
        
        // Update the card text with a smooth quick fade effect
        factText.style.opacity = 0;
        setTimeout(() => {
            factText.textContent = randomFact;
            factText.style.
