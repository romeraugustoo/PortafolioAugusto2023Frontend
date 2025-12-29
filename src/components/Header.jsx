/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import "../styles/header.css";
import logoTipo from "../assets/images/logo/Augusto romera dev.png";
import { useMagic } from '../context/MagicContext';
import { useTheme } from '../context/ThemeContext';
import confetti from 'canvas-confetti';
import Swal from 'sweetalert2';
import curriculumPDF from '../assets/files/Curriculum Vitae augusto.pdf';

const Header = ({ activeSection, navBarClass }) => {
    const [expanded, setExpanded] = useState(false);
    const { currentIcon, themeIndex } = useMagic();
    const { darkMode } = useTheme();
    const [isAnimating, setIsAnimating] = useState(false);
    const navLinkClass = navBarClass;

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 300); // Match transition duration
        return () => clearTimeout(timer);
    }, [themeIndex]);
    const handleLinkClick = () => {
        setExpanded(false);  // Cerrar la barra de navegación después de hacer clic en un enlace
    };

    const [showNavButton, setShowNavButton] = useState(true);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowNavButton(false);
            } else {
                setShowNavButton(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDownload = (e) => {
        e.preventDefault(); // Prevent immediate download

        // Calculate origin
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        // Confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x, y }
        });

        // Delay download and modal
        setTimeout(() => {
            // Trigger download
            const link = document.createElement('a');
            link.href = curriculumPDF;
            link.download = 'Curriculum Vitae augusto.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Show Modal
            Swal.fire({
                title: '¡Descarga Exitosa! 🎉',
                text: 'Descargaste el CV, espero trabajemos juntos pronto.',
                icon: 'success',
                confirmButtonText: 'Genial',
                background: darkMode ? '#1a1a1a' : '#ffffff',
                color: darkMode ? '#ffffff' : '#000000',
                confirmButtonColor: '#25D366',
                customClass: {
                    popup: 'swal-custom-popup',
                    title: 'swal-custom-title',
                    content: 'swal-custom-content'
                },
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
        }, 3000);
    };

    return (
        <Navbar expand="lg" data-bs-theme="dark" className={`navbarmain ${navLinkClass}`} expanded={expanded} onSelect={() => setExpanded(false)}>
            <Container>
                <Navbar.Brand>
                    {isHome ? (
                        <img
                            src={currentIcon || logoTipo}
                            className={`d-inline-block navbar-image ${isAnimating ? 'transition-effect' : ''}`}
                            onClick={() => {
                                scroll.scrollToTop();
                            }}
                            alt="Logo"
                            style={{ cursor: 'pointer' }}
                        />
                    ) : (
                        <RouterLink to="/">
                            <img
                                src={currentIcon || logoTipo}
                                className={`d-inline-block navbar-image ${isAnimating ? 'transition-effect' : ''}`}
                                alt="Logo"
                            />
                        </RouterLink>
                    )}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        {isHome ? (
                            <>
                                <ScrollLink
                                    className={`nav-link ${activeSection === 'home' ? 'nav-link-scrolled' : ''}`}
                                    to="home"
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    onClick={handleLinkClick}
                                >
                                    Inicio
                                </ScrollLink>
                                <ScrollLink
                                    className={`nav-link ${activeSection === 'about' ? 'nav-link-scrolled' : ''}`}
                                    to="about"
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    onClick={handleLinkClick}
                                >
                                    Sobre mi
                                </ScrollLink>
                                <ScrollLink
                                    className={`nav-link ${activeSection === 'portfolio' ? 'nav-link-scrolled' : ''}`}
                                    to="portfolio"
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    onClick={handleLinkClick}
                                >
                                    Portafolio
                                </ScrollLink>
                                <ScrollLink
                                    className={`nav-link ${activeSection === 'contact' ? 'nav-link-scrolled' : ''}`}
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={15}
                                    onClick={handleLinkClick}
                                >
                                    Contacto
                                </ScrollLink>
                                <a
                                    href={curriculumPDF}
                                    download
                                    className={`nav-btn-cv ${showNavButton ? 'show' : 'hide'}`}
                                    onClick={handleDownload}
                                >
                                    Descargar CV
                                </a>
                            </>
                        ) : (
                            <RouterLink
                                className="nav-link"
                                to="/"
                                onClick={handleLinkClick}
                            >
                                Volver al inicio
                            </RouterLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
