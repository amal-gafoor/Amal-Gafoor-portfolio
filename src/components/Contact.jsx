import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section bg-secondary">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-wrapper">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <h3>Let's Talk</h3>
                        <p>
                            I'm open to opportunities in Data Science, Machine Learning, and Engineering.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="icon-box"><Phone size={24} /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91 79948 89181</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon-box"><Mail size={24} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>amalabdulgafoor9557@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon-box"><MapPin size={24} /></div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Calicut, Kerala, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form glass-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                    >
                        <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label>Your Email</label>
                            <input type="email" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="Hello, I'd like to talk about..." required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Send Message <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
