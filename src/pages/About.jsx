import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


import profileImg from '../assets/images/banner/vin.jpg';
import ring2Img from '../assets/images/global/ring2.png';
import sShape1RotateImg from '../assets/images/global/s-shape1rotate.png';
import sShape3Img from '../assets/images/global/s-shape3.png';
import socialHoverImg from '../assets/images/global/social-hover.png';

const About = () => {
    return (
        <>
            <div className="container position-relative cus-z1 d-flex justify-content-center justify-content-lg-start mb-xxl-15 mb-xl-8 mb-7">
                <div className="backmenu-head">
                    <Link to="/" className="fw_400 fs-seven n0-color text-uppercase golelayla-logo">
                        <svg width="20" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.5019 12H3.67188" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="ms-1 n0-color">
                            Back To <span className="s1-color"> Home</span>
                        </span>
                    </Link>
                </div>
            </div>

            <section className="body-box position-relative cus-z-1 pb-xxl-20 pb-xl-15 pb-lg-10 pb-9">
                <div className="container">
                    <div className="row mb-xxl-6 mb-4 flex-row-reverse justify-content-center g-xxl-6 g-4 g-xxl-6 g-4">
                        <div className="col-lg-4 col-md-5 col-sm-8" data-aos="zoom-in-up" data-aos-duration="600">
                            <div className="cmn-box py-xxl-9 py-xl-9 py-lg-9 py-5 px-xxl-8 px-xl-6 px-lg-4 px-6" data-aos="zoom-in-down" data-aos-duration="1000">
                                <div className="layla-thumb position-relative about-layla m-auto text-center">
                                    <img src={profileImg} alt="img" className="radius100" />
                                    <div className="layla-resize"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="cmn-box py-xxl-13 py-md-13 py-8 px-xxl-15 px-md-12 px-4" data-aos="zoom-in-down" data-aos-duration="800">
                                <img src={ring2Img} alt="img" className="s-shape2" />
                                <div className="layla-infoabout text-center">
                                    <h4 className="text-white mb-md-6 mb-4 fw_500">
                                        <span className="d-block">Hello,</span>
                                        I’m Vinayak Paliwal,
                                        <span className="d-block">Full Stack Web Developer.</span>
                                    </h4>
                                    <p>
                                        Full Stack Web Developer with a strong frontend foundation since February 2024 and hands-on backend experience since June 2025. Skilled in building scalable, responsive web applications using React and Redux, developing RESTful APIs with Node.js and Express, and working with database-driven systems. Experienced in collaborating across cross-functional teams to deliver production-ready features in fast-paced environments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-xxl-6 g-4 mb-xxl-6 mb-4">
                        <div className="col-12" data-aos="fade-down" data-aos-duration="700">
                            <div className="cmn-box h-100 py-xxl-8 py-xl-8 py-lg-8 py-5 px-xxl-8 px-xl-6 px-lg-4 px-6">
                                {/* /cmn-box/ */}
                                <div className="d-flex align-items-center justify-content-between mb-10">
                                    <h5 className="fw_500 n0-color">My Experience</h5>
                                    <a href="/src/assets/vinayak_fullStack_resume.pdf" download className="exprience-download">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.32031 11.6797L11.8803 14.2397L14.4403 11.6797" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11.8828 4V14.17" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M20 12.1797C20 16.5997 17 20.1797 12 20.1797C7 20.1797 4 16.5997 4 12.1797" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                                <ul className="about-expritext mt-8" style={{ maxWidth: '100%' }}>
                                    <li className="mb-6" data-aos="fade-up" data-aos-duration="600">
                                        <div className="cmn-box p-xxl-6 p-4 radius16 border-subtle w-100" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)' }}>
                                            <div className="row g-4 align-items-start">
                                                <div className="col-lg-4">
                                                    <div className="pe-lg-4 border-end-lg h-100">
                                                        <h5 className="n0-color mb-2 fw_600">Leverage Edu</h5>
                                                        <span className="d-block n0-color fs-six fw_500 opacity-75 mb-3">Backend Developer Intern</span>
                                                        <span className="n0-color fs-seven fw_300 opacity-50 d-block">August 2025 – Present</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <ul className="ms-xxl-5 ms-0 n0-color fs-seven fw_300">
                                                        <li className="mb-2 n0-color">• Developed and maintained RESTful APIs to support core product modules.</li>
                                                        <li className="mb-2 n0-color">• Implemented CRUD operations with proper validation and structured error handling.</li>
                                                        <li className="mb-2 n0-color">• Integrated backend services with databases to ensure consistent data flow.</li>
                                                        <li className="mb-0 n0-color">• Worked closely with frontend developers to design APIs aligned with UI requirements.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-6" data-aos="fade-up" data-aos-duration="700">
                                        <div className="cmn-box p-xxl-6 p-4 radius16 border-subtle w-100" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)' }}>
                                            <div className="row g-4 align-items-start">
                                                <div className="col-lg-4">
                                                    <div className="pe-lg-4 border-end-lg h-100">
                                                        <h5 className="n0-color mb-2 fw_600">Dazzler Software</h5>
                                                        <span className="d-block n0-color fs-six fw_500 opacity-75 mb-3">Frontend Developer</span>
                                                        <span className="n0-color fs-seven fw_300 opacity-50 d-block">June 2024 – August 2025</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <ul className="ms-xxl-5 ms-0 n0-color fs-seven fw_300">
                                                        <li className="mb-2 n0-color">• Built and maintained responsive user interfaces for live client applications.</li>
                                                        <li className="mb-2 n0-color">• Developed reusable and scalable UI components using React and Tailwind CSS.</li>
                                                        <li className="mb-0 n0-color">• Optimized application performance through efficient state management and routing.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-0" data-aos="fade-up" data-aos-duration="800">
                                        <div className="cmn-box p-xxl-6 p-4 radius16 border-subtle w-100" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)' }}>
                                            <div className="row g-4 align-items-start">
                                                <div className="col-lg-4">
                                                    <div className="pe-lg-4 border-end-lg h-100">
                                                        <h5 className="n0-color mb-2 fw_600">Dazzler Software</h5>
                                                        <span className="d-block n0-color fs-six fw_500 opacity-75 mb-3">Frontend Developer Intern</span>
                                                        <span className="n0-color fs-seven fw_300 opacity-50 d-block">Feb 2024 – June 2024</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <ul className="ms-xxl-5 ms-0 n0-color fs-seven fw_300">
                                                        <li className="mb-2 n0-color">• Assisted in developing frontend components using React, JavaScript, HTML, and CSS.</li>
                                                        <li className="mb-0 n0-color">• Translated design mockups into responsive, cross-browser compatible interfaces.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row g-xxl-6 g-4 mb-xxl-6 mb-4">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration="800">
                            <div className="cmn-box h-100 py-xxl-8 py-xl-8 py-lg-8 py-5 px-xxl-8 px-xl-6 px-lg-4 px-6">
                                <h5 className="fw_500 n0-color mb-10">What I do</h5>
                                <ul className="about-expritext about-expritext-two">
                                    <li>
                                        <span>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.00056 6.5L6.88856 6.506C6.71073 6.52594 6.54151 6.59323 6.39855 6.70086C6.25559 6.80848 6.14413 6.95249 6.0758 7.11787C6.00746 7.28325 5.98475 7.46394 6.01004 7.64108C6.03532 7.81823 6.10768 7.98535 6.21956 8.125L9.72056 12.5L6.22056 16.875C6.10284 17.022 6.02904 17.1993 6.00765 17.3864C5.98626 17.5736 6.01816 17.7629 6.09966 17.9327C6.18116 18.1025 6.30896 18.2459 6.46835 18.3462C6.62773 18.4466 6.81221 18.4999 7.00056 18.5H13.0006C13.1504 18.4999 13.2982 18.4662 13.4332 18.4013C13.5682 18.3363 13.6869 18.2419 13.7806 18.125L17.7806 13.125C17.9226 12.9476 17.9999 12.7272 17.9999 12.5C17.9999 12.2728 17.9226 12.0524 17.7806 11.875L13.7806 6.875C13.6869 6.75806 13.5682 6.66365 13.4332 6.59875C13.2982 6.53384 13.1504 6.50009 13.0006 6.5H7.00056Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span className="n07 fs-six fw_300">RESTful APIs (Node.js & Express)</span>
                                    </li>
                                    <li>
                                        <span>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.00056 6.5L6.88856 6.506C6.71073 6.52594 6.54151 6.59323 6.39855 6.70086C6.25559 6.80848 6.14413 6.95249 6.0758 7.11787C6.00746 7.28325 5.98475 7.46394 6.01004 7.64108C6.03532 7.81823 6.10768 7.98535 6.21956 8.125L9.72056 12.5L6.22056 16.875C6.10284 17.022 6.02904 17.1993 6.00765 17.3864C5.98626 17.5736 6.01816 17.7629 6.09966 17.9327C6.18116 18.1025 6.30896 18.2459 6.46835 18.3462C6.62773 18.4466 6.81221 18.4999 7.00056 18.5H13.0006C13.1504 18.4999 13.2982 18.4662 13.4332 18.4013C13.5682 18.3363 13.6869 18.2419 13.7806 18.125L17.7806 13.125C17.9226 12.9476 17.9999 12.7272 17.9999 12.5C17.9999 12.2728 17.9226 12.0524 17.7806 11.875L13.7806 6.875C13.6869 6.75806 13.5682 6.66365 13.4332 6.59875C13.2982 6.53384 13.1504 6.50009 13.0006 6.5H7.00056Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span className="n07 fs-six fw_300">Database Systems (MongoDB & SQL)</span>
                                    </li>
                                    <li>
                                        <span>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.00056 6.5L6.88856 6.506C6.71073 6.52594 6.54151 6.59323 6.39855 6.70086C6.25559 6.80848 6.14413 6.95249 6.0758 7.11787C6.00746 7.28325 5.98475 7.46394 6.01004 7.64108C6.03532 7.81823 6.10768 7.98535 6.21956 8.125L9.72056 12.5L6.22056 16.875C6.10284 17.022 6.02904 17.1993 6.00765 17.3864C5.98626 17.5736 6.01816 17.7629 6.09966 17.9327C6.18116 18.1025 6.30896 18.2459 6.46835 18.3462C6.62773 18.4466 6.81221 18.4999 7.00056 18.5H13.0006C13.1504 18.4999 13.2982 18.4662 13.4332 18.4013C13.5682 18.3363 13.6869 18.2419 13.7806 18.125L17.7806 13.125C17.9226 12.9476 17.9999 12.7272 17.9999 12.5C17.9999 12.2728 17.9226 12.0524 17.7806 11.875L13.7806 6.875C13.6869 6.75806 13.5682 6.66365 13.4332 6.59875C13.2982 6.53384 13.1504 6.50009 13.0006 6.5H7.00056Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span className="n07 fs-six fw_300">React & Redux Development</span>
                                    </li>
                                    <li>
                                        <span>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.00056 6.5L6.88856 6.506C6.71073 6.52594 6.54151 6.59323 6.39855 6.70086C6.25559 6.80848 6.14413 6.95249 6.0758 7.11787C6.00746 7.28325 5.98475 7.46394 6.01004 7.64108C6.03532 7.81823 6.10768 7.98535 6.21956 8.125L9.72056 12.5L6.22056 16.875C6.10284 17.022 6.02904 17.1993 6.00765 17.3864C5.98626 17.5736 6.01816 17.7629 6.09966 17.9327C6.18116 18.1025 6.30896 18.2459 6.46835 18.3462C6.62773 18.4466 6.81221 18.4999 7.00056 18.5H13.0006C13.1504 18.4999 13.2982 18.4662 13.4332 18.4013C13.5682 18.3363 13.6869 18.2419 13.7806 18.125L17.7806 13.125C17.9226 12.9476 17.9999 12.7272 17.9999 12.5C17.9999 12.2728 17.9226 12.0524 17.7806 11.875L13.7806 6.875C13.6869 6.75806 13.5682 6.66365 13.4332 6.59875C13.2982 6.53384 13.1504 6.50009 13.0006 6.5H7.00056Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span className="n07 fs-six fw_300">Responsive UI Design (Tailwind & Bootstrap)</span>
                                    </li>
                                    <li>
                                        <span>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.00056 6.5L6.88856 6.506C6.71073 6.52594 6.54151 6.59323 6.39855 6.70086C6.25559 6.80848 6.14413 6.95249 6.0758 7.11787C6.00746 7.28325 5.98475 7.46394 6.01004 7.64108C6.03532 7.81823 6.10768 7.98535 6.21956 8.125L9.72056 12.5L6.22056 16.875C6.10284 17.022 6.02904 17.1993 6.00765 17.3864C5.98626 17.5736 6.01816 17.7629 6.09966 17.9327C6.18116 18.1025 6.30896 18.2459 6.46835 18.3462C6.62773 18.4466 6.81221 18.4999 7.00056 18.5H13.0006C13.1504 18.4999 13.2982 18.4662 13.4332 18.4013C13.5682 18.3363 13.6869 18.2419 13.7806 18.125L17.7806 13.125C17.9226 12.9472 17.9999 12.7272 17.9999 12.5C17.9999 12.2728 17.9226 12.0524 17.7806 11.875L13.7806 6.875C13.6869 6.75806 13.5682 6.66365 13.4332 6.59875C13.2982 6.53384 13.1504 6.50009 13.0006 6.5H7.00056Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span className="n07 fs-six fw_300">Scalable Component Architecture</span>
                                    </li>
                                </ul>
                                <img src={sShape1RotateImg} alt="img" className="s-shape2rotate" />
                                <img src={sShape3Img} alt="img" className="s-shape3" />
                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="fade-down" data-aos-duration="900">
                            <div className="cmn-box h-100 about-countexprience-wrap py-xxl-8 py-xl-8 py-lg-8 py-5 px-xxl-8 px-xl-6 px-lg-4 px-6">
                                <div className="row g-4 text-center">
                                    <div className="col-sm-6">
                                        <div className="expri-items-box about-items-counter mb-4 mb-sm-0">
                                            <h2 className="fw_600 n0-color mb-2">2</h2>
                                            <span className="expri-clr text-uppercase n00-color fw_300 fs-six">YEARS OF EXPERIENCE</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="expri-items-box about-items-counter mb-4 mb-sm-0">
                                            <h2 className="fw_600 n0-color mb-2">+6</h2>
                                            <span className="expri-clr text-uppercase n00-color fw_300 fs-six">TOTAL PROJECTS</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="expri-items-box about-items-counter mb-4 mb-sm-0">
                                            <h2 className="fw_600 n0-color mb-2">05</h2>
                                            <span className="expri-clr text-uppercase n00-color fw_300 fs-six">RECOGNITIONS</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="expri-items-box about-items-counter">
                                            <h2 className="fw_600 n0-color mb-2">8+</h2>
                                            <span className="expri-clr text-uppercase n00-color fw_300 fs-six">Skills Learned</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-xxl-6 g-4">
                        <div className="col-lg-3 col-md-6" data-aos="zoom-in-down" data-aos-duration="800">
                            <div className="text-center h-100 cmn-box position-relative pt-xxl-6 pt-xl-5 pt-4 pb-xxl-5 pb-xl-6 pb-4 px-xxl-8 px-xl-6 px-lg-4 px-4">
                                <ul className="body-social body-socialtwo body-social-sliceabout">
                                    <li>
                                        <a href="https://github.com/Vinayak-paliwal?tab=repositories" target="_blank" rel="noopener noreferrer" className="soci">
                                            <svg width="60" height="60" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                                <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fillRule="evenodd" d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5" />
                                            </svg>
                                            <span className="shape-icon"><img src={socialHoverImg} alt="img" /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/vinayak-paliwal-690220195/" target="_blank" rel="noopener noreferrer" className="soci">
                                            <svg viewBox="0 -0.5 25 25" width="70" height="70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.75 11C8.75 10.5858 8.41421 10.25 8 10.25C7.58579 10.25 7.25 10.5858 7.25 11H8.75ZM7.25 17C7.25 17.4142 7.58579 17.75 8 17.75C8.41421 17.75 8.75 17.4142 8.75 17H7.25ZM17.25 17C17.25 17.4142 17.5858 17.75 18 17.75C18.4142 17.75 18.75 17.4142 18.75 17H17.25ZM12 14H11.25H12ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8H8.75ZM7.25 9C7.25 9.41421 7.58579 9.75 8 9.75C8.41421 9.75 8.75 9.41421 8.75 9H7.25ZM7.25 11V17H8.75V11H7.25ZM18.75 17V14H17.25V17H18.75ZM18.75 14C18.75 11.9289 17.0711 10.25 15 10.25V11.75C16.2426 11.75 17.25 12.7574 17.25 14H18.75ZM15 10.25C12.9289 10.25 11.25 11.9289 11.25 14H12.75C12.75 12.7574 13.7574 11.75 15 11.75V10.25ZM11.25 14V17H12.75V14H11.25ZM7.25 8V9H8.75V8H7.25Z" fill="#fff" />
                                            </svg>
                                            <span className="shape-icon"><img src={socialHoverImg} alt="img" /></span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="stay mt-xxl-5 mt-xl-5 mt-lg-10 mt-12">
                                    <span className="d-flex stay-with justify-content-start n06">Stay Connected With Me</span> <br /><br />
                                    <Link to="/contact" className="d-flex mt-2 cmn-footarrow align-items-center justify-content-between">
                                        <span className="fw_500 fs-seven n0-color fs-seven fw_300">Profiles</span>
                                        <span className="cmn-svg40">
                                            <svg width="58" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.7674 28.2202C21.6527 32.4019 24.9182 35.8085 29.0165 37.8689C33.1148 39.9293 37.7968 40.5183 42.2777 39.5372C46.7587 38.5561 50.7661 36.0645 53.6285 32.48C56.4908 28.8955 58.034 24.4361 57.9994 19.8492C57.9648 15.2622 56.3545 10.8266 53.4385 7.28568C50.5224 3.74481 46.4778 1.31394 41.9825 0.400527C37.4873 -0.512885 32.8147 0.146678 28.748 2.26866C24.6812 4.39065 21.4675 7.84608 19.6455 12.0558L20.7467 12.5324C22.4595 8.57532 25.4804 5.32721 29.3031 3.33255C33.1259 1.33788 37.5181 0.717889 41.7436 1.5765C45.9691 2.4351 49.771 4.72012 52.5122 8.04854C55.2533 11.377 56.7669 15.5465 56.7995 19.8582C56.832 24.1699 55.3814 28.3618 52.6908 31.7312C50.0002 35.1006 46.2331 37.4427 42.0211 38.3649C37.809 39.2872 33.4079 38.7335 29.5555 36.7967C25.7031 34.86 22.6335 31.6578 20.8613 27.727L19.7674 28.2202Z" fill="white" />
                                                <path d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z" fill="white" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-first order-lg-0" data-aos="zoom-in-up" data-aos-duration="800">
                            <div className="cmn-box about-education-box h-100 py-xxl-5 py-xl-6 py-lg-6 py-4 px-xxl-8 px-xl-6 px-lg-4 px-6">
                                <img src={ring2Img} alt="img" className="s-shape2" />
                                <h5 className="fw_500 n0-color mb-10">Education</h5>
                                <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between">
                                    <div className="edu-text-box">
                                        <span className="mb-3 d-block fs-seven fw_300 n06">2021 - 2024</span>
                                        <span className="fs20 mb-2 d-block n0-color">Bachelor of Biotechnology</span>
                                        <span className="d-block fs-seven fw_300 n06">BIBT, Jaipur</span>
                                    </div>
                                    <div className="edu-text-box">
                                        <span className="mb-3 d-block fs-seven fw_300 n06">2020</span>
                                        <span className="fs20 mb-2 d-block n0-color">Senior Secondary Education</span>
                                        <span className="d-block fs-seven fw_300 n06">Career Public School, Bundi (63.8%)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 position-relative cus-z1" data-aos="zoom-in-down" data-aos-duration="800">
                            <Link to="/contact" className="common-serbox position-relative cus-z1 d-flex align-items-center justify-content-center h-100 d-block cmn-box py-xl-6 py-3 px-xxl-6 px-xxl-6 px-lg-4 px-4">
                                <span>
                                    <span className="d-block mb-10 fw_500 fs-five n0-color work-respon">Let’s Works Together...!</span>
                                    <span className="d-flex cmn-footarrow get-respons-1199 align-items-center justify-content-between">
                                        <span className="fw_500 fs-seven n0-color">Get In Touch</span>
                                        <svg width="58" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.7674 28.2202C21.6527 32.4019 24.9182 35.8085 29.0165 37.8689C33.1148 39.9293 37.7968 40.5183 42.2777 39.5372C46.7587 38.5561 50.7661 36.0645 53.6285 32.48C56.4908 28.8955 58.034 24.4361 57.9994 19.8492C57.9648 15.2622 56.3545 10.8266 53.4385 7.28568C50.5224 3.74481 46.4778 1.31394 41.9825 0.400527C37.4873 -0.512885 32.8147 0.146678 28.748 2.26866C24.6812 4.39065 21.4675 7.84608 19.6455 12.0558L20.7467 12.5324C22.4595 8.57532 25.4804 5.32721 29.3031 3.33255C33.1259 1.33788 37.5181 0.717889 41.7436 1.5765C45.9691 2.4351 49.771 4.72012 52.5122 8.04854C55.2533 11.377 56.7669 15.5465 56.7995 19.8582C56.832 24.1699 55.3814 28.3618 52.6908 31.7312C50.0002 35.1006 46.2331 37.4427 42.0211 38.3649C37.809 39.2872 33.4079 38.7335 29.5555 36.7967C25.7031 34.86 22.6335 31.6578 20.8613 27.727L19.7674 28.2202Z" fill="white" />
                                            <path d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z" fill="white" />
                                        </svg>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
