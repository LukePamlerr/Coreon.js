const animations = {
    fadeIn: (element, duration = 500) => {
        element.style.opacity = 0;
        element.style.transition = `opacity ${duration}ms`;
        element.style.opacity = 1;
    },

    fadeOut: (element, duration = 500) => {
        element.style.opacity = 1;
        element.style.transition = `opacity ${duration}ms`;
        element.style.opacity = 0;
    },

    slideIn: (element, duration = 500) => {
        element.style.transform = 'translateX(-100%)';
        element.style.transition = `transform ${duration}ms`;
        element.style.transform = 'translateX(0)';
    },

    slideOut: (element, duration = 500) => {
        element.style.transform = 'translateX(0)';
        element.style.transition = `transform ${duration}ms`;
        element.style.transform = 'translateX(-100%)';
    },

    bounce: (element, duration = 500) => {
        element.style.animation = `bounce ${duration}ms`;
        element.addEventListener('animationend', () => {
            element.style.animation = '';
        });
    },

    scrollReveal: (element, duration = 500) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animations.fadeIn(entry.target, duration);
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(element);
    }
};

export default animations;