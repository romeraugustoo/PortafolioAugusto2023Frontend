import React, { Suspense, lazy } from 'react';
import { useMagic } from '../context/MagicContext';
import CtoModeView from './modes/CtoModeView';

// Code-splitting de modos secundarios para aligerar la carga inicial en móviles
const CyberModeView = lazy(() => import('./modes/CyberModeView'));
const CreativeModeView = lazy(() => import('./modes/CreativeModeView'));

const BodyHome = () => {
    const { currentMode, MODES } = useMagic();
    const currentYear = new Date().getFullYear();

    return (
        <div className="portfolio-metamorfo-wrapper">
            
            {/* Render the Active Engineering Archetype */}
            <Suspense fallback={<div className="min-vh-100 d-flex justify-content-center align-items-center" />}>
                {currentMode === MODES.CYBER ? (
                    <CyberModeView />
                ) : currentMode === MODES.CREATIVE ? (
                    <CreativeModeView />
                ) : (
                    <CtoModeView />
                )}
            </Suspense>

            {/* Global Footer Copyright (Present in both CTO and Creative 3D modes) */}
            {currentMode !== MODES.CYBER && (
                <footer className="portfolio-global-footer text-center py-4 border-top">
                    <div className="container">
                        <p className="footer-copyright-text mb-0">
                            © {currentYear} Augusto Romera · Desarrollador Web &amp; Analista Funcional
                        </p>
                    </div>
                </footer>
            )}

        </div>
    );
};

export default BodyHome;
