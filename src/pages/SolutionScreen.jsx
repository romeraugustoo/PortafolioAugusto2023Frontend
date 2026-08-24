import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import TransporteSantaLucia from '../components/solutions/TransporteSantaLucia';
import RapiburguerSolution from '../components/solutions/RapiburguerSolution';
import PortfolioSolution from '../components/solutions/PortfolioSolution';
import RelicarioSolution from '../components/solutions/RelicarioSolution';
import ProfeBookSolution from '../components/solutions/ProfeBookSolution';
import SeamosPuenteSolution from '../components/solutions/SeamosPuenteSolution';
import MiMusicaSolution from '../components/solutions/MiMusicaSolution';
import { useTheme } from '../context/ThemeContext';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';
import { verifyAccessCode, formatTimeRemaining } from '../utils/securityManager';

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
            case 'mimusica':
                return <MiMusicaSolution />;
            case 'tslc':
                return <TransporteSantaLucia />;
            case 'rapiburguer':
                return <RapiburguerSolution />;
            case 'portfolio':
                return <PortfolioSolution />;
            case 'seamospuente':
                return <SeamosPuenteSolution />;
            case 'relicario':
            case 'profebook':
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
                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: 'Verificando seguridad...',
                                text: 'Comprobando credenciales y origen IP',
                                allowOutsideClick: false,
                                didOpen: () => {
                                    Swal.showLoading();
                                },
                                background: darkMode ? '#1a1a1a' : '#ffffff',
                                color: darkMode ? '#ffffff' : '#000000',
                            });

                            const res = await verifyAccessCode(result.value);

                            if (res.success) {
                                localStorage.setItem('unlocked_projects', 'true');
                                window.dispatchEvent(new Event('unlock_changed'));
                                confetti({ particleCount: 120, spread: 80 });
                                Swal.fire({
                                    title: '¡Acceso Concedido! 🎉',
                                    text: 'Proyecto desbloqueado.',
                                    icon: 'success',
                                    timer: 1500,
                                    showConfirmButton: false,
                                    background: darkMode ? '#1a1a1a' : '#ffffff',
                                    color: darkMode ? '#ffffff' : '#000000',
                                });
                            } else if (res.locked) {
                                Swal.fire({
                                    title: '🛑 Acceso Bloqueado por IP',
                                    html: `<p>${res.message}</p><p style="font-weight: bold; color: #ef4444; margin-top: 10px;">Tiempo de espera: ${formatTimeRemaining(res.secondsRemaining)} min</p>`,
                                    icon: 'error',
                                    confirmButtonColor: '#ef4444',
                                    background: darkMode ? '#1a1a1a' : '#ffffff',
                                    color: darkMode ? '#ffffff' : '#000000',
                                }).then(() => {
                                    window.location.href = '/';
                                });
                            } else {
                                Swal.fire({
                                    title: 'Código Incorrecto ❌',
                                    text: res.message,
                                    icon: 'error',
                                    confirmButtonColor: '#ef4444',
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
                return id === 'profebook' ? <ProfeBookSolution /> : <RelicarioSolution />;
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
