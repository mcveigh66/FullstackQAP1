const userArguments = process.argv.slice(2);

/**
 * Generates a random password based on the provided options.
 *
 * @param {number} length - The desired length of the password.
 * @param {boolean} useLowercase - Whether to include lowercase letters.
 * @param {boolean} useUppercase - Whether to include lowercase letters.
 * @param {boolean} useNumbers - Whether to include numbers.
 * @returns {string} The generated password.
 */
function generatePassword(length, useLowercase, useUppercase, useNumbers) {

    if (isNaN(length) || length <= 0) {
        throw new Error("Invalid password length. Please provide a positive number.");
    }

    if (!useLowercase && !useUppercase && !useNumbers) {
        useLowercase = true; 
    }
  
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';

    let availableChars = "";
    let password = "";

    if (useLowercase) availableChars += lowercaseChars;
    if (useUppercase) availableChars += uppercaseChars;
    if (useNumbers) availableChars += numberChars;

    // Password string 
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }
    
    return password;
}

module.exports = {
    generatePassword
}