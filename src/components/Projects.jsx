import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Digital Twin - Fluidized Bed Gasifier',
            desc: 'A sensor-integrated system generating energy from sawdust. Features real-time monitoring of temperature and gas composition fed into a Digital Twin interface. Integrated with a RAG agent for interactive queries.',
            tags: ['Python', 'Digital Twin', 'LLMs/RAG', 'Sensors'],
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Industrial/Tech
            links: { github: 'https://github.com/amal-gafoor', demo: '#' }
        },
        {
            title: 'License Plate Detection',
            desc: 'Fine-tuned YOLOv8 model combined with EasyOCR for automatic license plate recognition. Achieved 92% accuracy on a custom dataset of 300+ samples.',
            tags: ['Computer Vision', 'YOLOv8', 'EasyOCR', 'Python', 'Deep Learning'],
            image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Car/AI
            links: { github: 'https://github.com/amal-gafoor', demo: '#' }
        },
        {
            title: 'Material Hardness Prediction',
            desc: 'Developed a regression model using Scikit-learn to predict material hardness based on various parameters. Optimized for high accuracy and deployed as a predictive tool.',
            tags: ['Machine Learning', 'Scikit-learn', 'Pandas'],
            image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Science/Data
            links: { github: 'https://github.com/amal-gafoor', demo: '#' }
        }
    ];

    return (
        <section id="projects" className="section bg-secondary">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.links.github} target="_blank" rel="noreferrer" title="View Source">
                                            <Github size={24} />
                                        </a>
                                        {/* <a href={project.links.demo} title="Live Demo">
                                            <ExternalLink size={24} />
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
