// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer-section">
            <div className="support-links">
                <a href="/faq">FAQs</a>
                <a href="/contact">Contact Us</a>
                <a href="/support">Support</a>
            </div>
            <div className="legal-links">
                <a href="/terms">Terms of Service</a>
                <a href="/privacy">Privacy Policy</a>
            </div>
        </footer>
    );
}

export default Footer;
