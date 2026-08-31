import React from 'react';
import { useMagic } from '../../context/MagicContext';
import ContactShowcase from '../contact/ContactShowcase';
import ArchitectureBlueprint from '../architecture/ArchitectureBlueprint';
import profileImg from '../../assets/images/profile/profile-augusto.webp';

const CtoModeView = () => {
    const { setMode, MODES } = useMagic();

    return (
        <div className="cto-mode-view">
            
            {/* =========================================================================
                 1. HERO EJECUTIVO & TELEMETRÍA EN VIVO (BENTO GRID)
                 ========================================================================= */}
            <section id="home" className="cto-hero-section">
                <div className="container">
                    <div className="row align-items-center justify-content-between g-5">
                        
                        <div className="col-12 col-lg-7 text-start">
                            <h1 className="cto-hero-h1">
                                Desarrollo de Software, <span className="gradient-highlight">Análisis Funcional</span> &amp; Sistemas Escalables.
                            </h1>

                            <p className="cto-hero-lead">
                                Soy <strong>Augusto Romera</strong>, Desarrollador de Software &amp; Analista Funcional (UTN-FRT). Construyo el puente entre las reglas de negocio complejas y la arquitectura técnica. Convierto la incertidumbre y los requisitos difusos en sistemas estructurados, documentados y escalables.
                            </p>

                            <div className="d-flex align-items-center gap-3 flex-wrap mb-4">
                                <a href="#blueprints" className="btn btn-primary px-4 py-2">
                                    <i className="fas fa-project-diagram me-2"></i>
                                    Explorar Blueprints
                                </a>
                                <a href="#portfolio" className="btn btn-secondary px-4 py-2">
                                    <i className="fas fa-magic me-2"></i>
                                    Auditar por Modos
                                </a>
                            </div>

                            {/* Executive Bento Metrics Grid */}
                            <div className="cto-metrics-grid">
                                <div className="cto-metric-box">
                                    <div className="metric-val">+18</div>
                                    <div className="metric-lbl">Soluciones Desarrolladas</div>
                                </div>
                                <div className="cto-metric-box">
                                    <div className="metric-val">UTN-FRT</div>
                                    <div className="metric-lbl">Formación en Ingeniería</div>
                                </div>
                                <div className="cto-metric-box">
                                    <div className="metric-val">&lt;200ms</div>
                                    <div className="metric-lbl">Optimización de APIs</div>
                                </div>
                                <div className="cto-metric-box">
                                    <div className="metric-val">End-to-End</div>
                                    <div className="metric-lbl">Ciclo SDLC Completo</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
                            <div className="cto-avatar-frame">
                                <div className="cto-avatar-content-wrap">
                                    <img src={profileImg} alt="Augusto Romera" className="cto-profile-image" />
                                </div>

                                <div className="cto-avatar-badge">
                                    <span className="badge-role">Desarrollador de Software &amp; Analista Funcional</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =========================================================================
                 2. HUB DE TRANSFORMACIÓN: BIFURCACIÓN DE AUDITORÍA TÉCNICA (PORTAFOLIO METAMORFOSIS)
                 ========================================================================= */}
            <section id="portfolio" className="cto-gateways-section">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <span className="section-tag">Metamorfosis de Experiencia</span>
                        <h2 className="section-title text-white font-heading">Exploración de Proyectos &amp; Sistemas</h2>
                        <p className="section-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
                            ¿Cómo te gustaría explorar mis proyectos? Te propongo dos formas creativas de continuar:
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        
                        {/* Gateway 1: Ciberseguridad & Terminal Forense (Cyber Mode) */}
                        <div className="col-12 col-lg-6">
                            <div 
                                className="cto-gateway-card gateway-cyber"
                                onClick={() => setMode(MODES.CYBER)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && setMode(MODES.CYBER)}
                            >
                                <div className="gateway-card-header">
                                    <div className="gateway-icon-badge cyber">
                                        <i className="fas fa-terminal"></i>
                                    </div>
                                    <span className="gateway-target-role">Para Tech Leads, Backend &amp; Linux/Sistemas</span>
                                </div>

                                <div className="gateway-card-body">
                                    <h3 className="gateway-title cyber-text">
                                        Consola Linux &amp; Kernel Telemetry
                                    </h3>
                                    <p className="gateway-desc">
                                        Entorno interactivo estilo terminal Linux / POSIX Shell. Simula en tiempo real la ejecución de comandos y procesos de bajo nivel (Bypass MT6765, Little Kernel) e inspecciona telemetría de auditorías y pipelines concurrentes.
                                    </p>

                                    <ul className="gateway-feature-list">
                                        <li>
                                            <i className="fas fa-check text-success me-2"></i>
                                            <span>Simulación interactiva de comandos shell (<code>/help</code>, <code>/audit motoe6s</code>)</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check text-success me-2"></i>
                                            <span>Recreación de bitácoras de bajo nivel y criptoanálisis de hardware</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check text-success me-2"></i>
                                            <span>Telemetría de arquitecturas ARM64 y pipelines concurrentes</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="gateway-card-footer">
                                    <button 
                                        className="btn-gateway-action cyber-btn"
                                        onClick={(e) => { e.stopPropagation(); setMode(MODES.CYBER); }}
                                    >
                                        <i className="fas fa-terminal me-2"></i>
                                        <span>&gt; Abrir Consola Linux (CLI)</span>
                                        <i className="fas fa-arrow-right ms-2 arrow-icon"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Gateway 2: Estudio 3D & Simulación WebGL (Creative Mode) */}
                        <div className="col-12 col-lg-6">
                            <div 
                                className="cto-gateway-card gateway-creative"
                                onClick={() => setMode(MODES.CREATIVE)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && setMode(MODES.CREATIVE)}
                            >
                                <div className="gateway-card-header">
                                    <div className="gateway-icon-badge creative">
                                        <i className="fas fa-cube"></i>
                                    </div>
                                    <span className="gateway-target-role">Para Product Managers, UI/UX &amp; Founders</span>
                                </div>

                                <div className="gateway-card-body">
                                    <h3 className="gateway-title creative-text">
                                        Estudio Visual 3D &amp; Catálogo Completo
                                    </h3>
                                    <p className="gateway-desc">
                                        Experiencia interactiva inmersiva con renderizado WebGL 3D, lienzo de partículas en tiempo real, mutación de paletas del avatar y la galería completa de los 18 proyectos.
                                    </p>

                                    <ul className="gateway-feature-list">
                                        <li>
                                            <i className="fas fa-check text-info me-2"></i>
                                            <span>Galería filtrable de los 18 proyectos con métricas de impacto</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check text-info me-2"></i>
                                            <span>Canvas de partículas 3D interactivo acelerado por GPU</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check text-info me-2"></i>
                                            <span>Avatar con animaciones de gafas y mutación de paletas CSS</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="gateway-card-footer">
                                    <button 
                                        className="btn-gateway-action creative-btn"
                                        onClick={(e) => { e.stopPropagation(); setMode(MODES.CREATIVE); }}
                                    >
                                        <i className="fas fa-magic me-2"></i>
                                        <span>✨ Activar Estudio Creativo &amp; 3D</span>
                                        <i className="fas fa-arrow-right ms-2 arrow-icon"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =========================================================================
                 3. FRAMEWORK DE DECISIÓN: 4 FASES DE ANÁLISIS & ARQUITECTURA
                 ========================================================================= */}
            <section id="about" className="cto-about-section">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <span className="section-tag">Metodología &amp; Criterio</span>
                        <h2 className="section-title text-white font-heading">Mi Enfoque de Ingeniería en 4 Fases</h2>
                        <p className="section-subtitle">
                            Proceso estructurado aplicado en cada ciclo de vida del software para garantizar robustez y alineación con el negocio:
                        </p>
                    </div>

                    <div className="row g-4">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="cto-pillar-card">
                                <div className="pillar-icon-box blue">
                                    <i className="fas fa-clipboard-list fa-lg"></i>
                                </div>
                                <h4>01. Relevamiento &amp; Desambiguación</h4>
                                <p>
                                    Entrevistas técnicas, detección de cuellos de botella y especificación precisa de requerimientos funcionales y no funcionales para eliminar incertidumbre.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="cto-pillar-card">
                                <div className="pillar-icon-box green">
                                    <i className="fas fa-sitemap fa-lg"></i>
                                </div>
                                <h4>02. Modelado de Dominio &amp; C4</h4>
                                <p>
                                    Diagramación de arquitectura (C4 Model, BPMN, UML) y esquemas de base de datos relacionales/NoSQL antes de la primera línea de código.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="cto-pillar-card">
                                <div className="pillar-icon-box purple">
                                    <i className="fas fa-code-branch fa-lg"></i>
                                </div>
                                <h4>03. Clean Architecture &amp; Código</h4>
                                <p>
                                    Construcción desacoplada por capas (Dominio, Aplicación, Infraestructura), separación estricta de responsabilidades y tipado defensivo.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="cto-pillar-card">
                                <div className="pillar-icon-box cyan">
                                    <i className="fas fa-shield-alt fa-lg"></i>
                                </div>
                                <h4>04. Trazabilidad &amp; Despliegue</h4>
                                <p>
                                    Documentación técnica reproducible, validación de endpoints y contenedorización en Docker lista para producción y mantenimiento sostenible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================================
                 4. INTERACTIVE SYSTEM BLUEPRINT SHOWCASE (C4 EXPLORER)
                 ========================================================================= */}
            <section id="blueprints" className="cto-blueprints-section">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <span className="section-tag green">Estándar C4 Architecture</span>
                        <h2 className="section-title text-white font-heading">Blueprints &amp; Mapas de Arquitectura</h2>
                        <p className="section-subtitle" style={{ maxWidth: '820px', margin: '0 auto' }}>
                            Documento y diseño software utilizando el <strong>Modelo C4</strong>, un estándar internacional que permite visualizar la arquitectura en 4 niveles progresivos de zoom: desde el contexto de negocio hasta la ejecución del código.
                        </p>
                    </div>

                    {/* C4 Model 4 Zoom Levels Interactive Guide */}
                    <div className="c4-zoom-levels-grid mb-5">
                        <div className="c4-zoom-card">
                            <div className="c4-zoom-header">
                                <span className="c4-zoom-badge">Zoom 1x</span>
                                <i className="fas fa-globe text-primary fa-lg"></i>
                            </div>
                            <h5 className="c4-zoom-title">1. Contexto (Context)</h5>
                            <p className="c4-zoom-desc">
                                Visión global del sistema como una sola caja. Muestra usuarios reales, actores y conexiones con servicios o APIs externas.
                            </p>
                        </div>

                        <div className="c4-zoom-card">
                            <div className="c4-zoom-header">
                                <span className="c4-zoom-badge">Zoom 10x</span>
                                <i className="fas fa-cubes text-success fa-lg"></i>
                            </div>
                            <h5 className="c4-zoom-title">2. Contenedor (Container)</h5>
                            <p className="c4-zoom-desc">
                                Desglose de aplicaciones ejecutables independientes: Frontend SPA, Backend REST API, Microservicios y Bases de Datos.
                            </p>
                        </div>

                        <div className="c4-zoom-card">
                            <div className="c4-zoom-header">
                                <span className="c4-zoom-badge">Zoom 100x</span>
                                <i className="fas fa-layer-group text-warning fa-lg"></i>
                            </div>
                            <h5 className="c4-zoom-title">3. Componente (Component)</h5>
                            <p className="c4-zoom-desc">
                                Módulos internos del contenedor: Controladores, Servicios de Aplicación, Entidades de Dominio y Adaptadores (Clean Architecture).
                            </p>
                        </div>

                        <div className="c4-zoom-card">
                            <div className="c4-zoom-header">
                                <span className="c4-zoom-badge">Zoom 1000x</span>
                                <i className="fas fa-code text-danger fa-lg"></i>
                            </div>
                            <h5 className="c4-zoom-title">4. Código (Code)</h5>
                            <p className="c4-zoom-desc">
                                Implementación detallada: algoritmos, diagramas de clases, contratos de interfaces y mitigación de concurrencia.
                            </p>
                        </div>
                    </div>

                    <div className="blueprint-explorer-divider text-center mb-4">
                        <span className="divider-label">
                            <i className="fas fa-microscope me-2 text-info"></i>
                            Explorador Interactivo de Blueprints de Ejecución
                        </span>
                    </div>

                    <ArchitectureBlueprint />
                </div>
            </section>

            {/* =========================================================================
                 5. STACK TECNOLÓGICO POR DOMINIOS DE INGENIERÍA
                 ========================================================================= */}
            <section className="cto-stack-section">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <span className="section-tag">Capacidades Técnicas</span>
                        <h2 className="section-title text-white font-heading">Stack Tecnológico por Dominios</h2>
                    </div>

                    <div className="row g-4">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="cto-domain-card">
                                <div className="domain-header">
                                    <i className="fas fa-laptop-code text-primary me-2"></i>
                                    <h5>Frontend & UI/UX</h5>
                                </div>
                                <ul className="domain-list">
                                    <li>React 18 / Vite</li>
                                    <li>TypeScript & JavaScript ES6</li>
                                    <li>HTML5 / CSS3 Avanzado</li>
                                    <li>Three.js / WebGL 3D</li>
                                    <li>Bootstrap 5 / Responsive UI</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="cto-domain-card">
                                <div className="domain-header">
                                    <i className="fas fa-server text-success me-2"></i>
                                    <h5>Backend & Microservicios</h5>
                                </div>
                                <ul className="domain-list">
                                    <li>Java 21 / Spring Boot</li>
                                    <li>Python (FastAPI / Flask)</li>
                                    <li>Node.js / Express.js</li>
                                    <li>Arquitectura REST & WebSockets</li>
                                    <li>JWT / Spring Security RBAC</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="cto-domain-card">
                                <div className="domain-header">
                                    <i className="fas fa-database text-warning me-2"></i>
                                    <h5>Datos & Cloud</h5>
                                </div>
                                <ul className="domain-list">
                                    <li>PostgreSQL / MySQL</li>
                                    <li>MongoDB / NoSQL</li>
                                    <li>Docker & Docker Compose</li>
                                    <li>Netlify & Render Deployments</li>
                                    <li>Git & GitHub CI/CD Actions</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="cto-domain-card">
                                <div className="domain-header">
                                    <i className="fas fa-shield-alt text-danger me-2"></i>
                                    <h5>Seguridad &amp; DevOps</h5>
                                </div>
                                <ul className="domain-list">
                                    <li>JWT &amp; Spring Security RBAC</li>
                                    <li>Docker &amp; Docker Compose</li>
                                    <li>Sanitización OWASP (SQLi / XSS)</li>
                                    <li>Linux Bash &amp; Automatización</li>
                                    <li>Git &amp; GitHub Actions CI/CD</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================================
                 6. GOBERNANZA, CI/CD & RIGOR METODOLÓGICO
                 ========================================================================= */}
            <section className="cto-governance-section">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <span className="section-tag amber">Estándar de Calidad</span>
                        <h2 className="section-title text-white font-heading">Gobernanza & Entrega Continua</h2>
                        <p className="section-subtitle">
                            Metodologías que garantizan transferibilidad, rendimiento y cero deuda técnica:
                        </p>
                    </div>

                    <div className="row g-4">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="governance-box">
                                <div className="governance-icon"><i className="fas fa-code-branch"></i></div>
                                <h6>CI/CD Automatizado</h6>
                                <p>Pipelines en GitHub Actions para pruebas unitarias, linting y compilación continua.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="governance-box">
                                <div className="governance-icon"><i className="fab fa-docker"></i></div>
                                <h6>Contenedores Docker</h6>
                                <p>Aislamiento de servicios, dependencias inmutables y entornos reproducibles en 1 comando.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="governance-box">
                                <div className="governance-icon"><i className="fas fa-vial"></i></div>
                                <h6>Testing & Calidad</h6>
                                <p>Pruebas de estrés de alto volumen, validación de endpoints y cobertura estricta de código.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="governance-box">
                                <div className="governance-icon"><i className="fas fa-file-alt"></i></div>
                                <h6>Documentación C4</h6>
                                <p>Diagramas de arquitectura, bitácoras operativas y especificaciones técnicas reproducibles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Zero-Friction Contact Showcase */}
            <ContactShowcase />

        </div>
    );
};

export default CtoModeView;
