import React, { lazy, Suspense, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { projectsData, getCategoryCounts } from '../../data/projects';
import ProjectFilterTabs from '../projects/ProjectFilterTabs';
import ProjectCard from '../projects/ProjectCard';
import ContactShowcase from '../contact/ContactShowcase';
import Avatar from '../Avatar';

// Lazy load the 3D Particle Canvas so initial bundle is ultra-lightweight
const LazyParticleCanvas = lazy(() => import('../canvas3d/ParticleCanvas'));

const AVATAR_PALETTES = [
    { name: 'Violeta Cósmico', color: '#a855f7', gradient: 'conic-gradient(from 0deg, #a855f7, #c084fc, #ec4899, #a855f7)' },
    { name: 'Cian Eléctrico', color: '#00f2fe', gradient: 'conic-gradient(from 0deg, #00f2fe, #38bdf8, #3b82f6, #00f2fe)' },
    { name: 'Rosa Neón & Fucsia', color: '#ec4899', gradient: 'conic-gradient(from 0deg, #ec4899, #f472b6, #8b5cf6, #ec4899)' },
    { name: 'Verde Cyber', color: '#10b981', gradient: 'conic-gradient(from 0deg, #10b981, #34d399, #059669, #10b981)' },
    { name: 'Oro & Fuego', color: '#f59e0b', gradient: 'conic-gradient(from 0deg, #f59e0b, #fbbf24, #ef4444, #f59e0b)' },
    { name: 'Rojo Carmesí', color: '#ef4444', gradient: 'conic-gradient(from 0deg, #ef4444, #f87171, #f59e0b, #ef4444)' }
];

const CreativeModeView = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [paletteIndex, setPaletteIndex] = useState(0);
    const counts = getCategoryCounts(projectsData);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    const activePalette = AVATAR_PALETTES[paletteIndex];

    const handleAvatarClick = () => {
        setPaletteIndex((prev) => (prev + 1) % AVATAR_PALETTES.length);
        confetti({
            particleCount: 35,
            spread: 60,
            origin: { y: 0.35 }
        });
    };

    const filteredProjects = (selectedCategory === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === selectedCategory)
    ).slice().sort((a, b) => {
        const aAvailable = Boolean(a.website);
        const bAvailable = Boolean(b.website);
        if (aAvailable && !bAvailable) return -1;
        if (!aAvailable && bAvailable) return 1;
        return (a.tier || 3) - (b.tier || 3);
    });

    return (
        <div className="creative-mode-view" style={{ position: 'relative', minHeight: '100vh' }}>
            {/* Background 3D Engine */}
            <Suspense fallback={null}>
                <LazyParticleCanvas />
            </Suspense>

            {/* Foreground Content Layer (guaranteed on top of canvas) */}
            <div className="creative-foreground-content" style={{ position: 'relative', zIndex: 5 }}>
                
                {/* Creative Hero (First Scroll: Intro & CTAs | Second Scroll on Mobile: Interactive Character) */}
                <section id="home" className="creative-hero-section">
                    <div className="container-fluid px-3 px-xl-5">
                        <div className="row align-items-center justify-content-between g-3 g-xl-4 creative-panoramic-row">
                            
                            {/* Columna 1 (Izquierda): Pitch & Llamada a la Acción */}
                            <div className="col-12 col-lg-5 text-center text-lg-start creative-hero-left-col">
                                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3 mx-auto mx-lg-0" style={{ background: 'rgba(139, 92, 246, 0.2)', border: '1px solid rgba(139, 92, 246, 0.5)' }}>
                                    <span className="pulse-indicator" style={{ background: '#a78bfa', boxShadow: '0 0 10px #a78bfa' }}></span>
                                    <span style={{ color: '#e9d5ff', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600 }}>
                                        ✨ MODO CREATIVE UI & 3D WEBGL ENGINE
                                    </span>
                                </div>

                                <h1 className="creative-hero-title font-heading" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.8)' }}>
                                    Diseño de Interfaces & <span style={{ background: 'linear-gradient(135deg, #c4b5fd 0%, #60a5fa 50%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>Experiencias 3D</span>
                                </h1>

                                <p className="creative-hero-lead mx-auto mx-lg-0" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
                                    Exploración visual con aceleración gráfica en el navegador, micro-interacciones cinematográficas y arquitecturas de frontend modernas en React 18.
                                </p>

                                <div className="creative-cta-group d-flex align-items-center justify-content-center justify-content-lg-start gap-3 flex-wrap mt-2">
                                    <a href="#portfolio" className="btn btn-primary px-4 py-3 fw-bold" style={{ background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', border: 'none', borderRadius: '14px', boxShadow: '0 8px 30px rgba(139, 92, 246, 0.4)' }}>
                                        <i className="fas fa-cubes me-2"></i>
                                        Ver Proyectos 3D & Web
                                    </a>
                                    <a 
                                        href="#contact" 
                                        className="btn px-4 py-3 fw-bold creative-conversation-btn"
                                        style={{ 
                                            borderRadius: '14px',
                                            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.25) 0%, rgba(139, 92, 246, 0.3) 100%)',
                                            border: '2px solid #ec4899',
                                            color: '#ffffff',
                                            boxShadow: '0 0 25px rgba(236, 72, 153, 0.4)',
                                            backdropFilter: 'blur(10px)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <i className="fas fa-paper-plane me-2 text-warning"></i>
                                        Iniciar Conversación
                                    </a>
                                </div>
                            </div>

                            {/* Columna 2 (Centro): Avatar Interactivo con Halo */}
                            <div id="about" className="col-12 col-md-6 col-lg-3 text-center creative-avatar-col">
                                <div 
                                    className="cto-avatar-frame active-css-mode"
                                    onClick={handleAvatarClick}
                                    style={{
                                        '--primary-color': activePalette.color,
                                        '--avatar-accent-color': activePalette.color,
                                        '--dynamic-aura': activePalette.gradient,
                                        cursor: 'pointer'
                                    }}
                                    title="Haz clic para cambiar la paleta de color y disparar confeti"
                                >
                                    <div className="cto-avatar-hint-pill" style={{ borderColor: activePalette.color }}>
                                        <i className="fas fa-palette me-1" style={{ color: activePalette.color }}></i>
                                        {`PALETA: ${activePalette.name} (toca para cambiar)`}
                                    </div>

                                    <div className="cto-avatar-content-wrap" style={{ borderColor: activePalette.color }}>
                                        <Avatar colorIndex={paletteIndex} />
                                    </div>

                                    <div className="cto-avatar-badge" style={{ borderColor: activePalette.color }}>
                                        <span className="badge-role">Creative Frontend & 3D UI</span>
                                    </div>
                                </div>
                            </div>

                            {/* Columna 3 (Derecha): Controlador / Dock Compacto de Paletas y Métricas */}
                            <div className="col-12 col-md-6 col-lg-4 creative-dock-col">
                                <div className="creative-avatar-dock-card">
                                    {/* 1. Selector de 6 Paletas */}
                                    <div className="dock-swatches-header d-flex align-items-center justify-content-between mb-2">
                                        <span className="dock-swatches-title">
                                            <i className="fas fa-palette me-1 text-warning"></i> Selector de Paletas
                                        </span>
                                        <span className="dock-active-palette-name" style={{ color: activePalette.color }}>
                                            {activePalette.name}
                                        </span>
                                    </div>

                                    <div className="dock-swatches-row mb-2">
                                        {AVATAR_PALETTES.map((palette, idx) => (
                                            <button
                                                key={palette.name}
                                                type="button"
                                                className={`dock-swatch-btn ${paletteIndex === idx ? 'active' : ''}`}
                                                style={{
                                                    '--swatch-color': palette.color
                                                }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setPaletteIndex(idx);
                                                    confetti({ particleCount: 30, spread: 55, origin: { y: 0.4 } });
                                                }}
                                                title={`Cambiar a paleta ${palette.name}`}
                                            >
                                                <span className="swatch-circle" style={{ background: palette.color }}></span>
                                            </button>
                                        ))}
                                    </div>

                                    {/* 2. Mini-Grilla de 3 Píldoras Métricas */}
                                    <div className="dock-metrics-grid mb-2">
                                        <div className="dock-metric-item">
                                            <span className="metric-icon"><i className="fas fa-cubes text-primary"></i></span>
                                            <div className="metric-info">
                                                <strong>18 Proyectos</strong>
                                                <small>Catálogo dinámico</small>
                                            </div>
                                        </div>
                                        <div className="dock-metric-item">
                                            <span className="metric-icon"><i className="fas fa-atom text-info"></i></span>
                                            <div className="metric-info">
                                                <strong>WebGL 3D</strong>
                                                <small>Aceleración GPU</small>
                                            </div>
                                        </div>
                                        <div className="dock-metric-item">
                                            <span className="metric-icon"><i className="fas fa-vector-square text-success"></i></span>
                                            <div className="metric-info">
                                                <strong>CSS 2.5D</strong>
                                                <small>Rigging vectorial</small>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 3. Badges de Especialidad */}
                                    <div className="dock-tech-badges mb-2">
                                        <span className="dock-badge"><i className="fas fa-brush me-1 text-warning"></i> 100% Pure CSS Art</span>
                                        <span className="dock-badge"><i className="fas fa-bolt me-1 text-info"></i> React 18 Sync</span>
                                        <span className="dock-badge"><i className="fas fa-tachometer-alt me-1 text-success"></i> 60 FPS</span>
                                    </div>

                                    <p className="dock-caption mb-0">
                                        Personaje vectorial interactivo programado con propiedades personalizadas de CSS y animación procedural.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                        </div>
                    </div>
                </section>

                {/* Creative Projects Showcase (With Generous Vertical Spacing) */}
                <section id="portfolio" className="creative-projects-section" style={{ paddingTop: '5rem', paddingBottom: '6rem' }}>
                    <div className="container">
                        <div className="text-center mb-4">
                            <span className="section-tag" style={{ color: '#c4b5fd', borderColor: 'rgba(139, 92, 246, 0.4)', background: 'rgba(139, 92, 246, 0.15)', fontSize: '0.85rem', padding: '0.35rem 1.1rem' }}>
                                ✨ Galería Interactiva
                            </span>
                            <h2 className="display-5 fw-bold text-white mb-2 font-heading" style={{ marginTop: '0.8rem' }}>Catálogo de 18 Proyectos</h2>
                            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', maxWidth: '650px', margin: '0 auto 0.75rem auto' }}>
                                Filtra por dominio técnico y explora los casos de estudio en vivo.
                            </p>

                            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mt-1" style={{ background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.35)', color: '#fbbf24', fontSize: '0.78rem' }}>
                                <i className="fas fa-key"></i>
                                <span>Para acceder a proyectos confidenciales o documentación interna completa, contáctame directamente.</span>
                            </div>
                        </div>

                        <ProjectFilterTabs
                            activeCategory={selectedCategory}
                            onSelectCategory={setSelectedCategory}
                            counts={counts}
                        />

                        <div className="row g-4 justify-content-center">
                            {filteredProjects.map((project) => (
                                <div key={project.id} className="col-12 col-md-6 col-lg-4">
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Showcase */}
                <ContactShowcase />

            </div>
        </div>
    );
};

export default CreativeModeView;
