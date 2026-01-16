import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, BrainCircuit, Globe, Factory, Bot } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <BrainCircuit size={40} />,
            title: 'Machine Learning Solutions',
            desc: 'Developing custom ML models for predictive analysis, computer vision (YOLO), and automated decision-making systems.'
        },
        {
            icon: <Factory size={40} />,
            title: 'Digital Twin Integration',
            desc: 'Creating virtual replicas of physical systems (e.g., Gasifiers) using sensor data and RAG agents for real-time monitoring and optimization.'
        },
        {
            icon: <BarChart2 size={40} />,
            title: 'Data Analysis & Viz',
            desc: 'Turning raw data into actionable insights using Python (Pandas, NumPy) and creating interactive visualizations.'
        },
        {
            icon: <Bot size={40} />,
            title: 'RAG Agents',
            desc: 'Developing intelligent RAG agents with n8n to query custom knowledge bases, automating workflows with context-aware precision.'
        }
    ];

    return (
        <section id="services" className="section">
            <div className="container">
                <h2 className="section-title">What I Offer</h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
