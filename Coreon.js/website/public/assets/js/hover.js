// This file implements hover animations for interactive elements.
// It adds event listeners to elements with the class 'hover-effect' to create a smooth hover animation.

document.addEventListener('DOMContentLoaded', function() {
    const hoverElements = document.querySelectorAll('.hover-effect');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.05)';
            element.style.transition = 'transform 0.3s ease';
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)';
        });
    });
});