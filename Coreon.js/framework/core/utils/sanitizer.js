function sanitizeInput(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    // Remove leading and trailing whitespace
    let sanitized = input.trim();
    // Escape HTML special characters
    sanitized = sanitized.replace(/&/g, '&amp;')
                         .replace(/</g, '&lt;')
                         .replace(/>/g, '&gt;')
                         .replace(/"/g, '&quot;')
                         .replace(/'/g, '&#39;');
    return sanitized;
}

function sanitizeArray(inputs) {
    if (!Array.isArray(inputs)) {
        throw new Error('Input must be an array');
    }
    return inputs.map(sanitizeInput);
}

function sanitizeObject(input) {
    if (typeof input !== 'object' || input === null) {
        throw new Error('Input must be an object');
    }
    const sanitizedObject = {};
    for (const key in input) {
        if (input.hasOwnProperty(key)) {
            sanitizedObject[key] = sanitizeInput(input[key]);
        }
    }
    return sanitizedObject;
}

module.exports = {
    sanitizeInput,
    sanitizeArray,
    sanitizeObject
};