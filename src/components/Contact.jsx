import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, X, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" }); // Kept for resetting logic if needed

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

                    {/* Hidden iframe for handling submission without redirect */}
                    <iframe
                        name="hidden_iframe"
                        id="hidden_iframe"
                        style={{ display: 'none' }}
                        onLoad={() => {
                            if (window.submitted) {
                                setShowPopup(true);
                                // setFormData({ name: "", email: "", message: "" }); // Clear React state if used, though uncontrolled here
                                document.querySelector('.contact-form').reset(); // Reset HTML form
                                window.submitted = false;
                            }
                        }}
                    ></iframe>

                    <motion.form
                        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdgi4a9blDhlWcuFC3baKjor1RKTV0M9gf1EYDCZw7T_1rC1A/formResponse"
                        method="POST"
                        target="hidden_iframe"
                        className="contact-form glass-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        onSubmit={() => {
                            window.submitted = true;
                        }}
                    >
                        <div className="form-group">
                            <label>Your Name</label>
                            <input
                                type="text"
                                name="entry.1774980548"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Your Email</label>
                            <input
                                type="email"
                                name="entry.1966336845"
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="entry.105320792"
                                rows="5"
                                placeholder="Hello, I'd like to talk about..."
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Send Message <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>

            {/* Success Popup */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        className="popup-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowPopup(false)}
                    >
                        <motion.div
                            className="popup-content glass-card"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-btn" onClick={() => setShowPopup(false)}>
                                <X size={24} />
                            </button>
                            <div className="popup-icon">
                                <CheckCircle size={64} color="#10b981" />
                            </div>
                            <h3>Message Sent!</h3>
                            <p>Thank you for reaching out. I'll get back to you soon.</p>
                            <button className="btn btn-primary" onClick={() => setShowPopup(false)}>
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;
