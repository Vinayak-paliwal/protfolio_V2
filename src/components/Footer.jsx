import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer position-relative py-xxl-8 py-6">
            <div className="container">
                <div className="footer-wrap d-grid gap-4 justify-content-center d-lg-flex align-items-center justify-content-lg-between">
                    <div className="footer-copyright"></div>
                    <ul className="footer-link justify-content-center flex-wrap position-relative cus-z1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/works">Works</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
