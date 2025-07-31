// Check if website loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully");
});

// Select all menu items and the background container
const menuItems = document.querySelectorAll('.menu-item');
const background = document.getElementById('background');

// Add event listeners to menu items
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const bgClass = item.getAttribute('data-bg');
        background.className = ''; // Reset background classes
        background.classList.add(bgClass); // Add the new background class
    });
});

// Copy email
function copyEmail() {
    const email = "mvamontaos@ymail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard");
    }).catch(err => {
        console.error("Error copying email: ", err);
    });
}