const inquirer = require('inquirer');
const shape = require('./lib/shapes.js');
const fs = require('fs');

let lgTxt;
let lgTxtColor;
let lgShp;
let lgShpColor;
function writeToFile(filename, data) {
    fs.writeFile('./examples/logo.xml', data, (err) => err ? console.log(err) :
    console.log('logo.xml file created in the current directory.'));
}
const init = function() {
    inquirer.prompt([
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
            validate: function(input) {
            if (input.length === 0 || input === '') {
            return 'Not a valid color, please try again.';} else { return true;};
            } 
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
        }
    ]).then(answers => {
        console.log('Your answers:', answers);
        lgTxt = answers.text;
        lgShp = answers.shape;
        lgTxtColor = answers.textColor;
        lgShpColor = answers.shapeColor;
        let newShp = new shape.Square(lgTxt, lgTxtColor, lgShpColor);
        writeToFile('./examples/logo.xml', `${newShp.render(lgTxt, lgTxtColor, lgShpColor)}`)
    });
};
init();