const toggleButton = document.getElementById('toggle-button');
const body = document.body;

// Check for saved user preference, if any, and apply it
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Switch to Light Mode';
}

// Event listener for the button
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update button text based on current mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
        localStorage.setItem('theme', 'dark'); // Save the theme preference
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
        localStorage.setItem('theme', 'light'); // Save the theme preference
    }
});
