import React from 'react';
import { Container, Row, Col, Badge, Card, Accordion } from 'react-bootstrap';
import '../../styles/bodyhome.css';
import { useTheme } from '../../context/ThemeContext';

const RelicarioSolution = () => {
    const { darkMode } = useTheme();

    return (
        <div className={`solution-page pt-5 pb-5 ${darkMode ? 'dark-mode' : ''}`} style={{ minHeight: '100vh' }}>
            <Container>

                {/* 1. Title + Subtitle */}
                <section className="mb-5 text-center">
                    <h1 className="display-4 theme-text-primary mb-3">Relicario Print Studio 🖼️✨</h1>
                    <h3 className={`h5 mb-4 ${darkMode ? 'text-light' : 'text-secondary'}`}>
                        Plataforma de procesamiento de imágenes y optimización de impresión fotográfica de alta densidad para relicarios.
                    </h3>

                    <div className="mb-3">
                        <Badge bg="danger" className="me-2 p-2">Geometría Computacional</Badge>
                        <Badge bg="primary" className="me-2 p-2">Rendimiento Client-Side</Badge>
                        <Badge bg="success" className="me-2 p-2">Arquitectura Híbrida</Badge>
                        <Badge bg="info" className="p-2">Full Stack Javascript / Python</Badge>
                    </div>
                </section>

                <hr className="theme-border-primary" />

                {/* 2. El Problema */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">El Problema</h2>
                    <p className="lead">
                        La confección de relicarios de joyería exige cortar fotos diminutas (ej. 14.5mm a 17mm) con formas geométricas complejas como corazones. El proceso tradicional manual en Photoshop requería recortar foto por foto y ubicarlas manualmente en una hoja A4, demorando hasta 5 horas por lote y desaprovechando más del 40% del papel fotográfico.
                    </p>
                </section>

                {/* 3. La Solución */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">La Solución Desarrollada</h2>
                    <p>
                        Desarrollé **Relicario Print Studio**, una aplicación web híbrida que automatiza el flujo completo en 3 pasos simples:
                    </p>
                    <ul>
                        <li><strong>Carga e Interfaz Gestual:</strong> Carga carpetas enteras de fotos locales e interactúa mediante gestos (Pan y Zoom) detrás de una máscara vectorial SVG.</li>
                        <li><strong>Bandeja de Impresión Inteligente:</strong> Control de cola de impresión mediante Drag & Drop con precálculo de ranuras libres en tiempo real.</li>
                        <li><strong>Motor de Anidación (Polygon Nesting):</strong> Algoritmo gráfico que intercala y rota 180° las filas de corazones para reducir los espacios muertos a cero.</li>
                    </ul>
                </section>

                {/* 4. Retos Técnicos Destacados */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">Retos Técnicos de Ingeniería Superados</h2>
                    <Row>
                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-danger">🧠 1. Algoritmo de Nesting Poligonal</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Calculé matemáticamente la distancia de solapamiento (offset) entre trazados vectoriales invertidos en Python (`find_offset.py`), logrando encajar corazones tipo panal de abejas y ahorrando un 40% de papel.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-primary">⚡ 2. Virtualización de Memoria (DOM)</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Para evitar crasheos de Chrome al cargar +1,000 fotos locales, implementé un <code>IntersectionObserver</code> en JS que revoca las Blob URLs (`URL.revokeObjectURL`) tan pronto las imágenes salen del viewport.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-success">🌐 3. Arquitectura Híbrida / Client-Side Fallback</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Porté el motor de recorte (HTML5 Canvas API) y el motor de PDF (CSS Print Grid) a JavaScript puro. Si la API Flask no responde (como en Netlify), la app degrada elegantemente a procesamiento 100% cliente.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-warning">📱 4. Corrección de Orientación EXIF</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Sincronicé los metadatos de cámaras de teléfonos móviles mediante <code>ImageOps.exif_transpose</code> para que las fotos de celulares tomadas en vertical coincidan exactamente entre el navegador y el servidor.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* 5. Funcionalidades */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">Funcionalidades del Sistema</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Paso 1: Recorte Vectorial Interactivo</Accordion.Header>
                            <Accordion.Body className={darkMode ? 'bg-dark text-white' : ''}>
                                <p>Carga de carpetas completas mediante <code>webkitdirectory</code>. Encuadre dinámico con rueda de ratón y arrastre sobre la máscara SVG. Marcado automático de imágenes procesadas.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Paso 2: Bandeja de Impresión & Drag & Drop</Accordion.Header>
                            <Accordion.Body className={darkMode ? 'bg-dark text-white' : ''}>
                                <p>Reorganización de posiciones en la hoja. Botón de auto-llenado ("Cargar Todo"), modo de copias múltiples e indicador de ranuras completadas en tiempo real.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Paso 3: Exportación en Formatos A4/A5 (300 DPI)</Accordion.Header>
                            <Accordion.Body className={darkMode ? 'bg-dark text-white' : ''}>
                                <p>Soporte para A4 Normal, A4 Condensado, A5 Tétrico y A5 Duplicado. Generación de líneas de corte (stroke) vectoriales de alta resolución para guiar el recortado físico.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </section>

                {/* 6. Impacto / Métricas */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">Impacto Medible</h2>
                    <Row className="text-center">
                        <Col md={4} className="mb-3">
                            <Card bg={darkMode ? "black" : "light"} className="border-info p-3">
                                <h3>⚡ 95%</h3>
                                <small>Reducción de tiempo (de 5 horas a 15 min por lote)</small>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-3">
                            <Card bg={darkMode ? "black" : "light"} className="border-success p-3">
                                <h3>📄 40%</h3>
                                <small>Ahorro de papel fotográfico por hoja impresa</small>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-3">
                            <Card bg={darkMode ? "black" : "light"} className="border-warning p-3">
                                <h3>💰 $0</h3>
                                <small>Costo de infraestructura gracias al modo estático/serverless</small>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* 7. Tecnologías Usadas */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">Tecnologías Principales</h2>
                    <ul>
                        <li><strong>Frontend:</strong> JavaScript (ES6+), HTML5 Canvas API, SVG Masking, CSS3 Glassmorphism.</li>
                        <li><strong>Backend:</strong> Python 3, Flask, Pillow (PIL), NumPy / SciPy para geometrías.</li>
                        <li><strong>Optimización:</strong> Intersection Observer API, Blob URLs, Webkit File API.</li>
                    </ul>
                </section>

            </Container>
        </div>
    );
};

export default RelicarioSolution;
