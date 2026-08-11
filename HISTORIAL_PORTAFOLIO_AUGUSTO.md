# 📜 Historial de Desarrollo & Contexto: Portafolio Augusto

> **Archivo de Registro Vivo (Bitácora de Antigravity)**  
> **Proyecto:** Portafolio Augusto (`d:\Augusto\Augusto cosas\portafolio-augusto`)  
> **Repositorio Remoto:** `romeraugustoo/PortafolioAugusto2023Frontend`  
> **Última actualización:** 2026-08-11  

---

## 📌 1. Visión General del Proyecto

El **Portafolio de Augusto Romera** es una aplicación web interactiva desarrollada en **React + Vite + Bootstrap / Vanilla CSS**, diseñada para mostrar casos de estudio detallados, proyectos destacados (como ONG Seamos Puente, TSLC, Relicario Studio, Rapiburguer, ProfeBook Studio), habilidades profesionales y botones de interacción interactivos (efectos de confeti, botón mágico flotante, clave secreta y cambio de modo oscuro/claro).

---

## 📱 2. Corrección Responsiva de Desbordamiento Móvil (2026-08-10)

- **Corrección de Animación Typing (`.home_text3`):**
  - Se eliminó el tamaño estático rígido en pantallas móviles que hacía desbordar la frase `"Desarrollador de software"` fuera del viewport (causando scroll horizontal y franjas blancas laterales en dispositivos como smartphones).
  - Implementación de escala fluida responsiva mediante `clamp(0.75rem, 4.2vw, 1.6rem)` y `max-width: 90vw`.
- **Aislamiento Horizontal (`html, body, .home, .homebg`):**
  - Aplicación de `overflow-x: hidden` y `max-width: 100vw` garantizando que ningún elemento pueda generar desplazamiento horizontal involuntario.
- **Ajuste de Botones Flotantes Móviles:**
  - Reducción táctil adaptativa en pantallas de `< 575px` (`46px`, `right: 15px`).

---

## 🛡️ 3. Sistema de Seguridad y Rate-Limiting por IP

- **Netlify Serverless Function (`netlify/functions/verify-code.cjs`):**
  - Extrae la IP pública real del cliente desde la cabecera `x-nf-client-connection-ip`.
  - Formato `.cjs` optimizado para runtime de AWS Lambda en Netlify.
  - Sanción por IP: 3 intentos ➔ 5 min / 5 intentos ➔ 30 min. Delay anti-timing de 1s.

---

## 📝 4. Bitácora de Trabajo

### 📅 2026-08-11
- **Fix PIN 1221122 en Dev Local (`src/utils/securityManager.js`):**
  - Se solucionó el problema en desarrollo local donde las llamadas a `/.netlify/functions/verify-code` en `localhost:5173` recibían `200 OK` con HTML de Vite SPA fallback, haciendo que fallara el `response.json()`.
  - Se agregó detección explícita para `localhost` / `127.0.0.1` o respuestas no-JSON, derivando inmediatamente a `handleLocalFallback(codeStr)`. Ahora ingresar `1221122` desbloquea los proyectos en dev 100% libre de fallas.
- **Captura Completa del Borde Izquierdo (`SeamosPuente.png`):**
  - Tomada una captura completa en alta resolución desde el sitio en vivo utilizando Selenium Headless Chrome (1348x616 px).
  - Aplicado `object-position: left top;` en `bodyhome.css` para que el texto `"Construyendo puentes de esperanza"` y el logo queden perfectamente alineados y sin recortes desde el borde izquierdo.
- **Modo Dev Solamente:** Todos los cambios permanecen guardados en el entorno de desarrollo local sin subir a producción.

### 📅 2026-08-10
- **Seguridad por IP & Serverless:** `netlify.toml`, `netlify/functions/verify-code.cjs`, `src/utils/securityManager.js`, `PageLayout.jsx`, `SolutionScreen.jsx`.
- **Caso de Estudio ProfeBook Studio:** `ProfeBookSolution.jsx` con mapa ASCII, 6 fases de ciclo de vida y bloque `[METADATA]`.
- **UI/UX & Responsividad:** Eliminación del desbordamiento en `.home_text3` en smartphones y ajuste del layout horizontal.
- **Verificación:** Compilación limpia verificada con `npm run build`.
