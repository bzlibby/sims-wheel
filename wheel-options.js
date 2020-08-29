const datas = {
	// establishes base game data
	worlds: ['Willow Creek', 'Oasis Springs', 'Newcrest'],
	traits: ['Great Acoustics', 'Fast Internet', 'Homey', 'Science Lair', 'Convival', 'Natural Light', 'Bracing Breezes', 'Private Dwelling', 'Teen Neighborhood', 'Off-the-Grid', 'Clothing Optional'],
};

const expansionPacks = ['Get to Work', 'Get Together', 'City Living', 'Cats & Dogs', 'Seasons', 'Get Famous', 'Island Living', 'Discover University', 'Eco Lifestyle'];
const gamePacks = ['Outdoor Retreat', 'Spa Day', 'Dine Out', 'Vampires', 'Parenthood', 'Jungle Adventure', 'Realm of Magic', 'StrangerVille'];
const stuffPacks = ['Luxury Party', 'Perfect Patio', 'Cool Kitchen', 'Spooky Stuff', 'Movie Hangout', 'Romantic Garden', `Kids' Room`, 'Backyard', 'Vintage Glamour', 'Bowling Night', 'Fitness', 'Toddler', 'Laundry Day', 'My First Pet', 'Moschino'];

const expansionPackData = {
	'Get to Work': {
		worlds: ['Magnolia Promonade'],
	},
	'Get Together': {
		worlds: ['Windenburg'],
	},
	'City Living': {
		worlds: ['San Myshuno'],
		traits: [`Chef's Kitchen`, 'Quake Zone', 'Good Schools', 'Mean Vibe', 'Home Studio', 'Sunny Aspect', 'Cursed', 'Grody', 'Gremlins', 'Penny Pixies', 'Party Place', 'Filthy', 'Haunted', 'Romantic Aura', 'Great Soil', `Child's Play`, 'On Ley Line', 'Gnomes'],
	},
	'Cats & Dogs': {
		worlds: ['Brindleton Bay'],
		traits: ['Breeding Grounds', 'Cat Friendly', 'Cat Hangout', 'Dog Friendly', 'Dog Hangout', 'Training Ground']
	},
	'Get Famous': {
		worlds: ['Del Sol Valley'],
		traits: ['Celebrity Home'],
	},
	'Island Living': {
		worlds: ['Sulani'],
		traits: ['Island Living', 'Volcanic Activity'],
	},
	'Discover University': {
		worlds: ['Britechester'],
		traits: ['Study Spot'],
	},
	'Eco Lifestyle': {
		worlds: ['Evergreen Harbor'],
		traits: ['Eco Lot', 'Geothermal', 'Landfill Lot', 'Natural Well', 'Reduce and Recycle'],
	},
};

const gamePackData = {
	'Vampires': {
		worlds: ['Forgotten Hollow'],
		traits: ['On a Dark Ley Line', 'Registered Vampire Lair', 'Vampire Nexus'],
	},
	'Jungle Adventure': {
		traits: ['Creepy Crawlies', 'Peace and Quiet'],
	},
	'Realm of Magic': {
		worlds: ['Glimmerbrook'],
	},
	'Strangerville': {
		worlds: ['Strangerville'],
	},
};

function getDatas(expansions, games) {
	for (const e of expansions) {
		// adds data from selected expansion packs
		const eData = expansions[e];
		datas.worlds.push(...eData.worlds);
		datas.traits.push(...eData.traits);
	};

	for (const g of games) {
		// adds data from selected game packs
		const gData = games[g];
		datas.worlds.push(...pData.worlds);
		datas.traits.push(...pData.traits);
	};

	return datas;
}

document.body.onload = function () {
	getDatas(expansionPackData, gamePackData)
}

const lotSizes = ['20x15 or 20x20', '30x20 or 30x30', '40x30 or 40x40', '50x50 or 50x40', '64x64'];
const budgets = ['20k', '35k', '50k', '75k', '100k'];
const householdSizes = ['1-2 Sims', '3 Sims', '5 Sims', '6 Sims', '8 Sims'];
const buildStyles = ['Colonial', 'Ranch', 'Mid-Century', 'Victorian', 'Modern', 'Mediterranean', 'Craftsman'];
const colorSchemes = ['Neutrals', 'Brights', 'Cool Colors', 'Warm Colors', 'Greyscale'];
const specialFeatures = ['Home Gym', 'Art Studio', 'Play Room', 'Music Room', 'Bar', 'Study', 'Garden', 'Pool', 'Outdoor Space'];
const packLimits = ['None', 'One pack', 'Three packs', 'Any packs'];
const ccOptions = ['yes', 'no'];