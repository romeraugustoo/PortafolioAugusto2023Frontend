export const MODES = {
    CTO: 'cto',
    CYBER: 'cyber',
    CREATIVE: 'creative'
};

export const MODES_CONFIG = {
    [MODES.CTO]: {
        id: MODES.CTO,
        name: 'Arquitecto SaaS / CTO',
        badge: '👔 Modo: Arquitecto SaaS & CTO',
        subtitle: 'Enfoque en métricas de negocio, arquitectura limpia y sistemas distribuidos',
        tag: 'Modo por Defecto',
        colors: {
            primary: '#3b82f6',
            secondary: '#10b981',
            text: '#f8fafc',
            bg: '#0b0e14'
        },
        particleColors: ['#3b82f6', '#10b981', '#ffffff']
    },
    [MODES.CYBER]: {
        id: MODES.CYBER,
        name: 'Low-Level / Ciberseguridad',
        badge: '💻 Modo: Consola Forense & Low-Level',
        subtitle: 'Auditoría de bajo nivel, protocolos de comunicación y telemetría de kernel',
        tag: 'Terminal CLI Interactiva',
        colors: {
            primary: '#10b981',
            secondary: '#34d399',
            text: '#e2e8f0',
            bg: '#05070a'
        },
        particleColors: ['#10b981', '#34d399', '#059669']
    },
    [MODES.CREATIVE]: {
        id: MODES.CREATIVE,
        name: 'Creative UI / WebGL 3D',
        badge: '✨ Modo: Creative UI & 3D Engine',
        subtitle: 'Simulación física interactiva, aceleración WebGL y microinteracciones fluidas',
        tag: 'WebGL Canvas Reactivo',
        colors: {
            primary: '#8b5cf6',
            secondary: '#60a5fa',
            text: '#ffffff',
            bg: '#090a12'
        },
        particleColors: ['#8b5cf6', '#60a5fa', '#ec4899']
    }
};
