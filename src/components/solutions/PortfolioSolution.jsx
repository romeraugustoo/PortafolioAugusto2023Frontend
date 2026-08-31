import React from 'react';
import { Container, Row, Col, Badge, Card, Accordion } from 'react-bootstrap';
import '../../styles/bodyhome.css';
import { useTheme } from '../../context/ThemeContext';

const PortfolioSolution = () => {
    const { darkMode } = useTheme();

    return (
        <div className={`solution-page ${darkMode ? 'dark-mode' : ''}`} style={{ minHeight: '100vh', paddingBottom: '5rem' }}>
            <Container>

                {/* Header Principal */}
                <section className="mb-5 text-center pt-4">
                    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.4)' }}>
                        <span className="badge bg-primary">Caso de Estudio 2024</span>
                        <span className={darkMode ? 'text-light' : 'text-dark'} style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                            Versión 1.0 Original &amp; Retos de Diseño
                        </span>
                    </div>

                    <h1 className="display-4 theme-text-primary mb-3 font-heading fw-bold">
                        Portafolio Interactivo v1.0 — Retos de Diseño Dinámico &amp; UX (2024) 💻🎨✨
                    </h1>
                    <h3 className={`h5 mb-4 ${darkMode ? 'text-light' : 'text-secondary'}`} style={{ maxWidth: '850px', margin: '0 auto' }}>
                        Documentación técnica de la primera iteración: Conmutación de Modo Oscuro, Avatar 2D reactivo, tarjetas 3D interactivas, diseño responsivo y seguridad serverless.
                    </h3>

                    {/* Botones de Demo en Vivo */}
                    <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap mb-4">
                        <a 
                            href="https://augustoromerav1.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-primary px-4 py-2 fw-bold"
                            style={{ borderRadius: '10px' }}
                        >
                            <i className="fas fa-external-link-alt me-2"></i> Abrir Demo v1.0 en Vivo
                        </a>
                        <a 
                            href="https://github.com/Augustoromera/PortafolioAugusto2023Frontend/tree/main" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-outline-secondary px-4 py-2 fw-bold"
                            style={{ borderRadius: '10px' }}
                        >
                            <i className="fab fa-github me-2"></i> Ver Repositorio en GitHub
                        </a>
                    </div>

                    <div className="mb-3 flex-wrap d-flex justify-content-center gap-2">
                        <Badge bg="primary" className="p-2">React 18 + Vite SPA</Badge>
                        <Badge bg="info" text="dark" className="p-2">Context API Multi-Paleta</Badge>
                        <Badge bg="dark" className="p-2">CSS Custom Properties</Badge>
                        <Badge bg="success" className="p-2">Mobile-First Responsivo</Badge>
                        <Badge bg="warning" text="dark" className="p-2">Tarjetas 3D Flip Card</Badge>
                        <Badge bg="danger" className="p-2">Netlify Serverless IP Guard</Badge>
                        <Badge bg="secondary" className="p-2">Avatar 2D Rigging</Badge>
                    </div>
                </section>

                <hr className="theme-border-primary mb-5" />

                {/* 1. Contexto & Retos de Ingeniería en 2024 */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4 font-heading">📌 1. El Desafío Inicial en 2024</h2>
                    <p className="lead" style={{ lineHeight: '1.7' }}>
                        Durante el año 2024, el objetivo principal fue romper con el esquema tradicional de los portafolios estáticos tipo "currículum web" y concebir una <strong>experiencia frontend dinámica, viva y memorable</strong> que demostrara capacidad de diseño, lógica de estado y atención al detalle sin sobrecargar el bundle de producción.
                    </p>
                    <p style={{ lineHeight: '1.7' }}>
                        Los desafíos arquitectónicos y de experiencia de usuario en ese momento fueron:
                    </p>

                    <Row className="g-4 mt-2">
                        <Col md={6}>
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm p-3`}>
                                <Card.Body>
                                    <h5 className="text-primary fw-bold mb-3">
                                        🌓 1. Modo Oscuro &amp; Selector Multi-Paleta Dinámico
                                    </h5>
                                    <p className={darkMode ? 'text-light' : 'text-dark'}>
                                        En lugar de un toggle simple booleano, se construyó un motor de temas en tiempo real basado en <strong>Variables CSS Nativas (CSS Custom Properties)</strong> y <code>ThemeContext</code>. Permitía alternar entre Modo Claro, Modo Oscuro y paletas estilizadas (Oro, Neón, Fuego) sincronizando colores de bordes, sombras y tipografías al instante con persistencia en <code>localStorage</code>.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6}>
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm p-3`}>
                                <Card.Body>
                                    <h5 className="text-success fw-bold mb-3">
                                        📱 2. Diseño Responsivo &amp; Mobile-First
                                    </h5>
                                    <p className={darkMode ? 'text-light' : 'text-dark'}>
                                        Ajustar animaciones complejas, efectos de hover y modales emergentes para que funcionen con fluidez de 60 FPS tanto en pantallas de escritorio como en smartphones sin desbordamientos de texto (overflow-x), scrollbars fantasma ni saltos de maquetación (CLS).
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6}>
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm p-3`}>
                                <Card.Body>
                                    <h5 className="text-warning fw-bold mb-3">
                                        🃏 3. Estilos de Tarjetas Novedosos para 2024
                                    </h5>
                                    <p className={darkMode ? 'text-light' : 'text-dark'}>
                                        Desarrollo de tarjetas de proyectos interactivas con efectos de rotación 3D (3D Flip Cards), micro-animaciones en hover, pastillas de tecnologías dinámicas y badges de impacto visual para destacar la propuesta de valor de cada desarrollo.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6}>
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm p-3`}>
                                <Card.Body>
                                    <h5 className="text-danger fw-bold mb-3">
                                        🤖 4. Avatar 2D Interactivo con Rigging de Parpadeo
                                    </h5>
                                    <p className={darkMode ? 'text-light' : 'text-dark'}>
                                        Diseño e integración de un personaje digital 2D con animación CSS pura de parpadeo y reactividad al cursor. Al hacer clic en el avatar, mutaba la paleta de colores de toda la interfaz y disparaba ráfagas de confeti con <code>canvas-confetti</code>.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* 2. Capacidades de Ciberseguridad & Serverless */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4 font-heading">🛡️ 2. Seguridad Serverless &amp; Protección de Proyectos VIP</h2>
                    <Row className="g-4">
                        <Col md={6}>
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-warning d-flex align-items-center gap-2">
                                        🔒 Endpoint Serverless de Validación (Zero-Knowledge)
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        <ul>
                                            <li><strong>Función Serverless:</strong> Endpoint <code>/.netlify/functions/verify-code</code> que procesa peticiones aisladas del bundle público para evitar ingeniería inversa en código JavaScript del cliente.</li>
                                            <li><strong>Inspección de IP Real:</strong> Detección de cabeceras <code>x-nf-client-connection-ip</code> y <code>x-forwarded-for</code>.</li>
                                            <li><strong>Defensa Anti-Timing:</strong> Inyección de retardo asíncrono para inutilizar ataques de fuerza bruta automatizados.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6}>
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-danger d-flex align-items-center gap-2">
                                        🔐 Respaldo Criptográfico SHA-256 &amp; Route Guard
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        <ul>
                                            <li><strong>Web Crypto API:</strong> En entornos locales sin Netlify CLI, <code>securityManager.js</code> valida firmas con <code>crypto.subtle</code> SHA-256.</li>
                                            <li><strong>Protección de Rutas VIP:</strong> Restricción de acceso a proyectos confidenciales en <code>/solution/:id</code> sincronizada en tiempo real vía <code>EventBus (unlock_changed)</code>.</li>
                                            <li><strong>Feedback con Temporizador:</strong> Bloqueo temporal progresivo mediante modales de <code>SweetAlert2</code> ante intentos fallidos.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* 3. Evolución Arquitectónica hacia v2.0 */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4 font-heading">🚀 3. Evolución Arquitectónica: De v1.0 a v2.0</h2>
                    <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} shadow-sm p-4`}>
                        <Card.Body>
                            <Row className="g-4 align-items-center">
                                <Col md={6}>
                                    <h5 className="text-info fw-bold mb-3">Versión 1.0 (2024 — Vista Única Dinámica)</h5>
                                    <ul className={darkMode ? 'text-light' : 'text-dark'}>
                                        <li>Enfoque en interacción visual lúdica, selector de temas y avatar animado.</li>
                                        <li>Tarjetas de proyectos con flip 3D y modales de detalles.</li>
                                        <li>Protección de proyectos con llave secreta y confeti.</li>
                                        <li>Demo activa: <a href="https://augustoromerav1.netlify.app/" target="_blank" rel="noopener noreferrer">augustoromerav1.netlify.app</a></li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <h5 className="text-success fw-bold mb-3">Versión 2.0 (2026 — Metamorfosis Tri-Modo B2B)</h5>
                                    <ul className={darkMode ? 'text-light' : 'text-dark'}>
                                        <li>Bifurcación arquitectónica en 3 personalidades: Desarrollador &amp; CTO, Consola Cyber y Estudio WebGL 3D.</li>
                                        <li>Narrativa técnica estructurada con metodología CAR (Contexto, Acción, Resultado) en 18 proyectos.</li>
                                        <li>Consola de telemetría de kernel con comandos slash <code>/</code> interactivos y shell history.</li>
                                        <li>Hub de contacto asimétrico 60/40 y posicionamiento funcional B2B.</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </section>

                {/* 4. Desglose Módulo por Módulo */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4 font-heading">🏗️ 4. Desglose de Componentes Originales</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Hero, Avatar 2D y Header Inteligente (Header.jsx &amp; Avatar.jsx)</Accordion.Header>
                            <Accordion.Body className={darkMode ? 'bg-dark text-white' : ''}>
                                Navbar reactivo que detecta el scroll del usuario para condensarse (<code>inline-block-class</code>) y resalta automáticamente la sección activa (<code>#home</code>, <code>#about</code>, <code>#portfolio</code>, <code>#contact</code>). Alterna la vista entre la foto real y el modelo de avatar con animación CSS de pestañeo.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Galería de Proyectos &amp; Tarjetas 3D Flip Card (BodyHome.jsx)</Accordion.Header>
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
                            <Accordion.Header>Infraestructura Serverless &amp; Netlify Integration (verify-code.js &amp; netlify.toml)</Accordion.Header>
                            <Accordion.Body className={darkMode ? 'bg-dark text-white' : ''}>
                                Configuración de compilación para Netlify Functions (<code>functions = "netlify/functions"</code>) y middleware de control de tráfico en JavaScript ES Modules.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </section>

                {/* 5. Stack Tecnológico */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4 font-heading">🛠️ 5. Stack Tecnológico v1.0</h2>
                    <Row>
                        <Col md={3} className="mb-3">
                            <h5 className="text-info fw-bold">Core Frontend</h5>
                            <ul className={darkMode ? 'text-light' : 'text-dark'}>
                                <li>React 18 SPA</li>
                                <li>Vite Bundler (HMR)</li>
                                <li>React Router DOM v6</li>
                                <li>JavaScript ES6+</li>
                            </ul>
                        </Col>
                        <Col md={3} className="mb-3">
                            <h5 className="text-warning fw-bold">Backend &amp; Seguridad</h5>
                            <ul className={darkMode ? 'text-light' : 'text-dark'}>
                                <li>Netlify Serverless Functions</li>
                                <li>HTTP IP Inspection</li>
                                <li>Web Crypto API (SHA-256)</li>
                                <li>Anti-Brute Force Delay</li>
                            </ul>
                        </Col>
                        <Col md={3} className="mb-3">
                            <h5 className="text-success fw-bold">UI &amp; Estilos</h5>
                            <ul className={darkMode ? 'text-light' : 'text-dark'}>
                                <li>React-Bootstrap 5</li>
                                <li>CSS Custom Properties</li>
                                <li>FontAwesome 6 Icons</li>
                                <li>Google Fonts</li>
                            </ul>
                        </Col>
                        <Col md={3} className="mb-3">
                            <h5 className="text-danger fw-bold">Librerías &amp; FX</h5>
                            <ul className={darkMode ? 'text-light' : 'text-dark'}>
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
