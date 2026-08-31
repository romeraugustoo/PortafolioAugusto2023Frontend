import React, { createContext, useState, useContext, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Swal from 'sweetalert2';
import { MODES, MODES_CONFIG } from '../data/modes';

const MagicContext = createContext();

export const MagicProvider = ({ children }) => {
    const [currentMode, setCurrentMode] = useState(() => {
        const saved = localStorage.getItem('portfolio_mode');
        return (saved && MODES_CONFIG[saved]) ? saved : MODES.CTO;
    });

    const activeConfig = MODES_CONFIG[currentMode] || MODES_CONFIG[MODES.CTO];

    const cycleMode = (targetMode) => {
        let nextMode;
        if (targetMode && MODES_CONFIG[targetMode]) {
            nextMode = targetMode;
        } else {
            if (currentMode === MODES.CTO) nextMode = MODES.CYBER;
            else if (currentMode === MODES.CYBER) nextMode = MODES.CREATIVE;
            else nextMode = MODES.CTO;
        }

        setCurrentMode(nextMode);
        localStorage.setItem('portfolio_mode', nextMode);
        localStorage.setItem('mode_tooltip_dismissed', 'true');

        // Garantizar que la nueva vista comience siempre en el Hero superior
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        if (window.location.hash) {
            try {
                window.history.replaceState(null, '', window.location.pathname + window.location.search);
            } catch (e) {
                // Ignore fallback
            }
        }

        const nextConfig = MODES_CONFIG[nextMode];

        // Confetti explosion with mode colors
        confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.88, x: 0.92 },
            colors: nextConfig.particleColors
        });

        // Toast notification
        Swal.fire({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2200,
            timerProgressBar: true,
            backdrop: false,
            title: nextConfig.badge,
            text: nextConfig.subtitle,
            background: '#0e121a',
            color: '#f8fafc',
            iconColor: nextConfig.colors.primary,
            customClass: {
                popup: 'swal-magic-toast'
            }
        });
    };

    useEffect(() => {
        const root = document.documentElement;
        root.dataset.portfolioMode = currentMode;

        const colors = activeConfig.colors;
        root.style.setProperty('--primary-color', colors.primary);
        root.style.setProperty('--secondary-color', colors.secondary);
        root.style.setProperty('--bg-dark', colors.bg);
        root.style.setProperty('--text-dark', colors.text);

        // Dinámicamente actualizar el favicon SVG de la pestaña según el modo activo
        const faviconLink = document.getElementById('dynamic-favicon');
        if (faviconLink) {
            if (currentMode === MODES.CYBER) {
                faviconLink.href = '/favicon-cyber.svg';
            } else if (currentMode === MODES.CREATIVE) {
                faviconLink.href = '/favicon-creative.svg';
            } else {
                faviconLink.href = '/favicon.svg';
            }
        }
    }, [currentMode, activeConfig]);

    return (
        <MagicContext.Provider value={{
            currentMode,
            activeConfig,
            setMode: (mode) => cycleMode(mode),
            cycleMode: () => cycleMode(),
            MODES
        }}>
            {children}
        </MagicContext.Provider>
    );
};

export const useMagic = () => useContext(MagicContext);
