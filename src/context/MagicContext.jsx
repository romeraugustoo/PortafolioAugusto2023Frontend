import React, { createContext, useState, useContext, useEffect } from 'react';
import { themes } from '../data/themes';
import { useTheme } from './ThemeContext';

const MagicContext = createContext();

export const MagicProvider = ({ children }) => {
    // -2: Image
    // -1: Avatar (Gold/Default)
    // 0-9: Avatar (Themes)
    const [themeIndex, setThemeIndex] = useState(() => {
        const savedIndex = localStorage.getItem('themeIndex');
        return savedIndex ? parseInt(savedIndex, 10) : -2;
    });
    const { darkMode } = useTheme();

    const showAvatar = themeIndex >= -1;

    // Determine current icon
    // -2: Default (Gold) -> null (Header will use default)
    // -1: Avatar (Gold) -> null (Header will use default)
    // 0+: Theme Icon -> themes[themeIndex].icon
    const currentIcon = themeIndex >= 0 ? themes[themeIndex].icon : null;

    const handleMagicClick = () => {
        setThemeIndex(prev => {
            if (prev === themes.length - 1) return -2; // Reset to image
            return prev + 1;
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
            root.style.setProperty('--text-muted', '#414141');
        } else {
            const theme = themes[themeIndex];
            // We set the variables that define the palette.
            // The CSS classes (dark-mode) will use --bg-dark / --text-dark etc.

            // Primary/Secondary are usually consistent or have their own logic.
            // In the requested themes, Primary/Secondary change based on Light/Dark mode?
            // The user provided "Claro" and "Oscuro" variants for Primary/Secondary.
            // So we need to update --primary-color based on darkMode.

            const colors = darkMode ? theme.dark : theme.light;

            root.style.setProperty('--primary-color', colors.primary);
            root.style.setProperty('--secondary-color', colors.secondary);

            // Backgrounds and Texts
            // We update the variables that the CSS uses.
            // body uses var(--bg-light) by default. .dark-mode uses var(--bg-dark).
            // So we update these variables to match the theme's definitions.

            root.style.setProperty('--bg-light', '#ffffff'); // Force White
            root.style.setProperty('--bg-dark', '#000000'); // Force Black

            root.style.setProperty('--text-light', '#000000'); // Force Black Text
            root.style.setProperty('--text-dark', theme.dark.text);

            // We might want to update muted text too if provided, but for now keep default or derive?
            // The user didn't provide muted, so we leave it or maybe use secondary?
            // Let's leave --text-muted as is or reset it in default.
        }

        localStorage.setItem('themeIndex', themeIndex);
    }, [themeIndex, darkMode]);

    return (
        <MagicContext.Provider value={{ showAvatar, handleMagicClick, themeIndex, currentIcon }}>
            {children}
        </MagicContext.Provider>
    );
};

export const useMagic = () => useContext(MagicContext);
