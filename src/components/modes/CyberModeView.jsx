import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useMagic } from '../../context/MagicContext';
import { projectsData } from '../../data/projects';
import curriculumPDF from '../../assets/files/Curriculum Vitae augusto.pdf';

const INITIAL_LOGS = [
    { type: 'system', text: '========================================================================' },
    { type: 'system', text: '🔒 AUGUSTO ROMERA — KERNEL TELEMETRY & SECURITY CONSOLE v2.0' },
    { type: 'system', text: 'Arquitectura: ARM64 / x86_64 | Host: utn-frt-systems | Estado: ONLINE' },
    { type: 'system', text: 'Escribe "/" o un comando para ver sugerencias y autocompletado en vivo.' },
    { type: 'system', text: '========================================================================' },
    { type: 'info', text: 'Tip: Escribe "/" o presiona Tab para autocompletar comandos rápidos.' }
];

const MOTOE6S_STREAM_STEPS = [
    // --- FASE 1: DESCARTE RÁPIDO LÓGICO ---
    { delay: 120, type: 'info', text: '⚡ INVOCANDO TELEMETRÍA AVANZADA: MOTOROLA MOTO E6S (XT2053-2 / Helio P22)' },
    { delay: 180, type: 'warn', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
    { delay: 100, type: 'warn', text: '[FASE 1/5] AUDITORÍA DE SOFTWARE & VECTORES DE PRIVILEGIOS' },
    { delay: 100, type: 'warn', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
    { delay: 140, type: 'normal', text: '  ├─ Dispositivo Target: Motorola Moto E6s (XT2053-2) · Codename: fiji_64' },
    { delay: 120, type: 'normal', text: '  ├─ Firmware Base: Android 9.0 Pie (Build POES29.288-60-6-1-29, Patch 01/01/2022)' },
    { delay: 120, type: 'normal', text: '  ├─ Kernel: Linux 4.9.117+ (aarch64-linux-android-gcc 4.9)' },
    { delay: 200, type: 'normal', text: '  ├─ Verificando vector local UID 0: CVE-2020-0069 (mtk-su v2.1.4)...' },
    { delay: 350, type: 'danger', text: '  └─ [!] Error ioctl CMDQ_IOCTL_EXEC_COMMAND: Operation not permitted (Mitigado en kernel).' },
    { delay: 200, type: 'accent', text: '  └─ [DECISIÓN FUNCIONAL] Vía lógica descartada en <2h. Se transiciona a vector bare-metal.' },

    // --- FASE 2: INTERCEPCIÓN DINÁMICA DE TRÁFICO RSA ---
    { delay: 350, type: 'warn', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
    { delay: 100, type: 'warn', text: '[FASE 2/5] INTERCEPCIÓN DINÁMICA DE TRÁFICO RSA (SOFTWARE FIX)' },
    { delay: 100, type: 'warn', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
    { delay: 150, type: 'normal', text: '  ├─ Hooking pipes del proceso LMSA.exe (Lenovo Rescue and Smart Assistant)...' },
    { delay: 180, type: 'normal', text: '  ├─ Interceptando handshake Fastboot OEM get_st_sig_chal...' },
    { delay: 220, type: 'normal', text: '  ├─ Challenge interceptado: [64B HEX] 9A F4 3D 11 C8 2B 00 E4 71 D2 A9 FF 01 8B 3C...' },
    { delay: 200, type: 'normal', text: '  ├─ Inyectando certificado de rescate RSA-4096 en buffer USB de transferencia...' },
    { delay: 300, type: 'danger', text: '  └─ [!] Little Kernel rechaza firma no-emparejada con el silicio (Red State barrier).' },

    // --- FASE 3: DESAMBIGUACIÓN ESQUEMÁTICA Y TESTPOINT ---
    { delay: 350, type: 'warn', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
    { delay: 100, type: 'warn', text: '[FASE 3/5] DESAMBIGUACIÓN ESQUEMÁTICA & TESTPOINT TP1500' },
    { delay: 100, type: 'warn', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
    { delay: 150, type: 'normal', text: '  ├─ Manual de servicio oficial Lemcell indica testpoints TP1501 y TP1506.' },
    { delay: 220, type: 'danger', text: '  ├─ [!] TP1501/1506 activan eFuses de trampa -> Forzado a Preloader VCOM (0E8D:2000).' },
    { delay: 250, type: 'success', text: '  ├─ Análisis microscópico de trazas de PCB: Se aísla TP1500 real oculto bajo chasis.' },
    { delay: 200, type: 'accent', text: '  ├─ Aislamiento físico de batería + Puente TP1500 a GND (Chasis)...' },
    { delay: 350, type: 'success', text: '  └─ [+] ¡ÉXITO! SoC forzado a BootROM Puro en Bus USB: [VID: 0x0E8D | PID: 0x0003]' },

    // --- FASE 4: CIRUGÍA BARE-METAL & KAMAKIRI EXPLOIT ---
    { delay: 350, type: 'warn', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
    { delay: 100, type: 'warn', text: '[FASE 4/5] CIRUGÍA BARE-METAL EN LINUX & BYPASS CRIPTOGRÁFICO' },
    { delay: 100, type: 'warn', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
    { delay: 150, type: 'normal', text: '  ├─ [libusb] Abriendo endpoint crudo ep0 / ep1 en Linux Server...' },
    { delay: 180, type: 'normal', text: '  ├─ Handshake Sync: 0xa0 0x0a 0x50 0x05 -> Handshake ACK: 0x5f' },
    { delay: 150, type: 'normal', text: '  ├─ Identificación de Silicio MediaTek Helio P22 (MT6765 / MT6762):' },
    { delay: 100, type: 'info', text: '  │   • HW Code: 0x0766 | Subcode: 0x8a00 | HW Ver: 0xca00 | SW Ver: 0x0000' },
    { delay: 100, type: 'info', text: '  │   • Target Config: 0xE5 (SBC=True, DAA=True, SLA=False, SWJTAG=True)' },
    { delay: 100, type: 'info', text: '  │   • ME_ID:  FE433F1378ED842765CFC210C552194F' },
    { delay: 100, type: 'info', text: '  │   • SOC_ID: 98E8ACF7C4876148DDEC961EB74EE768398FB4C0247578609AF32BCB3D28D56C' },
    { delay: 200, type: 'normal', text: '  ├─ Desactivando Watchdog Timer en dirección de registro 0x10007000... OK' },
    { delay: 250, type: 'normal', text: '  ├─ Inyectando payload Kamakiri (1,480 bytes) por buffer overflow en RAM (0x00102100)...' },
    { delay: 380, type: 'success', text: '  ├─ [████████████████████████████████] 100% -> SLA/DAA Security Check BYPASSED!' },
    { delay: 200, type: 'normal', text: '  ├─ Parseando Tabla de Particiones GUID (PGPT - 48 particiones encontradas)...' },
    { delay: 100, type: 'info', text: '  │   • [01] boot_a       (0x00000000 -> 0x02000000) [32.0 MB]' },
    { delay: 100, type: 'info', text: '  │   • [08] seccfg       (0x04000000 -> 0x04800000) [ 8.0 MB] <-- SECURITY BLOCK' },
    { delay: 100, type: 'info', text: '  │   • [14] nvram        (0x08000000 -> 0x08500000) [ 5.0 MB]' },
    { delay: 100, type: 'info', text: '  │   • [21] frp          (0x0c000000 -> 0x0c100000) [ 1.0 MB]' },
    { delay: 100, type: 'info', text: '  │   • [32] proinfo      (0x12000000 -> 0x12300000) [ 3.0 MB]' },
    { delay: 200, type: 'normal', text: '  ├─ Volcando bloque seccfg original... SHA256: 7d8f31b8a4c102b4e9f...' },
    { delay: 250, type: 'normal', text: '  ├─ Despertando coprocesador criptográfico de hardware SEJ (HACC) en 0x10001000...' },
    { delay: 300, type: 'normal', text: '  ├─ Invocando cálculo de HMAC-SHA256 con Hardware Root Key acoplada al silicio...' },
    { delay: 250, type: 'normal', text: '  ├─ Modificando flags de seccfg [MAGIC: 0x4D544B4C] -> UNLOCK_FLAGS: [0x55, 0xAA, 0x55, 0xAA]' },
    { delay: 350, type: 'success', text: '  └─ [+] Bloque seccfg re-firmado y escrito en Samsung eMMC (KMQE60013M-B318).' },

    // --- FASE 5: LA FRONTERA DEL SILICIO & VEREDICTO ---
    { delay: 350, type: 'warn', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
    { delay: 100, type: 'warn', text: '[FASE 5/5] VERIFICACIÓN EN FASTBOOT & ANÁLISIS DE HARDENING eMMC RPMB' },
    { delay: 100, type: 'warn', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
    { delay: 200, type: 'normal', text: '  ├─ Reiniciando dispositivo en modo Fastboot de diagnóstico...' },
    { delay: 180, type: 'normal', text: '  ├─ Extrayendo variables de bootloader: fastboot getvar all...' },
    { delay: 100, type: 'info', text: '  │   (bootloader) version-baseband: MOLY.LR12A.R3.MP.V104.P8' },
    { delay: 100, type: 'info', text: '  │   (bootloader) product: fiji_64' },
    { delay: 100, type: 'info', text: '  │   (bootloader) secure: yes' },
    { delay: 100, type: 'info', text: '  │   (bootloader) rpmb-provisioned: yes (Samsung eMMC 32GB)' },
    { delay: 120, type: 'danger', text: '  │   (bootloader) unlocked: no' },
    { delay: 120, type: 'danger', text: '  │   (bootloader) slot-unbootable:a: yes' },
    { delay: 250, type: 'accent', text: '  └─ [DESCUBRIMIENTO ARQUITECTÓNICO]: El Little Kernel 2nd Stage realiza validación cruzada' },
    { delay: 150, type: 'accent', text: '     entre la partición lógica seccfg y el bloque físico RPMB aprovisionado en fábrica.' },

    // --- VEREDICTO FINAL ---
    { delay: 350, type: 'success', text: '════════════════════════════════════════════════════════════════════════' },
    { delay: 100, type: 'success', text: '🎯 VEREDICTO DE AUDITORÍA CONCLUYENTE · 48.5h SPRINT DE INGENIERÍA' },
    { delay: 100, type: 'success', text: '════════════════════════════════════════════════════════════════════════' },
    { delay: 150, type: 'normal', text: '1. Causa Raíz Aislada: Bloqueo irrevocable en silicio Samsung eMMC RPMB.' },
    { delay: 150, type: 'normal', text: '2. Decisión de Negocio: Se evitó el cambio ciego e innecesario de periféricos de hardware.' },
    { delay: 150, type: 'normal', text: '3. Evidencia Científica: Telemetría irrefutable registrada en 4 capas de abstracción.' },
    { 
        delay: 200, 
        type: 'cta-button', 
        text: 'Abrir Caso de Estudio Completo (Moto E6s)',
        url: 'https://e6s.netlify.app/',
        external: true
    }
];

const COMMAND_REGISTRY = [
    {
        name: 'help',
        slash: '/help',
        aliases: ['help', '/help', '?', 'ayuda', 'man', 'comandos', '/comandos'],
        desc: 'Muestra la lista de comandos disponibles',
        category: 'general'
    },
    {
        name: 'audit motoe6s',
        slash: '/audit motoe6s',
        aliases: ['audit motoe6s', 'audit moto e6s', '/audit motoe6s', '/audit moto e6s', 'motoe6s', 'moto e6s', 'e6s', '/e6s'],
        desc: 'Telemetría forense MT6765, Little Kernel & eMMC RPMB (Secuencia en Vivo)',
        category: 'security'
    },
    {
        name: 'audit mimusica',
        slash: '/audit mimusica',
        aliases: ['audit mimusica', 'audit mi musica', '/audit mimusica', '/audit mi musica', 'mimusica', 'mi musica'],
        desc: 'Telemetría de audio local, WebSockets & $0 Zero-Cloud Infra',
        category: 'security'
    },
    {
        name: 'projects',
        slash: '/projects',
        aliases: ['projects', '/projects', 'proyectos', '/proyectos', 'ls', 'dir', 'catalogo'],
        desc: 'Lista el catálogo completo de 18 proyectos desarrollados',
        category: 'projects'
    },
    {
        name: 'projects --tier=1',
        slash: '/projects --tier=1',
        aliases: ['projects --tier=1', '/projects --tier=1', 'tier1', '/tier1', 'top'],
        desc: 'Filtra únicamente los proyectos Core de alto impacto',
        category: 'projects'
    },
    {
        name: 'cat about.log',
        slash: '/about',
        aliases: ['cat about.log', 'about', '/about', 'perfil', 'bio', 'sobre mi', 'sobremi'],
        desc: 'Bitácora del perfil profesional, rol funcional y misión',
        category: 'info'
    },
    {
        name: 'stack',
        slash: '/stack',
        aliases: ['stack', '/stack', 'tech', 'skills', 'tecnologias'],
        desc: 'Mapeo de arquitectura técnica por capas (Front, Back, Datos)',
        category: 'info'
    },
    {
        name: 'cv',
        slash: '/cv',
        aliases: ['cv', '/cv', 'curriculum', 'descargar cv', 'download cv', 'pdf', '/pdf'],
        desc: 'Descarga instantánea del Curriculum Vitae en PDF con confeti',
        category: 'actions'
    },
    {
        name: 'contact',
        slash: '/contact',
        aliases: ['contact', '/contact', 'contacto', 'email', 'whatsapp', 'linkedin'],
        desc: 'Canales directos de comunicación profesional',
        category: 'actions'
    },
    {
        name: 'mode cto',
        slash: '/mode cto',
        aliases: ['mode cto', '/mode cto', 'cto', 'saas', 'exit', 'salir'],
        desc: 'Cambia la interfaz al Modo Ejecutivo / Desarrollador & Analista',
        category: 'navigation'
    },
    {
        name: 'mode creative',
        slash: '/mode creative',
        aliases: ['mode creative', '/mode creative', 'creative', '3d', 'webgl'],
        desc: 'Cambia la interfaz al Modo Creative UI & WebGL 3D',
        category: 'navigation'
    },
    {
        name: 'clear',
        slash: '/clear',
        aliases: ['clear', '/clear', 'cls', 'limpiar'],
        desc: 'Limpia los registros de la pantalla de la terminal',
        category: 'general'
    }
];

const SUGGESTED_CHIPS = [
    '/help',
    '/audit motoe6s',
    '/audit mimusica',
    '/projects',
    '/stack',
    '/cv',
    '/contact',
    '/mode cto',
    '/clear'
];

const CyberModeView = () => {
    const { setMode, MODES } = useMagic();
    const [history, setHistory] = useState(INITIAL_LOGS);
    const [inputVal, setInputVal] = useState('');
    const [selectedSuggestion, setSelectedSuggestion] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [isStreaming, setIsStreaming] = useState(false);
    const [streamProgress, setStreamProgress] = useState(0);
    const [isInputFocused, setIsInputFocused] = useState(false);

    const bottomRef = useRef(null);
    const inputRef = useRef(null);
    const streamTimeoutsRef = useRef([]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    // Limpieza de timers al desmontar componente
    useEffect(() => {
        return () => {
            streamTimeoutsRef.current.forEach(clearTimeout);
        };
    }, []);

    // Función para cancelar o saltar streaming instantáneamente
    const skipStream = () => {
        streamTimeoutsRef.current.forEach(clearTimeout);
        streamTimeoutsRef.current = [];
        setHistory(prev => [
            ...prev,
            { type: 'warn', text: '[>>] Secuencia acelerada por el operador. Volcando veredicto final...' },
            ...MOTOE6S_STREAM_STEPS.map(s => ({ ...s }))
        ]);
        setIsStreaming(false);
        setStreamProgress(100);
    };

    // Filtrar sugerencias en tiempo real al escribir / o cualquier comando
    const cleanQuery = inputVal.trim().toLowerCase().replace(/^\/+/, '');
    const isSlashActive = inputVal.startsWith('/');
    
    const matchingSuggestions = isSlashActive
        ? COMMAND_REGISTRY.filter(item => {
            if (!cleanQuery) return true;
            return (
                item.name.toLowerCase().includes(cleanQuery) ||
                item.slash.toLowerCase().includes(cleanQuery) ||
                item.aliases.some(a => a.toLowerCase().includes(cleanQuery)) ||
                item.desc.toLowerCase().includes(cleanQuery)
            );
        })
        : [];

    const handleTerminalBodyClick = () => {
        inputRef.current?.focus();
    };

    const handleInputChange = (e) => {
        const val = e.target.value;
        setInputVal(val);
        setSelectedSuggestion(0);
        setShowSuggestions(val.startsWith('/'));
    };

    const executeCommand = (cmdToRun) => {
        const trimmed = (cmdToRun !== undefined ? cmdToRun : inputVal).trim();
        setShowSuggestions(false);
        if (!trimmed) return;

        const cmd = trimmed.toLowerCase();
        const normalized = cmd.startsWith('/') ? cmd.slice(1) : cmd;

        const newHistory = [...history, { type: 'prompt', text: `root@augusto-romera:~$ ${trimmed}` }];

        // Si el usuario tipea durante streaming o escribe clear, abortar timers
        if (isStreaming) {
            streamTimeoutsRef.current.forEach(clearTimeout);
            streamTimeoutsRef.current = [];
            setIsStreaming(false);
        }

        if (normalized === 'cv' || normalized === 'curriculum') {
            newHistory.push(
                { type: 'success', text: '[+] Archivo de Curriculum Vitae (PDF) preparado para descarga:' },
                { type: 'info', text: 'Documento: "Curriculum Vitae augusto.pdf" (330 KB)' },
                { 
                    type: 'download', 
                    text: 'Descargar Curriculum Vitae (PDF)', 
                    url: curriculumPDF,
                    download: 'Curriculum Vitae augusto.pdf'
                }
            );

            setHistory(newHistory);
            setInputVal('');
            setHistoryIndex(-1);
            return;
        }

        setCommandHistory((prev) => {
            if (prev.length > 0 && prev[prev.length - 1] === trimmed) return prev;
            return [...prev, trimmed];
        });
        setHistoryIndex(-1);

        const matched = COMMAND_REGISTRY.find(item => 
            item.name.toLowerCase() === cmd ||
            item.name.toLowerCase() === normalized ||
            item.slash.toLowerCase() === cmd ||
            item.aliases.includes(cmd) ||
            item.aliases.includes(normalized) ||
            item.aliases.includes('/' + normalized)
        );

        const actionKey = matched ? matched.name : normalized;

        if (actionKey === 'clear') {
            setHistory([]);
            setInputVal('');
            return;
        }

        if (actionKey === 'help') {
            newHistory.push(
                { type: 'info', text: '⚡ COMANDOS DISPONIBLES EN LA CONSOLA FORENSE:' },
                { type: 'success', text: '  /help                - Muestra la lista de comandos disponibles' },
                { type: 'success', text: '  /audit motoe6s       - Telemetría en vivo MT6765, Little Kernel & RPMB' },
                { type: 'success', text: '  /audit mimusica      - Telemetría de audio local, WebSockets & $0 Infra' },
                { type: 'success', text: '  /projects            - Muestra el catálogo de 18 proyectos desarrollados' },
                { type: 'success', text: '  /projects --tier=1   - Filtra los proyectos Core principales' },
                { type: 'success', text: '  /about               - Bitácora de perfil del Analista Funcional & Dev' },
                { type: 'success', text: '  /stack               - Lista el stack tecnológico por capas' },
                { type: 'success', text: '  /cv                  - Descarga directa del Curriculum Vitae en PDF' },
                { type: 'success', text: '  /contact             - Muestra canales de contacto directo' },
                { type: 'success', text: '  /mode cto            - Cambia al Modo Desarrollador & Analista visual' },
                { type: 'success', text: '  /mode creative       - Cambia al Modo WebGL 3D & Simulación' },
                { type: 'success', text: '  /clear               - Limpia la pantalla de la terminal' }
            );
        } else if (actionKey.startsWith('projects')) {
            const isTier1Only = cmd.includes('--tier=1') || cmd.includes('tier1');
            const list = isTier1Only ? projectsData.filter(p => p.tier === 1) : projectsData;

            newHistory.push({ type: 'info', text: `[+] Catálogo de Proyectos (${list.length} encontrados):` });
            list.forEach(p => {
                newHistory.push({
                    type: p.tier === 1 ? 'accent' : 'normal',
                    text: `  [Tier ${p.tier}] ${p.title} (${p.category}) -> ${p.impactMetric}`
                });
                if (p.website) {
                    newHistory.push({ 
                        type: 'link', 
                        text: `      🌐 Abrir Demo en Vivo: ${p.website}`,
                        url: p.website 
                    });
                }
            });
        } else if (actionKey === 'audit motoe6s') {
            // Iniciar Streaming en Vivo
            setHistory(newHistory);
            setInputVal('');
            setIsStreaming(true);
            setStreamProgress(0);

            streamTimeoutsRef.current.forEach(clearTimeout);
            streamTimeoutsRef.current = [];

            let accumulatedDelay = 100;
            const totalSteps = MOTOE6S_STREAM_STEPS.length;

            MOTOE6S_STREAM_STEPS.forEach((step, idx) => {
                accumulatedDelay += step.delay;
                const timer = setTimeout(() => {
                    setHistory(prev => [...prev, { ...step }]);
                    setStreamProgress(Math.round(((idx + 1) / totalSteps) * 100));

                    if (idx === totalSteps - 1) {
                        setIsStreaming(false);
                    }
                }, accumulatedDelay);

                streamTimeoutsRef.current.push(timer);
            });
            return;
        } else if (actionKey === 'audit mimusica') {
            newHistory.push(
                { type: 'info', text: '[*] Iniciando servidor FastAPI local en ws://127.0.0.1:8000/ws/telemetry...' },
                { type: 'success', text: '[+] Mutagen ID3 Tagger: Escaneo no bloqueante de +10,000 archivos MP3/FLAC.' },
                { type: 'accent', text: '[+] Audio Streaming Pipeline: Zero-Cloud Infra ($0 cost, 100% offline).' },
                { 
                    type: 'link', 
                    text: '👉 Abrir Demo en Vivo: https://mimusicaorganizada.netlify.app/',
                    url: 'https://mimusicaorganizada.netlify.app/'
                }
            );
        } else if (actionKey === 'cat about.log') {
            newHistory.push(
                { type: 'info', text: '--- ARCHIVO: /var/log/augusto_romera_profile.log ---' },
                { type: 'normal', text: 'Nombre: Augusto Romera' },
                { type: 'normal', text: 'Rol: Desarrollador de Software & Analista Funcional' },
                { type: 'normal', text: 'Universidad: Universidad Tecnológica Nacional (UTN-FRT)' },
                { type: 'normal', text: 'Enfoque: Arquitectura limpia, modelado de dominio y sistemas escalables.' },
                { type: 'success', text: 'Misión: Construir el puente entre las reglas de negocio complejas y el software.' }
            );
        } else if (actionKey === 'stack') {
            newHistory.push(
                { type: 'info', text: '--- STACK TECNOLÓGICO POR DOMINIOS ---' },
                { type: 'accent', text: '• Backend & Core: Python (FastAPI/Flask), Java (Spring Boot), Node.js (Express), C/C++.' },
                { type: 'accent', text: '• Frontend & UX: React 18/19, TypeScript, JavaScript ES6+, Bootstrap 5, Three.js.' },
                { type: 'accent', text: '• Bases de Datos: PostgreSQL, MySQL, SQLite, MongoDB.' },
                { type: 'accent', text: '• Metodología: Relevamiento BPMN, Modelado C4, Docker, Netlify Edge, Git Flow.' }
            );
        } else if (actionKey === 'contact') {
            newHistory.push(
                { type: 'info', text: '--- ESTADO DE COMUNICACIÓN & CANALES DIRECTOS ---' },
                { type: 'success', text: '[+] Estado: Disponible para nuevos proyectos, roles de ingeniería y consultoría.' },
                { type: 'normal', text: '[i] Perfil: Desarrollo de Software & Análisis Funcional (UTN-FRT).' },
                { type: 'accent', text: '[i] Tiempo de respuesta estimado: < 2 horas.' },
                { 
                    type: 'contact-btn', 
                    btnVariant: 'wsp',
                    icon: 'fab fa-whatsapp',
                    text: 'Chatear por WhatsApp (+54 9 3865 204411)',
                    url: 'https://wa.me/5493865204411?text=Hola%20Augusto,%20estuve%20viendo%20tu%20consola%20y%20me%20gustar%C3%ADa%20conversar.'
                },
                { 
                    type: 'contact-btn', 
                    btnVariant: 'linkedin',
                    icon: 'fab fa-linkedin-in',
                    text: 'Conectar en LinkedIn (/in/augusto-romera)',
                    url: 'https://www.linkedin.com/in/augusto-romera/'
                },
                { 
                    type: 'contact-btn', 
                    btnVariant: 'github',
                    icon: 'fab fa-github',
                    text: 'Explorar Repositorios en GitHub (/romeraugustoo)',
                    url: 'https://github.com/romeraugustoo'
                },
                { type: 'normal', text: 'Tip: Si prefieres enviar un mensaje con propuesta detallada, usa el formulario en /mode cto' }
            );
        } else if (actionKey === 'mode cto') {
            newHistory.push({ type: 'accent', text: '[*] Conmutando al Modo Desarrollador & Analista Funcional...' });
            setTimeout(() => setMode(MODES.CTO), 400);
        } else if (actionKey === 'mode creative') {
            newHistory.push({ type: 'accent', text: '[*] Conmutando al Modo Creative UI & WebGL 3D...' });
            setTimeout(() => setMode(MODES.CREATIVE), 400);
        } else {
            newHistory.push(
                { type: 'danger', text: `bash: comando no reconocido: "${trimmed}".` },
                { type: 'info', text: 'Tipea /help para ver la lista de comandos o "/" para autocompletar.' }
            );
        }

        setHistory(newHistory);
        setInputVal('');
    };

    const handleKeyDown = (e) => {
        if (isStreaming) {
            if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Escape' || e.key === 'Enter') {
                e.preventDefault();
                skipStream();
                return;
            }
        }

        if (showSuggestions && matchingSuggestions.length > 0) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedSuggestion(prev => (prev + 1) % matchingSuggestions.length);
                return;
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedSuggestion(prev => (prev - 1 + matchingSuggestions.length) % matchingSuggestions.length);
                return;
            } else if (e.key === 'Tab' || (e.key === 'Enter' && selectedSuggestion >= 0)) {
                e.preventDefault();
                const chosen = matchingSuggestions[selectedSuggestion];
                if (chosen) {
                    executeCommand(chosen.slash);
                }
                return;
            } else if (e.key === 'Escape') {
                setShowSuggestions(false);
                return;
            }
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length === 0) return;
            const newIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
            setHistoryIndex(newIdx);
            setInputVal(commandHistory[newIdx]);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex === -1) return;
            const newIdx = historyIndex + 1;
            if (newIdx >= commandHistory.length) {
                setHistoryIndex(-1);
                setInputVal('');
            } else {
                setHistoryIndex(newIdx);
                setInputVal(commandHistory[newIdx]);
            }
        } else if (e.key === 'Enter') {
            executeCommand();
        }
    };

    return (
        <div className="cyber-terminal-container">
            <div className="cyber-terminal-window">
                
                {/* Window Topbar */}
                <div className="cyber-terminal-topbar">
                    <div className="d-flex align-items-center gap-2">
                        <span className="window-dot red"></span>
                        <span className="window-dot yellow"></span>
                        <span className="window-dot green"></span>
                        <span className="window-title ms-2">root@augusto-romera: ~/kernel/telemetry</span>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                        {isStreaming && (
                            <button 
                                type="button" 
                                onClick={skipStream} 
                                className="btn btn-sm btn-warning py-0 px-2 fw-bold"
                                style={{ fontSize: '0.75rem', borderRadius: '4px' }}
                                title="Presiona Espacio o haz clic para saltar al veredicto"
                            >
                                ⏭️ Saltar al veredicto ({streamProgress}%)
                            </button>
                        )}
                        <button 
                            type="button" 
                            onClick={() => setMode(MODES.CTO)} 
                            className="btn-exit-terminal"
                            title="Volver al Modo Desarrollador & Analista"
                        >
                            <i className="fas fa-desktop me-1"></i> Salir al Modo CTO
                        </button>
                    </div>
                </div>

                {/* Suggested Chips Bar with Horizontal Scroll Invitation */}
                <div className="cyber-chips-wrapper">
                    <div className="cyber-chips-bar">
                        <span className="chips-label">Comandos rápidos:</span>
                        {SUGGESTED_CHIPS.map((cmd, idx) => (
                            <button
                                key={idx}
                                type="button"
                                className="cyber-chip-btn"
                                onClick={() => executeCommand(cmd)}
                            >
                                <code>{cmd}</code>
                            </button>
                        ))}
                    </div>
                    <div className="cyber-chips-scroll-hint" aria-hidden="true" title="Desliza para ver más comandos">
                        <i className="fas fa-chevron-right scroll-hint-icon"></i>
                    </div>
                </div>

                {/* Terminal Screen Body */}
                <div className="cyber-terminal-body" onClick={handleTerminalBodyClick}>
                    {history.map((line, idx) => {
                        if (line.type === 'download' || line.download) {
                            return (
                                <div key={idx} className="terminal-log-line line-download my-3">
                                    <a 
                                        href={line.url} 
                                        download={line.download || 'Curriculum Vitae augusto.pdf'}
                                        onClick={() => {
                                            confetti({
                                                particleCount: 80,
                                                spread: 80,
                                                origin: { y: 0.6 }
                                            });
                                        }}
                                        className="btn-terminal-cta btn-terminal-download"
                                        title="Descargar Curriculum Vitae en PDF"
                                    >
                                        <i className="fas fa-file-download me-2"></i>
                                        <span>{line.text}</span>
                                        <i className="fas fa-arrow-down ms-2"></i>
                                    </a>
                                </div>
                            );
                        }
                        if (line.type === 'contact-btn' || line.btnVariant) {
                            return (
                                <div key={idx} className="terminal-log-line line-contact-action my-2">
                                    <a 
                                        href={line.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className={`btn-terminal-cta btn-terminal-${line.btnVariant || 'link'}`}
                                        title={`Abrir ${line.text}`}
                                    >
                                        <i className={`${line.icon || 'fas fa-link'} me-2`}></i>
                                        <span>{line.text}</span>
                                        <i className="fas fa-external-link-alt ms-2" style={{ fontSize: '0.8rem' }}></i>
                                    </a>
                                </div>
                            );
                        }
                        if (line.type === 'cta-button' || line.internalRoute) {
                            if (line.external || (line.url && line.url.startsWith('http'))) {
                                return (
                                    <div key={idx} className="terminal-log-line line-cta my-3">
                                        <a 
                                            href={line.url || 'https://e6s.netlify.app/'} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="btn-terminal-cta"
                                            onClick={(e) => e.stopPropagation()}
                                            title="Abrir Caso de Estudio Completo (Moto E6s)"
                                        >
                                            <i className="fas fa-external-link-alt me-2"></i>
                                            <span>{line.text}</span>
                                            <i className="fas fa-arrow-right ms-2"></i>
                                        </a>
                                    </div>
                                );
                            }
                            return (
                                <div key={idx} className="terminal-log-line line-cta my-3">
                                    <RouterLink 
                                        to={line.internalRoute || line.url || '/solution/motoe6s'} 
                                        className="btn-terminal-cta"
                                        onClick={(e) => e.stopPropagation()}
                                        title="Abrir Caso de Estudio Completo (Moto E6s)"
                                    >
                                        <i className="fas fa-file-code me-2"></i>
                                        <span>{line.text}</span>
                                        <i className="fas fa-arrow-right ms-2"></i>
                                    </RouterLink>
                                </div>
                            );
                        }
                        if (line.url) {
                            return (
                                <div key={idx} className={`terminal-log-line line-${line.type}`}>
                                    <a 
                                        href={line.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="terminal-active-anchor"
                                        title={`Abrir ${line.url}`}
                                    >
                                        {line.text}
                                        <i className="fas fa-external-link-alt ms-2" style={{ fontSize: '0.78rem' }}></i>
                                    </a>
                                </div>
                            );
                        }
                        return (
                            <div key={idx} className={`terminal-log-line line-${line.type}`}>
                                {line.text}
                            </div>
                        );
                    })}
                    <div ref={bottomRef} />
                </div>

                {/* Input Prompt Form */}
                <div className="cyber-input-form-wrapper" style={{ position: 'relative' }}>
                    
                    {/* Floating Suggestions / Autocomplete Box */}
                    {showSuggestions && matchingSuggestions.length > 0 && (
                        <div className="cyber-suggestions-box">
                            <div className="cyber-suggestions-header">
                                <span><i className="fas fa-terminal me-1"></i> Comandos recomendados (Usa ↑ ↓ o Tab para autocompletar):</span>
                            </div>
                            <div className="cyber-suggestions-list">
                                {matchingSuggestions.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`cyber-suggestion-item ${idx === selectedSuggestion ? 'active' : ''}`}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            executeCommand(item.slash);
                                        }}
                                        onMouseEnter={() => setSelectedSuggestion(idx)}
                                    >
                                        <div className="suggestion-main">
                                            <span className="suggestion-slash">{item.slash}</span>
                                            <span className="suggestion-desc">{item.desc}</span>
                                        </div>
                                        <span className="suggestion-badge">{item.category}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className={`cyber-input-form ${!isInputFocused && !inputVal ? 'pulse-invitation' : ''}`}>
                        <span className="cyber-prompt-text">root@augusto-romera:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            className="cyber-input-field"
                            value={inputVal}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            onFocus={() => setIsInputFocused(true)}
                            onBlur={() => setIsInputFocused(false)}
                            placeholder={
                                isStreaming 
                                    ? "Transmitiendo telemetría en vivo... (Presiona ESC para saltar)" 
                                    : (isInputFocused 
                                        ? "Escribe un comando o '/' para autocompletar..." 
                                        : "👉 Toca aquí para escribir o usa los comandos rápidos de arriba...")
                            }
                            spellCheck="false"
                            autoComplete="off"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CyberModeView;
