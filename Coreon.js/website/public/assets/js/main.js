// Main JavaScript functionality for the Coreon.js website

document.addEventListener("DOMContentLoaded", function() {
    // Initialize the application
    initApp();

    // Event listeners for navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');
            loadPage(targetPage);
        });
    });

    // Scroll animations
    const scrollElements = document.querySelectorAll('.scroll-animation');
    scrollElements.forEach(element => {
        element.classList.add('hidden');
        window.addEventListener('scroll', () => {
            if (isElementInViewport(element)) {
                element.classList.remove('hidden');
                element.classList.add('fade-in');
            }
        });
    });
});

// Function to initialize the application
function initApp() {
    console.log("Coreon.js website initialized.");
}

// Function to load a page dynamically
function loadPage(page) {
    const contentDiv = document.getElementById('content');
    fetch(page)
        .then(response => response.text())
        .then(data => {
            contentDiv.innerHTML = data;
            window.history.pushState({ page: page }, '', page);
        })
        .catch(error => console.error('Error loading page:', error));
}

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Handle back/forward navigation
window.onpopstate = function(event) {
    if (event.state) {
        loadPage(event.state.page);
    }
};