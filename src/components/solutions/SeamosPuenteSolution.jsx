import React from 'react';
import { Container, Row, Col, Badge, Card, Table, Button } from 'react-bootstrap';
import '../../styles/bodyhome.css';
import { useTheme } from '../../context/ThemeContext';

const SeamosPuenteSolution = () => {
    const { darkMode } = useTheme();

    return (
        <div className={`solution-page ${darkMode ? 'dark-mode' : ''}`} style={{ minHeight: '100vh' }}>
            <Container>

                {/* Header Promocional */}
                <section className="mb-5 text-center">
                    <Badge bg="success" text="light" className="mb-3 p-2 fs-6">🤝 Plataforma Web Institucional & Donaciones de Impacto Social</Badge>
                    <h1 className="display-4 theme-text-primary mb-3 fw-bold">ONG Seamos Puente 🌉❤️</h1>
                    <h3 className={`h5 mb-4 ${darkMode ? 'text-light' : 'text-secondary'}`} style={{ maxWidth: '850px', margin: '0 auto' }}>
                        Plataforma web interactiva para conectar corazones solidarios con las comunidades del Chaco Salteño. Incluye Armador de Kits de Donación personalizado y Panel de Administración Backoffice.
                    </h3>

                    <div className="mb-4 flex-wrap d-flex justify-content-center gap-2">
                        <Badge bg="primary" className="p-2">React 19 + TypeScript</Badge>
                        <Badge bg="info" text="dark" className="p-2">Vite 5</Badge>
                        <Badge bg="warning" text="dark" className="p-2">Armador de Kits Interactivo</Badge>
                        <Badge bg="dark" className="p-2">Panel Backoffice Admin</Badge>
                        <Badge bg="success" className="p-2">Glassmorphism UI</Badge>
                        <Badge bg="danger" className="p-2">Persistencia LocalStorage Sync</Badge>
                        <Badge bg="secondary" className="p-2">Lucide React Icons</Badge>
                    </div>

                    <div className="mt-3 d-flex justify-content-center gap-3 flex-wrap">
                        <Button 
                            variant="success" 
                            size="lg" 
                            href="https://seamospuente.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mb-2"
                        >
                            <i className="fas fa-external-link-alt me-2"></i> Visitar Sitio en Producción
                        </Button>
                        <Button 
                            variant="outline-primary" 
                            size="lg" 
                            href="https://github.com/romeraugustoo/seamospuente.git" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mb-2"
                        >
                            <i className="fab fa-github me-2"></i> Repositorio GitHub
                        </Button>
                    </div>
                </section>

                <hr className="theme-border-primary mb-5" />

                {/* 1. Propuesta de Valor y Solución Social */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">💡 1. Propuesta de Valor & Impacto Social</h2>
                    <Row className="align-items-center">
                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'danger' : 'danger'} h-100 p-3 shadow-sm`}>
                                <Card.Body>
                                    <h4 className="text-danger mb-3">❌ El Desafío de la Transparencia y Captación</h4>
                                    <p className={darkMode ? 'text-light' : 'text-dark'}>
                                        Las organizaciones humanitarias en zonas de alta vulnerabilidad (como el Chaco Salteño) suelen enfrentar:
                                    </p>
                                    <ul>
                                        <li>Falta de visibilidad de las campañas de campo y sus avances reales.</li>
                                        <li>Canales de donación rígidos sin estimación ni personalización de insumos.</li>
                                        <li>Dificultad para canalizar y registrar la captación de nuevos voluntarios.</li>
                                        <li>Paneles de gestión complejos que requieren conocimientos técnicos para publicar noticias.</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'success' : 'success'} h-100 p-3 shadow-sm`}>
                                <Card.Body>
                                    <h4 className="text-success mb-3">✅ La Solución Digital Seamos Puente</h4>
                                    <p className={darkMode ? 'text-light' : 'text-dark'}>
                                        Una plataforma moderna, transparente y viva enfocada en la experiencia del usuario y del donante:
                                    </p>
                                    <ul>
                                        <li>Visualización en tiempo real del progreso de campañas activas en Santa Victoria Este.</li>
                                        <li><strong>Armador de Kits Personalizados:</strong> Selección interactiva de insumos escolares, nutrición y abrigo con costos estimativos en ARS.</li>
                                        <li>Formulario dinámico de voluntariado y donantes con auto-mensaje prediseñado.</li>
                                        <li><strong>Panel Backoffice Integrado:</strong> Gestión sin código de campañas, noticias y leads.</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* 2. Diagrama de Arquitectura de Capas */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🏗️ 2. Arquitectura de Componentes & Estado Bidireccional</h2>
                    <p>
                        La aplicación está construida sobre React 19 y TypeScript, desacoplando los módulos públicos de captación y donación con el módulo administrativo privado:
                    </p>
                    <pre className={`p-4 rounded border ${darkMode ? 'bg-dark text-info border-info' : 'bg-light text-dark border-primary'}`} style={{ fontSize: '0.85rem', overflowX: 'auto' }}>
{`┌─────────────────────────────────────────────────────────────────────────┐
│                        PLATAFORMA ONG SEAMOS PUENTE                     │
└─────────────────────────────────────────────────────────────────────────┘
        │
        ├── 🌟 1. Hero & Presentación Institucional (Hero.tsx)
        │     └── Misión humanitaria en el Chaco Salteño & Call-to-Actions directos
        │
        ├── 📖 2. Historia y Misión Humanitaria (AboutUs.tsx)
        │     └── Trabajo en Santa Victoria Este acompañando comunidades Wichís, Chorotes y Tobas
        │
        ├── 🎯 3. Campañas Activas en Vivo (ActiveCampaigns.tsx)
        │     └── Visualizador de barras de progreso, metas financieras e impacto en territorio
        │
        ├── 🧰 4. Armador Interactivo de Kits (KitBuilder.tsx)
        │     ├── Selección dinámica de artículos (Escolares, CONIN, Alimentos, Abrigo, Higiene)
        │     └── Calculadora en ARS & Generador de mensaje listo para donar
        │
        ├── 📰 5. Bitácora de Viajes & Noticias (NewsSection.tsx)
        │     └── Artículos informativos sobre entregas e historias comunitarias
        │
        ├── ✉️ 6. Sumarse como Voluntario / Contacto (ContactForm.tsx)
        │     └── Formulario con validación y vinculación a canales institucionales
        │
        └── ⚙️ 7. Panel Backoffice Administrativo (AdminPanel.tsx)
              ├── Gestión CRUD de Campañas (Alta, Baja, Edición de Metas y Progreso)
              ├── Editor de Noticias y Bitácoras de viajes
              └── Sincronización bidireccional inmediata en localStorage`}
                    </pre>
                </section>

                {/* 3. El Ciclo de Donación y Gestión en 6 Pasos */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🔄 3. El Flujo de Experiencia del Usuario (6 Módulos)</h2>
                    <Row>
                        <Col lg={4} md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-success">1️⃣ Misión en Territorio</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Presentación de las causas en el Chaco Salteño, visibilizando la realidad de más de 500 familias y comunidades originarias.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-primary">2️⃣ Transparencia de Campañas</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Indicadores de recaudación en tiempo real con montos objetivo, porcentajes completados y llamados a la acción transparentes.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-warning">3️⃣ Armador de Kits A Medida</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        El donante arma su propio paquete de ayuda sumando kits de alimentos, leche CONIN o calzado con estimador monetario.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-info">4️⃣ Red de Voluntariado</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Registro ágil para profesionales de la salud, educadores y colaboradores que deseen participar en los viajes a la zona.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-danger">5️⃣ Backoffice Admin</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Panel privado para administrar contenidos, publicar actualizaciones del estado de caminos e historias en territorio.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-secondary">6️⃣ Persistencia Inmediata</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Sincronización instantánea de estado sin dependencias pesadas de servidor, garantizando máxima velocidad de carga.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* 4. Especificación de Kits de Donación */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">📦 4. Desglose del Armador de Kits de Ayuda Humanitaria</h2>
                    <Table responsive striped bordered hover variant={darkMode ? "dark" : "light"}>
                        <thead>
                            <tr>
                                <th>Tipo de Kit</th>
                                <th>Insumos Incluidos</th>
                                <th>Impacto Estimado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Kit Nutricional CONIN</strong></td>
                                <td>Leche en polvo, suplementos vitamínicos, cereales y agua mineral</td>
                                <td>Cubre la alimentación reforzada de un niño durante 1 mes</td>
                            </tr>
                            <tr>
                                <td><strong>Kit Escolar Completo</strong></td>
                                <td>Cuadernos A4, mochilas, cartucheras, lápices de colores y diccionarios</td>
                                <td>Garantiza el inicio lectivo de un alumno en escuelas rurales</td>
                            </tr>
                            <tr>
                                <td><strong>Kit Abrigo y Calzado</strong></td>
                                <td>Zapatillas resistentes para terreno de monte, camperas térmicas y frazadas</td>
                                <td>Protege a familias durante el invierno en el monte salteño</td>
                            </tr>
                            <tr>
                                <td><strong>Kit Higiene y Salud</strong></td>
                                <td>Jabón neutro, alcohol en gel, cepillos de dientes, compresas y lavandina</td>
                                <td>Prevención de enfermedades infectocontagiosas comunitarias</td>
                            </tr>
                        </tbody>
                    </Table>
                </section>

                {/* 5. Retos Técnicos de Ingeniería */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">⚙️ 5. Retos Técnicos de Ingeniería Superados</h2>
                    <Row>
                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-primary d-flex align-items-center gap-2">
                                        ⚡ TypeScript 5 + React 19 desacoplado
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Tipado estricto para modelos de campañas, kits, insumos y artículos de noticias. Previene errores de runtime y facilita el mantenimiento evolutivo.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-warning d-flex align-items-center gap-2">
                                        🎨 Design Tokens & UI Glassmorphism
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Interfaz basada en Vanilla CSS con variables CSS nativas, efectos de traslucidez glassmorphism y micro-animaciones suaves para inspirar confianza y cercanía.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-success d-flex align-items-center gap-2">
                                        🔄 Estado Bidireccional en LocalStorage
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Sincronización en tiempo real entre el Panel de Control Administrativo y las secciones públicas sin requerir backend complejo en la fase de lanzamiento.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-danger d-flex align-items-center gap-2">
                                        📱 Responsividad Móvil First (Monte & Ciudad)
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Diseño adaptativo fluido optimizado para ser consultado desde smartphones con conexiones de datos limitadas o baja señal.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* 6. Stack Tecnológico Completo */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🛠️ 6. Stack Tecnológico Completo</h2>
                    <Row>
                        <Col md={4} className="mb-3">
                            <h5 className="text-info">Core & Lenguaje</h5>
                            <ul>
                                <li>React 19</li>
                                <li>TypeScript 5</li>
                                <li>Vite 5 (Bundler ultra-rápido)</li>
                            </ul>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h5 className="text-warning">UI & Estilos</h5>
                            <ul>
                                <li>Custom Vanilla CSS</li>
                                <li>Lucide React Icons</li>
                                <li>Design Tokens & Glassmorphism</li>
                            </ul>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h5 className="text-success">Persistencia & Deploy</h5>
                            <ul>
                                <li>State + LocalStorage Sync</li>
                                <li>Netlify Production Deploy</li>
                                <li>Git Version Control (v1.0)</li>
                            </ul>
                        </Col>
                    </Row>
                </section>

            </Container>
        </div>
    );
};

export default SeamosPuenteSolution;
