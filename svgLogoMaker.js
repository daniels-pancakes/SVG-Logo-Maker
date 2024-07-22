const shape = require('./lib/shapes.js');
const wq = require('./lib/writeToFile.js');
const input = require('./lib/input.js');

let lgTxt;
let lgTxtColor;
let lgShp;
let lgShpColor;

// Initialize the application by asking questions and generating the logo.
const init = function() {
    input.input()
    .then(answers => {
        console.log('Your answers:', answers);
        lgTxt = answers.text;
        lgShp = answers.shape;
        lgTxtColor = answers.textColor;
        lgShpColor = answers.shapeColor;
        // Generate the logo based on the provided shape and color.
        let newShp;
        if (lgShp === 'circle') {
            newShp = new shape.Circle(lgTxt, lgTxtColor, lgShpColor);
        }
        else if (lgShp === 'triangle') {
            newShp = new shape.Triangle(lgTxt, lgTxtColor, lgShpColor);
        }
        else if (lgShp === 'square') {
            newShp = new shape.Square(lgTxt, lgTxtColor, lgShpColor);
        }
        // Write the logo to a file named 'logo.xml'.
        wq.writeToFile('./examples/logo.xml', `${newShp.render(lgTxt, lgTxtColor, lgShpColor)}`)
    });
};
// Start the application.
init();