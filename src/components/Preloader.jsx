import React, { useEffect } from 'react';
import $ from 'jquery';

const Preloader = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            $('#preloader').fadeOut();
        }, 400);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="preloader">
            <div className="layla-preloader text-center"></div>
        </div>
    );
};

export default Preloader;
