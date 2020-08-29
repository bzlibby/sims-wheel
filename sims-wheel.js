document.body.onload = function () {
	addPacks();
};

/** 
 * adds "hi there and greetings" to the pack selection div; 
 * edit later to create the checkbox lists 
 */
function addPacks () { 
	// adds expansion packs
	createPackList ('e-packs', expansionPacks);
	// add game packs
	createPackList ('g-packs', gamePacks);
	// add stuff packs
	createPackList ('s-packs', stuffPacks);
}

function createPackList (parent, content) {
	const packDiv = document.createElement('div');
	packDiv.textContent = JSON.stringify(content);
	const currentDiv = document.getElementById(parent);
	currentDiv.append(packDiv);
}