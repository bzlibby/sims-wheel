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
	// add kits
	createPackList ('kits', kits);
}

function createPackList (parent, content) {
	const packDiv = document.createElement('div');
	for (let i = 0; i < content.length; i++) {
		// create the checkbox
		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.name = content[i];
		checkbox.id = content[i];
		// create the label for the checkbox
		const label = document.createElement('label');
		label.htmlFor = content[i];
		label.appendChild(document.createTextNode(content[i]));
		// add a line break
		const br = document.createElement('br');
		// add checkbox item to page
		packDiv.appendChild(checkbox);
		packDiv.appendChild(label);
		packDiv.appendChild(br);
	}
	const currentDiv = document.getElementById(parent);
	currentDiv.append(packDiv);
}

function createCheckbox () {

}