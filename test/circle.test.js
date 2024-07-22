const inquirer = require('inquirer');
const shape = require('../lib/shapes.js');

describe('Shape', () => {
    describe('Circle', () => {
        describe('Render', () => {
        it('should output code to build an SVG xml file.', () => {
            const circle = new shape.Circle();
            const svg = circle.render('text', 'textcolor', 'shapecolor');
            expect(svg).toMatchSnapshot();
        });
    })
    })
});