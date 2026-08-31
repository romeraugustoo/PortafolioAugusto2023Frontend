import React from 'react';
import { Container, Row, Col, Badge, Card, Table, Button, Accordion } from 'react-bootstrap';
import '../../styles/bodyhome.css';
import { useTheme } from '../../context/ThemeContext';
import motoCover from '../../assets/images/portfolio/MotoE6s.webp';

const MotoE6sSolution = () => {
    const { darkMode } = useTheme();

    return (
        <div className={`solution-page ${darkMode ? 'dark-mode' : ''}`} style={{ minHeight: '100vh' }}>
            <Container>

                {/* Header Promocional */}
                <section className="mb-5 text-center">
                    <Badge bg="danger" className="mb-3 p-2 fs-6">
                        🛡️ Auditoría Bare-Metal & Reverse Engineering de Hardware
                    </Badge>
                    <h1 className="display-4 theme-text-primary mb-3 fw-bold">
                        Auditoría de Seguridad de Hardware & Robustez Criptográfica (Moto E6s / MT6765) 🔬⚡
                    </h1>
                    <h3 className={`h5 mb-4 ${darkMode ? 'text-light' : 'text-secondary'}`} style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
                        Investigación profunda de seguridad de sistemas e ingeniería inversa sobre hardware real y protegido (SoC MediaTek MT6765 con parche 2022). Desambiguación de esquemáticos erróneos, acceso BROM mediante Kamakiri, reescritura criptográfica SEJ y diagnóstico concluyente en la memoria RPMB del silicio.
                    </h3>

                    <div className="mb-4 flex-wrap d-flex justify-content-center gap-2">
                        <Badge bg="primary" className="p-2">SoC MediaTek MT6765</Badge>
                        <Badge bg="warning" text="dark" className="p-2">Testpoint Real TP1500</Badge>
                        <Badge bg="info" text="dark" className="p-2">BootROM Puro (PID 0003)</Badge>
                        <Badge bg="danger" className="p-2">Exploit Kamakiri USB</Badge>
                        <Badge bg="success" className="p-2">Motor Cripto SEJ (HACC)</Badge>
                        <Badge bg="dark" className="p-2">Validación eMMC RPMB</Badge>
                        <Badge bg="secondary" className="p-2">WCAG AAA Dark SaaS</Badge>
                    </div>

                    <div className="mt-3 d-flex justify-content-center gap-3 flex-wrap">
                        <Button 
                            variant="warning" 
                            size="lg" 
                            href="https://e6s.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="fw-bold px-4"
                        >
                            <i className="fas fa-terminal me-2"></i> Abrir Landing & Terminal Interactiva
                        </Button>
                        <Button 
                            variant="outline-light" 
                            size="lg" 
                            href="https://github.com/romeraugustoo" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4"
                        >
                            <i className="fab fa-github me-2"></i> Ver en GitHub
                        </Button>
                    </div>
                </section>

                <hr className="theme-border-primary mb-5" />

                {/* Banner Visual del Hardware */}
                <section className="mb-5 text-center">
                    <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} shadow overflow-hidden`}>
                        <img 
                            src={motoCover} 
                            alt="Auditoría Forense Moto E6s MT6765" 
                            style={{ width: '100%', maxHeight: '440px', objectFit: 'cover' }} 
                        />
                        <Card.Footer className={`text-muted small ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
                            Placa base Motorola XT2053-2 (SoC MediaTek Helio P22 / MT6765) intervenida físicamente en el testpoint TP1500 (Ilustración conceptual representativa).
                        </Card.Footer>
                    </Card>
                </section>

                {/* 1. Misión Estratégica y El Puente al Analista Funcional */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🎯 1. Propósito Estratégico & Enfoque de Analista Funcional</h2>
                    <p className={`lead ${darkMode ? 'text-light' : 'text-dark'}`}>
                        Este proyecto trasciende los prototipos convencionales para someter la metodología de análisis a su prueba más exigente: un dispositivo físico donde la documentación oficial es contradictoria y las herramientas comerciales estándar declaran el problema como irresoluble.
                    </p>
                    <Row className="g-4">
                        <Col md={4}>
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 p-3 shadow-sm`}>
                                <Card.Body>
                                    <h4 className="text-warning mb-3">🔍 Capacidad Crítica de Desambiguación</h4>
                                    <p className={darkMode ? 'text-light' : 'text-muted'}>
                                        Los manuales oficiales de servicio Lemcell señalaban puntos erróneos (TP1501 y TP1506) que disparaban los eFuses. Mediante análisis de continuidad de pistas con multímetro, se desambiguó el esquema hallando el verdadero punto <strong>TP1500</strong>.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 p-3 shadow-sm`}>
                                <Card.Body>
                                    <h4 className="text-info mb-3">🌐 Pensamiento Sistémico Vertical</h4>
                                    <p className={darkMode ? 'text-light' : 'text-muted'}>
                                        Capacidad para conectar y articular diferentes niveles de abstracción: desde la experiencia de usuario y diseño de sistemas, hasta llamadas al kernel Linux, handshakes USB de bajo nivel y registros criptográficos del microprocesador.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 p-3 shadow-sm`}>
                                <Card.Body>
                                    <h4 className="text-success mb-3">📋 Rigor Metodológico & Reproducibilidad</h4>
                                    <p className={darkMode ? 'text-light' : 'text-muted'}>
                                        Diseño de más de 150 scripts de automatización, bitácoras de consola reproducibles, captura de telemetría de hardware concluyente y empaquetado de artefactos para transferencia inmediata de conocimiento a equipos de ingeniería y CTOs.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* 2. Diagnóstico Técnico del Hardware */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">⚙️ 2. Ficha Técnica del Dispositivo Objetivo</h2>
                    <Table responsive striped bordered hover variant={darkMode ? "dark" : "light"}>
                        <thead>
                            <tr>
                                <th>Parámetro de Hardware</th>
                                <th>Valor Identificado</th>
                                <th>Impacto en la Auditoría</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Modelo / SKU</strong></td>
                                <td>Motorola Moto E6s (XT2053-2) Codename <code>fiji_64</code></td>
                                <td>Placa madre unificada con arquitectura ARM64 Little Kernel</td>
                            </tr>
                            <tr>
                                <td><strong>Procesador (SoC)</strong></td>
                                <td>MediaTek Helio P22 (MT6762 / MT6765)</td>
                                <td>HW Code: <code>0x766</code>, Subcode: <code>0x8a00</code>, HW Ver: <code>0xca00</code></td>
                            </tr>
                            <tr>
                                <td><strong>Configuración de Seguridad</strong></td>
                                <td><code>0xE5</code> (SBC=True, DAA=True, SLA=False, SWJTAG=True)</td>
                                <td>Arranque seguro forzado con autenticación criptográfica de descarga</td>
                            </tr>
                            <tr>
                                <td><strong>Firmware & Kernel</strong></td>
                                <td>Android 9.0 Pie (Build <code>POES29.288-60-6-1-29</code>, Parche 01/2022)</td>
                                <td>Kernel Linux <code>4.9.117+</code> con mitigación al exploit CVE-2020-0069</td>
                            </tr>
                            <tr>
                                <td><strong>Identificadores de Silicio</strong></td>
                                <td>ME_ID: <code>FE433F13...</code> / SOC_ID: <code>98E8ACF7...</code></td>
                                <td>Firma criptográfica única emparejada con Samsung eMMC 32GB</td>
                            </tr>
                        </tbody>
                    </Table>
                </section>

                {/* 3. Las 4 Fases de la Metodología Forense */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🔬 3. Las 4 Fases de la Metodología</h2>
                    <Row className="g-4">
                        <Col lg={6}>
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'danger' : 'danger'} h-100 p-3 shadow-sm`}>
                                <Card.Body>
                                    <h4 className="text-danger mb-3">Fase 1: Auditoría de Software (Descarte Rápido)</h4>
                                    <p className={darkMode ? 'text-light' : 'text-dark'}>
                                        Se probó escalada local de privilegios a UID 0 explotando el driver de Command Queue (<code>CVE-2020-0069</code> / <code>mtk-su</code>).
                                    </p>
                                    <ul>
                                        <li><strong>Resultado:</strong> Mitigado en el parche de seguridad de 2022.</li>
                                        <li><strong>Decisión Funcional:</strong> Se descartó la vía lógica en menos de 2 horas sin malgastar recursos.</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'warning' : 'warning'} h-100 p-3 shadow-sm`}>
                                <Card.Body>
                                    <h4 className="text-warning mb-3">Fase 2: Intercepción Dinámica de Tráfico</h4>
                                    <p className={darkMode ? 'text-light' : 'text-dark'}>
                                        Análisis en caliente de la herramienta oficial Lenovo (Software Fix / RSA).
                                    </p>
                                    <ul>
                                        <li>Intercepción del certificado <code>signature_frp</code> durante el handshake Fastboot.</li>
                                        <li>Inyección de payloads previa a la transferencia USB. Detección de la barrera <code>Red State</code> en Little Kernel.</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'info' : 'info'} h-100 p-3 shadow-sm`}>
                                <Card.Body>
                                    <h4 className="text-info mb-3">Fase 3: Desambiguación Esquemática (TP1500)</h4>
                                    <p className={darkMode ? 'text-light' : 'text-dark'}>
                                        Los manuales oficiales apuntaban a los puntos falsos <code>TP1501</code> y <code>TP1506</code>.
                                    </p>
                                    <ul>
                                        <li>Al puentearlos, los eFuses bloqueaban el descenso forzando Preloader VCOM.</li>
                                        <li>Por análisis de trazas se descubrió el verdadero <strong>TP1500</strong>. Con batería aislada y puente a masa, se forzó al SoC a <strong>BootROM puro (VID=0x0E8D, PID=0x0003)</strong>.</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'success' : 'success'} h-100 p-3 shadow-sm`}>
                                <Card.Body>
                                    <h4 className="text-success mb-3">Fase 4: Cirugía Bare-Metal en Linux</h4>
                                    <p className={darkMode ? 'text-light' : 'text-dark'}>
                                        Conexión USB de bajo nivel (<code>libusb</code>) orquestada mediante <code>mtkclient</code> en servidor Linux.
                                    </p>
                                    <ul>
                                        <li>Bypass de DAA/SBC inyectando el payload <code>Kamakiri</code> por desbordamiento de buffer en RAM.</li>
                                        <li>Ejecución del coprocesador criptográfico de hardware <strong>SEJ (HACC)</strong> para recalcular el HMAC y sobreescribir la partición <code>seccfg</code>.</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* 4. Diagrama de Arquitectura de Capas */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🏗️ 4. Diagrama de Arquitectura & Vector de Ataque</h2>
                    <p>
                        Representación del recorrido de inyección desde el bus físico USB hasta las primitivas criptográficas del silicio:
                    </p>
                    <pre className={`p-4 rounded border ${darkMode ? 'bg-dark text-info border-info' : 'bg-light text-dark border-primary'}`} style={{ fontSize: '0.85rem', overflowX: 'auto' }}>
{`┌────────────────────────────────────────────────────────────────────────────────────────┐
│               MAPA ARQUITECTÓNICO DE EXPLOTACIÓN BARE-METAL (MT6765)                  │
└────────────────────────────────────────────────────────────────────────────────────────┘
                                           │
  [CAPA FÍSICA]                            ▼
  Aislamiento Batería + Puente TP1500 a GND (Chasis)
                                           │
                                           ▼
  [MICROPROCESADOR]                        │
  Disparo de eFuses Bypass ───────────────► BootROM Puro (VID: 0x0E8D, PID: 0x0003)
                                           │
  [SERVIDOR LINUX / USB]                   ▼
  mtkclient (libusb) ────────────────────► Inyección Payload Kamakiri (Buffer Overflow ctrl_transfer)
                                           │
  [SUBSISTEMA CRIPTOGRÁFICO]               ▼
  Evasión de DAA / SBC ──────────────────► Despertar del Motor SEJ / HACC en RAM
                                           │
                                           ▼
  Reescritura Criptográfica ─────────────► Partición seccfg en Samsung eMMC (32 GB)
                                           │
                                           ▼
  [LA FRONTERA DEL SILICIO]               │
  Re-arranque en Little Kernel ──────────► Verificación Simétrica contra eMMC RPMB Block
                                           │
                                           ▼
  Veredicto Forense ─────────────────────► 🔒 [bootloader] unlocked: no (Bloqueo en Silicio)`}
                    </pre>
                </section>

                {/* 5. El Veredicto Forense: La Frontera del Silicio (RPMB) */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🛑 5. El Veredicto Forense: La Frontera del Silicio (RPMB)</h2>
                    <Card bg={darkMode ? "dark" : "light"} className={`border-warning p-4 shadow-sm mb-4`}>
                        <h4 className="text-warning mb-3">Telemetría Cruda Capturada en Consola Fastboot:</h4>
                        <pre className={`p-3 rounded ${darkMode ? 'bg-black text-warning' : 'bg-dark text-warning'}`} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem' }}>
{`(bootloader) version-baseband:
(bootloader) version-bootloader:
(bootloader) product: fiji
(bootloader) secure: yes
(bootloader) unlocked: no
(bootloader) uart-on: no
(bootloader) secure-state: oem
(bootloader) slot-unbootable:a: yes
(bootloader) slot-retry-count:a: 0`}
                        </pre>
                        <p className={`mt-3 ${darkMode ? 'text-light' : 'text-dark'}`}>
                            <strong>Conclusión de Ingeniería:</strong> Motorola implementó una validación cruzada simétrica inviolable por software. El estado de desbloqueo no depende únicamente de la partición lógica <code>seccfg</code>, sino que reside en el bloque <strong>RPMB (Replay Protected Memory Block)</strong> del módulo de memoria eMMC, aprovisionado con una clave criptográfica en fábrica. El diagnóstico final es definitivo, contrastable y técnicamente irrefutable.
                        </p>
                    </Card>
                </section>

                {/* 6. La Landing Page Interactiva (landingProyectMotoe6s) */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">💻 6. La Aplicación Web del Caso de Estudio</h2>
                    <p>
                        Para presentar esta investigación a CTOs, ingenieros de ciberseguridad y reclutadores, se construyó una aplicación web moderna de nivel corporativo:
                    </p>
                    <Row className="g-4">
                        <Col md={6}>
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 p-3 shadow-sm`}>
                                <Card.Body>
                                    <h5 className="text-info">🎨 Estética Dark SaaS & Accesibilidad WCAG AAA</h5>
                                    <ul className={darkMode ? 'text-light' : 'text-muted'}>
                                        <li>Contraste validado de <strong>7.3:1</strong> y <strong>13.4:1</strong> en tipografías secundarias.</li>
                                        <li>Navegación 100% por teclado con indicador visual <code>:focus-visible</code>.</li>
                                        <li>Semántica estricta HTML5 (Bento Grid con <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>).</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 p-3 shadow-sm`}>
                                <Card.Body>
                                    <h5 className="text-success">⚡ Consola Interactiva & Modal Lightbox</h5>
                                    <ul className={darkMode ? 'text-light' : 'text-muted'}>
                                        <li>Terminal interactiva macOS con 3 pestañas dinámicas (Handshake BROM, Bypass SEJ y Telemetría RPMB).</li>
                                        <li>Micro-animación suave fade de 120ms y botón de copiado con feedback visual.</li>
                                        <li>Visor modal lightbox con zoom de microscopía del testpoint TP1500.</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <div className="text-center mt-4">
                        <Button 
                            variant="primary" 
                            size="lg" 
                            href="https://e6s.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-5 py-3 fw-bold shadow"
                        >
                            <i className="fas fa-external-link-alt me-2"></i> Explorar Caso de Estudio en Vivo
                        </Button>
                    </div>
                </section>

                {/* 7. Stack de Herramientas y Protocolos */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🛠️ 7. Stack de Herramientas & Protocolos</h2>
                    <Row>
                        <Col md={4} className="mb-3">
                            <h5 className="text-danger">Hardware & Silicio</h5>
                            <ul>
                                <li>SoC MediaTek Helio P22 (MT6765)</li>
                                <li>BootROM (BROM Mode)</li>
                                <li>Testpoint TP1500 (Soldering Probe)</li>
                                <li>Samsung eMMC 32GB (RPMB)</li>
                            </ul>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h5 className="text-warning">Ciberdefensa & Explotación</h5>
                            <ul>
                                <li>Kamakiri Buffer Overflow Exploit</li>
                                <li>SEJ (Security Engine / HACC)</li>
                                <li>mtkclient & libusb (Linux Server)</li>
                                <li>Fastboot OEM Protocol & RSA Sniffer</li>
                            </ul>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h5 className="text-info">Diseño & Frontend</h5>
                            <ul>
                                <li>Vanilla HTML5 Semántico + CSS3</li>
                                <li>Modern ES6 JavaScript</li>
                                <li>WCAG AAA Compliance</li>
                                <li>Google Fonts (Outfit, Inter, JetBrains Mono)</li>
                            </ul>
                        </Col>
                    </Row>
                </section>

            </Container>
        </div>
    );
};

export default MotoE6sSolution;
