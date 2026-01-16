import React from 'react';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from './ui/HeroHighlight';
import { ArrowRight, Download, Linkedin, Github, Instagram, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-wrapper">
            <HeroHighlight>
                <div className="container hero-container">
                    <div className="hero-content">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="hero-subtitle">Hello, I'm</span>
                            <h1 className="hero-title">
                                Amal <Highlight className="text-white">Gafoor P K</Highlight>
                            </h1>
                            <h2 className="hero-role">
                                Chemical Engineer | AI & Data Science Enthusiast
                            </h2>
                            <p className="hero-desc">
                                Transforming complex data into actionable insights through
                                <Highlight className="text-white"> AI & Digital Twins.</Highlight>
                            </p>

                            <div className="hero-buttons">
                                <a href="#projects" className="btn btn-primary">
                                    View My Work <ArrowRight size={20} />
                                </a>
                                <a href="/Amal_Gafoor_resume_2026.pdf" download className="btn btn-outline">
                                    Download Resume <Download size={20} />
                                </a>
                            </div>

                            <div className="social-links">
                                <a href="https://linkedin.com/in/amal-gafoor-p-k/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://github.com/amal-gafoor" target="_blank" rel="noopener noreferrer">
                                    <Github size={24} />
                                </a>
                                <a href="https://instagram.com/amalxgafoor" target="_blank" rel="noopener noreferrer">
                                    <Instagram size={24} />
                                </a>
                                <a href="mailto:amalabdulgafoor9557@gmail.com">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </HeroHighlight>
        </section>
    );
};

export default Hero;
