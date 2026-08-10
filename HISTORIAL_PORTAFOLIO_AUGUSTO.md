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

Para resistir ataques de fuerza bruta y automatización sobre el código de acceso a proyectos restringidos (`1221122`), se diseñó e implementó un sistema de protección en 2 capas:

1. **Netlify Serverless Function (`netlify/functions/verify-code.js`):**
   - Extrae la IP pública real del cliente desde la cabecera `x-nf-client-connection-ip` / `x-forwarded-for`.
   - Oculta el código de acceso en el servidor (`process.env.ACCESS_CODE`), eliminándolo del bundle público de JavaScript.
   - Aplica **Regla de Sanción por IP**:
     - 3 intentos erróneos → IP bloqueada temporalmente por **5 minutos**.
     - 5 o más intentos erróneos → IP bloqueada por **30 minutos**.
   - **Demora Penalizadora Anti-Timing:** Los intentos fallidos imponen 1 segundo de retraso deliberado para neutralizar bots de alta velocidad.

2. **Módulo Cliente & Fallback (`src/utils/securityManager.js`):**
   - Realiza la petición asíncrona a la función serverless con indicadores de carga visuales en SweetAlert2.
   - Incluye hash SHA-256 saltado y simulador de rate-limiting por IP local para mantener operabilidad en entornos de desarrollo sin CLI de Netlify.
   - Muestra el tiempo formateado de penalización (`mm:ss`) si la IP de un usuario resulta bloqueada.

---

## 🎓 3. Integración Promocional e Integral de ProfeBook Studio (2026-08-10)

- **Captura Oficial:** Imagen de portada de alta fidelidad tomada de la Landing Page de Cátedra Studio / ProfeBook Studio (`ProfeBook.png`).
- **Showcase Promocional Integral (`ProfeBookSolution.jsx`):**
  - **Banner Hero & Call To Action:** Botón destacado direct-to-repo a `https://github.com/romeraugustoo/ProfeBook.git`.
  - **Propuesta de Valor:** Comparativa entre la frustrante experiencia tradicional con IAs vs. la solución automatizada de ProfeBook.
  - **Diagrama de Arquitectura de Capas en ASCII:** Mapa completo del flujo desde `ProjectSetupModal` hasta `A4PagedPreview`.
  - **El Ciclo de Vida en 6 Pasos:** Tarjetas detalladas del origen del árbol, Prompt Maestro, Copy-Paste, bloque `[METADATA]`, Smart Import y Compilador PDF.
  - **Sintaxis KaTeX & LaTeX:** Tabla de demostración vectorial a 300 DPI.
  - **Retos Técnicos de Ingeniería:** Paginador DOM 1:1, Sincronización del TOC (`toc-N`), Glosario A-Z y Respaldo Workspace (`.json`).

---

## 📝 4. Bitácora de Trabajo (Sesión Actual)

### 📅 2026-08-10
- **Seguridad por IP:** `netlify.toml`, `netlify/functions/verify-code.js`, `src/utils/securityManager.js`, `PageLayout.jsx`, `SolutionScreen.jsx`.
- **Caso de Estudio & Ajustes UI:**
  - Reescribir `PortfolioSolution.jsx`.
  - Padding responsivo dinámico en `.solution-page` (`bodyhome.css`).
- **Integración Promocional de ProfeBook Studio:**
  - Capturada imagen real de la Landing Page.
  - Rediseñado `ProfeBookSolution.jsx` como vitrina promocional integral con diagrama ASCII, comparativa de propuesta de valor, badges y enlaces directos a GitHub.
  - Enlazado a la ruta protegida `/solution/profebook`.
- **Verificación:** Compilación limpia verificada con `npm run build`.
