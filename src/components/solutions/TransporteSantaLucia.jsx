import React from 'react';
import { Container, Row, Col, Badge, Card, Accordion, Button } from 'react-bootstrap';
import '../../styles/bodyhome.css';
import { useTheme } from '../../context/ThemeContext';
import databaseDiagram from '../../assets/images/portfolio/tslc/diagramadebasededatos.jpg';
import domainModelDark from '../../assets/images/portfolio/modelodominiobackendtslcdark.svg';
import deploymentLight from '../../assets/images/portfolio/tslc/diagramadesplieguelight.png';
import deploymentDark from '../../assets/images/portfolio/tslc/diagramadesplieguedark.png';
import packagesLight from '../../assets/images/portfolio/tslc/diagramadepaqueteslight.png';
import packagesDark from '../../assets/images/portfolio/tslc/diagramadepaquetesdark.png';

const TransporteSantaLucia = () => {
    const { darkMode } = useTheme();

    return (
        <div className={`solution-page pt-5 pb-5 ${darkMode ? 'dark-mode' : ''}`} style={{ minHeight: '100vh' }}>
            <Container>

                {/* 1. Título + Subtítulo */}
                <section className="mb-5 text-center">
                    <h1 className="display-4 text-warning mb-3">Santa Lucía Connect (SLC)</h1>
                    <h3 className={`h5 mb-4 ${darkMode ? 'text-light' : 'text-secondary'}`}>
                        Transformación digital de la gestión operativa y la comunicación para Transporte Santa Lucía SRL.
                    </h3>

                    <div className="mb-3">
                        <Badge bg="info" className="me-2 p-2">Análisis de Sistemas</Badge>
                        <Badge bg="secondary" className="me-2 p-2">Diseño de Soluciones</Badge>
                        <Badge bg="success" className="p-2">Desarrollo Full Stack</Badge>
                    </div>
                </section>

                <hr className="border-warning" />

                {/* 2. Resumen corto del problema (Lead) */}
                <section className="mb-5">
                    <h2 className="text-warning mb-4">El Problema</h2>
                    <p className="lead">
                        Elegimos este caso para automatización en la cátedra de Diseño de Sistemas de Información de la carrera Ingeniería en Sistemas de Información (UTN-FRT). Este proyecto, denominado "Santa Lucía Connect" (SLC), fue realizado como Trabajo Final Integrador por el grupo conformado por Emilse Romano, Luis Romano y Augusto Romera.
                    </p>
                </section>

                {/* 3. Contexto de la organización */}
                <section className="mb-5">
                    <h2 className="text-warning mb-4">Contexto de la Organización</h2>
                    <p>
                        Transporte Santa Lucía es una empresa familiar que conecta Monteros y localidades vecinas con una flota reducida. Su misión y visión apuntan a combinar tradición con soluciones tecnológicas que mejoren la calidad de servicio. El proyecto SLC nace como la primera fase de digitalización con alcance operacional concreto.
                    </p>
                </section>

                {/* 4. Limitaciones y alcance */}
                <section className="mb-5">
                    <h2 className="text-warning mb-4">Limitaciones y Alcance</h2>
                    <p>Decidimos acotar la primera iteración a:</p>
                    <ul>
                        <li>Centralizar gestión de rutas, paradas, horarios y tarifas.</li>
                        <li>Portal público para consulta y panel administrativo para gestión (CRUD).</li>
                        <li>Sin seguimiento GPS ni pasarela de pagos en esta fase (arquitectura pensada para permitirlo luego).</li>
                    </ul>
                    <p>Esto permitió entregar valor rápido y seguro sin extender el alcance innecesariamente.</p>
                </section>

                {/* 5. Opiniones / citas de usuarios */}
                <section className="mb-5">
                    <h2 className="text-warning mb-4">Lo que dicen los usuarios</h2>
                    <Card bg={darkMode ? "black" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} mb-3`}>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p className={darkMode ? 'text-light' : 'text-dark'}>
                                    “Ahora lo hacemos todo desde una sola computadora, con Excel… y usamos el estado de WhatsApp para avisar.”
                                </p>
                                <footer className={darkMode ? 'text-secondary' : 'blockquote-footer'}>
                                    Emin Sidan <cite title="Source Title" className={darkMode ? 'text-light' : ''}>(Administración)</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    <p>
                        Esta entrevista y otras habilitaron la elicitación de requisitos y validaron que el problema principal era la falta de una fuente oficial de información.
                    </p>
                </section>


                {/* 6. Análisis del sistema */}
                <section className="mb-5">
                    <h2 className="text-warning mb-4">Análisis del Sistema</h2>
                    <p>Explico brevemente lo que modelé y por qué:</p>
                    <ul>
                        <li>Identifiqué las entidades clave del dominio: Ruta, Parada, Horario, Tarifa, Usuario.</li>
                        <li>Propuse que los recorridos se definan como secuencias ordenadas de paradas (esto permite calcular horarios dinámicamente y evita duplicación de datos).</li>
                        <li>Definí casos de uso prioritarios orientados a resolver problemas reales (consultas públicas, planificación de viaje, gestión de horarios/tarifas).</li>
                    </ul>
                    {/* Domain Model Image */}
                    <div className="text-center mb-3">
                        <div className={`d-inline-block p-3 border border-3 border-warning rounded ${darkMode ? 'bg-dark' : 'bg-white'}`}>
                            <img
                                src={darkMode ? domainModelDark : databaseDiagram}
                                alt="Diagrama de Base de Datos"
                                className="img-fluid"
                                style={{ maxHeight: '500px' }}
                            />
                        </div>
                    </div>
                </section>

                {/* 7. Arquitectura */}
                <section className="mb-5">
                    <h2 className="text-warning mb-4">Arquitectura</h2>
                    <p>Arquitectura simplificada que implementé:</p>
                    <ul>
                        <li><strong>Frontend (React SPA):</strong> Portal público y panel admin.</li>
                        <li><strong>Backend (API REST — Node.js/Express):</strong> Lógica de negocio, validaciones, RBAC y contratos del sistema.</li>
                        <li><strong>Persistencia (MongoDB / Mongoose):</strong> Colecciones para User, Ruta, Parada, Horario, Tarifa.</li>
                    </ul>
                    <p>La separación en capas garantiza que cambios administrativos no rompan la experiencia pública y facilita escalabilidad.</p>
                    <Row>
                        <Col md={6}>
                            {/* Deployment Diagram */}
                            <div className="text-center mb-3">
                                <div className={`d-inline-block p-2 border border-3 border-warning rounded ${darkMode ? 'bg-dark' : 'bg-white'}`}>
                                    <img
                                        src={darkMode ? deploymentDark : deploymentLight}
                                        alt="Diagrama de despliegue"
                                        className="img-fluid"
                                    />
                                </div>
                                <small className={`d-block mt-2 ${darkMode ? 'text-light' : 'text-muted'}`}>Diagrama de Despliegue</small>
                            </div>
                        </Col>
                        <Col md={6}>
                            {/* Packages Diagram */}
                            <div className="text-center mb-3">
                                <div className={`d-inline-block p-2 border border-3 border-warning rounded ${darkMode ? 'bg-dark' : 'bg-white'}`}>
                                    <img
                                        src={darkMode ? packagesDark : packagesLight}
                                        alt="Diagrama de paquetes"
                                        className="img-fluid"
                                    />
                                </div>
                                <small className={`d-block mt-2 ${darkMode ? 'text-light' : 'text-muted'}`}>Diagrama de Paquetes</small>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* 8. Funcionalidades principales (Casos de Uso) */}
                <section className="mb-5">
                    <h2 className="text-warning mb-4">Funcionalidades Principales</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>CU-01: Registrarse como usuario</Accordion.Header>
                            <Accordion.Body className={darkMode ? 'bg-dark text-white' : ''}>
                                <p>Registro con validación; email de bienvenida y asignación de rol si corresponde. (Contrato: registrarUsuario(...)).</p>
                                {/* Placeholder Image */}
                                <div className="text-center p-3 border border-secondary border-dashed">
                                    <span className="text-muted">[Imagen: Diagrama CU]</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>CU-06: Planificar viaje / Consultar horarios y tarifas</Accordion.Header>
                            <Accordion.Body className={darkMode ? 'bg-dark text-white' : ''}>
                                <p>El pasajero selecciona origen/destino; el sistema devuelve horarios, duración y tarifa (o “CONSULTAR” si no hay tarifa definida). Esto protege la fiabilidad. (Requer. N°6).</p>
                                {/* Placeholder Image */}
                                <div className="text-center p-3 border border-secondary border-dashed">
                                    <span className="text-muted">[Imagen: Diagrama de Secuencia]</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>CU-11 a CU-14: Gestión (Admin)</Accordion.Header>
                            <Accordion.Body className={darkMode ? 'bg-dark text-white' : ''}>
                                <p>CRUD protegido por roles, con validaciones y confirmaciones (SweetAlert para eliminar). Rutas / Paradas / Horarios / Tarifas.</p>
                                {/* Placeholder Image */}
                                <div className="text-center p-3 border border-secondary border-dashed">
                                    <span className="text-muted">[Imagen: Screenshots del panel]</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </section>

                {/* 9. Resolución */}
                <section className="mb-5">
                    <h2 className="text-warning mb-4">Resolución (Impacto)</h2>
                    <ul>
                        <li>Centralicé la fuente de información: un único origen de verdad para horarios y tarifas.</li>
                        <li>Reduje la posibilidad de conflictos por información desactualizada (ya no depende de estados de WhatsApp).</li>
                        <li>Generé capacidades que permiten, en siguientes iteraciones, añadir GPS, pagos y estadísticas.</li>
                    </ul>
                </section>

                {/* 10. Tecnologías */}
                <section className="mb-5">
                    <h2 className="text-warning mb-4">Tecnologías Usadas</h2>
                    <ul>
                        <li><strong>Frontend:</strong> React (SPA) — elección por rendimiento y experiencia móvil.</li>
                        <li><strong>Backend:</strong> Node.js / Express — API REST para separar lógica de negocio.</li>
                        <li><strong>DB:</strong> MongoDB Atlas (Mongoose) — modelo flexible para horarios y paradas.</li>
                        <li><strong>UX/Libs:</strong> Bootstrap, SweetAlert2 para confirmaciones, generación de PDFs para reportes imprimibles.</li>
                    </ul>
                </section>

                {/* 11. Metodología */}
                <section className="mb-5">
                    <h2 className="text-warning mb-4">Metodología y Trabajo en Equipo</h2>
                    <p>
                        Trabajamos en equipo bajo una dinámica iterativa (Scrum-like): sprints cortos, roles claros y técnicas de elicitation (entrevistas en embudo con stakeholders) para priorizar requisitos reales. Todo requerimiento fue validado con usuarios antes de implementarlo.
                    </p>
                </section>

                {/* 12. Qué sigue */}
                <section className="mb-5">
                    <h2 className="text-warning mb-4">Visión a Futuro</h2>
                    <ul>
                        <li>Integrar seguimiento en vivo (GPS) para mejorar trazabilidad.</li>
                        <li>Agregar métodos de pago y abonos estudiantiles.</li>
                        <li>Dashboards administrativos con KPIs de cumplimiento de horarios.</li>
                    </ul>
                </section>

                {/* 13. Referencias / Descarga */}
                <section className="mb-5 text-center">
                    <h2 className="text-warning mb-4">Referencias</h2>
                    <Button variant="outline-warning" size="lg" href="#" className="mb-4">
                        <i className="fas fa-file-pdf me-2"></i> Descargar TFI (PDF)
                    </Button>

                    <h4 className={`h6 mb-3 ${darkMode ? 'text-light' : 'text-secondary'}`}>Galería de Diagramas (Referencias)</h4>
                    <Row>
                        <Col md={4} className="mb-3">
                            <div className="p-2 border border-secondary border-dashed">
                                <small className="text-muted d-block">Modelo del dominio</small>
                            </div>
                        </Col>
                        <Col md={4} className="mb-3">
                            <div className="p-2 border border-secondary border-dashed">
                                <small className="text-muted d-block">Diagrama de actividades</small>
                            </div>
                        </Col>
                        <Col md={4} className="mb-3">
                            <div className="p-2 border border-secondary border-dashed">
                                <small className="text-muted d-block">Prototipos UI</small>
                            </div>
                        </Col>
                        <Col md={4} className="mb-3">
                            <div className="p-2 border border-secondary border-dashed">
                                <small className="text-muted d-block">Diseño de salida impresa</small>
                            </div>
                        </Col>
                    </Row>
                </section>

            </Container>
        </div>
    );
};

export default TransporteSantaLucia;
