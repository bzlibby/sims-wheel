const datas = {
	// establishes base game data
	worlds: ['Willow Creek', 'Oasis Springs', 'Newcrest'],
	traits: ['Great Acoustics', 'Fast Internet', 'Homey', 'Science Lair', 'Convival', 'Natural Light', 'Bracing Breezes', 'Private Dwelling', 'Teen Neighborhood', 'Off-the-Grid', 'Clothing Optional'],
	types: ['Residential'],
	specialFeatures: ['Art Studio', 'Music Room', 'Bar', 'Study', 'Garden', 'Pool']
};

const expansionPacks = ['Get to Work', 'Get Together', 'City Living', 'Cats & Dogs', 'Seasons', 'Get Famous', 'Island Living', 'Discover University', 'Eco Lifestyle', 'Snowy Escape'];
const gamePacks = ['Outdoor Retreat', 'Spa Day', 'Dine Out', 'Vampires', 'Parenthood', 'Jungle Adventure', 'Realm of Magic', 'StrangerVille', 'Journey to Batuu'];
const stuffPacks = ['Luxury Party', 'Perfect Patio', 'Cool Kitchen', 'Spooky Stuff', 'Movie Hangout', 'Romantic Garden', `Kids' Room`, 'Backyard', 'Vintage Glamour', 'Bowling Night', 'Fitness', 'Toddler', 'Laundry Day', 'My First Pet', 'Moschino', 'Knifty Knitting', 'Tiny Living', 'Paranormal'];
const kits = ['Bust the Dust', 'Country Kitchen', 'Throwback Fit', 'Courtyard Oasis'];

const expansionPackData = {
	'Get to Work': {
		worlds: ['Magnolia Promonade'],
		specialFeatures: ['Laboratory', 'Observatory', 'Retail Space'],
	},
	'Get Together': {
		worlds: ['Windenburg'],
	},
	'City Living': {
		worlds: ['San Myshuno'],
		traits: [`Chef's Kitchen`, 'Quake Zone', 'Good Schools', 'Mean Vibe', 'Home Studio', 'Sunny Aspect', 'Cursed', 'Grody', 'Gremlins', 'Penny Pixies', 'Party Place', 'Filthy', 'Haunted', 'Romantic Aura', 'Great Soil', `Child's Play`, 'On Ley Line', 'Gnomes'],
		types: ['Apartment/Penthouse'],
	},
	'Cats & Dogs': {
		worlds: ['Brindleton Bay'],
		traits: ['Breeding Grounds', 'Cat Friendly', 'Cat Hangout', 'Dog Friendly', 'Dog Hangout', 'Training Ground'],
		specialFeatures: ['Pet Room']
	},
	'Get Famous': {
		worlds: ['Del Sol Valley'],
		traits: ['Celebrity Home'],
		specialFeatures: ['Streaming/Recording Room'],
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
	'Snowy Escape': {
		worlds: ['Mt. Komorebi'],
		specialFeatures: ['Home Onsen'],
	}
};

const gamePackData = {
	'Vampires': {
		worlds: ['Forgotten Hollow'],
		traits: ['On a Dark Ley Line', 'Registered Vampire Lair', 'Vampire Nexus'],
		specialFeatures: ['Graveyard'],
	},
	'Jungle Adventure': {
		traits: ['Creepy Crawlies', 'Peace and Quiet'],
	},
	'Realm of Magic': {
		worlds: ['Glimmerbrook'],
		specialFeatures: ['Magic Room']
	},
	'Strangerville': {
		worlds: ['Strangerville'],
		specialFeatures: ['Bunker'],
	},
	'Spa Day': {
		specialFeatures: ['Home Spa'],
	},
	'Parenthood': {
		specialFeatures: ['Play Room']
	}
};

const stuffPackData = {
	'Luxury Party': {
		specialFeatures: ['Ballroom'],
	},
	'Perfect Patio': {
		specialFeatures: ['Patio'],
	},
	'Movie Hangout': {
		specialFeatures: ['Home Theater'],
	},
	'Fitness': {
		specialFeatures: ['Home Gym'],
	},
	'Laundry Day': {
		specialFeatures: ['Laundry Room'],
	},
	'Moschino': {
		specialFeatures: ['Photo Studio/Dark Room'],
	},
	'Tiny Living': {
		types: ['Tiny House (any tier)', 'Tiny House (Tier 1)', 'Tiny House (Tier 2)', 'Tiny House (Tier 3)'],
	},
	'Paranormal': {
		types: ['Haunted Residential'],
		specialFeatures: ['Attic'],
	}
}

const kitData = {
	'Courtyard Oasis': {
		specialFeatures: ['Courtyard'],
	},
};

function getDatas(expansions, games, stuffs, kits) {
	for (const e of expansions) {
		// adds data from selected expansion packs
		const eData = expansions[e];
		datas.worlds.push(...eData.worlds);
		datas.traits.push(...eData.traits);
		datas.types.push(...eData.types);
		datas.specialFeatures.push(...eData.specialFeatures);
	};

	for (const g of games) {
		// adds data from selected game packs
		const gData = games[g];
		datas.worlds.push(...gData.worlds);
		datas.traits.push(...gData.traits);
		datas.types.push(...gData.types);
		datas.specialFeatures.push(...gData.specialFeatures);
	};

	for (const s of stuffs) {
		//adds data from selected stuff packs
		const sData = stuffs[s];
		datas.types.push(...sData.types);
		datas.specialFeatures.push(...sData.specialFeatures);
	};

	for (const k of kits) {
		//adds data from selected kits
		const kData = kits[k];
		datas.specialFeatures.push(...kData.specialFeatures);
	};

	return datas;
}

document.body.onload = function () {
	getDatas(expansionPackData, gamePackData, stuffPackData, kData)
}

const lotSizes = ['20x15 or 20x20', '30x20 or 30x30', '40x30 or 40x40', '50x50 or 50x40', '64x64'];
const budgets = ['20k', '35k', '50k', '75k', '100k'];
const householdSizes = ['1-2 Sims', '3-4 Sims', '5-6 Sims', '7-8 Sims'];
const buildStyles = ['Colonial', 'Ranch', 'Mid-Century', 'Victorian', 'Modern', 'Mediterranean', 'Craftsman'];
const colorSchemes = ['Neutrals', 'Brights', 'Cool Colors', 'Warm Colors', 'Greyscale'];
const packLimits = ['None', 'One pack', 'Three packs', 'Any packs'];
const ccOptions = ['yes', 'no'];