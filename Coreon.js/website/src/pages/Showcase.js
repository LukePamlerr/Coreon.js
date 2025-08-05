import React from 'react';
import FeatureCard from '../components/FeatureCard';
import './showcase.css';

const Showcase = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'An amazing project built with Coreon.js that showcases its capabilities.',
            link: 'https://example.com/project-one',
        },
        {
            title: 'Project Two',
            description: 'A fantastic application demonstrating the power of Coreon.js.',
            link: 'https://example.com/project-two',
        },
        {
            title: 'Project Three',
            description: 'An innovative solution utilizing Coreon.js for seamless performance.',
            link: 'https://example.com/project-three',
        },
        // Add more projects as needed
    ];

    return (
        <div className="showcase">
            <h1>Showcase of Coreon.js Projects</h1>
            <p>Explore the projects built using Coreon.js and see what you can create!</p>
            <div className="project-list">
                {projects.map((project, index) => (
                    <FeatureCard key={index} title={project.title} description={project.description} link={project.link} />
                ))}
            </div>
        </div>
    );
};

export default Showcase;