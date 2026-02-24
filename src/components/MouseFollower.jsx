import React, { useEffect, useRef } from 'react';

const MouseFollower = () => {
    const followerRef = useRef(null);
    const dotRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const followerPos = useRef({ x: 0, y: 0 });
    const dotPos = useRef({ x: 0, y: 0 });
    const rafId = useRef(null);

    useEffect(() => {
        const onMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const updatePosition = () => {
            const fSpeed = 0.1;
            const dSpeed = 0.2;

            followerPos.current.x += (mousePos.current.x - followerPos.current.x) * fSpeed;
            followerPos.current.y += (mousePos.current.y - followerPos.current.y) * fSpeed;

            dotPos.current.x += (mousePos.current.x - dotPos.current.x) * dSpeed;
            dotPos.current.y += (mousePos.current.y - dotPos.current.y) * dSpeed;

            if (followerRef.current) {
                followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) translate(-50%, -50%)`;
                followerRef.current.style.opacity = '1';
            }

            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
                dotRef.current.style.opacity = '1';
            }

            rafId.current = requestAnimationFrame(updatePosition);
        };

        window.addEventListener("mousemove", onMouseMove);
        rafId.current = requestAnimationFrame(updatePosition);

        const onMouseEnter = () => document.querySelector('.mouse-follower')?.classList.add('hide-cursor');
        const onMouseLeave = () => document.querySelector('.mouse-follower')?.classList.remove('hide-cursor');

        const links = document.querySelectorAll("a, button");
        links.forEach(link => {
            link.addEventListener('mouseenter', onMouseEnter);
            link.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(rafId.current);
            links.forEach(link => {
                link.removeEventListener('mouseenter', onMouseEnter);
                link.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return (
        <div className="mouse-follower">
            <span ref={followerRef} className="cursor-outline"></span>
            <span ref={dotRef} className="cursor-dot"></span>
        </div>
    );
};

export default MouseFollower;
