// Netlify Serverless Function: Rate Limiting & Validation por IP
// Protege el código secreto contra ataques de fuerza bruta.

const ipRateMap = new Map();

function cleanupStaleIps(now) {
    for (const [ip, data] of ipRateMap.entries()) {
        if (data.lockoutUntil && data.lockoutUntil < now) {
            ipRateMap.delete(ip);
        }
    }
}

exports.handler = async (event, context) => {
    if (context) context.callbackWaitsForEmptyEventLoop = false;
    const now = Date.now();
    cleanupStaleIps(now);
    // Permitir preflight CORS si fuera necesario
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: ''
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Método no permitido' })
        };
    }

    // Extraer IP real del cliente desde las cabeceras de Netlify
    const rawIp = event.headers['x-nf-client-connection-ip'] || 
                  event.headers['x-forwarded-for'] || 
                  event.headers['client-ip'] || 
                  '127.0.0.1';
    
    // Tomar la primera IP si hay proxies encadenados
    const clientIp = rawIp.split(',')[0].trim();

    let ipData = ipRateMap.get(clientIp) || { failedAttempts: 0, lockoutUntil: 0 };

    // Verificar si la IP está sancionada en cooldown
    if (ipData.lockoutUntil && ipData.lockoutUntil > now) {
        const secondsRemaining = Math.ceil((ipData.lockoutUntil - now) / 1000);
        return {
            statusCode: 429,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                success: false,
                locked: true,
                secondsRemaining,
                message: `Límite de intentos superado. IP bloqueada por ${Math.ceil(secondsRemaining / 60)} min.`
            })
        };
    }

    // Parsear código del cuerpo de la petición
    let inputCode = '';
    try {
        const body = JSON.parse(event.body || '{}');
        inputCode = (body.code || '').toString().trim();
    } catch (e) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Formato de petición inválido' })
        };
    }

    const defaultCode = '1221122';
    const envCode = (process.env.ACCESS_CODE || '').replace(/['"]/g, '').trim();

    // Validación exitosa (acepta código por defecto o variable de entorno de Netlify)
    if (inputCode === defaultCode || (envCode && inputCode === envCode)) {
        ipRateMap.delete(clientIp);
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                success: true,
                message: '¡Acceso Concedido!'
            })
        };
    }

    // Código Erróneo -> Introducir delay penalizador anti-fuerza bruta
    await new Promise(resolve => setTimeout(resolve, 1000));

    ipData.failedAttempts += 1;
    let secondsRemaining = 0;
    let locked = false;

    // Reglas de Bloqueo por IP
    if (ipData.failedAttempts >= 5) {
        // 5 o más intentos fallidos -> Bloqueo por 30 minutos
        ipData.lockoutUntil = now + 30 * 60 * 1000;
        secondsRemaining = 30 * 60;
        locked = true;
    } else if (ipData.failedAttempts >= 3) {
        // 3 a 4 intentos fallidos -> Bloqueo por 5 minutos
        ipData.lockoutUntil = now + 5 * 60 * 1000;
        secondsRemaining = 5 * 60;
        locked = true;
    }

    ipRateMap.set(clientIp, ipData);

    const attemptsLeft = locked ? 0 : Math.max(0, 3 - ipData.failedAttempts);

    return {
        statusCode: locked ? 429 : 401,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            success: false,
            locked,
            attemptsLeft,
            failedAttempts: ipData.failedAttempts,
            secondsRemaining,
            message: locked 
                ? `Demasiados intentos fallidos. IP bloqueada por ${Math.ceil(secondsRemaining / 60)} min.` 
                : `Código incorrecto. Te quedan ${attemptsLeft} intento(s) antes del bloqueo.`
        })
    };
};
