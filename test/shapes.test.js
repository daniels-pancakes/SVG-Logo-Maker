const shape = require('../lib/shapes.js');
describe('Shape', () => {
        it('should be a shape', () => {
            const newShape = new shape.Shape(true);
            expect(newShape.isShape).toBe(true);
        });
    });