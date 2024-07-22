const validateColor = require('../lib/validateColor.js');
describe('validateColor.js', () => {
    it('Should return not a valid color, please try again.', () => {
    const input = '#0F0F0';
    const result = validateColor.validateColor(input);
    expect(result).toBe('Not a valid color, please try again.');
    });
    it('Should return not a valid color, please try again.', () => {
        const input = '#0F0F0G';
        const result = validateColor.validateColor(input);
        expect(result).toBe('Not a valid color, please try again.');
        });
    it('Should pass validation and resolve true', () => {
    const input = '#0F0F0F';
    const result = validateColor.validateColor(input);
    expect(result).toBe(true);
    });
    it('Should pass validation and resolve true', () => {
    const input = '#000';
    const result = validateColor.validateColor(input);
    expect(result).toBe(true);
    });
    it('Should pass validation and resolve true', () => {
    const input = 'Blue';
    const result = validateColor.validateColor(input);
    expect(result).toBe(true);
    });
});