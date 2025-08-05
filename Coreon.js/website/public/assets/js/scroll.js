// This file implements scroll animations for the website.

document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const elements = document.querySelectorAll('.scroll-animate');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition > elementPosition - window.innerHeight + 100) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});

// Smooth scrolling for anchor links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});