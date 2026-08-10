import React, { createContext, useState, useContext, useEffect } from 'react';
import { themes } from '../data/themes';
import { useTheme } from './ThemeContext';
import confetti from 'canvas-confetti';
import Swal from 'sweetalert2';

const MagicContext = createContext();

export const MagicProvider = ({ children }) => {
    // -2: Real Image
    // -1: Avatar (Gold / Default)
    // 0 to themes.length - 1: Theme Palettes
    const [themeIndex, setThemeIndex] = useState(() => {
        const savedIndex = localStorage.getItem('themeIndex');
        return (savedIndex !== null && savedIndex !== undefined) ? parseInt(savedIndex, 10) : -1;
    });
    const { darkMode } = useTheme();

    const showAvatar = themeIndex >= -1;

    // Current Header logo icon or null for default
    const currentIcon = themeIndex >= 0 ? themes[themeIndex].icon : null;

    // Derived theme name
    let themeName = "Foto de Perfil Real";
    if (themeIndex === -1) themeName = "Avatar 3D (Gold)";
    else if (themeIndex >= 0 && themes[themeIndex]) themeName = themes[themeIndex].name;

    const handleMagicClick = (e) => {
        const nextIndex = themeIndex >= themes.length - 1 ? -2 : themeIndex + 1;
        setThemeIndex(nextIndex);

        // Derive toast details
        let title = "📷 Modo: Foto Real";
        let particleColors = ['#fabc5d', '#0df053', '#ffffff'];

        if (nextIndex === -1) {
            title = "🧑‍💻 Modo: Avatar 3D (Gold)";
            particleColors = ['#fabc5d', '#ffd700', '#ffffff'];
        } else if (nextIndex >= 0 && themes[nextIndex]) {
            const t = themes[nextIndex];
            title = `🎨 Tema: ${t.name}`;
            const colors = darkMode ? t.dark : t.light;
            particleColors = [colors.primary, colors.secondary, colors.text];
        }

        // Particle burst
        confetti({
            particleCount: 40,
            spread: 60,
            origin: { y: 0.85, x: 0.95 },
            colors: particleColors
        });

        // Toast feedback
        Swal.fire({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 1800,
            timerProgressBar: true,
            title,
            background: darkMode ? '#1e1e24' : '#ffffff',
            color: darkMode ? '#ffffff' : '#000000',
            customClass: {
                popup: 'swal-magic-toast'
            }
        });
    };

    useEffect(() => {
        const root = document.documentElement;

        if (themeIndex <= -1) {
            // Default Gold Theme
            root.style.setProperty('--primary-color', '#fabc5d');
            root.style.setProperty('--secondary-color', '#0df053');
            root.style.setProperty('--bg-light', '#ffffff');
            root.style.setProperty('--bg-dark', '#000000');
            root.style.setProperty('--text-light', '#000000');
            root.style.setProperty('--text-dark', '#ffffff');
            root.style.setProperty('--text-muted', '#a1a1aa');
        } else {
            const theme = themes[themeIndex];
            const colors = darkMode ? theme.dark : theme.light;

            root.style.setProperty('--primary-color', colors.primary);
            root.style.setProperty('--secondary-color', colors.secondary);
            root.style.setProperty('--bg-light', '#ffffff');
            root.style.setProperty('--bg-dark', '#000000');
            root.style.setProperty('--text-light', '#000000');
            root.style.setProperty('--text-dark', colors.text);
            root.style.setProperty('--text-muted', darkMode ? '#a1a1aa' : '#4b5563');
        }

        localStorage.setItem('themeIndex', themeIndex);
    }, [themeIndex, darkMode]);

    return (
        <MagicContext.Provider value={{ showAvatar, handleMagicClick, themeIndex, currentIcon, themeName }}>
            {children}
        </MagicContext.Provider>
    );
};

export const useMagic = () => useContext(MagicContext);
