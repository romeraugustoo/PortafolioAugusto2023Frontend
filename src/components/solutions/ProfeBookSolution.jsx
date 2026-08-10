import React from 'react';
import { Container, Row, Col, Badge, Card, Accordion, Table, Button } from 'react-bootstrap';
import '../../styles/bodyhome.css';
import { useTheme } from '../../context/ThemeContext';

const ProfeBookSolution = () => {
    const { darkMode } = useTheme();

    return (
        <div className={`solution-page ${darkMode ? 'dark-mode' : ''}`} style={{ minHeight: '100vh' }}>
            <Container>

                {/* Header Promocional */}
                <section className="mb-5 text-center">
                    <Badge bg="warning" text="dark" className="mb-3 p-2 fs-6">🚀 Software para Docentes, Académicos e Investigadores</Badge>
                    <h1 className="display-4 theme-text-primary mb-3 fw-bold">ProfeBook Studio (Cátedra Studio) 📖🎓</h1>
                    <h3 className={`h5 mb-4 ${darkMode ? 'text-light' : 'text-secondary'}`} style={{ maxWidth: '850px', margin: '0 auto' }}>
                        La plataforma definitiva de arquitectura de contenido, generación contextualizada de prompts para IAs externas (ChatGPT, Claude, DeepSeek) y maquetación de libros PDF A4 a 300 DPI.
                    </h3>

                    <div className="mb-4 flex-wrap d-flex justify-content-center gap-2">
                        <Badge bg="primary" className="p-2">Compilador PDF A4</Badge>
                        <Badge bg="info" text="dark" className="p-2">Árbol N-Niveles</Badge>
                        <Badge bg="warning" text="dark" className="p-2">Prompt Maestro IA</Badge>
                        <Badge bg="dark" className="p-2">KaTeX & Math LaTeX</Badge>
                        <Badge bg="success" className="p-2">Glosario Automático A-Z</Badge>
                        <Badge bg="danger" className="p-2">Paginador DOM 1:1</Badge>
                        <Badge bg="secondary" className="p-2">Impresión 300 DPI</Badge>
                    </div>

                    <div className="mt-3">
                        <Button 
                            variant="primary" 
                            size="lg" 
                            href="https://github.com/romeraugustoo/ProfeBook.git" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="me-3 mb-2"
                        >
                            <i className="fab fa-github me-2"></i> Ver Repositorio en GitHub
                        </Button>
                    </div>
                </section>

                <hr className="theme-border-primary mb-5" />

                {/* 1. Propuesta de Valor y Disruptividad */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">💡 1. Propuesta de Valor & Solución Disruptiva</h2>
                    <Row className="align-items-center">
                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'danger' : 'danger'} h-100 p-3 shadow-sm`}>
                                <Card.Body>
                                    <h4 className="text-danger mb-3">❌ El Frustrante Problema Tradicional</h4>
                                    <p className={darkMode ? 'text-light' : 'text-dark'}>
                                        Al redactar libros o apuntes con ChatGPT, Claude o DeepSeek, los docentes enfrentan:
                                    </p>
                                    <ul>
                                        <li>Falta de jerarquía en la estructura de capítulos.</li>
                                        <li>Títulos repetidos y desorganización al concatenar respuestas.</li>
                                        <li>Duplicación de contenido y pérdida de contexto académico.</li>
                                        <li>Maquetación rota en PDF con tablas cortadas y hojas vacías.</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'success' : 'success'} h-100 p-3 shadow-sm`}>
                                <Card.Body>
                                    <h4 className="text-success mb-3">✅ La Revolución ProfeBook Studio</h4>
                                    <p className={darkMode ? 'text-light' : 'text-dark'}>
                                        ProfeBook actúa como un <strong>Arquitecto de Contenido y Compilador PDF</strong>:
                                    </p>
                                    <ul>
                                        <li>Diseña una estructura jerárquica en Árbol N-Niveles ilimitado.</li>
                                        <li>Educación a la IA mediante Prompts Maestros con <em>Breadcrumbs</em>.</li>
                                        <li>Smart Import sanitizado que limpia bloques <code>[METADATA]</code>.</li>
                                        <li>Impresión A4 física 1:1 a 300 DPI con Glosario A-Z automático.</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* 2. Diagrama de Arquitectura de Capas */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🏗️ 2. Arquitectura de Componentes y Capas</h2>
                    <p>
                        La plataforma está construida bajo una arquitectura modular desacoplada que separa la construcción del árbol, la generación del prompt, la sanitización del texto y la medición física A4:
                    </p>
                    <pre className={`p-4 rounded border ${darkMode ? 'bg-dark text-info border-info' : 'bg-light text-dark border-primary'}`} style={{ fontSize: '0.85rem', overflowX: 'auto' }}>
{`┌─────────────────────────────────────────────────────────────────────────┐
│                       CÁTEDRA STUDIO / PROFEBOOK                        │
└─────────────────────────────────────────────────────────────────────────┘
        │
        ├── 🎨 1. Diseñador Inicial & Estructura (ProjectSetupModal)
        │     └── DynamicTreeBuilder (Patrones recursivos, numeración y capitulada)
        │
        ├── 📁 2. Explorador de Directorios y Espacio de Trabajo (DirectoryTreeExplorer)
        │     ├── Nodos de Directorios y Sub-directorios
        │     └── Nodo Virtual: Glosario & Índice Alfabético (A-Z) en la raíz
        │
        ├── 🧙 3. Puente Generador de Prompt Maestro (PromptMaestroModal & promptGenerator)
        │     ├── Breadcrumb Dinámico (Ruta exacta en el libro)
        │     └── Metadatos Recomendados (Conceptos Clave, Subtema, Glosario, Profesor)
        │
        ├── 🧹 4. Analizador de Metadatos & Limpiador (metadataParser)
        │     └── Separador de cabeceras [METADATA] y cuerpo Markdown
        │
        ├── 🌲 5. Compilador Recursivo de Libro & Opciones (bookCompiler & BookBuilderModal)
        │     ├── Salto de página A4 automático por Unidad (# l1)
        │     └── Generador Automático de Glosario & Índice Alfabético (A-Z) en el TOC
        │
        └── 🖨️ 6. Motor de Visualización y Exportación PDF A4 (A4PagedPreview & pdfExport)
              ├── Portada Académica Configurable (CoverModal)
              ├── Paginación A4 basada en medición real del DOM (210mm x 297mm)
              └── Renderizado LaTeX KaTeX y tablas GFM a 300 DPI`}
                    </pre>
                </section>

                {/* 3. El Flujo Completo del Sistema en 6 Pasos */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🔄 3. El Ciclo de Vida del Contenido (6 Pasos)</h2>
                    <Row>
                        <Col lg={4} md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-info">1️⃣ El Origen (Árbol N-Niveles)</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Estructuración libre de carpetas y subcarpetas con numeración ordinal (Romana, Arábiga, Alfabética) y coordenadas únicas <code>Breadcrumb</code>.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-warning">2️⃣ Prompt Maestro Contextual</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Generación en 1-clic del prompt con el <em>Breadcrumb</em> exacto y las recomendaciones de sintaxis Markdown + KaTeX para la IA.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-success">3️⃣ Copy-Paste a la IA</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Transferencia del prompt al LLM de preferencia (ChatGPT, Claude, DeepSeek) para la redacción guiada sin perder contexto.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-danger">4️⃣ Bloque [METADATA]</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        La IA genera la entrada iniciando con el bloque estandarizado de cabecera y el cuerpo técnico en sintaxis limpia.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-primary">5️⃣ Smart Import</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        El analizador <code>metadataParser.ts</code> extrae la cabecera, sanitiza el texto visible y vincula el capítulo automáticamente.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100`}>
                                <Card.Body>
                                    <Card.Title className="text-info">6️⃣ Compilador & PDF A4</Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Paginación A4 física 1:1, generación del Glosario A-Z, Índice General TOC interactivo y exportación vectorial a 300 DPI.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* 4. Especificación del Bloque [METADATA] */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">📋 4. Especificación del Bloque [METADATA]</h2>
                    <p>
                        La cabecera de metadatos estandarizada educa a la IA para alimentar el Glosario Automático y la Ficha Técnica del Capítulo:
                    </p>
                    <pre className={`p-4 rounded border ${darkMode ? 'bg-dark text-success border-success' : 'bg-light text-dark border-success'}`}>
{`[METADATA]
Unidad: Unidad 1 - Límites y Continuidad de Funciones
Sección: Teoría
Capítulo: Conceptos Fundamentales de Límites
Tema: Análisis Matemático I - Límites de Funciones Reales
Subtema: Definición Épsilon-Delta, Propiedades Algebraicas y Límites Notables
Conceptos Clave: Límite de una función, Definición Épsilon-Delta, Entorno, Límite Lateral, Teorema de Unicidad, Indeterminación, Límites Notables
Glosario: Límite de una función: Valor L al que se aproxima f(x) cuando x tiende a un punto a.
Profesor: Cátedra de Análisis Matemático I (Augusto)

# 1. Definición Formal de Límite
Sea f(x) una función definida en un entorno reducido de a...
$$\\lim_{x \\to a} f(x) = L \\iff \\forall \\varepsilon > 0, \\exists \\delta > 0 : 0 < |x - a| < \\delta \\implies |f(x) - L| < \\varepsilon$$`}
                    </pre>
                </section>

                {/* 5. Demostración de Sintaxis Soporte LaTeX / Markdown */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🧪 5. Demostración de Sintaxis LaTeX / KaTeX & Markdown</h2>
                    <Table responsive striped bordered hover variant={darkMode ? "dark" : "light"}>
                        <thead>
                            <tr>
                                <th>Elemento</th>
                                <th>Sintaxis Entrada Markdown / LaTeX</th>
                                <th>Resultado en el PDF A4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Integral Definida</strong></td>
                                <td><code>{"$$\\int_{a}^{b} f(x) dx = F(b) - F(a)$$"}</code></td>
                                <td>Ecuación centrada vectorial en KaTeX a 300 DPI</td>
                            </tr>
                            <tr>
                                <td><strong>Límite Indeterminado</strong></td>
                                <td><code>{"$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$"}</code></td>
                                <td>Renderizado de fracción y función trigonométrica</td>
                            </tr>
                            <tr>
                                <td><strong>Salto de Página Manual</strong></td>
                                <td><code>&lt;div class="page-break"&gt;&lt;/div&gt;</code></td>
                                <td>Fuerza la creación de una nueva hoja física A4</td>
                            </tr>
                            <tr>
                                <td><strong>Tablas GFM</strong></td>
                                <td><code>| Variable | Tipo | Descripción |</code></td>
                                <td>Desglose fino por filas en hojas A4 contiguas</td>
                            </tr>
                        </tbody>
                    </Table>
                </section>

                {/* 6. Retos Técnicos de Ingeniería */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">⚙️ 6. Retos Técnicos de Ingeniería Superados</h2>
                    <Row>
                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-primary d-flex align-items-center gap-2">
                                        📏 Paginador Físico A4 Dinámico 1:1 (A4PagedPreview.tsx)
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Crea un área de medición fuera de pantalla, evalúa la altura exacta del DOM (297mm), divide las listas UL / OL y filas de tabla, y escala responsivamente la vista mediante transform: scale().
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-warning d-flex align-items-center gap-2">
                                        📌 Sincronización Determinista del TOC (toc-N)
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Inyecta marcadores únicos (§§toc-X§§) en títulos duplicados (ej: "Teoría") y escanea las tarjetas físicas A4 para registrar el número de página real e infalible en el Índice General.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-success d-flex align-items-center gap-2">
                                        🔤 Compilador de Glosario Alfabético A-Z
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Escanea todas las etiquetas de metadatos y sintetiza una sección de Glosario ordenada alfabéticamente al final del tomo, figurando en el Índice General.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className="mb-4">
                            <Card bg={darkMode ? "dark" : "light"} className={`border-${darkMode ? 'secondary' : 'dark'} h-100 shadow-sm`}>
                                <Card.Body>
                                    <Card.Title className="text-danger d-flex align-items-center gap-2">
                                        💾 Importación/Exportación Completa de Workspace (.json)
                                    </Card.Title>
                                    <Card.Text className={darkMode ? 'text-light' : 'text-dark'}>
                                        Permite respaldar y restaurar el workspace completo con 1-clic, conservando directorios, contenidos, tapas personalizadas e historial de versiones.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* 7. Stack Tecnológico Completo */}
                <section className="mb-5">
                    <h2 className="theme-text-primary mb-4">🛠️ 7. Stack Tecnológico Completo</h2>
                    <Row>
                        <Col md={4} className="mb-3">
                            <h5 className="text-info">Core Frontend</h5>
                            <ul>
                                <li>React 19 & Vite 5</li>
                                <li>TypeScript 5</li>
                                <li>Tailwind CSS & Typography</li>
                            </ul>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h5 className="text-warning">Procesamiento de Texto & Math</h5>
                            <ul>
                                <li>React-Markdown</li>
                                <li>KaTeX (LaTeX Renderer)</li>
                                <li>Remark-Math & Rehype-Katex</li>
                                <li>Remark-Breaks & Remark-GFM</li>
                            </ul>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h5 className="text-success">Motor PDF & Build</h5>
                            <ul>
                                <li>DOM Physical Measurement Engine</li>
                                <li>CSS Print Media (@page A4)</li>
                                <li>Puppeteer Vectorial PDF Export</li>
                            </ul>
                        </Col>
                    </Row>
                </section>

            </Container>
        </div>
    );
};

export default ProfeBookSolution;
