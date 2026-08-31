import React, { useState } from 'react';

const BLUEPRINTS = [
    {
        id: 'enterprise-microservices',
        title: 'Flujo Transaccional & Microservicios Seguros',
        badge: 'Caso: NEXUS-Shop · Backend Corporativo Java 21 / Docker',
        color: '#8b5cf6',
        subtitle: 'Cómo viaja una operación de compra desde el clic del usuario hasta la base de datos sin fallas',
        steps: [
            {
                phase: '01. Seguridad',
                title: 'Filtro de Acceso & Tokens',
                desc: 'Validación instantánea de identidad con tokens JWT: solo los usuarios autenticados y autorizados pueden operar en el sistema.'
            },
            {
                phase: '02. Lógica',
                title: 'Reglas de Negocio Aisladas',
                desc: 'El backend (Spring Boot / Java) procesa precios, stock y validaciones sin mezclar código con la base de datos (Clean Architecture).'
            },
            {
                phase: '03. Datos',
                title: 'Transacciones ACID en BD',
                desc: 'Si ocurre un error durante el cobro, la base de datos revierte todo automáticamente para no perder dinero ni duplicar órdenes.'
            },
            {
                phase: '04. Producción',
                title: 'Despliegue Aislado en Docker',
                desc: 'Toda la aplicación corre en contenedores independientes y reproducibles, listos para la nube con CI/CD automatizado.'
            }
        ]
    },
    {
        id: 'silicon-forensics',
        title: 'Auditoría de Seguridad en Sistemas Embebidos (MediaTek)',
        badge: 'Caso: Moto E6s · Auditoría a Bajo Nivel MediaTek',
        color: '#10b981',
        subtitle: 'Investigación técnica para auditar procesadores embebidos, protocolos de arranque seguro y diagnóstico de memoria',
        steps: [
            {
                phase: '01. Intercepción',
                title: 'Conexión Directa por USB',
                desc: 'Forzado del procesador (SoC MediaTek) a comunicarse directamente por USB en modo bajo nivel antes de que cargue el sistema operativo dañado.'
            },
            {
                phase: '02. Inyección',
                title: 'Carga de Controlador en RAM',
                desc: 'Envío de binarios livianos a la memoria RAM para tomar control temporal de la placa madre sin alterar los datos del usuario.'
            },
            {
                phase: '03. Chequeo',
                title: 'Auditoría Criptográfica',
                desc: 'Consulta directa al procesador para verificar si las llaves de seguridad internas de fábrica estaban corruptas o intactas.'
            },
            {
                phase: '04. Veredicto',
                title: 'Aislamiento de la Falla',
                desc: 'Diagnóstico definitivo: detección del bloqueo físico en la memoria eMMC particionada, evitando gastos innecesarios en repuestos.'
            }
        ]
    },
    {
        id: 'high-performance',
        title: 'Procesamiento de Alta Velocidad en Tiempo Real',
        badge: 'Caso: LoopAI · Arquitectura Concurrente Asíncrona',
        color: '#3b82f6',
        subtitle: 'Arquitectura para recibir miles de datos concurrentes sin congelar la pantalla ni saturar el servidor',
        steps: [
            {
                phase: '01. Entrada',
                title: 'Recepción en Tiempo Real',
                desc: 'Canales WebSockets y APIs reactivas que reciben eventos en vivo con respuesta inmediata menor a 200 milisegundos.'
            },
            {
                phase: '02. Organización',
                title: 'Cola de Espera Inteligente',
                desc: 'Las tareas pesadas se organizan en una fila ordenada para que el servidor nunca se quede sin memoria bajo picos de tráfico.'
            },
            {
                phase: '03. Cómputo',
                title: 'Ejecución en Segundo Plano',
                desc: 'Los cálculos matemáticos y transformaciones complejas se procesan en hilos independientes para mantener la web rápida y fluida.'
            },
            {
                phase: '04. Control',
                title: 'Monitoreo & Métricas en Vivo',
                desc: 'Medición constante del consumo de memoria y CPU para detectar cuellos de botella antes de que afecten la experiencia del usuario.'
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
            <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
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
                        <span>{bp.title}</span>
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
