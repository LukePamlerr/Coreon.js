// showcase.js - Functionality for the showcase page of Coreon.js website

document.addEventListener('DOMContentLoaded', () => {
    const showcaseContainer = document.getElementById('showcase-container');
    const projects = [
        {
            title: 'Project One',
            description: 'An amazing project built with Coreon.js that showcases its capabilities.',
            link: 'https://example.com/project-one',
            image: 'path/to/project-one-image.jpg'
        },
        {
            title: 'Project Two',
            description: 'Another fantastic project demonstrating the power of Coreon.js.',
            link: 'https://example.com/project-two',
            image: 'path/to/project-two-image.jpg'
        },
        // Add more projects as needed
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <a href="${project.link}" class="project-link">View Project</a>
        `;

        showcaseContainer.appendChild(projectCard);
    });

    // Scroll animation for showcase
    const scrollToTopButton = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});