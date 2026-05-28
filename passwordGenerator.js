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

if (require.main === module) {
    if (userArguments.includes('--help')) {
        console.log(`
Password Generator CLI Tool
Usage: node passwordGenerator.js [flags]

Flags:
  --help              Show this usage instructions menu.
  --length <number>   Specify the password length (Defaults to 8).
  --lowercase         Include lowercase characters in the password.
  --uppercase         Include uppercase characters in the password.
  --numbers           Include numbers in the password.
        `);
    } else {
        // Read the --length option, defaulting to 8 if not found
        let length = 8;
        const lengthIndex = userArguments.indexOf('--length');
        if (lengthIndex !== -1 && userArguments[lengthIndex + 1]) {
            length = parseInt(userArguments[lengthIndex + 1], 10);
        }

        const useLowercase = userArguments.includes('--lowercase');
        const useUppercase = userArguments.includes('--uppercase');
        const useNumbers = userArguments.includes('--numbers');



module.exports = {
    generatePassword
}