/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import "../styles/header.css";
import logoTipo from "../assets/images/logo/Augusto romera dev.png";

const Header = ({ activeSection, navBarClass }) => {
    const [expanded, setExpanded] = useState(false);
    const navLinkClass = navBarClass;
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

    return (
        <Navbar expand="lg" data-bs-theme="dark" className={`navbarmain ${navLinkClass}`} expanded={expanded} onSelect={() => setExpanded(false)}>
            <Container>
                <Navbar.Brand>
                    {isHome ? (
                        <img
                            src={logoTipo}
                            className="d-inline-block navbar-image"
                            onClick={() => {
                                scroll.scrollToTop();
                            }}
                            alt="Logo"
                            style={{ cursor: 'pointer' }}
                        />
                    ) : (
                        <RouterLink to="/">
                            <img
                                src={logoTipo}
                                className="d-inline-block navbar-image"
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
                                    href="/assets/files/Curriculum Vitae augusto.pdf"
                                    download
                                    className={`nav-btn-cv ${showNavButton ? 'show' : 'hide'}`}
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
