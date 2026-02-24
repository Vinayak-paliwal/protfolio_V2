import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MouseFollower from './MouseFollower';
import Preloader from './Preloader';
import AOS from 'aos';
import $ from 'jquery';

const Layout = ({ children }) => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            once: true,
            easing: 'ease-in-out',
        });

        // Sticky Header logic
        const handleScroll = () => {
            const fixed_top = $(".one__header");
            if ($(window).scrollTop() > 50) {
                fixed_top.addClass("animated fadeInDown header-fixed");
            } else {
                fixed_top.removeClass("animated fadeInDown header-fixed");
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Initial check
        handleScroll();

        // Banner line shape clone logic (from main.js)
        const lineShape = document.querySelector('.line-shape.first');
        if (lineShape && lineShape.children.length === 0) {
            for (let i = 0; i < 100; i++) {
                const span = document.createElement('span');
                lineShape.appendChild(span);
            }
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="position-relative">
            <Preloader />
            <MouseFollower />
            <main className="main body-bg overflow-hidden">
                <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap"></div>
                <Navbar />
                {children}
                <Footer />
            </main>
        </div>
    );
};

export default Layout;
