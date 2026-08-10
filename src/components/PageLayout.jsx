import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { useTheme } from '../context/ThemeContext';
import { useMagic } from '../context/MagicContext';
import '../styles/bodyhome.css';
import '../styles/avatar.css';
import confetti from 'canvas-confetti';
import Swal from 'sweetalert2';
import { verifyAccessCode, formatTimeRemaining } from '../utils/securityManager';

const LayoutContent = ({ children, activeSection }) => {
    const [navBarClass, setNavBarClass] = useState('');
    const { darkMode, toggleTheme } = useTheme();
    const { handleMagicClick, themeName } = useMagic();
    const [isUnlocked, setIsUnlocked] = useState(localStorage.getItem('unlocked_projects') === 'true');

    useEffect(() => {
        const handleUnlockChange = () => {
            setIsUnlocked(localStorage.getItem('unlocked_projects') === 'true');
        };
        window.addEventListener('unlock_changed', handleUnlockChange);
        return () => window.removeEventListener('unlock_changed', handleUnlockChange);
    }, []);

    const onMagicClick = (e) => {
        if (e) e.preventDefault();
        handleMagicClick(e);
    };

    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        const url = e.currentTarget.href;

        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x, y }
        });

        setTimeout(() => {
            window.open(url, '_blank');
        }, 3000);
    };

    const handleSecretKeyClick = async () => {
        const currentlyUnlocked = localStorage.getItem('unlocked_projects') === 'true';

        if (currentlyUnlocked) {
            Swal.fire({
                title: '🔓 Proyectos Desbloqueados',
                text: '¿Deseas volver a bloquear los proyectos protegidos?',
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Sí, bloquear',
                cancelButtonText: 'Mantener desbloqueado',
                background: darkMode ? '#1a1a1a' : '#ffffff',
                color: darkMode ? '#ffffff' : '#000000',
                confirmButtonColor: '#ef4444',
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.setItem('unlocked_projects', 'false');
                    window.dispatchEvent(new Event('unlock_changed'));
                    Swal.fire({
                        title: '🔒 Bloqueado',
                        text: 'Proyectos protegidos ocultados.',
                        icon: 'success',
                        timer: 1500,
                        showConfirmButton: false,
                        background: darkMode ? '#1a1a1a' : '#ffffff',
                        color: darkMode ? '#ffffff' : '#000000',
                    });
                }
            });
            return;
        }

        const { value: inputCode, isConfirmed } = await Swal.fire({
            title: '🔑 Acceso Protegido',
            text: 'Ingresa el código para desbloquear proyectos exclusivos:',
            input: 'password',
            inputPlaceholder: 'Código de acceso',
            showCancelButton: true,
            confirmButtonText: 'Desbloquear',
            cancelButtonText: 'Cancelar',
            background: darkMode ? '#1a1a1a' : '#ffffff',
            color: darkMode ? '#ffffff' : '#000000',
            confirmButtonColor: '#f59e0b',
            customClass: {
                popup: 'swal-custom-popup',
                title: 'swal-custom-title',
            }
        });

        if (isConfirmed) {
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

            const res = await verifyAccessCode(inputCode);

            if (res.success) {
                localStorage.setItem('unlocked_projects', 'true');
                window.dispatchEvent(new Event('unlock_changed'));
                confetti({ particleCount: 120, spread: 80 });
                Swal.fire({
                    title: '¡Acceso Concedido! 🎉',
                    text: 'Se han desbloqueado los proyectos protegidos.',
                    icon: 'success',
                    confirmButtonColor: '#25D366',
                    background: darkMode ? '#1a1a1a' : '#ffffff',
                    color: darkMode ? '#ffffff' : '#000000',
                });
            } else if (res.locked) {
                Swal.fire({
                    title: '🚫 Acceso Bloqueado por IP',
                    html: `<p>${res.message}</p><p style="font-weight: bold; color: #ef4444; margin-top: 10px;">Tiempo de espera: ${formatTimeRemaining(res.secondsRemaining)} min</p>`,
                    icon: 'error',
                    confirmButtonColor: '#ef4444',
                    background: darkMode ? '#1a1a1a' : '#ffffff',
                    color: darkMode ? '#ffffff' : '#000000',
                });
            } else {
                Swal.fire({
                    title: 'Código Incorrecto 🔒',
                    text: res.message,
                    icon: 'warning',
                    confirmButtonColor: '#ef4444',
                    background: darkMode ? '#1a1a1a' : '#ffffff',
                    color: darkMode ? '#ffffff' : '#000000',
                });
            }
        }
    };

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollThreshold = 0.05;

            if (scrollY < windowHeight * scrollThreshold) {
                setNavBarClass("");
            } else {
                setNavBarClass("inline-block-class");
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Header activeSection={activeSection} navBarClass={navBarClass} />
            {children}

            {/* Floating Buttons */}
            <div className="wsp" >
                <a href="https://wa.link/cjq5u5" className='btn-wsp' target='_blank' rel="noopener noreferrer" onClick={handleWhatsAppClick} data-tooltip="¡Escríbeme!">
                    <i className="fa-brands fa-whatsapp fa-2xl" ></i>
                </a>
            </div>

            <button className="btn-theme-toggle" onClick={toggleTheme} data-tooltip={darkMode ? "Modo Claro" : "Modo Oscuro"}>
                <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} fa-2xl`}></i>
            </button>

            <button className="magic-wand-btn-floating" onClick={onMagicClick} data-tooltip={`Modo Mágico (${themeName})`}>
                <i className="fa-solid fa-wand-magic-sparkles"></i>
            </button>

            <button className="secret-key-btn-floating" onClick={handleSecretKeyClick} data-tooltip={isUnlocked ? "Bloquear Proyectos" : "Desbloquear Proyectos"}>
                <i className={`fas ${isUnlocked ? 'fa-unlock' : 'fa-key'}`}></i>
            </button>
        </>
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
