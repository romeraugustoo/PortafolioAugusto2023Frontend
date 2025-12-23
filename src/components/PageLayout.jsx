import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import '../styles/bodyhome.css'; // Ensure styles are available

const LayoutContent = ({ children, activeSection }) => {
    const [navBarClass, setNavBarClass] = useState('');
    const { darkMode, toggleTheme } = useTheme();

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollThreshold = 0.05;

            if (scrollY < windowHeight * scrollThreshold) {
                setNavBarClass("");
            } else {
                setNavBarClass("inline-block-class");
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Header activeSection={activeSection} navBarClass={navBarClass} />
            {children}

            {/* Floating Buttons */}
            <div className="wsp" >
                <a href="https://wa.link/cjq5u5" className='btn-wsp' target='_blank' rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp fa-2xl" ></i>
                </a>
            </div>

            <button className="btn-theme-toggle" onClick={toggleTheme}>
                <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} fa-2xl`}></i>
            </button>
        </>
    );
};

const PageLayout = ({ children, activeSection }) => {
    return (
        <ThemeProvider>
            <LayoutContent activeSection={activeSection}>
                {children}
            </LayoutContent>
        </ThemeProvider>
    );
};

export default PageLayout;
