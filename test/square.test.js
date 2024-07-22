const inquirer = require('inquirer');
const shape = require('../lib/shapes.js');

describe('Shape', () => {
    describe('Square', () => {
        describe('Render', () => {
            it('should output code to build an SVG xml file.', () => {
                const square = new shape.Square();
                const svg = square.render('text', 'textcolor', 'shapecolor');
                expect(svg).toMatchSnapshot();
            });
        })
    })
});