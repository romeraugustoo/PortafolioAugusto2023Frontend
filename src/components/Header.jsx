/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import "../styles/header.css";
import logoCto from "../assets/images/logo/logo-banner-ar.svg";
import logoCyber from "../assets/images/logo/logo-banner-cyber.svg";
import logoCreative from "../assets/images/logo/logo-banner-creative.svg";
import { useMagic } from '../context/MagicContext';
import { useTheme } from '../context/ThemeContext';
import confetti from 'canvas-confetti';
import Swal from 'sweetalert2';
import curriculumPDF from '../assets/files/Curriculum Vitae augusto.pdf';

const Header = ({ activeSection, navBarClass = '' }) => {
    const [expanded, setExpanded] = useState(false);
    const { currentMode } = useMagic();
    const [isAnimating, setIsAnimating] = useState(false);
    const navMenuRef = React.useRef(null);

    const activeLogo = currentMode === 'creative'
        ? logoCreative
        : currentMode === 'cyber'
            ? logoCyber
            : logoCto;

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 300);
        return () => clearTimeout(timer);
    }, [currentMode]);

    // Cerrar menú al hacer clic afuera, presionar Escape o redimensionar
    useEffect(() => {
        if (!expanded) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setExpanded(false);
        };

        const handlePointerDown = (e) => {
            if (
                navMenuRef.current && 
                !navMenuRef.current.contains(e.target) &&
                !e.target.closest('.navbar-toggler')
            ) {
                setExpanded(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('pointerdown', handlePointerDown);

        // Bloquear scroll de fondo mientras el modal está activo
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('pointerdown', handlePointerDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [expanded]);

    const handleLinkClick = () => {
        if (expanded) {
            setExpanded(false);
        }
    };

    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <Navbar expand="lg" data-bs-theme="dark" className={`navbarmain ${navBarClass}`} expanded={expanded} onSelect={() => setExpanded(false)}>
            <Container>
                <Navbar.Brand>
                    {isHome ? (
                        <img
                            src={activeLogo}
                            className={`d-inline-block navbar-image ${isAnimating ? 'transition-effect' : ''}`}
                            onClick={() => {
                                scroll.scrollToTop({ duration: 500, smooth: 'easeInOutCubic' });
                            }}
                            alt="Augusto Romera Logo"
                            style={{ cursor: 'pointer' }}
                        />
                    ) : (
                        <RouterLink to="/">
                            <img
                                src={activeLogo}
                                className="d-inline-block navbar-image"
                                alt="Augusto Romera Logo"
                            />
                        </RouterLink>
                    )}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse 
                    id="basic-navbar-nav"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setExpanded(false);
                        }
                    }}
                >
                    <Nav ref={navMenuRef} className="ms-auto align-items-center gap-2">
                        {/* Botón de Cierre Táctil para Móviles */}
                        <button
                            type="button"
                            className="btn-close-mobile-nav"
                            onClick={() => setExpanded(false)}
                            aria-label="Cerrar menú"
                            title="Cerrar navegación"
                        >
                            <i className="fas fa-times"></i>
                        </button>

                        {isHome ? (
                            <>
                                <ScrollLink
                                    className={`nav-link ${activeSection === 'home' ? 'nav-link-scrolled' : ''}`}
                                    to="home"
                                    spy={true}
                                    smooth="easeInOutCubic"
                                    offset={-60}
                                    duration={600}
                                    onClick={handleLinkClick}
                                >
                                    Inicio
                                </ScrollLink>
                                <ScrollLink
                                    className={`nav-link ${activeSection === 'about' ? 'nav-link-scrolled' : ''}`}
                                    to="about"
                                    spy={true}
                                    smooth="easeInOutCubic"
                                    offset={-60}
                                    duration={600}
                                    onClick={handleLinkClick}
                                >
                                    Sobre mí
                                </ScrollLink>
                                <ScrollLink
                                    className={`nav-link ${activeSection === 'portfolio' ? 'nav-link-scrolled' : ''}`}
                                    to="portfolio"
                                    spy={true}
                                    smooth="easeInOutCubic"
                                    offset={-60}
                                    duration={600}
                                    onClick={handleLinkClick}
                                >
                                    Portafolio (18)
                                </ScrollLink>
                                <ScrollLink
                                    className={`nav-link ${activeSection === 'contact' ? 'nav-link-scrolled' : ''}`}
                                    to="contact"
                                    spy={true}
                                    smooth="easeInOutCubic"
                                    offset={-60}
                                    duration={600}
                                    onClick={handleLinkClick}
                                >
                                    Contacto
                                </ScrollLink>
                                <ScrollLink
                                    className="nav-btn-cv"
                                    to="contact"
                                    spy={true}
                                    smooth="easeInOutCubic"
                                    offset={-60}
                                    duration={600}
                                    onClick={handleLinkClick}
                                    title="Ver y Descargar Curriculum Vitae en PDF"
                                >
                                    <i className="fas fa-file-pdf me-1"></i>
                                    <span>Descargar CV</span>
                                </ScrollLink>
                            </>
                        ) : (
                            <>
                                <RouterLink className="nav-link" to="/" onClick={handleLinkClick}>
                                    Volver al Inicio
                                </RouterLink>
                                <RouterLink className="nav-btn-cv" to="/#contact" onClick={handleLinkClick}>
                                    <i className="fas fa-file-pdf me-1"></i>
                                    <span>Descargar CV</span>
                                </RouterLink>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
