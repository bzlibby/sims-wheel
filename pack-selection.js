/**
 * checks which packs have been selected
 */

function checkThatBox(pack) {
  const thatBox = document.getElementById('pack');
  return thatBox.checked
};

const selectedExpansions = [];
const selectedGames = [];
const selectedStuffs = [];
const selectedKits = [];

/* function addPack(pack, box) {
  for (x = 0; x <)
  // if box is checked
  // then find pack that matches box
  // and push pack 
} */

function addPackData(datas, expansions, games, stuffs, kits) {
	console.log('this is the base game data: ', datas);
	for (const e of expansions) {
		// adds data from selected expansion packs
		datas.worlds.push(...e.worlds);
		datas.traits.push(...e.traits);
		datas.types.push(...e.types);
		datas.specialFeatures.push(...e.specialFeatures);
	};
	for (const g of games) {
		// adds data from selected game packs
		datas.worlds.push(...g.worlds);
		datas.traits.push(...g.traits);
		datas.types.push(...g.types);
		datas.specialFeatures.push(...g.specialFeatures);
	};

	for (const s of stuffs) {
		//adds data from selected stuff packs
		datas.types.push(...s.types);
		datas.specialFeatures.push(...s.specialFeatures);
	};

	for (const k of kits) {
		//adds data from selected kits
		datas.specialFeatures.push(...k.specialFeatures);
	};

	return datas;
}

document.body.onclick = function() {
//  addPack();
// addPackData(datas, selectedExpansions, selectedGames, selectedStuffs, selectedKits);
  addPackData(datas, expansionPackData, gamePackData, stuffPackData, kitData);
	console.log('this is the final data: ', datas)
}