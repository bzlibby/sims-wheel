const {expect} = require('chai');

describe('Adding the pack data', function() {
    xit('should add the selected pack data to the full data');
    it('should check the tea', function() {
        const tea = {
            flavors: [],
        };
        expect(tea, 'tea has flavors').to.haveOwnProperty('flavors');
        expect(tea.flavors, 'tea has 3 flavors').to.have.lengthOf(3);
    })
});