export function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isPasswordStrong(password) {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
}

export function isUsernameValid(username) {
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    return usernameRegex.test(username);
}

export function isPhoneNumberValid(phoneNumber) {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phoneNumber);
}

export function isUrlValid(url) {
    const urlRegex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i;
    return urlRegex.test(url);
}

export function validateInput(data) {
    const errors = {};
    
    if (!isEmailValid(data.email)) {
        errors.email = "Invalid email format.";
    }
    
    if (!isPasswordStrong(data.password)) {
        errors.password = "Password must be at least 8 characters long, contain uppercase and lowercase letters, a number, and a special character.";
    }
    
    if (!isUsernameValid(data.username)) {
        errors.username = "Username must be 3-16 characters long and can only contain letters, numbers, and underscores.";
    }
    
    if (data.phoneNumber && !isPhoneNumberValid(data.phoneNumber)) {
        errors.phoneNumber = "Invalid phone number format.";
    }
    
    if (data.website && !isUrlValid(data.website)) {
        errors.website = "Invalid URL format.";
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}