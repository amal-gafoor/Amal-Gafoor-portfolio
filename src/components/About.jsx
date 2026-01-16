import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section bg-secondary">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Bridging Engineering & AI</h3>
                        <p>
                            I am a final year <strong>Chemical Engineering</strong> student at the prestigious
                            <strong> National Institute of Technology Calicut (NITC)</strong>.
                            My journey began in core engineering, but my passion for problem-solving led me to the world of
                            <strong> Data Science and Artificial Intelligence</strong>.
                        </p>
                        <p>
                            I have hands-on experience in industrial environments like <strong>BPCL Kochi Refinery</strong>
                            and have trained as a Data Scientist at <strong>Techolas Technologies</strong>.
                            My goal is to integrate AI/ML solutions into industrial processes, creating "Digital Twins"
                            and optimizing systems for efficiency.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <h4>03+</h4>
                                <p>Projects Completed</p>
                            </div>
                            <div className="stat-item">
                                <h4>02</h4>
                                <p>Internships</p>
                            </div>
                            <div className="stat-item">
                                <h4>2026</h4>
                                <p>Graduation Year</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="about-timeline">
                        <TimelineItem
                            icon={<Briefcase size={20} />}
                            year="2025"
                            title="Industrial Intern"
                            subtitle="BPCL Kochi Refinery"
                            desc="Analyzed process flow diagrams, heat exchangers, and pumps adhering to safety protocols."
                        />
                        <TimelineItem
                            icon={<Briefcase size={20} />}
                            year="2024"
                            title="Data Scientist Trainee"
                            subtitle="Techolas Technologies Pvt Ltd"
                            desc="Mastered Python, Machine Learning workflows, and Data Preprocessing."
                        />
                        <TimelineItem
                            icon={<GraduationCap size={20} />}
                            year="2022 - 2026"
                            title="B.Tech Chemical Engineering"
                            subtitle="NIT Calicut"
                            desc="Active member of Tathva and Ragam organizing committees."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const TimelineItem = ({ icon, year, title, subtitle, desc }) => (
    <motion.div
        className="timeline-item"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
    >
        <div className="timeline-icon">{icon}</div>
        <div className="timeline-content">
            <span className="timeline-year">{year}</span>
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
            <p>{desc}</p>
        </div>
    </motion.div>
);

export default About;
