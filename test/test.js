import chai, { expect } from 'chai';
import { JSDOM } from 'jsdom';
import chaiDom from 'chai-dom';
import { pageLoading, wheelSpin } from '../wheel.js';
chai.use(chaiDom);

const testPack = [
    {
        name: 'Programming Paradise',
        worlds: ['Ubuntu'],
        lotTraits: ['Free Internet'],
        lotChallenges: ['Noisy Neighbors'],
        specialFeatures: ['Hidden Office'],
        archStyles: ['Remote']
    }
];

beforeEach(() => {
	const dom = new JSDOM(
    `<html>
			 <body>
			 	<div id='pack-list'></div>
       </body>
     </html>`,
     { url: 'http://localhost' },
  );
  global.window = dom.window;
  global.document = dom.window.document;
});

describe('Loading the page', function() {
	it('should generate the list of pack names', function() {
		pageLoading(testPack);
		const checkboxes = (document.querySelectorAll('input[type=checkbox]'));
		expect(checkboxes).to.have.lengthOf(1);
		expect(checkboxes[0]).to.have.property('id', testPack[0].name);
	});
});

// TODO: this
describe('Getting the checkboxes', function() {
    xit('should return a list of checked packs');
})

// TODO: this
describe('Spinning the wheel', function() {
    xit('should get the checkboxes');
    xit('should filter the pack properties for selected packs');
    xit('should generate a random set of properties from the filtered pack properties');
    xit('should generate a random pack limit based on the selected packs');
    xit('should randomly set cc allowed to true or false');
    xit('should display the randomly generated set of properties and pack/content limits to the user')
});