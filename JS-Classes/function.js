function validateName(name){ return /^[A-Za-z ]+$/.test(name); }
function validateEmail(email){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
function validatePhone(phone){ return /^\d{10}$/.test(phone); }
function validatePassword(pass){ return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{1,}$/.test(pass); }
