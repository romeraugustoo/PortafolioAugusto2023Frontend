import React from 'react';
import { Container, Row, Col, Badge, Card } from 'react-bootstrap';
import '../../styles/bodyhome.css';
import { useTheme } from '../../context/ThemeContext';

const TransporteSantaLucia = () => {
    const { darkMode } = useTheme();

    return (
        <div className={`solution-page pt-5 pb-5 ${darkMode ? 'dark-mode' : ''}`} style={{ minHeight: '100vh' }}>
            <Container>

                {/* 1. Contexto general */}
                <section className="mb-5 text-center">
                    <h1 className="display-4 text-warning mb-3">Santa Lucía Connect (SLC)</h1>
                    <h3 className={`h5 mb-4 ${darkMode ? 'text-light' : 'text-secondary'}`}>
                        Diseño y desarrollo de un sistema de información para transporte urbano
                    </h3>

                    <div className="mb-3">
                        <Badge bg="info" className="me-2 p-2">Análisis de Sistemas</Badge>
                        <Badge bg="secondary" className="me-2 p-2">Diseño de Soluciones</Badge>
                        <Badge bg="success" className="p-2">Desarrollo Full Stack</Badge>
                    </div>

                    <p className="lead">
                        Proyecto académico-profesional orientado a resolver problemas reales de gestión,
                        comunicación y desinformación en una empresa de transporte urbano.
                    </p>
                </section>

                <hr className="border-warning" />

                {/* 2. El problema real */}
                <section className="mb-5">
                    <h2 className="text-warning mb-4">1. El problema que identifiqué</h2>

                    <p>
                        Transporte Santa Lucía operaba con un modelo completamente manual:
                        la información crítica del servicio estaba dispersa entre planillas de Excel,
                        conocimiento informal y estados de WhatsApp.
                    </p>

                    <h4 className={`h6 mt-3 ${darkMode ? 'text-light' : 'text-secondary'}`}>
                        Principales problemas detectados durante el análisis:
                    </h4>

                    <ul>
                        <li>
                            <strong>No existía una fuente oficial de información:</strong> los pasajeros no tenían
                            dónde consultar horarios, recorridos ni tarifas confiables.
                        </li>
                        <li>
                            <strong>Alta dependencia del factor humano:</strong> cualquier cambio requería
                            actualizar Excel y comunicarlo manualmente.
                        </li>
                        <li>
                            <strong>Conflictos operativos frecuentes:</strong> discusiones por tarifas incorrectas
                            o desconocimiento de horarios reales.
                        </li>
                        <li>
                            <strong>Imposibilidad de escalar:</strong> el modelo no soportaba crecimiento ni cambios.
                        </li>
                    </ul>
                </section>

                {/* 3. Cómo planteé la solución */}
                <section className="mb-5">
                    <h2 className="text-warning mb-4">2. Cómo planteé la solución</h2>

                    <p>
                        La solución no fue “hacer una app”, sino diseñar un
                        <strong> sistema de información centralizado</strong>
                        que resolviera el problema de raíz: la gestión y comunicación de los datos.
                    </p>

                    <h4 className={`h6 mt-3 ${darkMode ? 'text-light' : 'text-secondary'}`}>
                        Decisiones clave de diseño:
                    </h4>

                    <ul>
                        <li>
                            Separar claramente la <strong>gestión administrativa</strong> del
                            <strong> acceso público a la información</strong>.
                        </li>
                        <li>
                            Modelar recorridos, paradas y horarios como entidades dinámicas,
                            no como datos fijos.
                        </li>
                        <li>
                            Definir al sistema como la <strong>única fuente de verdad</strong>.
                        </li>
                    </ul>
                </section>

                {/* 4. Arquitectura funcional */}
                <section className="mb-5">
                    <h2 className="text-warning mb-4">3. Arquitectura funcional del sistema</h2>

                    <Row>
                        <Col md={6} className="mb-3">
                            <Card bg={darkMode ? "dark" : "light"} className="h-100">
                                <Card.Body>
                                    <Card.Title className="text-info">
                                        Panel Administrativo
                                    </Card.Title>
                                    <Card.Text>
                                        Diseñado para reemplazar completamente el uso de Excel.
                                        Permite gestionar rutas, paradas, horarios y tarifas desde
                                        un único punto, con validaciones y control.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className="mb-3">
                            <Card bg={darkMode ? "dark" : "light"} className="h-100">
                                <Card.Body>
                                    <Card.Title className="text-info">
                                        Portal Público
                                    </Card.Title>
                                    <Card.Text>
                                        Interfaz orientada al pasajero donde se consulta la información
                                        oficial del servicio: horarios, recorridos y tarifas actualizadas
                                        en tiempo real.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* 5. Punto técnico fuerte */}
                <section className="mb-5">
                    <h2 className="text-warning mb-4">4. Punto técnico clave: recorridos y paradas</h2>

                    <p>
                        El mayor desafío fue modelar correctamente la relación entre
                        <strong> rutas, paradas y horarios</strong>.
                    </p>

                    <p>
                        Cada recorrido se define como una secuencia ordenada de paradas,
                        lo que permite que los horarios se calculen y consulten de forma dinámica,
                        sin duplicar información ni romper la lógica del sistema.
                    </p>

                    <p>
                        Este enfoque permite modificar recorridos, agregar paradas o
                        ajustar horarios sin afectar la estructura general.
                    </p>
                </section>

                {/* 6. Resultado */}
                <section className="mb-5">
                    <h2 className="text-warning mb-4">5. Resultado obtenido</h2>

                    <ul>
                        <li>Información centralizada y consistente.</li>
                        <li>Reducción de conflictos con pasajeros.</li>
                        <li>Mayor autonomía del usuario.</li>
                        <li>Base sólida para futuras mejoras (GPS, pagos, estadísticas).</li>
                    </ul>
                </section>

                {/* 7. Aprendizaje */}
                <section className="mb-5">
                    <h2 className="text-warning mb-4">6. Aprendizajes</h2>

                    <p>
                        Este proyecto reforzó la importancia del análisis previo,
                        el modelado correcto del dominio y la necesidad de pensar
                        primero en el negocio antes que en el código.
                    </p>
                </section>

            </Container>
        </div>
    );
};

export default TransporteSantaLucia;
