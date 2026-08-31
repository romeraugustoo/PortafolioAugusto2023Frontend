import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { useMagic } from '../context/MagicContext';
import Swal from 'sweetalert2';
import '../styles/bodyhome.css';
import '../styles/avatar.css';
import '../styles/modes.css';

const LayoutContent = ({ children, activeSection }) => {
    const { pathname } = useLocation();
    const { activeConfig, cycleMode, setMode, MODES } = useMagic();
    const [showModeTooltip, setShowModeTooltip] = useState(false);
    const tooltipTimerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const isSolutionPage = pathname.startsWith('/solution');

    // Scroll listener para activar el tooltip al llegar a la sección de Metamorfosis
    useEffect(() => {
        if (isSolutionPage) return;
        if (localStorage.getItem('mode_tooltip_dismissed') === 'true') return;

        const checkScrollPosition = () => {
            const metamorfosisEl = document.getElementById('portfolio') || document.querySelector('.cto-gateways-section, .creative-projects-section');
            if (!metamorfosisEl) return;

            const rect = metamorfosisEl.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Se activa cuando la sección de metamorfosis está a la vista en pantalla
            if (rect.top <= windowHeight * 0.65 && rect.bottom >= windowHeight * 0.2) {
                setShowModeTooltip(true);
                // Auto ocultar tras 8.5 segundos si no se interactúa
                if (!tooltipTimerRef.current) {
                    tooltipTimerRef.current = setTimeout(() => {
                        setShowModeTooltip(false);
                        localStorage.setItem('mode_tooltip_dismissed', 'true');
                    }, 8500);
                }
            }
        };

        window.addEventListener('scroll', checkScrollPosition, { passive: true });
        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
            if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
        };
    }, [isSolutionPage]);

    const openModeOnboardingModal = () => {
        Swal.fire({
            title: '🔮 Metamorfosis de Experiencia',
            html: `
                <p class="swal-onboarding-desc">
                    Este portafolio cuenta con <strong>3 interfaces completas</strong>. Selecciona cómo deseas explorar mis proyectos y sistemas:
                </p>
                <div class="swal-mode-grid">
                    <button type="button" class="swal-mode-card card-cto" id="btn-onboarding-cto">
                        <div class="swal-mode-icon"><i class="fas fa-briefcase"></i></div>
                        <div class="swal-mode-text">
                            <strong>👔 Modo CTO &amp; Arquitecto SaaS</strong>
                            <span>Métricas de impacto, C4 Model Explorer, Gobernanza y Metodología.</span>
                        </div>
                        <i class="fas fa-arrow-right swal-mode-arrow"></i>
                    </button>
                    <button type="button" class="swal-mode-card card-cyber" id="btn-onboarding-cyber">
                        <div class="swal-mode-icon"><i class="fas fa-terminal"></i></div>
                        <div class="swal-mode-text">
                            <strong>💻 Consola Linux &amp; Kernel Telemetry</strong>
                            <span>Telemetría de bajo nivel en tiempo real (Bypass MT6765) y comandos shell.</span>
                        </div>
                        <i class="fas fa-arrow-right swal-mode-arrow"></i>
                    </button>
                    <button type="button" class="swal-mode-card card-creative" id="btn-onboarding-creative">
                        <div class="swal-mode-icon"><i class="fas fa-cube"></i></div>
                        <div class="swal-mode-text">
                            <strong>✨ Estudio 3D &amp; WebGL Canvas</strong>
                            <span>Simulación física interactiva, avatar 2.5D y galería dinámica de 18 proyectos.</span>
                        </div>
                        <i class="fas fa-arrow-right swal-mode-arrow"></i>
                    </button>
                </div>
            `,
            showConfirmButton: false,
            showCloseButton: true,
            customClass: {
                popup: 'swal-mode-onboarding-popup'
            },
            didOpen: () => {
                const selectMode = (m) => {
                    localStorage.setItem('mode_onboarding_seen', 'true');
                    setMode(m);
                    Swal.close();
                };
                document.getElementById('btn-onboarding-cto')?.addEventListener('click', () => selectMode(MODES.CTO));
                document.getElementById('btn-onboarding-cyber')?.addEventListener('click', () => selectMode(MODES.CYBER));
                document.getElementById('btn-onboarding-creative')?.addEventListener('click', () => selectMode(MODES.CREATIVE));
            }
        });
    };

    const handleModeButtonClick = () => {
        setShowModeTooltip(false);
        localStorage.setItem('mode_tooltip_dismissed', 'true');
        if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);

        const hasSeenOnboarding = localStorage.getItem('mode_onboarding_seen') === 'true';
        if (!hasSeenOnboarding) {
            openModeOnboardingModal();
        } else {
            cycleMode();
        }
    };

    return (
        <div className="page-layout-root" style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
            <Header activeSection={activeSection} />
            <main className="main-content-wrapper" style={{ position: 'relative', zIndex: 2 }}>
                {children}
            </main>

            {/* Bottom-Right Floating Controls (Circular WhatsApp & Mode Switcher) */}
            <div className="floating-actions-container">
                {/* 1. Mode Switcher & Animated Speech Bubble Tooltip */}
                {!isSolutionPage && (
                    <div className="floating-mode-wrapper">
                        {showModeTooltip && (
                            <div className="floating-mode-tooltip" role="tooltip">
                                <div className="tooltip-inner-content">
                                    <span className="tooltip-pill-badge">✨ Metamorfosis</span>
                                    <p className="tooltip-msg">
                                        ¡Cambia de modo aquí! Explora en <strong>Modo CTO</strong>, <strong>Consola Linux</strong> o <strong>3D</strong> 👈
                                    </p>
                                </div>
                                <button 
                                    type="button" 
                                    className="btn-close-tooltip" 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowModeTooltip(false);
                                        localStorage.setItem('mode_tooltip_dismissed', 'true');
                                        if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
                                    }}
                                    aria-label="Cerrar sugerencia"
                                    title="Cerrar"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                                <span className="tooltip-speech-tail"></span>
                            </div>
                        )}

                        <button
                            type="button"
                            className={`floating-btn-round floating-btn-mode ${showModeTooltip ? 'pulse-attention' : ''}`}
                            onClick={handleModeButtonClick}
                            title={`Modo actual: ${activeConfig.name} (Clic para cambiar de experiencia)`}
                            aria-label="Cambiar modo de ingeniería"
                        >
                            <span className="mode-indicator-dot"></span>
                            <i className="fas fa-pencil-alt"></i>
                        </button>
                    </div>
                )}

                {/* 2. WhatsApp Circular Button (Icon Only, No Text) */}
                <a 
                    href="https://wa.me/5493865204411?text=Hola%20Augusto,%20estuve%20viendo%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="floating-btn-round floating-btn-wsp"
                    title="Escribir directamente por WhatsApp"
                    aria-label="Contactar por WhatsApp"
                >
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    );
};

const PageLayout = ({ children, activeSection }) => {
    return (
        <LayoutContent activeSection={activeSection}>
            {children}
        </LayoutContent>
    );
};

export default PageLayout;
