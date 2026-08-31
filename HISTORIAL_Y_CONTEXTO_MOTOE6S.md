# ⚡ Historial Integral y Dossier de Contexto Maestro
## Caso de Estudio: Auditoría Ofensiva, Ingeniería Inversa y Evasión Criptográfica (Moto E6s / MT6765)
**Perfil:** Augusto Ro — Analista Funcional & Estudiante Avanzado de Ingeniería en Sistemas  
**Fecha de Consolidación:** 27 de Agosto de 2026  
**Propósito:** Documento de transferencia de contexto integral para reclutadores técnicos, CTOs y nuevos chats de IA.

---

## 1. Misión y Propósito Estratégico

El objetivo de este proyecto fue trascender los proyectos académicos convencionales o "de juguete", ejecutando una **auditoría forense de seguridad y reverse engineering sobre hardware real y blindado** (Motorola Moto E6s / MT6765 con parche de seguridad 2022) en un plazo intensivo de 48 horas.

El resultado demuestra cómo la **metodología científica y la mentalidad de Analista Funcional** permiten:
1. Desambiguar sistemas complejos donde la documentación oficial falla o engaña.
2. Descender desde la capa de software de alto nivel hasta el silicio desnudo (bare-metal).
3. Entregar un diagnóstico concluyente con telemetría de hardware irrefutable cuando las herramientas comerciales dictaminan "imposible".

---

## 2. Diagnóstico Técnico del Hardware y Vector de Ataque

### Datos del Dispositivo Objetivo
* **Modelo:** Motorola Moto E6s (2020) / Moto E6 Plus variant
* **SKU / Modelo de Placa:** `XT2053-2` (Codename: `fiji` / `fiji_64`)
* **Procesador (SoC):** MediaTek Helio P22 (`MT6762` / `MT6765` family)
* **Hardware Code:** `0x766` (Subcode: `0x8a00`, HW Ver: `0xca00`, SW Ver: `0x0`)
* **Configuración Target:** `0xE5` (`SBC=True`, `DAA=True`, `SLA=False`, `SWJTAG=True`)
* **Firmware Base:** Android 9.0 Pie (Build `POES29.288-60-6-1-29`, Retail Argentina `retar_retag`, Parche `01/01/2022`)
* **Identificadores del Silicio:**
  * ME_ID: `FE433F1378ED842765CFC210C552194F`
  * SOC_ID: `98E8ACF7C4876148DDEC961EB74EE768398FB4C0247578609AF32BCB3D28D56C`

### Las 4 Fases de la Metodología
1. **Fase 1: Auditoría de Software (Descarte Rápido):**
   * Se probó escalada de privilegios local a UID 0 explotando el driver de Command Queue (`CVE-2020-0069` / `mtk-su`).
   * Se comprobó empíricamente que el kernel `Linux 4.9.117+` mitigaba esta llamada. Se descartó la vía lógica en menos de 2 horas.
2. **Fase 2: Intercepción Dinámica de Tráfico (Hot Swapping):**
   * Análisis de la herramienta oficial Lenovo (Software Fix / RSA).
   * Intercepción en caliente del certificado `signature_frp` durante el handshake Fastboot, logrando inyección de payloads antes de la transferencia USB.
   * Detección de la barrera `Red State` en el Little Kernel.
3. **Fase 3: Desambiguación de Esquemáticos (El Falso Testpoint):**
   * Los manuales oficiales de servicio Lemcell apuntaban a `TP1501` y `TP1506`.
   * Al puentearlos, los eFuses bloqueaban el descenso y forzaban Preloader VCOM.
   * Mediante análisis de continuidad de pistas en placa, **se descubrió el verdadero punto TP1500** bajo el chasis. Con batería aislada y puente a masa (GND), se forzó el procesador a **BootROM puro (`VID=0x0E8D, PID=0x0003`)**.
4. **Fase 4: Cirugía Bare-Metal en Servidor Linux:**
   * Conexión cruda USB (`libusb`) mediante `mtkclient` en servidor Linux.
   * Bypass de DAA/SBC inyectando el exploit `Kamakiri` por desbordamiento de `ctrl_transfer` en RAM.
   * Ejecución del motor criptográfico de hardware **SEJ (HACC)** para calcular el hash HMAC y reescribir la partición `seccfg` en la eMMC de Samsung.

### El Veredicto Forense: La Frontera del Silicio (RPMB)
Al intentar arrancar el kernel modificado, el Little Kernel activó el bloqueo con la siguiente telemetría extraída en consola:
```text
(bootloader) unlocked: no
(bootloader) slot-unbootable:a: yes
(bootloader) slot-retry-count:a: 0
```
**Descubrimiento Arquitectónico:** Motorola implementó un mecanismo de validación cruzada. El estado de desbloqueo no depende únicamente de la partición lógica `seccfg`, sino que está anclado criptográficamente en la **memoria RPMB (Replay Protected Memory Block)** del chip eMMC con una clave simétrica aprovisionada en fábrica.

---

## 3. La Landing Page Interactiva (`landingProyectMotoe6s/`)

Para presentar este caso a reclutadores técnicos y CTOs, se construyó una aplicación web estática **Top Tier / Dark SaaS**:

### Características Técnicas de la Web
* **Estética:** Ciberdefensa corporativa (`#07090e`, `#0b0e14`, `#11151f`), microinteracciones y glassmorphism (`backdrop-filter: blur(16px)`).
* **Tipografías:** `Outfit` (títulos display), `Inter` (cuerpo de lectura optimizado) y `JetBrains Mono` (consola y telemetría).
* **Contraste WCAG AAA:** Textos secundarios ajustados a `#94a3b8` (7.3:1) y `#cbd5e1` (13.4:1), superando ampliamente los estándares de accesibilidad.
* **Navegación por Teclado (`:focus-visible`):** Anillos de foco visibles (`outline: 2px solid #60a5fa`) en todos los botones, tabs y enlaces.
* **Semántica HTML5:** Uso estricto de `<header>`, `<nav>`, `<section>`, `<article>` en la Bento Grid y tarjetas metodológicas, y `<footer>`.
* **Consola Interactiva (`js/terminal.js`):** Ventana estilo macOS con 3 pestañas dinámicas (`01. Handshake BROM`, `02. Desbloqueo SEJ`, `03. Telemetría Fastboot & RPMB`), botón de copiado con feedback y transición de desvanecimiento suave de 120ms.
* **Visor Lightbox:** Fotografías de microscopía del testpoint `TP1500` integradas con zoom modal.
* **Despliegue Inmediato:** 100% autocontenida (sin dependencias ni build step), lista para arrastrar a Netlify Drop o servir con cualquier servidor web.

---

## 4. Estructura de Carpetas del Ecosistema

```text
d:\Augusto\Augusto cosas\Proyectos\
│
├── portafolio/                             # Proyecto principal del Portafolio (React/Vite)
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── HISTORIAL_Y_CONTEXTO_MOTOE6S.md     # Réplica de este dossier de contexto
│
└── herramientas/motoe6s/                   # Proyecto de Auditoría e Ingeniería Inversa
    ├── landingProyectMotoe6s/              # Aplicación Web del Caso de Estudio
    │   ├── index.html                      # Página principal con copywriting semántico
    │   ├── css/
    │   │   ├── tokens.css                  # Tokens de diseño, colores y accesibilidad
    │   │   ├── main.css                    # Layout global, header sticky y progress bar
    │   │   ├── components.css              # Bento grid, terminal, botones y cards
    │   │   └── animations.css              # Micro-animaciones, glows y lightbox
    │   ├── js/
    │   │   ├── terminal.js                 # Lógica de terminal interactiva con fade
    │   │   └── main.js                     # Scroll spy, lightbox y navegación móvil
    │   ├── assets/images/                  # 4 fotografías y esquemáticos reales del TP1500
    │   └── exportador_landing.py           # Script para consolidar la web en texto plano
    │
    ├── LinuxTools/                         # Utilidades limpias para el servidor Linux
    │   ├── clean_server.py                 # Script de purga del servidor
    │   ├── ssh_flash_linux.py              # Cliente SSH local
    │   └── ejecutar_en_linux.sh            # Script de orquestación remota
    │
    ├── landing_completa.txt                # Monolito de la landing (2,164 líneas de código)
    ├── proyecto_monolitico.txt             # Monolito completo del proyecto Moto E6s
    ├── INFORME_TECNICO_COMPLETO_MOTOE6S.md # Informe técnico maestro de ingeniería
    └── HISTORIAL_Y_CONTEXTO_PORTAFOLIO.md  # Este documento
```

---

## 5. El Puente Conceptual: ¿Por qué este caso valida el perfil de Analista Funcional?

1. **Capacidad Crítica de Desambiguación:**  
   Cuando los manuales de servicio y las herramientas comerciales señalaban puntos erróneos, no se aceptó la documentación como un axioma. Se recurrió al método científico, multímetro y análisis de continuidad para hallar la verdad física (`TP1500`).
2. **Pensamiento Sistémico Vertical:**  
   Habilidad para conectar y navegar capas de abstracción dispares: desde las reglas de negocio y flujos de usuario de una plataforma SaaS, hasta las llamadas a drivers de kernel, protocolos de bus USB y registros criptográficos del microprocesador.
3. **Rigor de Documentación y Reproducibilidad:**  
   Más de 150 scripts creados, bitácoras automatizadas, telemetría paso a paso y empaquetado de artefactos que permiten transferir conocimiento de forma transparente e inmediata a cualquier equipo de ingeniería.
