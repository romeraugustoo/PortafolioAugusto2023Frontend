import React from 'react';
import { Container, Row, Col, Badge, Card, Table, Button } from 'react-bootstrap';
import '../../styles/bodyhome.css';
import { useTheme } from '../../context/ThemeContext';
import espanaImg from '../../assets/images/portfolio/españa.webp';
import seoImg from '../../assets/images/portfolio/espana-seo.webp';

const TallerEspanaSolution = () => {
    const { darkMode } = useTheme();

    return (
        <div className={`solution-page ${darkMode ? 'dark-mode' : ''}`} style={{ minHeight: '100vh', paddingBottom: '6rem' }}>
            <Container>

                {/* Header Promocional */}
                <section className="mb-5 text-center" style={{ paddingTop: '3rem' }}>
                    <Badge bg="success" text="light" className="mb-3 p-2 fs-6">
                        ⚡ Caso de Estudio: Plataforma Comercial & Diagnóstico Diésel (Local SEO & Conversión Directa)
                    </Badge>
                    <h1 className="display-4 theme-text-primary mb-3 fw-bold">España Diesel — Taller de Inyección 🔧</h1>
                    <h3 className={`h5 mb-4 ${darkMode ? 'text-light' : 'text-secondary'}`} style={{ maxWidth: '850px', margin: '0 auto' }}>
                        Portal de diagnóstico técnico, cotizador en tiempo real y embudo de conversión para taller mecánico especializado en inyección electrónica y bombas en Concepción, Tucumán.
                    </h3>

                    <div className="mb-4 flex-wrap d-flex justify-content-center gap-2">
                        <Badge bg="primary" className="p-2">React 19 / Vite</Badge>
                        <Badge bg="success" className="p-2">WhatsApp Smart API</Badge>
                        <Badge bg="info" text="dark" className="p-2">Máximo SEO (Schema.org AutoRepair)</Badge>
                        <Badge bg="warning" text="dark" className="p-2">Mobile-First Grid 2x3</Badge>
                        <Badge bg="danger" className="p-2">100/100 PageSpeed Perfection</Badge>
                        <Badge bg="dark" className="p-2">Netlify Edge Deploy</Badge>
                        <Badge bg="secondary" className="p-2">Agentic Web 3/3</Badge>
                    </div>

                    <div className="mt-3 d-flex justify-content-center gap-3 flex-wrap">
                        <Button 
                            variant="success" 
                            size="lg" 
                            href="https://dieselconcepcion.com.ar/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mb-2 shadow"
                        >
                            <i className="fas fa-external-link-alt me-2"></i> Ver Sitio en Producción (dieselconcepcion.com.ar)
                        </Button>
                        <Button 
                            variant="outline-primary" 
                            size="lg" 
                            href="https://github.com/romeraugustoo" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mb-2"
                        >
                            <i className="fab fa-github me-2"></i> GitHub del Desarrollador
                        </Button>
                    </div>
                </section>

                {/* Vista Previa del Proyecto */}
                <section className="mb-5 text-center">
                    <div className="p-2 rounded-4 shadow-lg mx-auto" style={{ maxWidth: '960px', background: darkMode ? '#111827' : '#ffffff', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                        <img 
                            src={espanaImg} 
                            alt="España Diesel Portal" 
                            className="img-fluid rounded-3" 
                            style={{ width: '100%', maxHeight: '480px', objectFit: 'cover' }}
                        />
                    </div>
                </section>

                {/* 1. Métricas de Impacto */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">📊 1. Métricas de Impacto & Rendimiento</h2>
                    <Row>
                        <Col md={3} sm={6} className="mb-3">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} text-center p-3 h-100 shadow-sm`}>
                                <Card.Body>
                                    <h3 className="display-6 fw-bold text-info">&lt; 0.3s</h3>
                                    <p className={`mb-0 ${darkMode ? 'text-light' : 'text-muted'}`}>Velocidad de Carga Real (Edge CDN)</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} sm={6} className="mb-3">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} text-center p-3 h-100 shadow-sm`}>
                                <Card.Body>
                                    <h3 className="display-6 fw-bold text-success">100 / 100</h3>
                                    <p className={`mb-0 ${darkMode ? 'text-light' : 'text-muted'}`}>PageSpeed Insights (Móvil Oficial)</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} sm={6} className="mb-3">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} text-center p-3 h-100 shadow-sm`}>
                                <Card.Body>
                                    <h3 className="display-6 fw-bold text-warning">+85%</h3>
                                    <p className={`mb-0 ${darkMode ? 'text-light' : 'text-muted'}`}>Conversión de Clientes vía WhatsApp</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} sm={6} className="mb-3">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} text-center p-3 h-100 shadow-sm`}>
                                <Card.Body>
                                    <h3 className="display-6 fw-bold text-danger">3 / 3</h3>
                                    <p className={`mb-0 ${darkMode ? 'text-light' : 'text-muted'}`}>Navegación para Agentes IA (GEO)</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* Certificación Oficial PageSpeed Insights */}
                <section className="mb-5">
                    <Card bg={darkMode ? "dark" : "light"} className={`border-success p-4 shadow-lg`} style={{ borderWidth: '2px' }}>
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                            <div>
                                <Badge bg="success" className="p-2 mb-2">⚡ Puntuación Perfecta Certificada</Badge>
                                <h3 className="h4 theme-text-primary fw-bold mb-0">Google PageSpeed Insights: 100% en Todas las Categorías</h3>
                            </div>
                            <Button 
                                variant="outline-success" 
                                size="sm" 
                                href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fdieselconcepcion.com.ar%2F" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-check-circle me-1"></i> Verificar en Google en Vivo
                            </Button>
                        </div>
                        <p className={`mb-4 ${darkMode ? 'text-light' : 'text-secondary'}`}>
                            Auditoría oficial de Google Lighthouse en entorno móvil simulado (4G Lento en Moto G Power). La arquitectura logró la calificación máxima de <strong>100 en Rendimiento, 100 en Accesibilidad, 100 en Recomendaciones, 100 en SEO y 3/3 en Navegación con Agentes IA</strong> mediante Inlining de CSS Crítico, compresión Lanczos WebP de última generación y carga diferida modular con IntersectionObserver.
                        </p>
                        <div className="text-center p-2 rounded-3" style={{ background: darkMode ? '#0b0c10' : '#f8fafc', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                            <img 
                                src={seoImg} 
                                alt="Prueba de Rendimiento Google PageSpeed Insights 100/100 España Diesel" 
                                className="img-fluid rounded-2 shadow" 
                                style={{ width: '100%', maxHeight: '520px', objectFit: 'contain' }}
                            />
                        </div>
                    </Card>
                </section>

                {/* 2. El Desafío de Ingeniería y la Solución */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🎯 2. El Desafío de Negocio & Solución</h2>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} p-4 h-100 shadow-sm`}>
                                <h4 className="text-danger mb-3"><i className="fas fa-exclamation-triangle me-2"></i> El Problema</h4>
                                <p className={darkMode ? 'text-light' : 'text-secondary'}>
                                    Los talleres especializados en inyección diésel y bombas mecánicas suelen depender exclusivamente del boca a boca o llamadas telefónicas directas, lo que genera:
                                </p>
                                <ul className={darkMode ? 'text-light' : 'text-secondary'}>
                                    <li>Falta de transparencia en los costos base de diagnóstico computarizado.</li>
                                    <li>Pérdida recurrente de clientes potenciales que buscan soluciones mecánicas de urgencia por Google Maps.</li>
                                    <li>Fricción en la reserva de turnos para bancos de prueba y calibración.</li>
                                    <li>Textos técnicos extensos que abrumaban al usuario en dispositivos móviles.</li>
                                </ul>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} p-4 h-100 shadow-sm`}>
                                <h4 className="text-success mb-3"><i className="fas fa-check-circle me-2"></i> La Solución de Alto Rendimiento</h4>
                                <p className={darkMode ? 'text-light' : 'text-secondary'}>
                                    Diseño e implementación de un portal técnico y comercial de conversión directa, optimizado para búsquedas locales y dispositivos móviles:
                                </p>
                                <ul className={darkMode ? 'text-light' : 'text-secondary'}>
                                    <li><strong>Selector Interactivo de Síntomas (Grid 2x3):</strong> Diagnóstico previo instantáneo con desmarcado total y cotización sugerente.</li>
                                    <li><strong>Catálogo Simétrico de 6 Servicios:</strong> Desglose balanceado (Common Rail, Bombas, Escaneo OBD-II, Nafta, Electricidad y Rendimiento EGR/DPF).</li>
                                    <li><strong>Arquitectura Máximo SEO Local:</strong> Integración de Schema.org JSON-LD (`AutoRepair`), Geo-tags exactos (`-27.3476195, -65.5858466`), `sitemap.xml` y `robots.txt`.</li>
                                    <li><strong>Embudo de WhatsApp Inteligente:</strong> Mensajes pre-configurados con datos del vehículo y tipo de falla sin intermediarios.</li>
                                </ul>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* 3. Módulos y Capacidades del Sistema */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">⚙️ 3. Módulos y Arquitectura del Sistema</h2>
                    <Table responsive striped bordered hover variant={darkMode ? "dark" : "light"}>
                        <thead>
                            <tr>
                                <th>Módulo</th>
                                <th>Tecnología</th>
                                <th>Funcionalidad Clave</th>
                                <th>Impacto de Negocio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Selector Interactivo de Síntomas (2x3)</strong></td>
                                <td>React 19 / State Management</td>
                                <td>Diagnóstico previo de 6 síntomas con desmarcado libre y asesoramiento directo</td>
                                <td>Cero fricción en móviles y aumento del +85% en consultas</td>
                            </tr>
                            <tr>
                                <td><strong>Catálogo Simétrico de 6 Servicios</strong></td>
                                <td>React / CSS Grid Responsive</td>
                                <td>Desglose de Bombas, Inyectores, Escáner, Nafta, Electrónica y Admisión EGR/DPF</td>
                                <td>Transparencia, autoridad técnica y simetría visual 3x2 / 2x3</td>
                            </tr>
                            <tr>
                                <td><strong>Máximo SEO Local & Schema.org</strong></td>
                                <td>JSON-LD / Geo Meta / Sitemap</td>
                                <td>Ficha Rich Snippets `AutoRepair`, coordenadas GPS y geolocalización en Concepción</td>
                                <td>Top 1 en búsquedas orgánicas locales de Google sin pagar anuncios</td>
                            </tr>
                            <tr>
                                <td><strong>Cotizador & Turnos WhatsApp</strong></td>
                                <td>JavaScript ES6 / URI Encoder</td>
                                <td>Generación dinámica de solicitudes con modelo, falla seleccionada y servicio</td>
                                <td>Atención en &lt;5 minutos directa al teléfono del especialista</td>
                            </tr>
                            <tr>
                                <td><strong>Despliegue & Edge Performance</strong></td>
                                <td>Vite / Netlify Edge CDN</td>
                                <td>Caché inmutable de 1 año (`_headers`), SPA Routing (`_redirects`) y 0ms backend delay</td>
                                <td>Carga instantánea en redes 4G/3G de talleres</td>
                            </tr>
                        </tbody>
                    </Table>
                </section>

                {/* 4. Conclusiones y Valor Estratégico */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">💡 4. Conclusiones y Valor Estratégico</h2>
                    <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} p-4 shadow-sm`}>
                        <p className={`lead ${darkMode ? 'text-light' : 'text-secondary'}`}>
                            <strong>España Diesel</strong> demuestra cómo un análisis funcional enfocado en la reducción de fricción y el posicionamiento estratégico puede transformar un negocio tradicional en un canal de captación digital altamente eficiente, rentable y de costo de mantenimiento cero.
                        </p>
                        <div className="d-flex justify-content-end gap-2 mt-3">
                            <Button variant="primary" href="https://dieselconcepcion.com.ar/" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-wrench me-2"></i> Abrir España Diesel en Producción
                            </Button>
                        </div>
                    </Card>
                </section>

            </Container>
        </div>
    );
};

export default TallerEspanaSolution;
