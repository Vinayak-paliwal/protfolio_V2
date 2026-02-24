import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


import profileImg from '../assets/images/banner/vinayaksq.jpg';
import sShape1 from '../assets/images/global/s-shape1.png';
import sShape3 from '../assets/images/global/s-shape3.png';
import uiImg from '../assets/images/global/ui.png';
import digitalImg from '../assets/images/global/digital.png';
import brandImg from '../assets/images/global/brand.png';
import webImg from '../assets/images/global/web.png';
import goodsImg from '../assets/images/global/goods.png';
import socialHoverImg from '../assets/images/global/social-hover.png';
import sShape2 from '../assets/images/global/s-shape2.png';
import cusStar1 from '../assets/images/global/cus-star1.png';
import latestWork1 from '../assets/images/banner/latest-work1.png';

const Home = () => {
    useEffect(() => {
        const textElement = document.querySelector(".textcircle .text");
        if (textElement) {
            const text = textElement.innerText;
            const chars = text.split("");
            const degree = 360 / chars.length;
            textElement.innerHTML = chars
                .map(
                    (char, i) => `<span style="transform:rotate(${i * degree}deg)">${char}</span>`
                )
                .join("");
        }
    }, []);

    return (
        <section className="body-box body-box1 position-relative cus-z-1 pb-xxl-20 pb-xl-15 pb-lg-10 pb-9">
            <div className="container">
                <div className="row g-xxl-6 g-4">
                    <div className="col-lg-9">
                        <div className="row g-xxl-6 g-4 mb-xxl-6 mb-4 justify-content-center">
                            <div className="col-lg-4">
                                <div className="lyla-box1 mb-xxl-6 mb-4 cmn-box py-xxl-8 py-xl-8 py-lg-8 py-5 px-xxl-8 px-xl-6 px-lg-4 px-6" data-aos="zoom-in-down" data-aos-duration="800">
                                    <div className="layla-thumb layla-thumbtwo m-auto text-center mt-4 mb-13" data-aos="fade-up" data-aos-duration="1000">
                                        <img src={profileImg} alt="img" className="radius100" />
                                        <div className="textcircle">
                                            <div className="text">
                                                <p>Full - Stack | | Web - Developer | |</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <Link to="/about" className="cmn-btn text-center justify-content-center gap-2 d-inline-flex align-items-center py-3 px-6 px-5">
                                            <span className="n0-color">I’m Vinayak Paliwal</span>
                                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.86625 8.42687L21.1863 4.65354C26.2663 2.96021 29.0263 5.73354 27.3463 10.8135L23.5729 22.1335C21.0396 29.7469 16.8796 29.7469 14.3463 22.1335L13.2262 18.7735L9.86625 17.6535C2.25292 15.1202 2.25292 10.9735 9.86625 8.42687Z" stroke="#9747FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M13.4766 18.2007L18.2499 13.4141" stroke="#9747FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <Link to="/about" className="d-flex mt-8 cmn-footarrow align-items-center justify-content-between">
                                        <span className="fw_500 fs-seven n0-color">Biography</span>
                                        <span className="cmn-svg40">
                                            <svg width="58" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.7674 28.2202C21.6527 32.4019 24.9182 35.8085 29.0165 37.8689C33.1148 39.9293 37.7968 40.5183 42.2777 39.5372C46.7587 38.5561 50.7661 36.0645 53.6285 32.48C56.4908 28.8955 58.034 24.4361 57.9994 19.8492C57.9648 15.2622 56.3545 10.8266 53.4385 7.28568C50.5224 3.74481 46.4778 1.31394 41.9825 0.400527C37.4873 -0.512885 32.8147 0.146678 28.748 2.26866C24.6812 4.39065 21.4675 7.84608 19.6455 12.0558L20.7467 12.5324C22.4595 8.57532 25.4804 5.32721 29.3031 3.33255C33.1259 1.33788 37.5181 0.717889 41.7436 1.5765C45.9691 2.4351 49.771 4.72012 52.5122 8.04854C55.2533 11.377 56.7669 15.5465 56.7995 19.8582C56.832 24.1699 55.3814 28.3618 52.6908 31.7312C50.0002 35.1006 46.2331 37.4427 42.0211 38.3649C37.809 39.2872 33.4079 38.7335 29.5555 36.7967C25.7031 34.86 22.6335 31.6578 20.8613 27.727L19.7674 28.2202Z" fill="white" />
                                                <path d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z" fill="white" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                                <Link to="/works" className="common-serbox d-block cmn-box py-xxl-6 py-xl-6 py-lg-4 py-4 px-xxl-6 px-xxl-6 px-lg-4 px-4" data-aos="fade-up" data-aos-duration="600">
                                    <span className="d-block mb-xxl-19 mb-14 fw_500 fs-five n0-color">
                                        Articles & <span className="d-block fw_500 fs-five n0-color ms-8"> Publications</span>
                                    </span>
                                    <span className="d-flex cmn-footarrow align-items-center justify-content-between">
                                        <span className="fw_500 fs-seven n0-color">All Blog</span>
                                        <svg width="58" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.7674 28.2202C21.6527 32.4019 24.9182 35.8085 29.0165 37.8689C33.1148 39.9293 37.7968 40.5183 42.2777 39.5372C46.7587 38.5561 50.7661 36.0645 53.6285 32.48C56.4908 28.8955 58.034 24.4361 57.9994 19.8492C57.9648 15.2622 56.3545 10.8266 53.4385 7.28568C50.5224 3.74481 46.4778 1.31394 41.9825 0.400527C37.4873 -0.512885 32.8147 0.146678 28.748 2.26866C24.6812 4.39065 21.4675 7.84608 19.6455 12.0558L20.7467 12.5324C22.4595 8.57532 25.4804 5.32721 29.3031 3.33255C33.1259 1.33788 37.5181 0.717889 41.7436 1.5765C45.9691 2.4351 49.771 4.72012 52.5122 8.04854C55.2533 11.377 56.7669 15.5465 56.7995 19.8582C56.832 24.1699 55.3814 28.3618 52.6908 31.7312C50.0002 35.1006 46.2331 37.4427 42.0211 38.3649C37.809 39.2872 33.4079 38.7335 29.5555 36.7967C25.7031 34.86 22.6335 31.6578 20.8613 27.727L19.7674 28.2202Z" fill="white" />
                                            <path d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z" fill="white" />
                                        </svg>
                                    </span>
                                    <img src={sShape3} alt="img" className="s-shape3" />
                                </Link>
                            </div>
                            <div className="col-lg-8">
                                <div className="row g-xxl-6 g-4 mb-xxl-6 mb-4">
                                    <div className="col-lg-6 col-md-6 col-sm-6" data-aos="zoom-in-up" data-aos-duration="800">
                                        <div className="cmn-box py-xxl-7 py-xl-6 py-lg-4 py-4 px-xxl-8 px-xl-6 px-lg-4 px-4">
                                            <h5 className="s1-color mb-2 fw_500 small-title responsive-small">Title</h5>
                                            <h3 className="titles-designer pb-xxl-7 pb-5" data-aos="fade-down" data-aos-duration="800">
                                                <Link to="/about" className="fw_600">Full Stack <span className="d-block title-extraclr ms-8">Web Developer</span></Link>
                                            </h3>
                                            <img src={sShape1} alt="img" className="s-shape1" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6" data-aos="zoom-in-down" data-aos-duration="800">
                                        <div className="text-center body-socialwrap cmn-box position-relative pt-xxl-8 pt-xl-6 pt-5 pb-xxl-7 pb-xl-9 pb-md-7 pb-sm-7 pb-5 px-xxl-8 px-xl-6 px-lg-4 px-4">
                                            <ul className="body-social body-socialtwo">
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
                                            <Link to="/about" className="d-flex mt-7 cmn-footarrow align-items-center justify-content-between">
                                                <span className="fw_500 fs-seven n0-color">Profiles</span>
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
                                <div className="col-lg-12">
                                    <div className="cmn-box service-offering 4 py-xxl-8 py-xl-6 py-lg-4 py-4 px-xxl-8 px-xl-6 px-lg-4 px-4" data-aos="zoom-in-up" data-aos-duration="800">
                                        <span className="d-block mb-xxl-11 mb-xl-8 mb-8 fw_500 fs-five n0-color">Services Offering</span>
                                        <ul className="ordering-brand d-flex justify-content-between gap-3 mb-11">
                                            <li>
                                                <Link to="/works" className="text-center">
                                                    <span className="text-center d-block"><img src={uiImg} alt="ui-img" /></span>
                                                    <span className="mt-5 ser-offeringopa d-block">UI Development</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/works" className="text-center">
                                                    <span className="text-center d-block"><img src={digitalImg} alt="ui-img" /></span>
                                                    <span className="mt-5 ser-offeringopa d-block">Figma To HTML</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/works" className="text-center">
                                                    <span className="text-center d-block"><img src={brandImg} alt="ui-img" /></span>
                                                    <span className="mt-5 ser-offeringopa d-block">Responsive Web Design</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/works" className="text-center">
                                                    <span className="text-center d-block"><img src={webImg} alt="ui-img" /></span>
                                                    <span className="mt-5 ser-offeringopa d-block">React Development</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <Link to="/works" className="d-flex align-items-center gap-xxl-3 gap-1">
                                            <span className="goodthingking">Things I’m good at</span>
                                            <img src={goodsImg} alt="img" className="goodthingking-img" />
                                        </Link>
                                        <Link to="/works" className="d-flex mt-10 cmn-footarrow align-items-center justify-content-between">
                                            <span className="fw_500 fs-seven n0-color">All Services</span>
                                            <span className="cmn-svg40">
                                                <svg width="58" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.7674 28.2202C21.6527 32.4019 24.9182 35.8085 29.0165 37.8689C33.1148 39.9293 37.7968 40.5183 42.2777 39.5372C46.7587 38.5561 50.7661 36.0645 53.6285 32.48C56.4908 28.8955 58.034 24.4361 57.9994 19.8492C57.9648 15.2622 56.3545 10.8266 53.4385 7.28568C50.5224 3.74481 46.4778 1.31394 41.9825 0.400527C37.4873 -0.512885 32.8147 0.146678 28.748 2.26866C24.6812 4.39065 21.4675 7.84608 19.6455 12.0558L20.7467 12.5324C22.4595 8.57532 25.4804 5.32721 29.3031 3.33255C33.1259 1.33788 37.5181 0.717889 41.7436 1.5765C45.9691 2.4351 49.771 4.72012 52.5122 8.04854C55.2533 11.377 56.7669 15.5465 56.7995 19.8582C56.832 24.1699 55.3814 28.3618 52.6908 31.7312C50.0002 35.1006 46.2331 37.4427 42.0211 38.3649C37.809 39.2872 33.4079 38.7335 29.5555 36.7967C25.7031 34.86 22.6335 31.6578 20.8613 27.727L19.7674 28.2202Z" fill="white" />
                                                    <path d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z" fill="white" />
                                                </svg>
                                            </span>
                                        </Link>
                                        <img src={sShape1} alt="img" className="s-shape1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-xxl-6 g-4">
                            <div className="col-lg-8 col-md-8 col-sm-6" data-aos="fade-down" data-aos-duration="800">
                                <div className="repeat-skilltools">
                                    <div className="cmn-box position-relative d-block pb-xl-8 pb-4 pt-xl-8 pt-4">
                                        <span className="d-block mb-xxl-2 mb-3 fw_500 fs-five n0-color px-xxl-6 px-xl-6 px-lg-4 px-4">Skills & Tools</span>
                                        <div className="marquee-wrapper skill-tagslide text-slider">
                                            <div className="marquee-inner to-left">
                                                <ul className="marqee-list d-flex">
                                                    <li className="marquee-item">
                                                        <span className="text-slider"><span className="design-tag">UI Development</span></span>
                                                        <span className="text-slider"><span className="design-tag">React.js</span></span>
                                                        <span className="text-slider"><span className="design-tag">Redux</span></span>
                                                        <span className="text-slider"><span className="design-tag">Node.js</span></span>
                                                        <span className="text-slider"><span className="design-tag">Express.js</span></span>
                                                        <span className="text-slider"><span className="design-tag">MongoDB</span></span>
                                                        <span className="text-slider"><span className="design-tag">REST APIs</span></span>
                                                        <span className="text-slider"><span className="design-tag">Tailwind CSS</span></span>
                                                        <span className="text-slider"><span className="design-tag">Material UI</span></span>
                                                        <span className="text-slider"><span className="design-tag">JavaScript (ES6+)</span></span>
                                                        <span className="text-slider"><span className="design-tag">JWT Auth</span></span>
                                                        <span className="text-slider"><span className="design-tag">Mongoose</span></span>
                                                        <span className="text-slider"><span className="design-tag">SQL</span></span>
                                                        <span className="text-slider"><span className="design-tag">Git & GitHub</span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6" data-aos="fade-left" data-aos-duration="700">
                                <Link to="/contact" className="common-serbox d-block cmn-box py-xl-8 py-4 px-xxl-6 px-xxl-6 px-lg-4 px-4">
                                    <span className="d-block mb-xxl-15 mb-18 fw_500 fs-five n0-color work-respon">
                                        Work with <span className="d-block fw_500 fs-five n0-color ms-8">Vinayak paliwal!</span>
                                    </span>
                                    <span className="d-flex cmn-footarrow get-respons-1199 align-items-center justify-content-between">
                                        <span className="fw_500 fs-seven n0-color">Get In Touch</span>
                                        <svg width="58" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.7674 28.2202C21.6527 32.4019 24.9182 35.8085 29.0165 37.8689C33.1148 39.9293 37.7968 40.5183 42.2777 39.5372C46.7587 38.5561 50.7661 36.0645 53.6285 32.48C56.4908 28.8955 58.034 24.4361 57.9994 19.8492C57.9648 15.2622 56.3545 10.8266 53.4385 7.28568C50.5224 3.74481 46.4778 1.31394 41.9825 0.400527C37.4873 -0.512885 32.8147 0.146678 28.748 2.26866C24.6812 4.39065 21.4675 7.84608 19.6455 12.0558L20.7467 12.5324C22.4595 8.57532 25.4804 5.32721 29.3031 3.33255C33.1259 1.33788 37.5181 0.717889 41.7436 1.5765C45.9691 2.4351 49.771 4.72012 52.5122 8.04854C55.2533 11.377 56.7669 15.5465 56.7995 19.8582C56.832 24.1699 55.3814 28.3618 52.6908 31.7312C50.0002 35.1006 46.2331 37.4427 42.0211 38.3649C37.809 39.2872 33.4079 38.7335 29.5555 36.7967C25.7031 34.86 22.6335 31.6578 20.8613 27.727L19.7674 28.2202Z" fill="white" />
                                            <path d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z" fill="white" />
                                        </svg>
                                    </span>
                                    <img src={sShape2} alt="img" className="s-shape2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="row g-xxl-6 g-4">
                            <div className="col-lg-12">
                                <div className="cmn-box feature-box freature-boxone position-relative py-xxl-6 py-xl-6 py-lg-6 py-5 px-xxl-4 px-3" data-aos="flip-up" data-aos-duration="600">
                                    <div className="marquee-wrapper">
                                        <div className="marquee-inner to-left">
                                            <ul className="marqee-list d-flex">
                                                <li className="marquee-item">
                                                    <span className="text-slider"><img src={cusStar1} alt="img" /> <span className="clropa">LATEST WORKS AND FEATURED</span><img src={cusStar1} alt="img" /></span>
                                                    <span className="text-slider"> <span className="clropa">LATEST WORKS AND FEATURED</span> <img src={cusStar1} alt="img" /></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-100 col-lg-12 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="700">
                                <div className="expri-box cmn-box d-grid position-relative pt-xxl-7 pt-6 pb-xxl-9 pb-6 px-xxl-8 px-xl-6 px-lg-4 px-4">
                                    <div className="expri-items-box mb-xxl-7 mb-xl-10 mb-lg-10 mb-md-8 mb-sm-3 text-center d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="600">
                                        <div>
                                            <h2 className="fw_600 n0-color mb-2">2</h2>
                                            <span className="expri-clr text-uppercase n00-color fw_300 fs-six">YEARS EXPERIENCE</span>
                                        </div>
                                    </div>
                                    <div className="expri-items-box mb-xxl-8 mb-xl-11 mb-lg-11 mb-md-8 mb-sm-2 text-center d-flex align-items-center justify-content-center" data-aos="zoom-in-down" data-aos-duration="700">
                                        <div>
                                            <h2 className="fw_600 n0-color mb-2">+6</h2>
                                            <span className="expri-clr text-uppercase n00-color fw_300 fs-six">TOTAL PROJECTS</span>
                                        </div>
                                    </div>
                                    <div className="expri-items-box text-center d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="600">
                                        <div>
                                            <h2 className="fw_600 n0-color mb-2">+8</h2>
                                            <span className="expri-clr text-uppercase n00-color fw_300 fs-six">Skills Learned</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6 col-sm-6">
                                <Link to="/works" className="cmn-box position-relative d-block pb-xxl-8 pb-xl-6 pb-lg-5 pb-5 pt-xxl-8 pt-xl-6 pt-lg-5 pt-5 px-xxl-8 px-xl-6 px-lg-4 px-4">
                                    <span className="d-block mb-xxl-5 mb-4 fw_500 fs-five n0-color">
                                        See My <span className="d-block fw_500 fs-five n0-color ms-8">Latest Works</span>
                                    </span>
                                    <span className="work-thumb mb-4 m-auto text-center all-proje199s" data-aos="zoom-in-up" data-aos-duration="700">
                                        <img src={latestWork1} alt="img" className="radius12" />
                                    </span>
                                    <span className="d-flex cmn-footarrow align-items-center justify-content-between all-proje-1199" data-aos="zoom-in-up" data-aos-duration="800">
                                        <span className="fw_500 fs-seven n0-color">All Projects</span>
                                        <span className="cmn-svg40">
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
                </div>
            </div>
        </section>
    );
};

export default Home;
