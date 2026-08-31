import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { useMagic } from '../context/MagicContext';
import '../styles/bodyhome.css';
import '../styles/avatar.css';
import '../styles/modes.css';

const LayoutContent = ({ children, activeSection }) => {
    const { pathname } = useLocation();
    const { activeConfig, cycleMode } = useMagic();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const isSolutionPage = pathname.startsWith('/solution');

    return (
        <div className="page-layout-root" style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
            <Header activeSection={activeSection} />
            <main className="main-content-wrapper" style={{ position: 'relative', zIndex: 2 }}>
                {children}
            </main>

            {/* Bottom-Right Floating Controls (Circular WhatsApp & Mode Switcher) */}
            <div className="floating-actions-container">
                {/* 1. Mode Switcher (Round Pencil Trigger) - Oculto en páginas de solución */}
                {!isSolutionPage && (
                    <button
                        type="button"
                        className="floating-btn-round floating-btn-mode"
                        onClick={cycleMode}
                        title={`Modo actual: ${activeConfig.name} (Clic para mutar)`}
                        aria-label="Cambiar modo de ingeniería"
                    >
                        <span className="mode-indicator-dot"></span>
                        <i className="fas fa-pencil-alt"></i>
                    </button>
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
