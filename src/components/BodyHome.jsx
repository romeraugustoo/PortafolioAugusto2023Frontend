import React from 'react';
import { useMagic } from '../context/MagicContext';
import CtoModeView from './modes/CtoModeView';
import CyberModeView from './modes/CyberModeView';
import CreativeModeView from './modes/CreativeModeView';

const BodyHome = () => {
    const { currentMode, MODES } = useMagic();
    const currentYear = new Date().getFullYear();

    return (
        <div className="portfolio-metamorfo-wrapper">
            
            {/* Render the Active Engineering Archetype */}
            {currentMode === MODES.CYBER ? (
                <CyberModeView />
            ) : currentMode === MODES.CREATIVE ? (
                <CreativeModeView />
            ) : (
                <CtoModeView />
            )}

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
