import mimusica from '../assets/images/portfolio/MiMusicaOrganizada.webp';
import rapiburger from '../assets/images/portfolio/Rapiburger.webp';
import relicario from '../assets/images/portfolio/Relicario.webp';
import portfolio from '../assets/images/portfolio/portfolioIcon.webp';
import portfolioV2 from '../assets/images/portfolio/PortfolioV2.webp';
import tslc from '../assets/images/portfolio/TransporteSantaLucia.webp';
import profebook from '../assets/images/portfolio/ProfeBook.webp';
import seamospuente from '../assets/images/portfolio/SeamosPuente.webp';
import motoe6s from '../assets/images/portfolio/MotoE6s.webp';
import espanaImg from '../assets/images/portfolio/españa.webp';

export const PROJECT_CATEGORIES = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'saas-fintech', label: 'SaaS & FinTech' },
    { id: 'security-hardware', label: 'Ciberseguridad & Hardware' },
    { id: 'ai-agents', label: 'IA & Sistemas Autónomos' },
    { id: 'fullstack', label: 'Full-Stack Corporativo' },
    { id: 'creative-3d', label: 'Web 3D & Simulación' }
];

export const projectsData = [
    // ==========================================
    // SECCIÓN 1: PROYECTOS DISPONIBLES (DEMO EN VIVO)
    // ==========================================
    {
        id: 'motoe6s',
        title: 'Auditoría de Seguridad en Sistemas Embebidos (MediaTek)',
        subtitle: 'Bypass BROM, aislamiento de Little Kernel y verificación de integridad eMMC RPMB',
        tier: 1,
        featured: true,
        category: 'security-hardware',
        impactMetric: '🔬 Diagnóstico Concluyente · 48.5h Sprint de Investigación',
        contextNote: 'Sprint intensivo de investigación para aislar fallas físicas vs. firmware sin sustitución ciega de hardware.',
        techStack: ['Python', 'libusb Linux', 'SEJ Crypto Engine', 'ARMv8-A', 'eMMC 5.1', 'AVB 2.0'],
        image: motoe6s,
        website: 'https://e6s.netlify.app/',
        github: 'https://github.com/romeraugustoo',
        solutionRoute: '/solution/motoe6s',
        description: 'Auditoría de bajo nivel en procesadores MediaTek Helio P22 para desambiguar protecciones anti-rollback, aislamiento de claves simétricas HMAC-SHA256 y diagnóstico concluyente de memoria.'
    },
    {
        id: 'portfolio',
        title: 'Portafolio Augusto v2.0 — Metamorfosis Tri-Modo',
        subtitle: 'Arquitectura SPA con 3 Modos Reactivos: Desarrollador & CTO, Consola Linux CLI & Estudio 3D',
        tier: 1,
        featured: true,
        category: 'creative-3d',
        impactMetric: '🔮 3 Modos de Vista Reactivos · 60-144 FPS WebGL & Consola CLI',
        contextNote: 'Arquitectura desacoplada en React 18 con renderizado condicional optimizado y cero dependencias pesadas innecesarias.',
        techStack: ['React 18', 'Vite', 'Three.js / Canvas', 'Clean Architecture', 'Netlify Edge', 'CSS 3D Rigging'],
        image: portfolioV2,
        website: 'https://augustoromera.netlify.app/',
        hasCustomScreenshot: true,
        github: 'https://github.com/Augustoromera/PortafolioAugusto2023Frontend/tree/v2.0',
        solutionRoute: '/solution/portfolio',
        description: 'Frontend reactivo de alta gama con metamorfosis instantánea entre 3 personalidades de ingeniería: Modo Ejecutivo CTO, Consola Linux CLI interactiva con comandos de kernel, y Estudio Creativo 3D con aceleración gráfica.'
    },
    {
        id: 'mimusica',
        title: 'Mi Música Organizada',
        subtitle: 'Automatizador multimedia local, reproductor de audio y catalogador ID3 offline',
        tier: 2,
        category: 'fullstack',
        impactMetric: '🎵 $0 Infra Cloud · Procesamiento Local Asíncrono',
        contextNote: 'Procesamiento de librerías locales no bloqueante mediante WebSockets sin costos de servidores en la nube.',
        techStack: ['Python 3.13', 'FastAPI', 'WebSockets', 'Mutagen ID3', 'FFmpeg', 'PyInstaller'],
        image: mimusica,
        website: 'https://mimusicaorganizada.netlify.app/',
        github: 'https://github.com/romeraugustoo/myorganizedsound',
        solutionRoute: '/solution/mimusica',
        description: 'Aplicación para organización automática, catalogación y streaming de librerías de audio 100% local. Implementa backend asíncrono con FastAPI, telemetría bidireccional por WebSockets, inyección de metadatos ID3 y arquitectura zero-cloud.'
    },
    {
        id: 'tslc',
        title: 'Transporte Santa Lucía (TSLC)',
        subtitle: 'Sistema ERP de logística y trazabilidad de flota interurbana',
        tier: 2,
        category: 'fullstack',
        impactMetric: '🚛 Trazabilidad Operativa · Java Spring Boot Enterprise',
        contextNote: 'Modelado C4 integral para despacho de unidades, control de mantenimiento y roles administrativos.',
        techStack: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap 5', 'Hibernate', 'Docker'],
        image: tslc,
        website: 'https://transportesantalucia.netlify.app/',
        github: '#',
        solutionRoute: '/solution/tslc',
        description: 'Plataforma integral de gestión de transporte de pasajeros, control de despachos y administración de personal con arquitectura enterprise.'
    },
    {
        id: 'portfolio-v1',
        title: 'Portafolio Augusto v1.0 (Edición 2024)',
        subtitle: 'Diseño interactivo con avatar reactivo, modo oscuro/claro y selector dinámico de paletas',
        tier: 2,
        category: 'creative-3d',
        impactMetric: '🎨 Avatar Interactivo & Modos Dinámicos · SPA React 18',
        contextNote: 'Desarrollo enfocado en animaciones responsivas, transiciones de tema y tarjetas interactivas novedosas para 2024.',
        techStack: ['React 18', 'Vite', 'Context API', 'Bootstrap 5', 'CSS Keyframes', 'ScrollReveal'],
        image: portfolio,
        website: 'https://augustoromerav1.netlify.app/',
        hasCustomScreenshot: true,
        github: 'https://github.com/Augustoromera/PortafolioAugusto2023Frontend/tree/main',
        solutionRoute: '/solution/portfolio-v1',
        description: 'Primera iteración interactiva del portafolio: implementa avatar 2D con rigging de parpadeo, sistema de temas multi-paleta en tiempo real, efectos 3D en tarjetas y diseño responsivo adaptado para 2024.'
    },
    {
        id: 'taller-espana',
        title: 'España Diesel — Taller de Inyección',
        subtitle: 'Plataforma de diagnóstico interactivo, catálogo de 6 servicios especializados y Máximo SEO',
        tier: 3,
        category: 'fullstack',
        impactMetric: '⚡ 100/100 PageSpeed & SEO · Diagnóstico Interactivo',
        contextNote: 'Estructuración semántica completa con JSON-LD y selector dinámico de fallas mecánicas.',
        techStack: ['React 19', 'Vite', 'Local SEO Schema.org', 'WhatsApp API', 'Netlify Edge'],
        image: espanaImg,
        website: 'https://dieselconcepcion.com.ar/',
        hasCustomScreenshot: true,
        github: 'https://github.com/romeraugustoo',
        solutionRoute: '/solution/taller-espana',
        description: 'Plataforma comercial y técnica con selector interactivo de síntomas en cuadrícula móvil 2x3, catálogo simétrico de 6 servicios diésel/nafta y arquitectura de Máximo SEO Local certificada con 100/100 en PageSpeed.'
    },
    {
        id: 'rapiburger',
        title: 'RapiBurger E-Commerce',
        subtitle: 'Sistema gastronómico de pedidos con carrito en tiempo real y panel de stock',
        tier: 3,
        category: 'fullstack',
        impactMetric: '🍔 Control de Comandas & Stock · Stack React + Node',
        contextNote: 'Arquitectura completa con catálogo dinámico, persistencia en MongoDB y gestión de pedidos.',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Auth'],
        image: rapiburger,
        website: 'https://rapiburger.netlify.app/',
        github: 'https://github.com/Augustoromera/Group-3-proyecto-final-Rolling-Code',
        solutionRoute: '/solution/rapiburguer',
        description: 'Solución e-commerce para restaurantes con catálogo dinámico, gestión de comandas y panel administrativo con control de stock.'
    },
    {
        id: 'seamospuente',
        title: 'ONG Seamos Puente',
        subtitle: 'Portal institucional de donaciones y proyectos comunitarios',
        tier: 3,
        category: 'fullstack',
        impactMetric: '🤝 Trazabilidad de Proyectos · Portal Institucional',
        contextNote: 'Canal digital transparente para captación de fondos y seguimiento de impacto social.',
        techStack: ['React', 'Bootstrap 5', 'Node.js', 'Express', 'Netlify'],
        image: seamospuente,
        website: 'https://seamospuente.netlify.app/',
        github: 'https://github.com/romeraugustoo/seamospuente.git',
        solutionRoute: '/solution/seamospuente',
        description: 'Portal web para visibilización de causas comunitarias, captación de voluntarios e integración con pasarelas de donación.'
    },

    // ==========================================
    // SECCIÓN 2: PROYECTOS PRIVADOS / EN DESARROLLO
    // ==========================================
    {
        id: 'nexus-shop',
        title: 'NEXUS-Shop & Servidor Microservicios',
        subtitle: 'E-commerce reactivo con backend concurrente, arquitectura multicapa y pasarela de pagos',
        tier: 1,
        featured: true,
        category: 'saas-fintech',
        impactMetric: '💳 Transacciones ACID · Arquitectura Clean Multicapa',
        contextNote: 'Separación estricta entre capa de dominio, persistencia relacional y endpoints stateless documentados.',
        techStack: ['React', 'Java 21 (Spring Boot)', 'PostgreSQL', 'Docker', 'JWT Auth', 'Hibernate'],
        image: portfolio,
        website: '',
        github: 'https://github.com/romeraugustoo/nexus-shop',
        solutionRoute: '/solution/nexus',
        description: 'Ecosistema de comercio electrónico con balanceo de carga, persistencia relacional estricta, arquitectura stateless y endpoints REST documentados.'
    },
    {
        id: 'prestamo-seguro',
        title: 'Préstamo Seguro V1 (FinTech Engine)',
        subtitle: 'Motor de scoring crediticio, amortización financiera y auditoría de riesgos',
        tier: 1,
        featured: true,
        category: 'saas-fintech',
        impactMetric: '📊 Sistema Francés / Alemán · Validación en Tiempo Real',
        contextNote: 'Cálculo algorítmico automatizado de cuadros de marcha financiera con validación en tiempo real.',
        techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Jest'],
        image: portfolio,
        website: '',
        github: 'https://github.com/romeraugustoo/prestamo-seguro',
        solutionRoute: '/solution/prestamo',
        description: 'Plataforma FinTech para cálculo automatizado de cuadros de marcha financiera, validación de ingresos y análisis predictivo de riesgo crediticio.'
    },
    {
        id: 'loopai',
        title: 'LoopAI — Orquestación de Cómputo Concurrente [Confidencial]',
        subtitle: 'Arquitectura distribuida de procesamiento asíncrono con WebSockets y benchmarking',
        tier: 1,
        featured: true,
        isProtected: true,
        category: 'ai-agents',
        impactMetric: '⚡ Concurrencia Asíncrona · <200ms Latencia en Streaming',
        contextNote: 'Pipeline diseñado para procesamiento continuo de eventos sin bloqueo de hilos de ejecución.',
        techStack: ['Python', 'Rust (WASM)', 'WebSockets', 'PostgreSQL', 'Docker', 'Benchmarking'],
        image: portfolio,
        website: '',
        github: '#',
        solutionRoute: '/solution/loopai',
        description: 'Plataforma confidencial de alta eficiencia para orquestación de tareas computacionales complejas, evaluación de latencia en tiempo real y ejecución asíncrona optimizada.'
    },
    {
        id: 'educabot-3d',
        title: 'Educabot XRP 3D Simulator',
        subtitle: 'Entorno de simulación física y robótica educativa en el navegador',
        tier: 2,
        category: 'creative-3d',
        impactMetric: '🤖 60 FPS WebGL · Cinemática Inversa en Tiempo Real',
        contextNote: 'Simulación de cuerpos rígidos y cinemática en Canvas sin necesidad de software instalado.',
        techStack: ['Three.js', 'JavaScript ES6', 'WebGL', 'Physics Engine', 'HTML5 Canvas'],
        image: portfolio,
        website: '',
        github: 'https://github.com/romeraugustoo/educabot-3d',
        solutionRoute: '/solution/educabot',
        description: 'Simulador 3D en tiempo real para programación de robots educativos con detección de colisiones y renderizado acelerado por hardware.'
    },
    {
        id: 'intercalador-pdf',
        title: 'Intercalador Cut & Stack PDF',
        subtitle: 'Herramienta de imposición editorial y maquetación para impresión dúplex',
        tier: 2,
        category: 'fullstack',
        impactMetric: '📄 Algoritmo Cut & Stack · Imposición Automatizada A4/A5',
        contextNote: 'Elimina errores humanos de ordenamiento en imprenta mediante partición matemática del pliego.',
        techStack: ['Python', 'PyPDF2 / pypdf', 'ReportLab', 'Tkinter'],
        image: portfolio,
        website: '',
        github: 'https://github.com/romeraugustoo',
        solutionRoute: '/solution/intercalador',
        description: 'Software de automatización editorial para conversión e imposición de pliegos de libros y cuadernillos. Implementa algoritmos de corte horizontal al centro (Cut & Stack) y reordenamiento dúplex matemático para encuadernación directa.'
    },
    {
        id: 'relicario',
        title: 'Relicario — Precision Print & Bézier Engine',
        subtitle: 'Motor de micro-calce fotográfico a 300 DPI con análisis dinámico de curvas Bézier SVG',
        tier: 3,
        category: 'fullstack',
        impactMetric: '📐 Calce 15mm a 300 DPI · Automatización de Trazados',
        contextNote: 'Parser vectorial que calcula el área útil y escala a milímetros exactos para producción física de joyería.',
        techStack: ['Python', 'Pillow / OpenCV', 'SVG Bézier Parser', 'ReportLab PDF', 'Matplotlib'],
        image: relicario,
        website: '',
        github: 'https://github.com/romeraugustoo/relicario-project',
        solutionRoute: '/solution/relicario',
        isProtected: true,
        inDevelopment: true,
        description: 'Sistema de computación gráfica y automatización de corte para joyería y relicarios a escala real. Analiza e interpreta dinámicamente trazados vectoriales (M, C, L, Z), calibra offsets geométricos con precisión milimétrica (15mm) y genera pliegos PDF de ultra alta resolución listos para micro-impresión.'
    },
    {
        id: 'profebook',
        title: 'ProfeBook Studio',
        subtitle: 'Ecosistema de gestión académica y estructuración curricular asistida',
        tier: 3,
        category: 'ai-agents',
        impactMetric: '📚 Estructuración Curricular · API REST Reactiva',
        contextNote: 'Estandarización de planificaciones docentes y trazabilidad pedagógica institucional.',
        techStack: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Bootstrap 5'],
        image: profebook,
        website: '',
        github: 'https://github.com/romeraugustoo/ProfeBook.git',
        solutionRoute: '/solution/profebook',
        isProtected: true,
        description: 'Plataforma de asistencia docente para planificación curricular y generación de contenido pedagógico estructurado.'
    },
    {
        id: 'bar-app',
        title: 'Bar Management Full-Stack SaaS',
        subtitle: 'Sistema desacoplado de digitalización para bares con TPV Táctil, Menú QR y roles RBAC',
        tier: 3,
        category: 'fullstack',
        impactMetric: '🍹 Control Multi-Rol (Dueño / Manager / Mozo) · TPV & QR',
        contextNote: 'Sincronización en tiempo real entre toma de comandas móviles en mesa y visualización de caja.',
        techStack: ['React 18', 'Flask 3', 'PostgreSQL (Supabase)', 'Vite', 'Bootstrap 5', 'Render'],
        image: portfolio,
        website: '',
        github: 'https://github.com/romeraugustoo',
        solutionRoute: '/solution/bar-app',
        description: 'Plataforma integral para hostelería con arquitectura multi-rol: panel de dueño con métricas de facturación y personal, catálogo del gerente con disponibilidad en vivo, terminal TPV táctil para comandas de mozos por mesa, y menú móvil descargable mediante código QR con botón de llamado al mozo.'
    },
    {
        id: 'transcriptor-ia',
        title: 'Transcriptor de Audio & Video IA (Faster-Whisper)',
        subtitle: 'Pipeline acelerado por GPU (12x-20x) con detección de voz VAD y exportación multi-formato',
        tier: 3,
        category: 'ai-agents',
        impactMetric: '🎙️ Transcripción 12x-20x Tiempo Real · Filtrado VAD & CUDA',
        contextNote: 'Optimización con CTranslate2 para ejecución local eficiente sin depender de costos por minuto en APIs.',
        techStack: ['Python', 'Faster-Whisper', 'CTranslate2', 'PyTorch / CUDA', 'FFmpeg', 'Google Colab'],
        image: portfolio,
        website: '',
        github: 'https://github.com/romeraugustoo',
        solutionRoute: '/solution/transcriptor',
        description: 'Pipeline de alta eficiencia para conversión ultrarrápida de audio y video a texto usando modelos Whisper optimizados con CTranslate2 y filtrado VAD anti-silencios. Genera simultáneamente transcripciones limpias (.txt), subtítulos sincronizados (.srt) y subtítulos web (.vtt), ejecutable localmente o en Google Colab con aceleración GPU.'
    },
    {
        id: 'cartas-poker',
        title: 'Custom Deck & Card Design Studio',
        subtitle: 'Motor de diseño, maquetación e imposición para barajas y naipes personalizados desde cero',
        tier: 3,
        category: 'creative-3d',
        impactMetric: '🃏 Procesamiento por Lotes · Imposición Gráfica & Estuche',
        contextNote: 'Pipeline visual para maquetar lotes masivos de naipes y generar pliegos de corte listos para imprenta.',
        techStack: ['React', 'TypeScript', 'TailwindCSS', 'Canvas API', 'Print Imposition', 'Vite'],
        image: portfolio,
        website: '',
        github: 'https://github.com/romeraugustoo',
        solutionRoute: '/solution/poker',
        description: 'Entorno de software interactivo para crear y maquetar barajas completas desde cero. Permite diseñar y personalizar cada carta individualmente, procesar cargas masivas de imágenes por lotes, generar pliegos de imposición listos para imprenta y configurar estuches a medida con previsualización en vivo.'
    },
    {
        id: 'gemini-integration',
        title: 'BYOK AI Assistant & Persona Studio',
        subtitle: 'Orquestador de agentes inteligentes Bring-Your-Own-Key con prompts y personalización de contexto',
        tier: 3,
        category: 'ai-agents',
        impactMetric: '🧠 Arquitectura BYOK Privada · Streaming en Tiempo Real',
        contextNote: 'Aislamiento de credenciales en el cliente con almacenamiento cifrado y sin intermediarios.',
        techStack: ['React', 'TypeScript', 'Google Gemini API', 'Local Storage Encryption', 'Vite', 'TailwindCSS'],
        image: portfolio,
        website: '',
        github: 'https://github.com/romeraugustoo',
        solutionRoute: '/solution/gemini',
        description: 'Plataforma modular para personalizar y orquestar chatbots con arquitectura BYOK (Bring Your Own Key), permitiendo a cada usuario conectar de forma segura sus propias credenciales de IA (Gemini, OpenAI, Claude). Incluye configuración de personalidades, prompts del sistema, persistencia local cifrada y respuestas en streaming sin vendor lock-in.'
    }
];

export const getCategoryCounts = (projects = projectsData) => {
    const counts = { all: projects.length };
    PROJECT_CATEGORIES.forEach(cat => {
        if (cat.id !== 'all') {
            counts[cat.id] = projects.filter(p => p.category === cat.id).length;
        }
    });
    return counts;
};
