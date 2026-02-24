import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [sendText, setSendText] = useState('Send Message ➤');
    const canvasRef = useRef(null);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
    };

    const handleSend = async (e) => {
        e.preventDefault();
        const originalText = sendText;
        setSendText('Sending...');

        const formData = new FormData(e.target);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSendText('Message Sent! ✓');
                setTimeout(() => {
                    setSendText('Send Message ➤');
                    e.target.reset();
                }, 4000);
            } else {
                console.error("Error", data);
                setSendText('Error! ✗');
                setTimeout(() => setSendText(originalText), 3000);
            }
        } catch (error) {
            console.error("Submit Error", error);
            setSendText('Error! ✗');
            setTimeout(() => setSendText(originalText), 3000);
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let stars = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const initStars = () => {
            stars = Array.from({ length: 180 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.5 + 0.3,
                alpha: Math.random(),
                speed: Math.random() * 0.005 + 0.002,
                purple: Math.random() > 0.6,
            }));
        };

        resize();
        initStars();
        window.addEventListener('resize', () => { resize(); initStars(); });

        let animationFrame;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(s => {
                s.alpha += s.speed;
                if (s.alpha > 1 || s.alpha < 0) s.speed *= -1;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = s.purple
                    ? `rgba(160,100,255,${Math.abs(s.alpha)})`
                    : `rgba(255,255,255,${Math.abs(s.alpha) * 0.7})`;
                ctx.fill();
            });
            animationFrame = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    const glassStyle = {
        background: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: '24px',
    };

    const inputStyle = {
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        paddingLeft: '48px',
        transition: 'all 0.3s ease',
        outline: 'none',
        borderRadius: '16px',
    };

    const iconStyle = {
        left: '28px',
        top: '50%',
        color: '#9b6dff',
        filter: 'drop-shadow(0 0 8px rgba(155, 109, 255, 0.4))',
        transition: 'all 0.3s ease',
    };

    return (
        <>
            <style>
                {`
                @keyframes pulse-green {
                    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
                    70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
                    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
                }
                .dot-pulse {
                    animation: pulse-green 2s infinite;
                }
                .form-input:focus {
                    border-color: #9b6dff !important;
                    background: rgba(155, 109, 255, 0.08) !important;
                    box-shadow: 0 0 15px rgba(155, 109, 255, 0.2);
                }
                .form-input:focus + .ico-svg {
                    color: #fff !important;
                    filter: drop-shadow(0 0 12px rgba(155, 109, 255, 0.8)) !important;
                }
                .info-item-card {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    text-decoration: none !important;
                    display: flex;
                }
                .info-item-card:hover {
                    background: rgba(255, 255, 255, 0.08) !important;
                }
                .info-item-card:hover .info-icon-box {
                    border-color: #9b6dff !important;
                    box-shadow: 0 0 20px rgba(155, 109, 255, 0.4);
                }
                .info-item-card:hover .ph-link {
                    color: #fff;
                }
                .social-btn-premium {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    background: rgba(18, 18, 20, 0.8) !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    color: #fff !important;
                    text-decoration: none;
                }
                .social-btn-premium span {
                    color: #fff !important;
                }
                .social-btn-premium:hover {
                    background: rgba(155, 109, 255, 0.2) !important;
                    border-color: rgba(155, 109, 255, 0.4) !important;
                    transform: translateY(-4px);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 0 15px rgba(155, 109, 255, 0.2);
                }
                .send-btn-premium {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .send-btn-premium:hover {
                    transform: scale(1.02);
                    box-shadow: 0 8px 32px rgba(124, 58, 237, 0.6);
                    filter: brightness(1.1);
                }
                .send-btn-premium:active {
                    transform: scale(0.98);
                }
                .ph-link {
                    color: #b0a8c8;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                .text-white-force {
                    color: #fff !important;
                }
                `}
            </style>

            <canvas
                ref={canvasRef}
                style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
            />

            <div className="container position-relative cus-z-1 pt-6 pb-xxl-20 pb-xl-15 pb-lg-10 pb-9 text-start">
                <div className="mb-8" data-aos="fade-down">
                    <Link to="/" className="fw_400 fs-seven n0-color text-uppercase d-inline-flex align-items-center gap-2">
                        <svg width="20" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.5019 12H3.67188" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="n0-color">BACK TO <span className="s1-color">HOME</span></span>
                    </Link>
                </div>

                <div className="row g-xxl-10 g-xl-8 g-6 align-items-stretch">
                    {/* LEFT COLUMN */}
                    <div className="col-lg-7 d-flex flex-column" data-aos="fade-right">
                        <div className="mb-8">
                            <h1 className="n0-color mb-4 fw_800 display-four">Get In Touch</h1>
                            <p className="n07 fs20 mb-6" style={{ color: '#b0a8c8' }}>
                                Have a project in mind? <strong className="n0-color" style={{ color: '#fff' }}>Let's build</strong><br />
                                something impactful together.
                            </p>
                            <div className="d-inline-flex align-items-center gap-2 px-4 py-2 radius30" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <span className="d-block dot-pulse" style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }}></span>
                                <span className="fs-eight fw_500 text-white-force">Open to Opportunities</span>
                            </div>
                        </div>

                        <form className="p-xxl-8 p-6 flex-grow-1 d-flex flex-column" style={glassStyle} onSubmit={handleSend}>
                            <div className="mb-4 position-relative">
                                <input type="text" name="name" placeholder="Your Name" required className="form-input n0-color px-12 py-3 w-100" style={inputStyle} />
                                <span className="ico-svg position-absolute translate-middle-y translate-middle-x" style={iconStyle}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.1602 10.87C12.0602 10.86 11.9402 10.86 11.8302 10.87C9.45016 10.79 7.56016 8.84 7.56016 6.44C7.56016 3.99 9.54016 2 12.0002 2C14.4502 2 16.4402 3.99 16.4402 6.44C16.4302 8.84 14.5402 10.79 12.1602 10.87Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <div className="mb-4 position-relative">
                                <input type="email" name="email" placeholder="Your Email" required className="form-input n0-color px-12 py-3 w-100" style={inputStyle} />
                                <span className="ico-svg position-absolute translate-middle-y translate-middle-x" style={iconStyle}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <div className="mb-6 position-relative flex-grow-1">
                                <textarea name="message" placeholder="Tell me about your project..." required className="form-input n0-color px-12 py-3 w-100 h-100" style={{ ...inputStyle, paddingLeft: '48px', resize: 'none' }}></textarea>
                                <span className="ico-svg position-absolute translate-middle-x" style={{ ...iconStyle, top: '18px' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.26 3.34L7.39 9.21C7.16 9.44 6.94 9.89 6.89 10.21L6.56 12.56C6.44 13.41 7.04 14.01 7.89 13.89L10.24 13.56C10.56 13.51 11.01 13.29 11.24 13.06L17.11 7.19C18.12 6.18 18.59 5.01 17.11 3.52C15.63 2.03 14.27 2.33 13.26 3.34Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.89 5.05005C12.32 7.84005 14.56 10.0801 17.35 10.5101" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3 22H21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <button className="send-btn-premium w-100 py-4 radius16 d-flex align-items-center justify-content-center gap-2 mt-4" type="submit" style={{ background: 'linear-gradient(135deg,#7c3aed 0%,#a855f7 60%,#c084fc 100%)', border: 'none', color: '#fff', boxShadow: '0 4px 24px rgba(124,58,237,.4)' }}>
                                <span className="fw_700 fs-six">{sendText}</span>
                            </button>
                        </form>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-lg-5 d-flex flex-column" data-aos="fade-left">
                        <div className="p-xxl-8 p-6 flex-grow-1 d-flex flex-column" style={{ ...glassStyle, marginTop: '80px' }}>
                            <h2 className="mb-8 fw_600 s1-color d-block" style={{ fontSize: '20px' }}>Contact Info</h2>
                            <div className="d-flex flex-column gap-6 flex-grow-1">
                                {/* PHONE */}
                                <a href="tel:+916378775302" className="info-item-card d-flex align-items-center gap-4 p-3 radius20" style={{ background: 'transparent' }}>
                                    <div className="info-icon-box d-flex align-items-center justify-content-center flex-shrink-0 transition" style={{ width: '72px', height: '72px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', borderRadius: '50%' }}>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.2907 24.4413C29.2907 24.9213 29.1841 25.4146 28.9574 25.8946C28.7307 26.3746 28.4374 26.828 28.0507 27.2546C27.3974 27.9746 26.6774 28.4946 25.8641 28.828C25.0641 29.1613 24.1974 29.3346 23.2641 29.3346C21.9041 29.3346 20.4507 29.0146 18.9174 28.3613C17.3841 27.708 15.8507 26.828 14.3307 25.7213C12.7974 24.6013 11.3441 23.3613 9.9574 21.988C8.58406 20.6013 7.34406 19.148 6.2374 17.628C5.14406 16.108 4.26406 14.588 3.62406 13.0813C2.98406 11.5613 2.66406 10.108 2.66406 8.7213C2.66406 7.81464 2.82406 6.94797 3.14406 6.14797C3.46406 5.33464 3.97073 4.58797 4.6774 3.9213C5.53073 3.0813 6.46406 2.66797 7.45073 2.66797C7.82406 2.66797 8.1974 2.74797 8.53073 2.90797C8.8774 3.06797 9.18406 3.30797 9.42406 3.65464L12.5174 8.01464C12.7574 8.34797 12.9307 8.65464 13.0507 8.94797C13.1707 9.22797 13.2374 9.50797 13.2374 9.7613C13.2374 10.0813 13.1441 10.4013 12.9574 10.708C12.7841 11.0146 12.5307 11.3346 12.2107 11.6546L11.1974 12.708C11.0507 12.8546 10.9841 13.028 10.9841 13.2413C10.9841 13.348 10.9974 13.4413 11.0241 13.548C11.0641 13.6546 11.1041 13.7346 11.1307 13.8146C11.3707 14.2546 11.7841 14.828 12.3707 15.5213C12.9707 16.2146 13.6107 16.9213 14.3041 17.628C15.0241 18.3346 15.7174 18.988 16.4241 19.588C17.1174 20.1746 17.6907 20.5746 18.1441 20.8146C18.2107 20.8413 18.2907 20.8813 18.3841 20.9213C18.4907 20.9613 18.5974 20.9746 18.7174 20.9746C18.9441 20.9746 19.1174 20.8946 19.2641 20.748L20.2774 19.748C20.6107 19.4146 20.9307 19.1613 21.2374 19.0013C21.5441 18.8146 21.8507 18.7213 22.1841 18.7213C22.4374 18.7213 22.7041 18.7746 22.9974 18.8946C23.2907 19.0146 23.5974 19.188 23.9307 19.4146L28.3441 22.548C28.6907 22.788 28.9307 23.068 29.0774 23.4013C29.2107 23.7346 29.2907 24.068 29.2907 24.4413Z" stroke="#9747FF" strokeWidth="1.5" strokeMiterlimit="10" />
                                        </svg>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="n0-color fw_400 fs-four mb-1">Phone</h5>
                                        <span className="ph-link fs-six">+91 6378775302</span>
                                    </div>
                                </a>

                                {/* EMAIL */}
                                <a href="mailto:vinayakpaliwal866@gmail.com" className="info-item-card d-flex align-items-center gap-4 p-3 radius20" style={{ background: 'transparent' }}>
                                    <div className="info-icon-box d-flex align-items-center justify-content-center flex-shrink-0 transition" style={{ width: '72px', height: '72px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', borderRadius: '50%' }}>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.86625 8.42687L21.1863 4.65354C26.2663 2.96021 29.0263 5.73354 27.3463 10.8135L23.5729 22.1335C21.0396 29.7469 16.8796 29.7469 14.3463 22.1335L13.2262 18.7735L9.86625 17.6535C2.25292 15.1202 2.25292 10.9735 9.86625 8.42687Z" stroke="#9747FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.4766 18.2007L18.2499 13.4141" stroke="#9747FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="n0-color fw_400 fs-four mb-1">Email</h5>
                                        <span className="ph-link fs-six">vinayakpaliwal866@gmail.com</span>
                                    </div>
                                </a>

                                {/* ADDRESS */}
                                <div className="info-item-card d-flex align-items-center gap-4 p-3 radius20" style={{ background: 'transparent' }}>
                                    <div className="info-icon-box d-flex align-items-center justify-content-center flex-shrink-0 transition" style={{ width: '72px', height: '72px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', borderRadius: '50%' }}>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.0037 17.9059C18.3013 17.9059 20.1637 16.0434 20.1637 13.7459C20.1637 11.4484 18.3013 9.58594 16.0037 9.58594C13.7062 9.58594 11.8438 11.4484 11.8438 13.7459C11.8438 16.0434 13.7062 17.9059 16.0037 17.9059Z" stroke="#9747FF" strokeWidth="1.5" />
                                            <path d="M4.82367 11.3213C7.45034 -0.225362 24.557 -0.212028 27.1703 11.3346C28.7037 18.108 24.4903 23.8413 20.797 27.388C18.117 29.9746 13.877 29.9746 11.1837 27.388C7.50367 23.8413 3.29034 18.0946 4.82367 11.3213Z" stroke="#9747FF" strokeWidth="1.5" />
                                        </svg>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="n0-color fw_400 fs-four mb-1">Address</h5>
                                        <span className="ph-link fs-six">Jaipur, Rajasthan</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-10 d-flex flex-wrap gap-4 justify-content-center">
                                <a href="https://github.com/Vinayak-paliwal?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-btn-premium d-flex align-items-center justify-content-center px-8 py-4 radius30" style={{ minWidth: '160px' }}>
                                    <span className="fw_600 fs-six">GitHub</span>
                                </a>
                                <a href="https://www.linkedin.com/in/vinayak-paliwal-690220195/" target="_blank" rel="noopener noreferrer" className="social-btn-premium d-flex align-items-center justify-content-center px-8 py-4 radius30" style={{ minWidth: '160px' }}>
                                    <span className="fw_600 fs-six">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
