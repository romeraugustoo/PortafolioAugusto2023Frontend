import React from 'react';
import { Container, Row, Col, Badge, Card, Accordion } from 'react-bootstrap';
import '../../styles/bodyhome.css';
import { useTheme } from '../../context/ThemeContext';

const PortfolioSolution = () => {
    const { darkMode } = useTheme();

    return (
        <div className={`solution-page pt-5 pb-5 ${darkMode ? 'dark-mode' : ''}`} style={{ minHeight: '100vh' }}>
            <Container>

                {/* Header */}
                <section className="mb-5 text-center">
                    <h1 className="display-4 theme-text-primary mb-3">Portfolio Interactivo 💻✨</h1>
                    <h3 className={`h5 mb-4 ${darkMode ? 'text-light' : 'text-secondary'}`}>
                        Plataforma personal de presentación profesional construida con Vite, React y arquitectura de temas.
                    </h3>

                    <div className="mb-3">
                        <Badge bg="info" className="me-2 p-2">Vite + React SPA</Badge>
                        <Badge bg="primary" className="me-2 p-2">Context API (Theme Management)</Badge>
                        <Badge bg="success" className="me-2 p-2">Diseño Adaptativo UI/UX</Badge>
                        <Badge bg="secondary" className="p-2">Routing Dinámico</Badge>
                    </div>
                </section>

                <hr className="theme-border-primary" />

                {/* El Problema */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">Objetivo de Ingeniería</h2>
                    <p className="lead">
                        Crear una vitrina digital interactiva de alto rendimiento que presente mi perfil como Desarrollador Full-Stack e Ingeniero en Sistemas de Información. La plataforma debía ser veloz, modular, adaptable a modo oscuro/claro y permitir mostrar casos de estudio técnicos profundos para cada proyecto.
                    </p>
                </section>

                {/* Arquitectura */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">Arquitectura & Componentes Destacados</h2>
                    <Row>
                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-info">🎨 Gestor de Temas (Context API)</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Implementación de `ThemeContext` y `MagicContext` para control global de Dark/Light mode y efectos interactivos en toda la jerarquía de componentes sin *prop-drilling*.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-success">🚀 Bundling Ultra-Rápido (Vite)</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Configuración con Vite HMR para tiempos de carga y respuesta de renderizado instantáneos en producción.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* Funcionalidades */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">Detalles de Implementación</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Casos de Estudio Dinámicos (/solution/:id)</Accordion.Header>
                            <Accordion.Body className={darkMode ? 'bg-dark text-white' : ''}>
                                Enrutamiento con React Router v6 que permite descomponer proyectos complejos en páginas dedicadas con desgloses de arquitectura, métricas de impacto y diagramas.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Animaciones & Feedback Visual</Accordion.Header>
                            <Accordion.Body className={darkMode ? 'bg-dark text-white' : ''}>
                                Integración de ScrollReveal para animaciones de entrada, Canvas Confetti para feedback de interacción al descargar el CV y modal reactivo con SweetAlert2.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </section>

                {/* Tecnologías */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">Tecnologías Principales</h2>
                    <ul>
                        <li><strong>Core:</strong> React 18, Vite, JavaScript ES6+.</li>
                        <li><strong>UI/Styling:</strong> React-Bootstrap, CSS Custom Properties, FontAwesome.</li>
                        <li><strong>Librerías:</strong> React Router DOM, ScrollReveal, Canvas-Confetti, SweetAlert2.</li>
                    </ul>
                </section>

            </Container>
        </div>
    );
};

export default PortfolioSolution;
