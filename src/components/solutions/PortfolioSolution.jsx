import React from 'react';
import { Container } from 'react-bootstrap';
import { useTheme } from '../../context/ThemeContext';

const PortfolioSolution = () => {
    const { darkMode } = useTheme();

    return (
        <div className={`solution-page pt-5 pb-5 ${darkMode ? 'dark-mode' : ''}`} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Container className="text-center">
                <h1 className="display-1">Hola Mundo</h1>
                <p>Portfolio Solución</p>
            </Container>
        </div>
    );
};

export default PortfolioSolution;
