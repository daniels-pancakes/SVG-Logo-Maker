const inquirer = require('inquirer');
const shape = require('../lib/shapes.js');

describe('Shape', () => {
    describe('Triangle', () => {
        describe('Render', () => {
        it('should output code to build an SVG xml file.', () => {
            const triangle = new shape.Triangle();
            const svg = triangle.render('text', 'textcolor', 'shapecolor');
            expect(svg).toMatchSnapshot();
        });
    })
})
});