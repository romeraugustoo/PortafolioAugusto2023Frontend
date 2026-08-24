import React from 'react';
import { Container, Row, Col, Badge, Card, Table, Button } from 'react-bootstrap';
import '../../styles/bodyhome.css';
import { useTheme } from '../../context/ThemeContext';

const MiMusicaSolution = () => {
    const { darkMode } = useTheme();

    return (
        <div className={`solution-page ${darkMode ? 'dark-mode' : ''}`} style={{ minHeight: '100vh' }}>
            <Container>

                {/* Header Promocional */}
                <section className="mb-5 text-center">
                    <Badge bg="success" text="light" className="mb-3 p-2 fs-6">
                        ⚡ Caso de Estudio: AI-Augmented Engineering (Concepción a Producción en &lt;90 min)
                    </Badge>
                    <h1 className="display-4 theme-text-primary mb-3 fw-bold">Mi Música Organizada 🎵</h1>
                    <h3 className={`h5 mb-4 ${darkMode ? 'text-light' : 'text-secondary'}`} style={{ maxWidth: '850px', margin: '0 auto' }}>
                        Automatizador multimedia local, concurrencia asíncrona no bloqueante, comunicación bidireccional por WebSockets y Clean Architecture modular.
                    </h3>

                    <div className="mb-4 flex-wrap d-flex justify-content-center gap-2">
                        <Badge bg="success" className="p-2">Python 3.13</Badge>
                        <Badge bg="primary" className="p-2">FastAPI + Uvicorn</Badge>
                        <Badge bg="info" text="dark" className="p-2">WebSockets Reactivos</Badge>
                        <Badge bg="warning" text="dark" className="p-2">ThreadPoolExecutor Non-Blocking</Badge>
                        <Badge bg="danger" className="p-2">OWASP Hardened (SSRF / Traversal)</Badge>
                        <Badge bg="dark" className="p-2">PyInstaller OneFile (.exe)</Badge>
                        <Badge bg="secondary" className="p-2">Mutagen ID3 + Pillow</Badge>
                        <Badge bg="success" className="p-2">$0 Zero-Cloud Infra</Badge>
                    </div>

                    <div className="mt-3 d-flex justify-content-center gap-3 flex-wrap">
                        <Button 
                            variant="success" 
                            size="lg" 
                            href="https://mimusicaorganizada.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mb-2"
                        >
                            <i className="fas fa-external-link-alt me-2"></i> Ver Landing Page en Producción
                        </Button>
                        <Button 
                            variant="outline-primary" 
                            size="lg" 
                            href="https://github.com/romeraugustoo/myorganizedsound" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mb-2"
                        >
                            <i className="fab fa-github me-2"></i> Repositorio GitHub Oficial
                        </Button>
                    </div>
                </section>

                {/* 1. Métricas de Impacto Senior */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">📊 1. Métricas de Impacto & Rendimiento</h2>
                    <Row>
                        <Col md={3} sm={6} className="mb-3">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} text-center p-3 h-100 shadow-sm`}>
                                <Card.Body>
                                    <h3 className="display-6 fw-bold text-info">&lt; 90 min</h3>
                                    <p className={`mb-0 ${darkMode ? 'text-light' : 'text-muted'}`}>Tiempo de Entrega Full-Cycle</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} sm={6} className="mb-3">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} text-center p-3 h-100 shadow-sm`}>
                                <Card.Body>
                                    <h3 className="display-6 fw-bold text-success">5,650+</h3>
                                    <p className={`mb-0 ${darkMode ? 'text-light' : 'text-muted'}`}>Líneas Clean Architecture</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} sm={6} className="mb-3">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} text-center p-3 h-100 shadow-sm`}>
                                <Card.Body>
                                    <h3 className="display-6 fw-bold text-warning">$0 / mes</h3>
                                    <p className={`mb-0 ${darkMode ? 'text-light' : 'text-muted'}`}>Costo de Infraestructura (Localhost)</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} sm={6} className="mb-3">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} text-center p-3 h-100 shadow-sm`}>
                                <Card.Body>
                                    <h3 className="display-6 fw-bold text-danger">100%</h3>
                                    <p className={`mb-0 ${darkMode ? 'text-light' : 'text-muted'}`}>Hardening OWASP & Sandbox</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* 2. El Desafío de Ingeniería y la Solución */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🎯 2. El Desafío de Ingeniería</h2>
                    <Row>
                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-danger d-flex align-items-center gap-2">
                                        ❌ Los Problemas de los Scripts Tradicionales
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        La mayoría de herramientas multimedia son scripts bloqueantes de consola, carecen de interfaz en tiempo real, colapsan el servidor al procesar audio en el hilo principal de eventos y requieren instalaciones manuales complejas de dependencias binarias (FFmpeg).
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-success d-flex align-items-center gap-2">
                                        ✅ La Solución Arquitectónica Implementada
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Se diseñó una plataforma local desacoplada: backend FastAPI con <code>ThreadPoolExecutor</code> no bloqueante, WebSockets bidireccionales, sandbox de descargas confinado, motor heurístico de limpieza de títulos y empaquetado standalone con auto-bootstrap de FFmpeg.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* 3. Retos Técnicos de Alta Ingeniería */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">⚙️ 3. Retos Técnicos de Alta Ingeniería Superados</h2>
                    <Row>
                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-warning d-flex align-items-center gap-2">
                                        ⚡ Concurrencia & Asincronía No Bloqueante
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Uso de <code>asyncio.get_event_loop().run_in_executor()</code> para aislar las tareas intensivas de CPU e I/O (extracción de audio y conversión FFmpeg) en hilos de trabajo independientes, evitando congelar el Event Loop de FastAPI y permitiendo streaming reactivo fluido por WebSockets.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-primary d-flex align-items-center gap-2">
                                        🛡️ Hardening OWASP & Sandbox de Rutas
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Módulo <code>core/security_validator.py</code> con validación estricta de protocolos (bloqueo de <code>file://</code>, <code>ftp://</code> e IPs privadas SSRF) y confinamiento forzado con <code>Path.relative_to()</code> para neutralizar ataques de <em>Path Traversal</em>.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-success d-flex align-items-center gap-2">
                                        🏷️ Inyección ID3v2 & Procesamiento Gráfico HD
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Estandarización automática de metadatos ID3v2.3 con <code>Mutagen</code> y motor <code>Pillow</code> para conversión y optimización de portadas WEBP/PNG a JPEG de alta fidelidad, asegurando compatibilidad universal en reproductores Hi-Fi y estéreos.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-danger d-flex align-items-center gap-2">
                                        📦 DevOps: Empaquetado Standalone & Auto-FFmpeg
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Empaquetado en un solo ejecutable portable (.exe) con PyInstaller gestionando rutas relativas aisladas (<code>sys._MEIPASS</code>) y asistente automatizado que auto-resuelve binarios portables de FFmpeg al vuelo sin requerir Python.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* 4. Metodología de Trabajo AI-Augmented & Métricas Forenses */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🧠 4. Metodología: AI-Augmented Engineering</h2>
                    <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} p-4 shadow-sm mb-4`}>
                        <Card.Body>
                            <h4 className="text-success mb-3">🚀 El Paradigma: De Codificador Manual a Arquitecto Orquestador</h4>
                            <p className={darkMode ? 'text-light' : 'text-dark'}>
                                Este proyecto fue desarrollado utilizando Inteligencia Artificial avanzada no como un simple autocompletador de código, sino como un <strong>multiplicador de ingeniería de extremo a extremo</strong>. Mi rol consistió en definir la arquitectura, dirigir las decisiones críticas de diseño, auditar seguridad y validar cada módulo en tiempo real.
                            </p>

                            <Row className="mt-4">
                                <Col md={3} sm={6} className="mb-3 text-center">
                                    <div className="p-3 border rounded bg-opacity-10 bg-primary">
                                        <h5 className="text-primary mb-1">⏱️ ~85 Minutos</h5>
                                        <small className={darkMode ? 'text-light' : 'text-muted'}>Tiempo Total de Sesión</small>
                                    </div>
                                </Col>
                                <Col md={3} sm={6} className="mb-3 text-center">
                                    <div className="p-3 border rounded bg-opacity-10 bg-success">
                                        <h5 className="text-success mb-1">🎯 14 Prompts</h5>
                                        <small className={darkMode ? 'text-light' : 'text-muted'}>Dirección Quirúrgica</small>
                                    </div>
                                </Col>
                                <Col md={3} sm={6} className="mb-3 text-center">
                                    <div className="p-3 border rounded bg-opacity-10 bg-warning">
                                        <h5 className="text-warning mb-1">📁 26 Archivos</h5>
                                        <small className={darkMode ? 'text-light' : 'text-muted'}>Estructura Clean Arch</small>
                                    </div>
                                </Col>
                                <Col md={3} sm={6} className="mb-3 text-center">
                                    <div className="p-3 border rounded bg-opacity-10 bg-info">
                                        <h5 className="text-info mb-1">✨ 0% Retrabajo</h5>
                                        <small className={darkMode ? 'text-light' : 'text-muted'}>Diagnósticos Precisos</small>
                                    </div>
                                </Col>
                            </Row>

                            <h5 className="text-info mt-4 mb-3">🔄 Pipeline Modular de Ejecución:</h5>
                            <ol className={`mb-0 ${darkMode ? 'text-light' : 'text-dark'}`} style={{ lineHeight: '1.8' }}>
                                <li><strong>Concepción & Arquitectura Base:</strong> Definición de arquitectura Localhost zero-cost + Core desacoplado (<code>core/</code>).</li>
                                <li><strong>Asincronía & Capa Reactiva:</strong> Integración de FastAPI con <code>ThreadPoolExecutor</code> y WebSockets para telemetría en vivo.</li>
                                <li><strong>DevOps & Desktop Packaging:</strong> Resolución dinámica <code>sys._MEIPASS</code> y auto-bootstrap de FFmpeg para distribución en <code>.exe</code>.</li>
                                <li><strong>Hardening Forense:</strong> Validación de esquemas contra SSRF (OWASP A10) y confinamiento forzado contra Path Traversal.</li>
                                <li><strong>Landing & Distribución:</strong> Creación de Landing Page para portafolio en Netlify y repositorio Git limpio con 1 commit maestro.</li>
                            </ol>
                        </Card.Body>
                    </Card>
                </section>

                {/* 5. Tabla Comparativa: Tradicional vs AI-Augmented */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">📈 5. Comparativa de Ciclo de Desarrollo</h2>
                    <Table responsive striped bordered hover variant={darkMode ? "dark" : "light"}>
                        <thead>
                            <tr>
                                <th>Dimensión de Ingeniería</th>
                                <th>Desarrollo Tradicional</th>
                                <th>AI-Augmented Development (Mi Enfoque)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Tiempo Total a Producción</strong></td>
                                <td>1 - 2 semanas de desarrollo</td>
                                <td><strong>&lt; 90 minutos (Full-Cycle)</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Arquitectura de Concurrencia</strong></td>
                                <td>Sincrónica básica con bloqueos de I/O</td>
                                <td><strong>Event Loop Asíncrono + ThreadPoolExecutor</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Seguridad & Sandbox</strong></td>
                                <td>Omitido o agregado como parche tardío</td>
                                <td><strong>Validación SSRF + Sandbox Path Traversal desde el Core</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Distribución y UX de Usuario</strong></td>
                                <td>Instrucciones complejas de consola</td>
                                <td><strong>Ejecutable Standalone (.exe) con auto-bootstrap</strong></td>
                            </tr>
                        </tbody>
                    </Table>
                </section>

                {/* 6. Stack Tecnológico Completo */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🛠️ 6. Stack Tecnológico Completo</h2>
                    <Row>
                        <Col md={4} className="mb-3">
                            <h5 className="text-info">Backend & Concurrencia</h5>
                            <ul>
                                <li>Python 3.13</li>
                                <li>FastAPI + Uvicorn ASGI</li>
                                <li>WebSockets Bidireccionales</li>
                                <li>ThreadPoolExecutor</li>
                            </ul>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h5 className="text-warning">Multimedia & Procesamiento</h5>
                            <ul>
                                <li>yt-dlp Core Engine</li>
                                <li>Mutagen ID3v2 Tagging</li>
                                <li>Pillow Image Processing</li>
                                <li>FFmpeg Portable Framework</li>
                            </ul>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h5 className="text-success">DevOps, Frontend & Deploy</h5>
                            <ul>
                                <li>PyInstaller Standalone (.exe)</li>
                                <li>Vanilla CSS Glassmorphism</li>
                                <li>Netlify Production Deploy</li>
                                <li>Clean Architecture Modular</li>
                            </ul>
                        </Col>
                    </Row>
                </section>

            </Container>
        </div>
    );
};

export default MiMusicaSolution;
