const { generatePassword, parseArguments } = require("../passwordGenerator");

describe('generatePassword', () => {
    test('The generated password is of the correct length', () => {
        const password = generatePassword(12, true, true, true);
        expect(password.length).toBe(12);
    });

    test('Should default to lowercase if nothing is selected', () => {
        const password = generatePassword(8, false, false, false);
        expect(password).toMatch(/^[a-z]+$/);
    });

    test('Should throw error if the length is invalid', () => {
        expect(() => {
            generatePassword(-5, true, true, true);
        }).toThrow();
    });
        
    describe('parseArguments', () => {
        test('Should return default length of 8 if --length is not provided', () => {
            const args = ['--lowercase'];
            const options = parseArguments(args);
            expect(options.length).toBe(8);
        });

    });
});