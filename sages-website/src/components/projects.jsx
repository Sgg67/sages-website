import React from 'react';
import './Projects.css'; // We'll create this new CSS file

const Projects = () => {
    const projects = [
        {
            title: "Weather app",
            url: "https://weather-app-eosin-eight-28.vercel.app/",
            image: "./images/weatherapp.jpg"
        },
        {
            title: "Step counter game",
            url: "https://editor.p5js.org/Sage-Yanoff/sketches/8kkwI01_N",
            image: "./images/running.jpg"
        },
        {
            title: "Calculator app",
            url: "https://calculator-app-wblw.vercel.app/",
            image: "./images/calculator.jpg"
        },
        {
            title: "Movie App",
            url: "https://movie-react-project-six.vercel.app/",
            image: "./images/movie.jpg"
        },
        {
            title: "Trivia Game",
            url: "https://trivia-game-beige.vercel.app/",
            image: "./images/trivia.jpg"
        },
        {
            title: "Movie App 2.0",
            url: "https://movie-app-20.vercel.app/",
            image: "./images/movies.jpg"
        }
    ];

    return (
        <div className="projects-container">
            <h1 id="Project-Heading">Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <a 
                        key={index} 
                        href={project.url} 
                        className="project-item"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <div className="image-container">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="project-image"
                            />
                            <div className="image-overlay">
                                <h2>{project.title}</h2>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Projects;