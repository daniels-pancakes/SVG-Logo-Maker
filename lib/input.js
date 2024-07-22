const inquirer = require('inquirer');
const validateColor = require('./validateColor.js')
function input() {
    // return promise that resolves from inquirer prompts
    return inquirer.prompt([
        {
        type: 'input',
        name: 'text',
        message: 'Enter text *(3 char. max):',
        validate: function(input) {
            if (input.length <= 3){
            return true;} else { return 'Please enter no more than 3 characters.';};
            } 
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter your text color (by name or hex):',
            validate: validateColor.validateColor
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter your shape color (by name or hex):',
            validate: validateColor.validateColor
        }
    ])
    };
module.exports = {
    input
};  