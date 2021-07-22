import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { pageLoading, wheelSpin } from '../wheel.js';

const testPack = [
    {
        name: 'Programming Paradise',
        worlds: ['Ubuntu'],
        lotTraits: ['Free Internet'],
        lotChallenges: ['Noisy Neighbors'],
        specialFeatures: ['Hidden Office'],
        archStyles: ['Remote']
    }
]

describe('Loading the page', function() {
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

		it('should generate the list of pack names', function() {
			pageLoading(testPack)
		});
		
    xit('should create a checklist of packs');
});

describe('Getting the checkboxes', function() {
    xit('should return a list of checked packs');
})

describe('Spinning the wheel', function() {
    xit('should get the checkboxes');
    xit('should filter the pack properties for selected packs');
    xit('should generate a random set of properties from the filtered pack properties');
    xit('should generate a random pack limit based on the selected packs');
    xit('should randomly set cc allowed to true or false');
    xit('should display the randomly generated set of properties and pack/content limits to the user')
});