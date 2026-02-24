import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import $ from 'jquery';
import resumeFile from '../assets/vinayak_fullStack_resume.pdf';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        $('.navbar-toggle-item').slideToggle(300);
        $('body').toggleClass('overflow-hidden');
    };

    useEffect(() => {
        // Close navbar on route change
        if (isOpen) {
            setIsOpen(false);
            $('.navbar-toggle-item').slideUp(300);
            $('body').removeClass('overflow-hidden');
        }
    }, [location]);

    return (
        <header className="header-section mb-xxl-15 mb-xl-8 mb-7 mt-xxl-15 mt-xl-8 mt-7 header-sectionone">
            <div className="one__header">
                <div className="container">
                    <div className="main-navbar" data-aos="fade-up" data-aos-duration="1000">
                        <nav className="navbar-custom">
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to="/" className="nav-brand d-block d-lg-none">
                                    <h4 className="fw_500 n0-color golelayla-logo">
                                        Vinayak <span className="s1-color">Paliwal</span>
                                    </h4>
                                </Link>
                                <div className="d-flex gap-6">
                                    <div className="switch-wrapper-top d-flex d-lg-none"></div>
                                    <button
                                        className={`navbar-toggle-btn d-block d-lg-none ${isOpen ? 'open' : ''}`}
                                        type="button"
                                        onClick={toggleNavbar}
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                            <div className="navbar-toggle-item" style={{ display: isOpen ? 'block' : 'none' }}>
                                <div className="d-flex gap-5 flex-column flex-lg-row text-lg-start text-center align-items-start align-items-lg-center justify-content-center justify-content-between mt-5 mt-lg-0">
                                    <div className="navbar-brand logo d-none d-lg-flex">
                                        <Link to="/">
                                            <h4 className="fw_600 n0-color">
                                                Vinayak <span className="s1-color">Paliwal</span>
                                            </h4>
                                        </Link>
                                    </div>
                                    <ul className="custom-nav d-grid d-lg-flex gap-5 gap-lg-8 gap-xl-10 justify-content-lg-start">
                                        <li className={`menu-item position-relative ${location.pathname === '/' ? 'active-parents' : ''}`}>
                                            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                                        </li>
                                        <li className={`menu-item position-relative ${location.pathname === '/about' ? 'active-parents' : ''}`}>
                                            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
                                        </li>
                                        <li className={`menu-item position-relative ${location.pathname === '/works' ? 'active-parents' : ''}`}>
                                            <Link to="/works" className={location.pathname === '/works' ? 'active' : ''}>Works</Link>
                                        </li>
                                        <li className={`menu-item position-relative ${location.pathname === '/contact' ? 'active-parents' : ''}`}>
                                            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
                                        </li>
                                    </ul>
                                    <div className="d-flex justify-content-center m-auto m-lg-0 justify-content-lg-end">
                                        <a href={resumeFile} download className="kewta-btn d-flex align-items-center">
                                            <span className="kew-text">Download Resume</span>
                                            <span className="kew-arrow">
                                                <div className="kt-one">
                                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.5625 10.9336L23.1446 11.1277L22.9504 19.7098" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.8516 22.875L23.0183 11.2466" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className="kt-two">
                                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.5625 10.9336L23.1446 11.1277L22.9504 19.7098" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.8516 22.875L23.0183 11.2466" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
