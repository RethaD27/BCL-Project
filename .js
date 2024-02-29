Function to load content based on the clicked link
function loadContent(topic) {
    // Example: Load content for 'Integers' topic
    if (topic === 'integers') {
        document.querySelector('main').innerHTML = `
            <h2>Integers</h2>
            <p>Integers are whole numbers that can be positive, negative, or zero.</p>
            <p>Examples: -3, 0, 5, -11, 8</p>
            <!-- Add more detailed content as needed -->
        `;
    }
    // Add more conditions for other topics
}

// Event listener for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const topic = this.getAttribute('href').substring(1); // Get topic from href attribute
        loadContent(topic); // Load content for the clicked topic
    });
});
