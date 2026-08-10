// Security Manager: Puente de validación de código con rate-limiting por IP
// Se conecta a /.netlify/functions/verify-code y proporciona fallback resiliente para entorno local.

// Salted SHA-256 para el código por defecto "1221122" en fallback local
const FALLBACK_CODE_HASH = '5530dab1a6e632fa7d09ca8c204c142edc62d037fd26b86ca3f08a301523cdc8';

async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message + '_salt_augusto_2026');
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export function formatTimeRemaining(seconds) {
    if (!seconds || seconds <= 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export async function verifyAccessCode(inputCode) {
    const codeStr = (inputCode || '').toString().trim();

    try {
        const response = await fetch('/.netlify/functions/verify-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code: codeStr })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.removeItem('sec_ip_rate_limit');
            return { success: true, message: data.message || 'Acceso Concedido' };
        }

        const errData = await response.json().catch(() => ({}));
        return {
            success: false,
            locked: errData.locked || response.status === 429,
            attemptsLeft: errData.attemptsLeft ?? 0,
            secondsRemaining: errData.secondsRemaining || 0,
            message: errData.message || 'Código de acceso incorrecto.'
        };
    } catch (networkError) {
        console.warn('Servidor serverless no disponible. Ejecutando validación de seguridad local...', networkError);
        return handleLocalFallback(codeStr);
    }
}

async function handleLocalFallback(inputCode) {
    const now = Date.now();
    const storageKey = 'sec_ip_rate_limit';
    let localData = JSON.parse(localStorage.getItem(storageKey) || '{"failedAttempts":0,"lockoutUntil":0}');

    if (localData.lockoutUntil && localData.lockoutUntil > now) {
        const secondsRemaining = Math.ceil((localData.lockoutUntil - now) / 1000);
        return {
            success: false,
            locked: true,
            attemptsLeft: 0,
            secondsRemaining,
            message: `Demasiados intentos. IP bloqueada por ${Math.ceil(secondsRemaining / 60)} min.`
        };
    }

    const inputHash = await sha256(inputCode);
    if (inputHash === FALLBACK_CODE_HASH) {
        localStorage.removeItem(storageKey);
        return { success: true, message: 'Acceso Concedido' };
    }

    // Delay penalizador en fallback local
    await new Promise(r => setTimeout(r, 1000));

    localData.failedAttempts = (localData.failedAttempts || 0) + 1;
    let secondsRemaining = 0;
    let locked = false;

    if (localData.failedAttempts >= 5) {
        localData.lockoutUntil = now + 30 * 60 * 1000;
        secondsRemaining = 30 * 60;
        locked = true;
    } else if (localData.failedAttempts >= 3) {
        localData.lockoutUntil = now + 5 * 60 * 1000;
        secondsRemaining = 5 * 60;
        locked = true;
    }

    localStorage.setItem(storageKey, JSON.stringify(localData));
    const attemptsLeft = locked ? 0 : Math.max(0, 3 - localData.failedAttempts);

    return {
        success: false,
        locked,
        attemptsLeft,
        secondsRemaining,
        message: locked 
            ? `Demasiados intentos fallidos. IP bloqueada por ${Math.ceil(secondsRemaining / 60)} min.` 
            : `Código incorrecto. Te quedan ${attemptsLeft} intento(s) antes del bloqueo.`
    };
}
