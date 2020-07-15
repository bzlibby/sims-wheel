document.body.onload = function () {
	addPacks();
};

/** 
 * adds "hi there and greetings" to the pack selection div; 
 * edit later to create the checkbox lists 
 */
function addPacks () { 
	// adds expansion packs
	createPackList ('e-packs', 'This is where the expansion packs will go.');
	// add game packs
	createPackList ('g-packs', 'This is where the game packs will go.');
	// add stuff packs
	createPackList ('s-packs', 'This is where the stuff packs will go.');
}

function createPackList (parent, content) {
	const packDiv = document.createElement('div');
	packDiv.textContent = content;
	const currentDiv = document.getElementById(parent);
	currentDiv.append(packDiv);
}