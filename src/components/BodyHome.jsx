import React, { useEffect } from 'react';
import '../styles/bodyhome.css';
import profileImage from '../assets/images/profile/profile-augusto.png';
import reactLogo from '../assets/images/logo/React.jpg';
import nodeLogo from '../assets/images/logo/node.png';
import expressLogo from '../assets/images/logo/express.png';
import mongoDBLogo from '../assets/images/logo/Mongo.png';
import html from '../assets/images/logo/html.png'
import css from '../assets/images/logo/css.png'
import java from '../assets/images/logo/java.png'
import jvs from '../assets/images/logo/js.png'
import spring from '../assets/images/logo/spring-boot-logo.png.webp'
import mysql from '../assets/images/logo/mysql.png'

import rapiburger from '../assets/images/portfolio/Rapiburger.png';
import portfolio from '../assets/images/portfolio/portfolioIcon.jpg';

import instagram from '../assets/images/logo/Instagram-Glyph-Color-Logo.wine.png';
import downloadIcon from '../assets/images/logo/gold-button-009.svg';
import curriculumPDF from '../assets/files/Curriculum Vitae augusto.pdf';
import ScrollReveal from 'scrollreveal';
const ProfileImage = () => {
    return <img src={profileImage} className='profile-image' alt="Profile Augusto" />;
};

const BodyHome = ({ onSectionChange }) => {
    const currentYear = new Date().getFullYear();
    const projects = [
        { id: 1, name: 'RapiBurger', image: rapiburger, website: 'https://rapiburger.netlify.app/', github: 'https://github.com/Augustoromera/Group-3-proyecto-final-Rolling-Code', github2: 'https://github.com/Augustoromera/Proyecto-Final-RC-Grupo3-Backend', text: 'Ir a rapiburger' },
        { id: 2, name: 'Portfolio', image: portfolio, website: '', github: 'https://github.com/Augustoromera/PortafolioAugusto2023Frontend', text: 'Ir al portafolio' },
    ];

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const aboutSection = document.getElementById('about');
        const portfolioSection = document.getElementById('portfolio');
        const contactSection = document.getElementById('contact');

        let currentSection = 'home';

        const aboutTop = aboutSection.offsetTop;
        const aboutBottom = aboutTop + aboutSection.offsetHeight;

        const portfolioTop = portfolioSection.offsetTop;
        const portfolioBottom = portfolioTop + portfolioSection.offsetHeight;

        const contactTop = contactSection.offsetTop;
        const contactBottom = contactTop + contactSection.offsetHeight;
        const offset = 100;
        if (scrollPosition >= (aboutTop - 60) && scrollPosition < (aboutBottom - 100)) {
            currentSection = 'about';
        } else if (scrollPosition >= (portfolioTop - 100) && scrollPosition < portfolioBottom) {
            currentSection = 'portfolio';
        }


        if (scrollPosition >= contactTop - offset && scrollPosition < contactBottom) {
            currentSection = 'contact';
        }
        onSectionChange(currentSection);
    };




    useEffect(() => {
        //         ScrollReveal().reveal('.homebg', { delay: 300 });
        //         ScrollReveal().reveal('.hometext', { delay: 600 });
        ScrollReveal().reveal('.about_title', { delay: 300 });
        ScrollReveal().reveal('.about_title2', { delay: 300 });
        ScrollReveal().reveal('.description', { delay: 600 });
        ScrollReveal().reveal('.download-button', { delay: 600 });

        ScrollReveal().reveal('.about_skill_title', { delay: 600 });
        ScrollReveal().reveal('.skill_item', { delay: 600 });
        ScrollReveal().reveal('.about_skills', { delay: 600 });

        // Target inner containers instead of the main section to keep background visible
        ScrollReveal().reveal('.portfolio .description-container', { delay: 600 });
        ScrollReveal().reveal('.portfolio .container', { delay: 600 });

        ScrollReveal().reveal('.contact-me .contact-me-text', { delay: 300 });
        ScrollReveal().reveal('.contact-me .contact-me-container', { delay: 300 });

    }, []);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [onSectionChange]);



    const [darkMode, setDarkMode] = React.useState(true);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <div className='home'>
                <div className="homebg">
                    <ProfileImage />
                    <div className="hometext">
                        <h1 className="home_text2">Augusto Romera</h1>
                        <h1 className="home_text3" >Fullstack Developer</h1>
                    </div>
                </div>
            </div>
            <div id="about" className={`about ${darkMode ? 'dark-mode' : ''}`}>
                <div className="about_description">
                    <h2 className='about_title'>Sobre mi</h2>
                    <p className='about_title2'>
                        Desarrollador fullstack MERN.
                    </p>

                    <p className='description'>
                        Soy Augusto Romera, un estudiante de 24 años de Ingeniería en Sistemas. Mi formación académica incluye dos años completo de estudios para fullstack, respaldado por experiencia en desarrollo web. Busco oportunidades de tiempo completo para aplicar y expandir mis habilidades.
                    </p>
                    <a href={curriculumPDF} download className="download-button">
                        <img src={downloadIcon} alt="Download Icon" className="download-icon" />
                        <span className="download-text"> Descargar CV</span>
                    </a>
                </div>
                <div className="about_skills">
                    <div className="about_skill_title">
                        <h2>Habilidades y tecnologías</h2>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col skill_item">
                                <img src={html} className="skill_item_logo" alt="HTML" />
                                <br />
                                <span>HTML</span>
                            </div>
                            <div className="col skill_item">
                                <img src={css} className="skill_item_logo" alt="CSS" />
                                <br />
                                <span>CSS</span>
                            </div>
                            <div className="col skill_item">
                                <img src={jvs} className="skill_item_logo" alt="JavaScript" />
                                <br />
                                <span>JavaScript</span>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col skill_item">
                                <img src={reactLogo} className="skill_item_logo" alt="React" />
                                <br />
                                <span>React</span>
                            </div>
                            <div className="col skill_item">
                                <img src={nodeLogo} className="skill_item_logo" alt="Node.js" />
                                <br />
                                <span>Node.js</span>
                            </div>
                            <div className="col skill_item">
                                <img src={expressLogo} className="skill_item_logo" alt="Express.js" />
                                <br />
                                <span>Express.js</span>
                            </div>


                        </div>
                        <div className="row">
                            <div className="col skill_item">
                                <img src={mongoDBLogo} className="skill_item_logo" alt="MongoDB" />
                                <br />
                                <span>MongoDB</span>
                            </div>
                            <div className="col skill_item">
                                <img src={java} className="skill_item_logo" alt="Java" />
                                <br />
                                <span>Java</span>
                            </div>
                            <div className="col skill_item">
                                <img src={spring} className="skill_item_logo" alt="Spring Boot" />
                                <br />
                                <span>Spring Boot</span>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col skill_item">
                                <img src={mysql} className="skill_item_logo" alt="MySQL" />
                                <br />
                                <span>MySQL</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Portafolio Section */}
            <div id="portfolio" className={`portfolio d-flex align-content-center justify-content-center ${darkMode ? 'dark-mode' : ''}`}>
                <div className="description-container  ">
                    <div className="description-port">
                        <h2>Portafolio</h2>
                        <p>
                            Proyectos en los que he participado.
                        </p>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        {projects.map((project) => (
                            <div key={project.id} className="col-12 col-sm-6 col-md-4 p-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={project.image} className="image-portfolio" alt={project.name} />
                                        </div>
                                        <div className="flip-card-back">
                                            <h3>{project.name}</h3>
                                            <div className="project-links-container">
                                                {project.website && (
                                                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                                        {project.text}
                                                    </a>
                                                )}
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                                    {project.github2 ? 'Git Front' : 'Github'}
                                                </a>
                                                {project.github2 && (
                                                    <a href={project.github2} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                                        Git Back
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
            <div id="contact" className={`contact-me ${darkMode ? 'dark-mode' : ''}`}>
                <div className="contact-me-text ">
                    <h2>Contacto</h2>
                    <p>Contáctame si quieres que trabajemos juntos.</p>
                </div>

                <div className="container contact-me-container">
                    <div className="row justify-content-center">
                        <div className="col-6 col-md-3 p-2 d-flex align-items-center flex-column">
                            <a href="mailto:newsromers@gmail.com" className="plain-link">
                                <i className="far fa-envelope fa-3x text-danger iconlink"></i>
                            </a>
                            <span className="textcontact">Escribir</span>
                        </div>

                        <div className="col-6 col-md-3 p-2 d-flex align-items-center flex-column">
                            <a href="https://github.com/Augustoromera" className="plain-link" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github fa-3x text-dark iconlink"></i>
                            </a>
                            <span className="textcontact">Ver Repo</span>
                        </div>
                        <div className="col-6 col-md-3 p-2 d-flex align-items-center flex-column">
                            <a href="https://www.instagram.com/augusto.romera/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="logo de instagram" className='contact-icon' style={{ maxWidth: '73px', height: '100%' }} />
                            </a>
                            <span className="textcontact">Seguir</span>
                        </div>
                        <div className="col-6 col-md-3 p-2 d-flex align-items-center flex-column">
                            <a href="https://www.linkedin.com/in/augusto-romera" className="plain-link" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in fa-3x text-primary iconlink"></i>
                            </a>
                            <span className="textcontact">Contactar</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="wsp" >
                <a href="https://wa.link/cjq5u5" className='btn-wsp' target='_blank' rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp fa-2xl" ></i>
                </a>
            </div>

            <button className="btn-theme-toggle" onClick={toggleTheme}>
                <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} fa-2xl`}></i>
            </button>

            <div className={`copyright pt-5 ${darkMode ? 'dark-mode' : ''}`}>
                <p className="text-center">
                    Copyright © {currentYear}. @augusto.romera. All Rights Reserved.
                </p>
            </div>
        </>
    );
};

export default BodyHome;
