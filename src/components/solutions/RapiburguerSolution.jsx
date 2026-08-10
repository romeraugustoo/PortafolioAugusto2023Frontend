import React from 'react';
import { Container, Row, Col, Badge, Card, Accordion } from 'react-bootstrap';
import '../../styles/bodyhome.css';
import { useTheme } from '../../context/ThemeContext';

const RapiburguerSolution = () => {
    const { darkMode } = useTheme();

    return (
        <div className={`solution-page ${darkMode ? 'dark-mode' : ''}`} style={{ minHeight: '100vh' }}>
            <Container>

                {/* Header */}
                <section className="mb-5 text-center">
                    <h1 className="display-4 theme-text-primary mb-3">RapiBurger App 🍔⚡</h1>
                    <h3 className={`h5 mb-4 ${darkMode ? 'text-light' : 'text-secondary'}`}>
                        Plataforma Full-Stack de comercio electrónico y gestión de pedidos para franquicia de comida rápida.
                    </h3>

                    <div className="mb-3">
                        <Badge bg="warning" text="dark" className="me-2 p-2">MERN Stack</Badge>
                        <Badge bg="primary" className="me-2 p-2">JWT & RBAC Auth</Badge>
                        <Badge bg="success" className="me-2 p-2">REST API</Badge>
                        <Badge bg="info" className="p-2">E-Commerce & Orders</Badge>
                    </div>
                </section>

                <hr className="theme-border-primary" />

                {/* El Problema */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">El Problema</h2>
                    <p className="lead">
                        Las comandas de pedidos recibidas por canales informales (WhatsApp, llamadas) provocaban demoras, errores en los pedidos y falta de trazabilidad en las ventas diarias del negocio de comida rápida.
                    </p>
                </section>

                {/* La Solución */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">La Solución Desarrollada</h2>
                    <p>
                        Diseñé e implementé una solución Web completa basada en el stack MERN (MongoDB, Express, React, Node.js):
                    </p>
                    <ul>
                        <li><strong>Catálogo Interactivo y Carrito de Compras:</strong> Experiencia fluida para el cliente con filtrado por categorías, cálculo en tiempo real de totales y personalización de menús.</li>
                        <li><strong>Autenticación Segura y Roles (RBAC):</strong> Registro de usuarios con JSON Web Tokens (JWT) y cifrado de contraseñas con bcrypt, separando clientes de administradores.</li>
                        <li><strong>Panel de Administración de Comandas:</strong> Dashboard en tiempo real para recepcionar pedidos, cambiar estados (Pendiente, En Preparación, Entregado) y gestionar el menú (CRUD).</li>
                    </ul>
                </section>

                {/* Arquitectura */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">Arquitectura & Componentes Técnicos</h2>
                    <Row>
                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-warning">🖥️ Frontend (React SPA)</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Interfaz de usuario reactiva construida con componentes reutilizables, React Router v6 para navegación sin recarga y SweetAlert2 para notificaciones de compra.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-success">⚙️ Backend (Node.js + Express)</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        API RESTful estructurada en capas (Rutas, Controladores, Modelos y Middlewares de validación de JWT e inputs con `express-validator`).
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* Funcionalidades */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">Funcionalidades Destacadas</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Flujo de Pedido del Cliente</Accordion.Header>
                            <Accordion.Body className={darkMode ? 'bg-dark text-white' : ''}>
                                NAVEGACIÓN por menú dinámico, adición/remoción de productos en el carrito con persistencia local (`localStorage`) y confirmación de comanda.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Panel de Control del Administrador (CRUD)</Accordion.Header>
                            <Accordion.Body className={darkMode ? 'bg-dark text-white' : ''}>
                                Alta, baja y modificación de hamburguesas, bebidas y combos con imágenes dinámicas, además de control de disponibilidad de productos.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </section>

                {/* Tecnologías */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">Tecnologías Principales</h2>
                    <ul>
                        <li><strong>Frontend:</strong> React.js, React-Bootstrap, React Router, SweetAlert2.</li>
                        <li><strong>Backend:</strong> Node.js, Express.js, JWT, Bcrypt.</li>
                        <li><strong>Base de Datos:</strong> MongoDB Atlas con Mongoose ORM.</li>
                    </ul>
                </section>

            </Container>
        </div>
    );
};

export default RapiburguerSolution;
