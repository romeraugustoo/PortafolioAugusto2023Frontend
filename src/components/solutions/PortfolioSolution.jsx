import React from 'react';
import { Container, Row, Col, Badge, Card, Accordion } from 'react-bootstrap';
import '../../styles/bodyhome.css';
import { useTheme } from '../../context/ThemeContext';

const PortfolioSolution = () => {
    const { darkMode } = useTheme();

    return (
        <div className={`solution-page ${darkMode ? 'dark-mode' : ''}`} style={{ minHeight: '100vh' }}>
            <Container>

                {/* Header Principal */}
                <section className="mb-5 text-center">
                    <h1 className="display-4 theme-text-primary mb-3">Portfolio Interactivo & Arquitectura Integral 💻🛡️✨</h1>
                    <h3 className={`h5 mb-4 ${darkMode ? 'text-light' : 'text-secondary'}`}>
                        Documentación técnica completa del sistema: SPA React 18, Funciones Serverless, Rate-Limiting por IP, Context API, Criptografía SHA-256 y UX Interactiva.
                    </h3>

                    <div className="mb-3 flex-wrap d-flex justify-content-center gap-2">
                        <Badge bg="info" className="p-2">React 18 + Vite SPA</Badge>
                        <Badge bg="warning" text="dark" className="p-2">Netlify Serverless Functions</Badge>
                        <Badge bg="danger" className="p-2">IP Rate Limiting & Anti-Timing</Badge>
                        <Badge bg="dark" className="p-2">Web Crypto API (SHA-256)</Badge>
                        <Badge bg="primary" className="p-2">Context API (Theme & Magic)</Badge>
                        <Badge bg="success" className="p-2">Route Protection & Event Bus</Badge>
                        <Badge bg="secondary" className="p-2">3D Flip Cards & ScrollReveal</Badge>
                        <Badge bg="info" text="dark" className="p-2">SweetAlert2 & Canvas Confetti</Badge>
                    </div>
                </section>

                <hr className="theme-border-primary mb-5" />

                {/* Visión General */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">📌 1. Visión General del Proyecto</h2>
                    <p className="lead">
                        Esta plataforma fue diseñada y construida por <strong>Augusto Romera</strong> (Desarrollador Full-Stack e Ingeniero en Sistemas de Información) no solo como una vitrina profesional, sino como una **demostración en vivo de ingeniería de software avanzada**. 
                    </p>
                    <p>
                        Combina un frontend altamente responsivo y animado con patrones de ciberseguridad corporativa: validación serverless off-bundle, restricción de intentos por IP real, protección criptográfica y alternancia dinámica de temas mediante variables CSS y Context API.
                    </p>
                </section>

                {/* Funcionalidades de la Página Completa */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🧩 2. Mapa Completo de Capacidades del Sistema</h2>
                    <Row>
                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-warning d-flex align-items-center gap-2">
                                        🛡️ Motor Serverless & Rate Limiting por IP
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        <ul>
                                            <li><strong>Función Serverless:</strong> Endpoint <code>/.netlify/functions/verify-code</code> que procesa peticiones aisladas del bundle público.</li>
                                            <li><strong>Inspección de IP Real:</strong> Detección de cabeceras <code>x-nf-client-connection-ip</code> y <code>x-forwarded-for</code>.</li>
                                            <li><strong>Políticas de Sanción:</strong> 3 intentos erróneos bloquean por 5 minutos; 5 fallos bloquean por 30 minutos.</li>
                                            <li><strong>Defensa Anti-Timing:</strong> Inyección de 1s de delay asíncrono en errores para inutilizar bots de fuerza bruta.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-danger d-flex align-items-center gap-2">
                                        🔐 Respaldo Criptográfico & Route Guard
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        <ul>
                                            <li><strong>Zero-Knowledge Client:</strong> 0% de credenciales o claves secretas almacenadas en código JavaScript plano.</li>
                                            <li><strong>SHA-256 Salted Fallback:</strong> En entornos locales sin Netlify CLI, <code>securityManager.js</code> valida firmas con <code>crypto.subtle</code>.</li>
                                            <li><strong>Protección de Rutas VIP:</strong> Restricción de acceso a proyectos exclusivos en <code>/solution/:id</code> sincronizada en tiempo real vía <code>EventBus (unlock_changed)</code>.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-info d-flex align-items-center gap-2">
                                        🎨 Context API: Tema Global & Modo Mágico
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        <ul>
                                            <li><strong>ThemeContext:</strong> Control bidireccional Claro/Oscuro con persistencia en <code>localStorage</code> y variables CSS nativas.</li>
                                            <li><strong>MagicContext:</strong> Motor multipaleta que conmuta entre la <strong>Fotografía de Perfil Real</strong> y el <strong>Avatar 3D animado</strong>, además de modificar la iconografía del Header.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-success d-flex align-items-center gap-2">
                                        ⚡ Floating Widgets & UX Micro-Interacciones
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        <ul>
                                            <li><strong>Botones Flotantes:</strong> WhatsApp con confeti, Conmutador Claro/Oscuro, Varita Mágica y Llave Secreta.</li>
                                            <li><strong>SweetAlert2 + Timer:</strong> Feedback emergente con temporizador regresivo (<code>mm:ss</code>) si la IP resulta sancionada.</li>
                                            <li><strong>Descarga de CV:</strong> Disparo asíncrono de ráfaga de confeti y modal de confirmación profesional.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* Desglose Arquitectónico por Componentes */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🏗️ 3. Desglose Módulo por Módulo</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Hero, Avatar 3D y Header Inteligente (Header.jsx & Avatar.jsx)</Accordion.Header>
                            <Accordion.Body className={darkMode ? 'bg-dark text-white' : ''}>
                                Navbar reactivo que detecta el scroll del usuario para condensarse (<code>inline-block-class</code>) y resalta automáticamente la sección activa (<code>#home</code>, <code>#about</code>, <code>#portfolio</code>, <code>#contact</code>). Alterna la vista entre la foto real y el modelo de avatar con animación CSS.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Galería de Proyectos & Tarjetas 3D Flip Card (BodyHome.jsx)</Accordion.Header>
                            <Accordion.Body className={darkMode ? 'bg-dark text-white' : ''}>
                                Presenta las tarjetas de proyectos utilizando efectos de rotación 3D en Hover, ocultando dinámicamente los proyectos protegidos según el estado del candado.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Enrutador Dinámico y Casos de Estudio (SolutionScreen.jsx)</Accordion.Header>
                            <Accordion.Body className={darkMode ? 'bg-dark text-white' : ''}>
                                Arquitectura de subpáginas en <code>/solution/:id</code> que carga asíncronamente los desgloses técnicos detallados de cada proyecto de ingeniería.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Infraestructura Serverless & Netlify Integration (verify-code.js & netlify.toml)</Accordion.Header>
                            <Accordion.Body className={darkMode ? 'bg-dark text-white' : ''}>
                                Configuración de compilación para Netlify Functions (<code>functions = "netlify/functions"</code>) y middleware de control de tráfico en JavaScript ES Modules.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </section>

                {/* Tecnologías */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🛠️ 4. Stack Tecnológico Completo</h2>
                    <Row>
                        <Col md={3} className="mb-3">
                            <h5 className="text-info">Core Frontend</h5>
                            <ul>
                                <li>React 18 SPA</li>
                                <li>Vite Bundler (HMR)</li>
                                <li>React Router DOM v6</li>
                                <li>JavaScript ES6+</li>
                            </ul>
                        </Col>
                        <Col md={3} className="mb-3">
                            <h5 className="text-warning">Backend & Seguridad</h5>
                            <ul>
                                <li>Netlify Serverless Functions</li>
                                <li>HTTP IP Inspection</li>
                                <li>Web Crypto API (SHA-256)</li>
                                <li>Anti-Brute Force Delay</li>
                            </ul>
                        </Col>
                        <Col md={3} className="mb-3">
                            <h5 className="text-success">UI & Estilos</h5>
                            <ul>
                                <li>React-Bootstrap</li>
                                <li>CSS Custom Properties</li>
                                <li>FontAwesome 6 Icons</li>
                                <li>Google Fonts (Roboto)</li>
                            </ul>
                        </Col>
                        <Col md={3} className="mb-3">
                            <h5 className="text-danger">Librerías & FX</h5>
                            <ul>
                                <li>SweetAlert2</li>
                                <li>Canvas-Confetti</li>
                                <li>ScrollReveal</li>
                                <li>React-Scroll</li>
                            </ul>
                        </Col>
                    </Row>
                </section>

            </Container>
        </div>
    );
};

export default PortfolioSolution;
