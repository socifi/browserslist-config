const config = require('../src');

describe('Test', () => {
    it('exports array', () => {
        expect(config).toBeInstanceOf(Array);
    });
});
