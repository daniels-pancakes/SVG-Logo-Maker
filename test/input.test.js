const inquirer = require('inquirer');

describe('input.js', () => {
 describe('inquirer.prompt', () => {
    describe('validate', () => {
        it('should log an error message when more than 3 characters entered.', async () => {
            // returns true when input length is less than or equal to 3 characters.
            const input = 'ab1.';
            const validateFunction = (input) => {
                    if (input.length <= 3) {
                    return true;
                    } else { 
                    return 'Please enter no more than 3 characters.';
                    }
                    };
                  const result = validateFunction(input);
                  expect(result).toBe('Please enter no more than 3 characters.');
                });
        it('should accept input when less than or equal to 3 characters entered.', async () => {
            // returns false when more than 3 characters.
            const input = 'abcd';
            const validateFunction = (input) => {
                    if (input.length <= 3) {
                    return true;
                    } else { 
                    return 'Please enter no more than 3 characters.';
                    }
                    };
                  const result = validateFunction(input);
                  expect(result).toBe(true);
                });
            });
     })
    });