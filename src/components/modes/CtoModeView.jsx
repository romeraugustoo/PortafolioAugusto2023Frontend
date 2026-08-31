import React, { Suspense, lazy } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useMagic } from '../../context/MagicContext';
import profileImg from '../../assets/images/profile/profile-augusto.webp';

const ContactShowcase = lazy(() => import('../contact/ContactShowcase'));
const ArchitectureBlueprint = lazy(() => import('../architecture/ArchitectureBlueprint'));

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

                            <div className="cto-hero-cta-group d-flex align-items-center gap-3 flex-wrap mb-4">
                                <ScrollLink 
                                    to="blueprints" 
                                    smooth="easeInOutCubic" 
                                    offset={-60} 
                                    duration={600} 
                                    className="btn btn-cta-blueprints px-4 py-2 fw-bold"
                                    role="button"
                                >
                                    <i className="fas fa-project-diagram me-2"></i>
                                    Explorar Blueprints
                                </ScrollLink>
                                <ScrollLink 
                                    to="contact" 
                                    smooth="easeInOutCubic" 
                                    offset={-60} 
                                    duration={600} 
                                    className="btn btn-cta-cv-matte px-4 py-2 fw-bold"
                                    title="Ver y Descargar Curriculum Vitae en PDF"
                                    role="button"
                                >
                                    <i className="fas fa-file-pdf me-2 text-danger"></i>
                                    Descargar CV
                                </ScrollLink>
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

                        {/* Desktop Avatar Column */}
                        <div className="col-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center">
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
                    
                    {/* Compact Profile Avatar on Mobile Screen 2 */}
                    <div className="d-lg-none text-center mb-3">
                        <div className="cto-avatar-frame compact-mobile-frame mx-auto">
                            <div className="cto-avatar-content-wrap">
                                <img src={profileImg} alt="Augusto Romera" className="cto-profile-image" />
                            </div>
                            <div className="cto-avatar-badge">
                                <span className="badge-role">Desarrollador de Software &amp; Analista Funcional</span>
                            </div>
                        </div>
                    </div>

                    <div className="section-header text-center mb-3 mb-md-5">
                        <span className="section-tag">Metamorfosis de Experiencia</span>
                        <h2 className="section-title text-white font-heading">Exploración de Proyectos &amp; Sistemas</h2>
                        <p className="section-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
                            ¿Cómo te gustaría explorar mis proyectos? Te propongo dos formas creativas de continuar:
                        </p>
                    </div>

                    <div className="row g-2 g-md-4 justify-content-center cto-gateways-row">
                        
                        {/* Gateway 1: Consola Linux (Cyber Mode) */}
                        <div className="col-6">
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
                                    <span className="gateway-target-role">Tech Leads &amp; Linux</span>
                                </div>

                                <div className="gateway-card-body">
                                    <h3 className="gateway-title cyber-text">
                                        Consola Linux &amp; Kernel Telemetry
                                    </h3>
                                    <p className="gateway-desc">
                                        Terminal interactiva POSIX Shell. Simulación de comandos y telemetría de bajo nivel (Bypass MT6765 / Little Kernel).
                                    </p>

                                    <ul className="gateway-feature-list">
                                        <li>
                                            <i className="fas fa-check text-success me-2"></i>
                                            <span>Simulación shell (<code>/help</code>, <code>/audit</code>)</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check text-success me-2"></i>
                                            <span>Recreación de bitácoras y criptoanálisis</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check text-success me-2"></i>
                                            <span>Telemetría simulada ARM64</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="gateway-card-footer">
                                    <button 
                                        className="btn-gateway-action cyber-btn"
                                        onClick={(e) => { e.stopPropagation(); setMode(MODES.CYBER); }}
                                    >
                                        <i className="fas fa-terminal me-1"></i>
                                        <span>Abrir Consola</span>
                                        <i className="fas fa-arrow-right ms-1 arrow-icon"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Gateway 2: Estudio 3D & Simulación WebGL (Creative Mode) */}
                        <div className="col-6">
                            <div 
                                className="cto-gateway-card gateway-creative"
                                onClick={() => setMode(MODES.CREATIVE)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && setMode(MODES.CREATIVE)}
                            >
                                <div className="gateway-card-header">
                                    <div className="gateway-icon-badge creative">
                                        <i className="fas fa-magic"></i>
                                    </div>
                                    <span className="gateway-target-role">Founders &amp; UI/UX</span>
                                </div>

                                <div className="gateway-card-body">
                                    <h3 className="gateway-title creative-text">
                                        Estudio Visual 3D &amp; Catálogo
                                    </h3>
                                    <p className="gateway-desc">
                                        Experiencia WebGL 3D inmersiva con partículas en tiempo real, mutación de avatar y catálogo de 18 proyectos.
                                    </p>

                                    <ul className="gateway-feature-list">
                                        <li>
                                            <i className="fas fa-check text-info me-2"></i>
                                            <span>18 proyectos filtrables con métricas</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check text-info me-2"></i>
                                            <span>Canvas de partículas 3D WebGL</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check text-info me-2"></i>
                                            <span>Avatar con mutación de paletas</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="gateway-card-footer">
                                    <button 
                                        className="btn-gateway-action creative-btn"
                                        onClick={(e) => { e.stopPropagation(); setMode(MODES.CREATIVE); }}
                                    >
                                        <span>✨ Abrir Estudio 3D</span>
                                        <i className="fas fa-arrow-right ms-1 arrow-icon"></i>
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
                    <div className="section-header text-center mb-4 mb-md-5">
                        <span className="section-tag">Metodología &amp; Criterio</span>
                        <h2 className="section-title text-white font-heading">Mi Enfoque de Ingeniería en 4 Fases</h2>
                        <p className="section-subtitle">
                            Proceso estructurado aplicado en cada ciclo de vida del software para garantizar robustez y alineación con el negocio:
                        </p>
                    </div>

                    <div className="row g-2 g-md-4">
                        <div className="col-6 col-lg-3">
                            <div className="cto-pillar-card">
                                <div className="pillar-icon-box blue">
                                    <i className="fas fa-clipboard-list"></i>
                                </div>
                                <h4>01. Relevamiento</h4>
                                <p>
                                    Entrevistas técnicas y especificación precisa de requerimientos funcionales para eliminar incertidumbre.
                                </p>
                            </div>
                        </div>

                        <div className="col-6 col-lg-3">
                            <div className="cto-pillar-card">
                                <div className="pillar-icon-box green">
                                    <i className="fas fa-sitemap"></i>
                                </div>
                                <h4>02. Modelado C4</h4>
                                <p>
                                    Diagramación de arquitectura (C4 Model, UML) y esquemas relacionales/NoSQL antes de programar.
                                </p>
                            </div>
                        </div>

                        <div className="col-6 col-lg-3">
                            <div className="cto-pillar-card">
                                <div className="pillar-icon-box purple">
                                    <i className="fas fa-code-branch"></i>
                                </div>
                                <h4>03. Clean Code</h4>
                                <p>
                                    Construcción desacoplada por capas (Dominio, Aplicación, Infraestructura) y tipado defensivo.
                                </p>
                            </div>
                        </div>

                        <div className="col-6 col-lg-3">
                            <div className="cto-pillar-card">
                                <div className="pillar-icon-box cyan">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <h4>04. Despliegue</h4>
                                <p>
                                    Documentación técnica, validación de endpoints y contenedorización Docker para producción.
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
                    <div className="section-header text-center mb-4 mb-md-5">
                        <span className="section-tag green">Estándar C4 Architecture</span>
                        <h2 className="section-title text-white font-heading">Blueprints &amp; Mapas de Arquitectura</h2>
                        <p className="section-subtitle" style={{ maxWidth: '820px', margin: '0 auto' }}>
                            Documento y diseño software utilizando el <strong>Modelo C4</strong>, un estándar internacional que permite visualizar la arquitectura en 4 niveles progresivos de zoom: desde el contexto de negocio hasta la ejecución del código.
                        </p>
                    </div>

                    {/* C4 Model 4 Zoom Levels Interactive Guide */}
                    <div className="c4-zoom-levels-grid mb-4 mb-md-5">
                        <div className="c4-zoom-card">
                            <div className="c4-zoom-header">
                                <span className="c4-zoom-badge">Zoom 1x</span>
                                <i className="fas fa-globe text-primary"></i>
                            </div>
                            <h5 className="c4-zoom-title">1. Contexto</h5>
                            <p className="c4-zoom-desc">
                                Visión global del sistema, usuarios y conexiones con servicios externos.
                            </p>
                        </div>

                        <div className="c4-zoom-card">
                            <div className="c4-zoom-header">
                                <span className="c4-zoom-badge">Zoom 10x</span>
                                <i className="fas fa-cubes text-success"></i>
                            </div>
                            <h5 className="c4-zoom-title">2. Contenedor</h5>
                            <p className="c4-zoom-desc">
                                Aplicaciones independientes: Frontend SPA, REST API y Bases de Datos.
                            </p>
                        </div>

                        <div className="c4-zoom-card">
                            <div className="c4-zoom-header">
                                <span className="c4-zoom-badge">Zoom 100x</span>
                                <i className="fas fa-layer-group text-warning"></i>
                            </div>
                            <h5 className="c4-zoom-title">3. Componente</h5>
                            <p className="c4-zoom-desc">
                                Módulos internos: Controladores, Servicios de Dominio y Adaptadores.
                            </p>
                        </div>

                        <div className="c4-zoom-card">
                            <div className="c4-zoom-header">
                                <span className="c4-zoom-badge">Zoom 1000x</span>
                                <i className="fas fa-code text-danger"></i>
                            </div>
                            <h5 className="c4-zoom-title">4. Código</h5>
                            <p className="c4-zoom-desc">
                                Clases, contratos de interfaces y mitigación de concurrencia.
                            </p>
                        </div>
                    </div>

                    <div className="blueprint-explorer-divider text-center mb-3 mb-md-4">
                        <span className="divider-label">
                            <i className="fas fa-microscope me-2 text-info"></i>
                            Explorador Interactivo de Blueprints de Ejecución
                        </span>
                    </div>

                    <Suspense fallback={<div className="py-4 text-center" />}>
                        <ArchitectureBlueprint />
                    </Suspense>
                </div>
            </section>

            {/* =========================================================================
                 5. STACK TECNOLÓGICO POR DOMINIOS DE INGENIERÍA
                 ========================================================================= */}
            <section className="cto-stack-section">
                <div className="container">
                    <div className="section-header text-center mb-4 mb-md-5">
                        <span className="section-tag">Capacidades Técnicas</span>
                        <h2 className="section-title text-white font-heading">Stack Tecnológico por Dominios</h2>
                    </div>

                    <div className="row g-2 g-md-4">
                        <div className="col-6 col-lg-3">
                            <div className="cto-domain-card">
                                <div className="domain-header">
                                    <i className="fas fa-laptop-code text-primary me-2"></i>
                                    <h5>Frontend &amp; UI</h5>
                                </div>
                                <ul className="domain-list">
                                    <li>React 18 / Vite</li>
                                    <li>TypeScript / ES6</li>
                                    <li>HTML5 / CSS3</li>
                                    <li>Three.js / WebGL</li>
                                    <li>Bootstrap 5</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-6 col-lg-3">
                            <div className="cto-domain-card">
                                <div className="domain-header">
                                    <i className="fas fa-server text-success me-2"></i>
                                    <h5>Backend API</h5>
                                </div>
                                <ul className="domain-list">
                                    <li>Java / Spring Boot</li>
                                    <li>Python (FastAPI)</li>
                                    <li>Node.js / Express</li>
                                    <li>REST &amp; WebSockets</li>
                                    <li>JWT &amp; Security</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-6 col-lg-3">
                            <div className="cto-domain-card">
                                <div className="domain-header">
                                    <i className="fas fa-database text-warning me-2"></i>
                                    <h5>Datos &amp; DB</h5>
                                </div>
                                <ul className="domain-list">
                                    <li>PostgreSQL / MySQL</li>
                                    <li>MongoDB / NoSQL</li>
                                    <li>Docker Compose</li>
                                    <li>Cloud Deployments</li>
                                    <li>CI/CD GitHub</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-6 col-lg-3">
                            <div className="cto-domain-card">
                                <div className="domain-header">
                                    <i className="fas fa-shield-alt text-danger me-2"></i>
                                    <h5>DevOps &amp; Sec</h5>
                                </div>
                                <ul className="domain-list">
                                    <li>Spring Security</li>
                                    <li>Docker Containers</li>
                                    <li>OWASP Standards</li>
                                    <li>Linux Bash Shell</li>
                                    <li>CI/CD Pipelines</li>
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
                    <div className="section-header text-center mb-4 mb-md-5">
                        <span className="section-tag amber">Estándar de Calidad</span>
                        <h2 className="section-title text-white font-heading">Gobernanza &amp; Entrega Continua</h2>
                        <p className="section-subtitle">
                            Metodologías que garantizan transferibilidad, rendimiento y cero deuda técnica:
                        </p>
                    </div>

                    <div className="row g-2 g-md-4">
                        <div className="col-6 col-lg-3">
                            <div className="governance-box">
                                <div className="governance-icon"><i className="fas fa-code-branch"></i></div>
                                <h6>CI/CD Automatizado</h6>
                                <p>GitHub Actions para pruebas, linting y build continuo.</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="governance-box">
                                <div className="governance-icon"><i className="fab fa-docker"></i></div>
                                <h6>Docker Containers</h6>
                                <p>Aislamiento y entornos reproducibles en 1 comando.</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="governance-box">
                                <div className="governance-icon"><i className="fas fa-vial"></i></div>
                                <h6>Testing &amp; Calidad</h6>
                                <p>Validación de endpoints y cobertura estricta de código.</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="governance-box">
                                <div className="governance-icon"><i className="fas fa-file-alt"></i></div>
                                <h6>Documentación C4</h6>
                                <p>Diagramas de arquitectura y especificaciones reproducibles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Zero-Friction Contact Showcase */}
            <Suspense fallback={<div className="py-5 text-center" />}>
                <ContactShowcase />
            </Suspense>

        </div>
    );
};

export default CtoModeView;
