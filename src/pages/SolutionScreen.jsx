import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import TransporteSantaLucia from '../components/solutions/TransporteSantaLucia';
import RapiburguerSolution from '../components/solutions/RapiburguerSolution';
import PortfolioSolution from '../components/solutions/PortfolioSolution';
import RelicarioSolution from '../components/solutions/RelicarioSolution';
import { useTheme } from '../context/ThemeContext';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';

const SolutionScreen = () => {
    const { id } = useParams();
    const { darkMode } = useTheme();
    const [isUnlocked, setIsUnlocked] = useState(localStorage.getItem('unlocked_projects') === 'true');

    useEffect(() => {
        const handleUnlockChange = () => {
            setIsUnlocked(localStorage.getItem('unlocked_projects') === 'true');
        };
        window.addEventListener('unlock_changed', handleUnlockChange);
        return () => window.removeEventListener('unlock_changed', handleUnlockChange);
    }, []);

    const renderContent = () => {
        switch (id) {
            case 'tslc':
                return <TransporteSantaLucia />;
            case 'rapiburguer':
                return <RapiburguerSolution />;
            case 'portfolio':
                return <PortfolioSolution />;
            case 'relicario':
                if (!isUnlocked) {
                    Swal.fire({
                        title: '🔒 Proyecto Protegido',
                        text: 'Este proyecto requiere un código de acceso para visualizarse:',
                        input: 'password',
                        inputPlaceholder: 'Código de acceso',
                        showCancelButton: true,
                        confirmButtonText: 'Desbloquear',
                        cancelButtonText: 'Ir al Inicio',
                        background: darkMode ? '#1a1a1a' : '#ffffff',
                        color: darkMode ? '#ffffff' : '#000000',
                        confirmButtonColor: '#f59e0b',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            if (result.value === '1221122') {
                                localStorage.setItem('unlocked_projects', 'true');
                                window.dispatchEvent(new Event('unlock_changed'));
                                confetti({ particleCount: 120, spread: 80 });
                            } else {
                                Swal.fire({
                                    title: 'Código Incorrecto 🔒',
                                    text: 'Acceso denegado.',
                                    icon: 'error',
                                    timer: 1500,
                                    showConfirmButton: false,
                                    background: darkMode ? '#1a1a1a' : '#ffffff',
                                    color: darkMode ? '#ffffff' : '#000000',
                                }).then(() => {
                                    window.location.href = '/';
                                });
                            }
                        } else {
                            window.location.href = '/';
                        }
                    });

                    return (
                        <div className={`solution-page pt-5 pb-5 text-center ${darkMode ? 'dark-mode' : ''}`} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div>
                                <h2>🔒 Acceso Restringido</h2>
                                <p>Ingresa el código de acceso en la ventana emergente.</p>
                            </div>
                        </div>
                    );
                }
                return <RelicarioSolution />;
            default:
                return <Navigate to="/" replace />;
        }
    };

    return (
        <PageLayout>
            {renderContent()}
        </PageLayout>
    );
};

export default SolutionScreen;
