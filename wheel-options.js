/**
 * Establishes base game data
 */
const datas = {
	worlds: ['Willow Creek', 'Oasis Springs', 'Newcrest'],
	traits: ['Great Acoustics', 'Fast Internet', 'Homey', 'Science Lair', 'Convival', 'Natural Light', 'Bracing Breezes', 'Private Dwelling', 'Teen Neighborhood', 'Off-the-Grid', 'Clothing Optional'],
	types: ['Residential'],
	specialFeatures: ['Art Studio', 'Music Room', 'Bar', 'Study', 'Garden', 'Pool'],
	lotSizes: ['20x15 or 20x20', '30x20 or 30x30', '40x30 or 40x40', '50x50 or 50x40', '64x64'],
	budgets: ['20k', '35k', '50k', '75k', '100k'],
	householdSizes: ['1-2 Sims', '3-4 Sims', '5-6 Sims', '7-8 Sims'],
	buildStyles: ['Colonial', 'Ranch', 'Mid-Century', 'Victorian', 'Modern', 'Mediterranean', 'Craftsman'],
	colorSchemes: ['Neutrals', 'Brights', 'Cool Colors', 'Warm Colors', 'Greyscale'],
	packLimits: ['None', 'One pack', 'Three packs', 'Any packs'],
	ccOptions: ['yes', 'no'],
};

/**
 * Each expansion pack requires the following keys:
 * name
 * worlds
 * traits
 * types
 * specialFeatures
 */
const expansionPacks = ['Get to Work', 'Get Together', 'City Living', 'Cats & Dogs', 'Seasons', 'Get Famous', 'Island Living', 'Discover University', 'Eco Lifestyle', 'Snowy Escape'];
const expansionPackData = [
	{
		name: 'Get to Work',
		worlds: ['Magnolia Promonade'],
		traits: [],
		types: [],
		specialFeatures: ['Laboratory', 'Observatory', 'Retail Space'],
	},
	{
		name: 'Get Together',
		worlds: ['Windenburg'],
		traits: [],
		types: [],
		specialFeatures: ['Club/Game Room'],
	},
	{	
		name: 'City Living',
		worlds: ['San Myshuno'],
		traits: [`Chef's Kitchen`, 'Quake Zone', 'Good Schools', 'Mean Vibe', 'Home Studio', 'Sunny Aspect', 'Cursed', 'Grody', 'Gremlins', 'Penny Pixies', 'Party Place', 'Filthy', 'Haunted', 'Romantic Aura', 'Great Soil', `Child's Play`, 'On Ley Line', 'Gnomes'],
		types: ['Apartment/Penthouse'],
		specialFeatures: [],
	},
	{
		name: 'Cats & Dogs',
		worlds: ['Brindleton Bay'],
		traits: ['Breeding Grounds', 'Cat Friendly', 'Cat Hangout', 'Dog Friendly', 'Dog Hangout', 'Training Ground'],
		types: [],
		specialFeatures: ['Pet Room']
	},
	{
		name: 'Get Famous',
		worlds: ['Del Sol Valley'],
		traits: ['Celebrity Home'],
		types: [],
		specialFeatures: ['Streaming/Recording Room'],
	},
	{
		name: 'Island Living',
		worlds: ['Sulani'],
		traits: ['Island Living', 'Volcanic Activity'],
		types: [],
		specialFeatures: [],
	},
	{
		name: 'Discover University',
		worlds: ['Britechester'],
		traits: ['Study Spot'],
		types: [],
		specialFeatures: [],
	},
	{
		name: 'Eco Lifestyle',
		worlds: ['Evergreen Harbor'],
		traits: ['Eco Lot', 'Geothermal', 'Landfill Lot', 'Natural Well', 'Reduce and Recycle'],
		types: [],
		specialFeatures: [],
	},
	{
		name: 'Snowy Escape',
		worlds: ['Mt. Komorebi'],
		traits: [],
		types: [],
		specialFeatures: ['Home Onsen'],
	}
];

/**
 * Each game pack requires the following keys:
 * name
 * worlds
 * traits
 * types
 * specialFeatures
 */
const gamePacks = ['Outdoor Retreat', 'Spa Day', 'Dine Out', 'Vampires', 'Parenthood', 'Jungle Adventure', 'Realm of Magic', 'StrangerVille', 'Journey to Batuu'];
const gamePackData = [
	{
		name: 'Vampires',
		worlds: ['Forgotten Hollow'],
		traits: ['On a Dark Ley Line', 'Registered Vampire Lair', 'Vampire Nexus'],
		types: [],
		specialFeatures: ['Graveyard'],
	},
	{
		name: 'Jungle Adventure',
		worlds: [],
		traits: ['Creepy Crawlies', 'Peace and Quiet'],
		types: [],
		specialFeatures: [],
	},
	{
		name: 'Realm of Magic',
		worlds: ['Glimmerbrook'],
		traits: [],
		types: [],
		specialFeatures: ['Magic Room']
	},
	{
		name: 'Strangerville',
		worlds: ['Strangerville'],
		traits: [],
		types: [],
		specialFeatures: ['Bunker'],
	},
	{
		name: 'Spa Day',
		worlds: [],
		traits: [],
		types: [],
		specialFeatures: ['Home Spa'],
	},
	{
		name: 'Parenthood',
		worlds: [],
		traits: [],
		types: [],
		specialFeatures: ['Play Room']
	}
];

/** 
 * Each stuff pack requires the following keys:
 * name
 * types
 * specialFeatures
 */
const stuffPacks = ['Luxury Party', 'Perfect Patio', 'Cool Kitchen', 'Spooky Stuff', 'Movie Hangout', 'Romantic Garden', `Kids' Room`, 'Backyard', 'Vintage Glamour', 'Bowling Night', 'Fitness', 'Toddler', 'Laundry Day', 'My First Pet', 'Moschino', 'Knifty Knitting', 'Tiny Living', 'Paranormal'];
const stuffPackData = [
	{
		name: 'Luxury Party',
		types: [],
		specialFeatures: ['Ballroom'],
	},
	{
		name: 'Perfect Patio',
		types: [],
		specialFeatures: ['Party Patio'],
	},
	{
		name: 'Movie Hangout',
		types: [],
		specialFeatures: ['Home Theater'],
	},
	{
		name: 'Fitness',
		types: [],
		specialFeatures: ['Home Gym'],
	},
	{
		name: 'Laundry Day',
		types: [],
		specialFeatures: ['Laundry Room'],
	},
	{
		name: 'Moschino',
		types: [],
		specialFeatures: ['Photo Studio/Dark Room'],
	},
	{
		name: 'Tiny Living',
		types: ['Tiny House (any tier)', 'Tiny House (Tier 1)', 'Tiny House (Tier 2)', 'Tiny House (Tier 3)'],
		specialFeatures: [],
	},
	{
		name: 'Paranormal',
		types: ['Haunted Residential'],
		specialFeatures: ['Attic'],
	}
];

/**
 * Each kit requires the following keys:
 * name
 * specialFeatures
 */
const kits = ['Bust the Dust', 'Country Kitchen', 'Throwback Fit', 'Courtyard Oasis'];
const kitData = [
	{
		name: 'Country Kitchen',
		specialFeatures: ['Mud Room'],
	},
	{
		name: 'Courtyard Oasis',
		specialFeatures: ['Courtyard'],
	},
];

function addPackData(datas, expansions, games, stuffs, kits) {
	console.log('this is the base game data: ', datas);
	for (const e of expansions) {
		// adds data from selected expansion packs
		// console.log('expansion data is: ', e);
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

document.body.onload = function() {
	document.getElementById('spinner-button').onclick = function() {
		addPackData(datas, expansionPackData, gamePackData, stuffPackData, kitData);
		console.log('this is the final data: ', datas)
	}
}