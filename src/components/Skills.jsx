import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Cpu, Terminal, Layers } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            icon: <Code size={24} />,
            skills: ['Python', 'SQL']
        },
        {
            title: 'Data Science & AI',
            icon: <Brain size={24} />,
            skills: ['Machine Learning', 'Deep Learning (YOLOv8)', 'Scikit-learn', 'Pandas', 'NumPy', 'RAG Agents']
        },
        {
            title: 'Tools & Platforms',
            icon: <Terminal size={24} />,
            skills: ['Git & GitHub', 'VS Code', 'Jupyter Notebooks']
        },
        {
            title: 'Core Engineering',
            icon: <Cpu size={24} />,
            skills: ['Process Flow Diagrams', 'Digital Twins', 'Operations Analysis']
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="skill-card glass-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="skill-header">
                                <div className="skill-icon">{category.icon}</div>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
