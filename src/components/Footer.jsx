import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem 0',
            borderTop: '1px solid var(--border)',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
        }}>
            <p>&copy; {new Date().getFullYear()} Amal Gafoor P K. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
