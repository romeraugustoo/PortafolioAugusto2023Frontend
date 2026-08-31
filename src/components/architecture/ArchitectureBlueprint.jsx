import React, { useState } from 'react';

const BLUEPRINTS = [
    {
        id: 'enterprise-microservices',
        title: 'Flujo Transaccional & Microservicios Seguros',
        shortTitle: 'Microservicios Java',
        badge: 'Caso: NEXUS-Shop · Backend Corporativo Java 21 / Docker',
        color: '#8b5cf6',
        subtitle: 'Cómo viaja una operación de compra desde el clic del usuario hasta la base de datos sin fallas',
        steps: [
            {
                phase: '01. Seguridad',
                title: 'Filtro & Tokens',
                desc: 'Validación instantánea JWT: solo usuarios autenticados y autorizados operan.'
            },
            {
                phase: '02. Lógica',
                title: 'Reglas Aisladas',
                desc: 'Spring Boot procesa precios, stock y validaciones bajo Clean Architecture.'
            },
            {
                phase: '03. Datos',
                title: 'Transacciones ACID',
                desc: 'Rollback automático ante fallos para garantizar integridad sin pérdida de datos.'
            },
            {
                phase: '04. Producción',
                title: 'Docker & CI/CD',
                desc: 'Contenedores independientes listos para despliegue automatizado en la nube.'
            }
        ]
    },
    {
        id: 'silicon-forensics',
        title: 'Auditoría de Seguridad en Sistemas Embebidos',
        shortTitle: 'Embebidos MediaTek',
        badge: 'Caso: Moto E6s · Auditoría a Bajo Nivel MediaTek',
        color: '#10b981',
        subtitle: 'Investigación técnica para auditar procesadores embebidos, protocolos de arranque seguro y diagnóstico de memoria',
        steps: [
            {
                phase: '01. Intercepción',
                title: 'Conexión USB',
                desc: 'Forzado del SoC MediaTek por USB a bajo nivel antes de cargar el OS dañado.'
            },
            {
                phase: '02. Inyección',
                title: 'Controlador en RAM',
                desc: 'Binarios livianos en RAM para control de placa madre sin alterar datos de usuario.'
            },
            {
                phase: '03. Chequeo',
                title: 'Auditoría Criptográfica',
                desc: 'Consulta directa para verificar llaves de seguridad internas de fábrica.'
            },
            {
                phase: '04. Veredicto',
                title: 'Aislamiento de Falla',
                desc: 'Diagnóstico de bloqueo físico en memoria eMMC, evitando gastos innecesarios.'
            }
        ]
    },
    {
        id: 'high-performance',
        title: 'Procesamiento de Alta Velocidad en Tiempo Real',
        shortTitle: 'Tiempo Real Async',
        badge: 'Caso: LoopAI · Arquitectura Concurrente Asíncrona',
        color: '#3b82f6',
        subtitle: 'Arquitectura para recibir miles de datos concurrentes sin congelar la pantalla ni saturar el servidor',
        steps: [
            {
                phase: '01. Entrada',
                title: 'Canal en Tiempo Real',
                desc: 'WebSockets y APIs reactivas con respuesta inmediata menor a 200ms.'
            },
            {
                phase: '02. Organización',
                title: 'Cola Inteligente',
                desc: 'Fila ordenada para que el servidor nunca agote memoria en picos de tráfico.'
            },
            {
                phase: '03. Cómputo',
                title: 'Hilos en Background',
                desc: 'Cálculos complejos en segundo plano manteniendo la web rápida y fluida.'
            },
            {
                phase: '04. Control',
                title: 'Monitoreo en Vivo',
                desc: 'Medición de CPU y memoria para mitigar cuellos de botella preventivamente.'
            }
        ]
    }
];

const ArchitectureBlueprint = () => {
    const [activeTab, setActiveTab] = useState(0);
    const activeBlueprint = BLUEPRINTS[activeTab];

    return (
        <div className="architecture-blueprint-container">
            {/* Header / Selector */}
            <div className="d-flex justify-content-center flex-wrap gap-2 mb-3 mb-md-4">
                {BLUEPRINTS.map((bp, idx) => (
                    <button
                        key={bp.id}
                        type="button"
                        className={`blueprint-tab-btn ${activeTab === idx ? 'active' : ''}`}
                        onClick={() => setActiveTab(idx)}
                        style={{
                            borderColor: activeTab === idx ? bp.color : 'var(--border-subtle)',
                            boxShadow: activeTab === idx ? `0 4px 20px ${bp.color}33` : 'none'
                        }}
                    >
                        <span className="blueprint-tab-indicator" style={{ background: bp.color }}></span>
                        <span className="d-none d-md-inline">{bp.title}</span>
                        <span className="d-inline d-md-none">{bp.shortTitle}</span>
                    </button>
                ))}
            </div>

            {/* Blueprint Interactive Display Card */}
            <div className="blueprint-display-card">
                <div className="blueprint-header-row">
                    <div>
                        <span className="blueprint-badge" style={{ color: activeBlueprint.color, borderColor: `${activeBlueprint.color}55`, background: `${activeBlueprint.color}15` }}>
                            {activeBlueprint.badge}
                        </span>
                        <h3 className="blueprint-main-title text-white mt-2">{activeBlueprint.title}</h3>
                        <p className="blueprint-subtitle mb-0">{activeBlueprint.subtitle}</p>
                    </div>
                    <div className="blueprint-telemetry-tag">
                        <i className="fas fa-microchip me-1 text-info"></i>
                        <span>C4 ARCHITECTURE BLUEPRINT</span>
                    </div>
                </div>

                {/* Steps Pipeline Flow Grid */}
                <div className="blueprint-steps-grid mt-4">
                    {activeBlueprint.steps.map((step, sIdx) => (
                        <div key={sIdx} className="blueprint-step-box">
                            <div className="step-phase-number" style={{ color: activeBlueprint.color }}>
                                {step.phase}
                            </div>
                            <h5 className="step-box-title text-white">{step.title}</h5>
                            <p className="step-box-desc">{step.desc}</p>
                            {sIdx < activeBlueprint.steps.length - 1 && (
                                <div className="step-connector-arrow d-none d-lg-block">
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArchitectureBlueprint;
