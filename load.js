// scripts.js

// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loading');
    const loadButton = document.getElementById('loadButton');

    // Show loading overlay and prevent scrolling
    loadingOverlay.classList.remove('hidden');

    // Hide loading overlay and enable scrolling once content is loaded
    window.addEventListener('load', function() {
        loadingOverlay.classList.add('hidden');
    });
});


// Example of showing loading indicator during AJAX requests

// Show loading overlay before making an AJAX request
function showLoading() {
    document.getElementById('loading').classList.remove('hidden');
}

// Hide loading overlay after AJAX request completes
function hideLoading() {
    document.getElementById('loading').classList.add('hidden');
}

// Example AJAX request
function fetchContent() {
    showLoading();

    fetch('/path/to/your/api')
        .then(response => response.json())
        .then(data => {
            // Process data and update your content
            document.getElementById('content').innerHTML = data.html;
        })
        .finally(() => {
            hideLoading();
        });
}
// Example for client-side routing
document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loading');

    // Show loading indicator on page transition
    document.addEventListener('click', function(event) {
        if (event.target.matches('a')) {
            event.preventDefault();
            const href = event.target.getAttribute('href');

            loadingOverlay.classList.remove('hidden');

            fetch(href)
                .then(response => response.text())
                .then(html => {
                    // Replace content with fetched HTML
                    document.getElementById('content').innerHTML = html;
                })
                .finally(() => {
                    loadingOverlay.classList.add('hidden');
                });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
            // Load button HTML content
            fetch('button.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('button-container').innerHTML = data;
                })
                .catch(error => console.error('Error loading button:', error));
 });
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loading');
    const loadButton = document.getElementById('loadButton');

    // Function to simulate an action with a delay
    function simulateAction() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 3000); // Simulate a 3-second loading time
        });
    }

    // Event listener for button click
    loadButton.addEventListener('click', async function() {
        // Show loading overlay
        loadingOverlay.classList.remove('hidden');

        // Simulate an action
        await simulateAction();

        // Hide loading overlay after action completes
        loadingOverlay.classList.add('hidden');
    });
});


