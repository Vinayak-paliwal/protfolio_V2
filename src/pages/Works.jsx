import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import '../assets/css/works-new.css';


import cultureImg from '../assets/images/global/culture.png';
import univalleyImg from '../assets/images/gallery/univalley.png';
import flyhomesImg from '../assets/images/gallery/fly_homes.png';
import sspImg from '../assets/images/gallery/ssp.png';
import travelaImg from '../assets/images/gallery/travela.png';
import appLandingImg from '../assets/images/gallery/2.jpg';
import weatherImg from '../assets/images/gallery/weather.png';
import formBuilderImg from '../assets/images/gallery/4.jpg';
import rpsImg from '../assets/images/gallery/rps.png';
import greenPlantImg from '../assets/images/gallery/5.png';

const Works = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
        });
    }, []);

    return (
        <div className="works-container">
            <div className="container position-relative cus-z1 d-flex justify-content-center justify-content-lg-start pt-xxl-10 pt-xl-8 pt-6 mb-4">
                <div className="backmenu-head">
                    <Link to="/" className="fw_400 fs-seven n0-color text-uppercase golelayla-logo d-flex align-items-center gap-2" style={{ textDecoration: 'none' }}>
                        <svg width="20" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.5019 12H3.67188" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="n0-color">
                            Back To <span style={{ color: '#7c3aed' }}> Home</span>
                        </span>
                    </Link>
                </div>
            </div>

            <main id="works" className="container pb-xxl-5 pb-xl-4 pb-lg-3 pb-2">
                <h1 className="section-heading" data-aos="fade-up">Selected Works &amp; Case Studies</h1>

                <a className="featured all-proitem" href="https://os.univalley.ai/" target="_blank" rel="noopener noreferrer" data-aos="fade-up">
                    <div className="img-stage">
                        <img src={univalleyImg} alt="Univalley OS" className="pro-img" />
                    </div>
                    <span className="aroha-boxwrap d-flex align-items-center justify-content-between">
                        <span className="aroha-box">
                            <span className="n0-color fs-four mb-xxl-3 mb-2 fw_500 d-block">
                                Univalley OS – AI University Admissions Platform
                            </span>
                            <span className="fs-six ptextes fw_300 n0-color">
                                Problem: Streamlining complex global university admissions across multiple countries &amp; timezones.<br />
                                <span className="hl">Impact: Reduced processing time by 40% &amp; increased conversion.</span>
                            </span>
                            <div className="tags mt-3">
                                <span className="tag">Product Design</span>
                                <span className="tag">Dashboard UI</span>
                                <span className="tag">Leverage Edu</span>
                                <span className="tag">AI Platform</span>
                            </div>
                        </span>
                        <span className="arrow">
                            <img src={cultureImg} alt="arrow" />
                        </span>
                    </span>
                </a>

                <div className="grid2">
                    <a className="proj-card all-proitem" href="https://fly.homes/" target="_blank" rel="noopener noreferrer" data-aos="fade-up">
                        <div className="img-stage-half">
                            <img src={flyhomesImg} alt="Fly Homes" className="pro-img" />
                        </div>
                        <span className="aroha-boxwrap d-flex align-items-center justify-content-between">
                            <span className="aroha-box">
                                <span className="n0-color fs-four mb-xxl-3 mb-2 fw_500 d-block">
                                    Fly Homes – Student Accommodation
                                </span>
                                <span className="fs-six ptextes fw_300 n0-color">
                                    Find student housing that best suits you, globally.
                                </span>
                                <div className="tags mt-3">
                                    <span className="tag">Marketplace</span>
                                    <span className="tag">Global Housing</span>
                                </div>
                            </span>
                            <span className="arrow">
                                <img src={cultureImg} alt="arrow" />
                            </span>
                        </span>
                    </a>

                    <a className="proj-card all-proitem" href="https://ssp.leverageedu.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-up">
                        <div className="img-stage-half">
                            <img src={sspImg} alt="Student Success Portal" className="pro-img" />
                        </div>
                        <span className="aroha-boxwrap d-flex align-items-center justify-content-between">
                            <span className="aroha-box">
                                <span className="n0-color fs-four mb-xxl-3 mb-2 fw_500 d-block">
                                    Student Success Portal – Leverage Edu
                                </span>
                                <span className="fs-six ptextes fw_300 n0-color">
                                    Manage entire student workflow from one place.
                                </span>
                                <div className="tags mt-3">
                                    <span className="tag">SaaS</span>
                                    <span className="tag">Workflow Automation</span>
                                </div>
                            </span>
                            <span className="arrow">
                                <img src={cultureImg} alt="arrow" />
                            </span>
                        </span>
                    </a>
                </div>

                <p className="section-sub" data-aos="fade-up">Design Lab &amp; Experiments</p>

                <div className="grid3">
                    {[
                        { title: "Travela – Travel Agency", desc: "Hero-led landing page with destination cards & CTA.", link: "https://travela-ten.vercel.app/", img: travelaImg, tags: ["HTML", "CSS", "JS"] },
                        { title: "App Landing Page", desc: "Product showcase layout with sections.", link: "https://appea-landing-page.vercel.app/", img: appLandingImg, tags: ["React", "Bootstrap"] },
                        { title: "Weather App", desc: "Live climate data by city name using OpenWeather API.", link: "https://weather-app-ten-nu-97.vercel.app/", img: weatherImg, tags: ["API", "Dynamic UI"] },
                        { title: "Form Builder Logic", desc: "Add, edit & delete form components dynamically.", link: "https://form-builder-eight-rho.vercel.app/", img: formBuilderImg, tags: ["Logic", "JS Native"] },
                        { title: "Rock Paper Scissors", desc: "Browser game vs computer. Pure JavaScript logic & DOM.", link: "https://rock-paper-scissor-blue-ten.vercel.app/", img: rpsImg, tags: ["Game", "DOM"] },
                        { title: "Green Plant Template", desc: "Organic brand identity & e-commerce layout.", link: "https://casco-organic.vercel.app/", img: greenPlantImg, tags: ["Landing", "E-com"] }
                    ].map((lab, i) => (
                        <a key={i} className="lab-card all-proitem" href={lab.link} target="_blank" rel="noopener noreferrer" data-aos="fade-up">
                            <div className="img-stage-small">
                                <img src={lab.img} alt={lab.title} className="pro-img" />
                            </div>
                            <span className="aroha-boxwrap d-flex align-items-center justify-content-between">
                                <span className="aroha-box">
                                    <span className="n0-color fs-five mb-xxl-2 mb-1 fw_500 d-block">
                                        {lab.title}
                                    </span>
                                    <span className="fs-seven ptextes fw_300 n0-color">
                                        {lab.desc}
                                    </span>
                                    <div className="tags mt-2">
                                        {lab.tags.map((tag, idx) => (
                                            <span key={idx} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </span>
                                <span className="arrow">
                                    <img src={cultureImg} alt="arrow" />
                                </span>
                            </span>
                        </a>
                    ))}
                </div>
            </main>

            <svg className="sparkle" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0 L17.5 14.5 L32 16 L17.5 17.5 L16 32 L14.5 17.5 L0 16 L14.5 14.5 Z" fill="#7c3aed" />
            </svg>
        </div>
    );
};

export default Works;