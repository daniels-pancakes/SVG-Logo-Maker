function validateColor(input) {
    // Test if input is a valid color (either by name or hex).
    const hexTest = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
    if (input.length === 0 
    || input === '' 
    || input.charAt(0) === '#' && !hexTest.test(input)) {
    return 'Not a valid color, please try again.';} else { return true;};
    } 
module.exports = {
    validateColor
};  