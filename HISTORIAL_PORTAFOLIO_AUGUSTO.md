# 📜 Historial de Desarrollo & Contexto: Portafolio Augusto

> **Archivo de Registro Vivo (Bitácora de Antigravity)**  
> **Proyecto:** Portafolio Augusto (`d:\Augusto\Augusto cosas\portafolio-augusto`)  
> **Repositorio Remoto:** `romeraugustoo/PortafolioAugusto2023Frontend`  
> **Última actualización:** 2026-08-10  

---

## 📌 1. Visión General del Proyecto

El **Portafolio de Augusto Romera** es una aplicación web interactiva desarrollada en **React + Vite + Bootstrap / Vanilla CSS**, diseñada para mostrar casos de estudio detallados, proyectos destacados (como TSLC, Relicario Studio, Rapiburguer, ProfeBook Studio), habilidades profesionales y botones de interacción interactivos (efectos de confeti, botón mágico flotante, clave secreta y cambio de modo oscuro/claro).

---

## 🛡️ 2. Sistema de Seguridad y Rate-Limiting por IP (Implementado 2026-08-10)

Para resistir ataques de fuerza bruta y automatización sobre el código de acceso a proyectos restringidos, se diseñó e implementó un sistema de protección en 2 capas:

1. **Netlify Serverless Function (`netlify/functions/verify-code.cjs`):**
   - Extrae la IP pública real del cliente desde la cabecera `x-nf-client-connection-ip` / `x-forwarded-for`.
   - Oculta el código de acceso en el servidor (`process.env.ACCESS_CODE`), eliminándolo del bundle público de JavaScript.
   - Formato `.cjs` optimizado para runtime de AWS Lambda en Netlify.
   - Aplica **Regla de Sanción por IP**:
     - 3 intentos erróneos → IP bloqueada temporalmente por **5 minutos**.
     - 5 o más intentos erróneos → IP bloqueada por **30 minutos**.
   - **Demora Penalizadora Anti-Timing:** Los intentos fallidos imponen 1 segundo de retraso deliberado para neutralizar bots de alta velocidad.

2. **Módulo Cliente & Fallback (`src/utils/securityManager.js`):**
   - Realiza la petición asíncrona a la función serverless con indicadores de carga visuales en SweetAlert2.
   - Hash Salted SHA-256 actualizado para validación local en dev mode.
   - Muestra el tiempo formateado de penalización (`mm:ss`) si la IP de un usuario resulta bloqueada.

---

## 🎨 3. Optimización de Modo Oscuro & Refactor del Botón Mágico (2026-08-10)

- **Contraste de Alto Nivel en Modo Oscuro (`bodyhome.css`):**
  - Redefinición de colores para tarjetas (`#18181b`), bordes nítidos (`#3f3f46`), textos atenuados (`#a1a1aa`), bloques de código `pre` (`#0f172a`), inline `code` (`#38bdf8`) y tablas (`#27272a`).
- **Refactor de MagicContext & Botón Flotante (`MagicContext.jsx` & `PageLayout.jsx`):**
  - Notificaciones flotantes interactivas en vivo (SweetAlert2 Toasts) al conmutar paletas de color con el nombre exacto de la paleta activa.
  - Sincronización de ráfaga de partículas de confeti basadas en la paleta primaria/secundaria activa.
  - Tooltips dinámicos indicando el modo actual en el botón de varita mágica.

---

## 📝 4. Bitácora de Trabajo (Sesión Actual)

### 📅 2026-08-10
- **Seguridad por IP & Serverless:** `netlify.toml`, `netlify/functions/verify-code.cjs`, `src/utils/securityManager.js`, `PageLayout.jsx`, `SolutionScreen.jsx`.
- **Caso de Estudio ProfeBook Studio:** `ProfeBookSolution.jsx` con mapa ASCII, 6 fases de ciclo de vida y bloque `[METADATA]`.
- **UI/UX & Dark Mode:** Refuerzo de contraste global en CSS y refactorización del motor `MagicContext`.
- **Verificación:** Compilación limpia verificada con `npm run build` (10.41s).
