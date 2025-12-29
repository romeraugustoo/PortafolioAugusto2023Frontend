import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { useTheme } from '../context/ThemeContext';
import { useMagic } from '../context/MagicContext';
import '../styles/bodyhome.css'; // Ensure styles are available
import '../styles/avatar.css';
import confetti from 'canvas-confetti';

const LayoutContent = ({ children, activeSection }) => {
    const [navBarClass, setNavBarClass] = useState('');
    const { darkMode, toggleTheme } = useTheme();
    const { handleMagicClick } = useMagic();

    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        const url = e.currentTarget.href;

        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x, y }
        });

        setTimeout(() => {
            window.open(url, '_blank');
        }, 3000);
    };

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
                <a href="https://wa.link/cjq5u5" className='btn-wsp' target='_blank' rel="noopener noreferrer" onClick={handleWhatsAppClick} data-tooltip="¡Escríbeme!">
                    <i className="fa-brands fa-whatsapp fa-2xl" ></i>
                </a>
            </div>

            <button className="btn-theme-toggle" onClick={toggleTheme} data-tooltip={darkMode ? "Modo Claro" : "Modo Oscuro"}>
                <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} fa-2xl`}></i>
            </button>

            <button className="magic-wand-btn-floating" onClick={handleMagicClick} data-tooltip="Cambiar Tema">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
            </button>
        </>
    );
};

const PageLayout = ({ children, activeSection }) => {
    return (
        <LayoutContent activeSection={activeSection}>
            {children}
        </LayoutContent>
    );
};

export default PageLayout;
