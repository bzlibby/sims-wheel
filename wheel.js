/*
 * see test.js for full script requirements
 */

// TODO: figure out why import/export isn't working and then remove this const
const packProperties = [
  // EXPANSION PACKS
  {
    name: 'Get to Work',
    worlds: ['Magnolia Promenade'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Storefront', 'Science Lab'],
    archStyles: []
  },
  { 
    name: 'Get Together',
    worlds: ['Windenburg'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Dance Studio', 'Home Arcade'],
    archStyles: []
  },
  {
    name: 'City Living',
    worlds: [],
    lotTraits: [`Chef's Kitchen`, 'Good Schools', 'Mean Vibe', 'Home Studio', 'Sunny Aspect', 'Penny Pixies', 'Party Place', 'Romantic Aura', 'Great Soil', `Child's Play`, 'On Ley Line', 'Gnomes'],
    lotChallenges: ['Spooky', 'Filty', 'Gremlins', 'Grody', 'Cursed', 'Quake Zone'],
    specialFeatures: ['Karaoke Space'],
    archStyles: ['Apartment/Penthouse']
  },
  {
    name: 'Cats and Dogs',
    worlds: ['Brindleton Bay'],
    lotTraits: ['Breeding Grounds', 'Cat Friendly/Hangout', 'Dog Friendly/Hangout', 'Training Grounds'],
    lotChallenges: [],
    specialFeatures: [`Pet's Room`],
    archStyles: []
  },
  {
    name: 'Seasons',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Greenhouse', 'Seasonal/Holiday Dispaly', 'Three/Four Season Porch'],
    archStyles: []
  },
  {
    name: 'Island Living',
    worlds: ['Sulani'],
    lotTraits: ['Island Spirits'],
    lotChallenges: ['Volcanic Activity'],
    specialFeatures: [],
    archStyles: ['Island/Beach']
  },
  {
    name: 'Discover University',
    worlds: ['Britechester'],
    lotTraits: ['Study Spot', 'University Student Hangout'],
    lotChallenges: [],
    specialFeatures: ['Library'],
    archStyles: []
  },
  {
    name: 'Eco Lifestyle',
    worlds: ['Evergreen Harbor'],
    lotTraits: ['Eco Lot', 'Geothermal', 'Natural Well'],
    lotChallenges: ['Landfill Lot', 'Reduce and Recylce'],
    specialFeatures: ['Eco Roof'],
    archStyles: ['Recycled/Eco Modern']
  },
  {
    name: 'Snowy Escape',
    worlds: ['Mt. Komorebi'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Suana/Hot Spring'],
    archStyles: ['Traditional Japanese']
  },
  {
    name: 'Cottage Living',
    worlds: ['Henford-on-Bagley'],
    lotTraits: [],
    lotChallenges: ['Simple Living', 'Wild Foxes'],
    specialFeatures: ['Farm', 'Cellar'],
    archStyles: ['Cottage']
  },
  // GAME PACKS
  {
    name: 'Outdoor Retreat',
    worlds: ['Granite Falls'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Tree House'],
    archStyles: ['Cabin']
  },
  {
    name: 'Spa Day',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Home Spa'],
    archStyles: []
  },
  {
    name: 'Dine Out',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Vampires',
    worlds: ['Forgotton Hollow'],
    lotTraits: ['On a Dark Ley Line', 'Registered Vampire Lair', 'Vampire Nexus'],
    lotChallenges: [],
    specialFeatures: ['Graveyard'],
    archStyles: []
  },
  {
    name: 'Parenthood',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Jungle Gym'],
    archStyles: []
  },
  {
    name: 'Jungle Adventure',
    worlds: ['Selvadorada'],
    lotTraits: ['Peace and Quiet'],
    lotChallenges: ['Creepy Crawlies'],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Strangerville',
    worlds: ['Strangerville'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Bunker', 'Hidden/Secret Room'],
    archStyles: []
  },
  {
    name: 'Realm of Magic',
    worlds: ['Glimmerbrook'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Magic Room'],
    archStyles: ['Fantasy']
  },
  {
    name: 'Journey to Batuu',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Fandom Room'],
    archStyles: ['SciFi/Futuristic']
  },
  {
    name: 'Dream Home Decorator',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Renovation of Existing Build', 'Walk-In Closets'],
    archStyles: []
  },
  // STUFF PACKS
  {
    name: 'Luxury Party',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Perfect Patio',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Patio'],
    archStyles: [] 
  },
  {
    name: 'Cool Kitchen',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Walk-In Pantry'],
    archStyles: []
  },
  {
    name: 'Spooky Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Movie Hangout',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Home Theater'],
    archStyles: []
  },
  {
    name: 'Romantic Garden',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Flower Garden'],
    archStyles: []
  },
  {
    name: 'Kids Room',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Play Room'],
    archStyles: []
  },
  {
    name: 'Backyard Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Deck', 'Large Backyard'],
    archStyles: []
  },
  {
    name: 'Vintage Glamour',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Formal Dining Room', 'Wine Cellar'],
    archStyles: []
  },
  {
    name: 'Bowling Night',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Bowling Alley'],
    archStyles: []
  },
  {
    name: 'Fitness Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Rock Climbing Wall'],
    archStyles: []
  },
  {
    name: 'Toddler Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Nursery'],
    archStyles: []
  },
  {
    name: 'Laundry Day',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Laundry Room'],
    archStyles: []
  },
  {
    name: 'My First Pet',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Moschino',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Photo Studio'],
    archStyles: []
  },
  {
    name: 'Tiny Living',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Tiny Home (lot type)'],
    archStyles: []
  },
  {
    name: 'Nifty Knitting',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Craft Room'],
    archStyles: []
  },
  {
    name: 'Paranormal Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Haunted House (lot type)', 'Attic'],
    archStyles: []
  },
  // KITS
  {
    name: 'Bust the Dust',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Country Kitchen',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Mud Room'],
    archStyles: ['French Country']
  },
  {
    name: 'Throwback Fit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Courtyard Oasis',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Courtyard'],
    archStyles: ['Moroccan']
  }
];

// import { packProperties } from './packprops.js';
document.onload = pageLoading(packProperties);
document.getElementById('spinner-button').onclick = wheelSpin;

function pageLoading(packData) {
  const allPacks = [];
  for (let i = 0; i < packData.length; i ++) {
    allPacks.push(packData[i].name);
  };
  const packDiv = document.getElementById('pack-list');
  for (let j = 0; j < allPacks.length; j ++) {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    checkbox.type = 'checkbox';
    checkbox.id = allPacks[j];
    checkbox.name = 'pack';
    packDiv.appendChild(checkbox);
    packDiv.appendChild(label);
    label.appendChild(document.createTextNode(allPacks[j]));
    label.htmlFor = allPacks[j];
  };
};

function wheelSpin () {
  const selectedPackNames = [];
  const packSelection = function() {
    const checkboxes = document.querySelectorAll(`input[type=checkbox]:checked`);
    checkboxes.forEach((checkbox) => {
        selectedPackNames.push(checkbox.id);
    });
    return selectedPackNames;
  };
  console.log('The wheel has been spun!');
  console.log('These packs have been checked: ' + packSelection());
  const selectedPackProperties = [];
  for (let i = 0; i < selectedPackNames.length; i++) {
    selectedPackProperties.push(...packProperties.filter(x => x.name === selectedPackNames[i]));
  };
  const possibleProperties = {
      worlds: ['Willow Creek', 'Oasis Springs', 'Newcrest'],
      lotTraits: ['Great Acoustics', 'Fast Internet', 'Homey', 'Science Lair', 'Convival', 'Natural Light', 'Bracing Breezes', 'Private Dwelling', 'Teen Neighborhood', 'Clothing Optional'],
      lotChallenges: ['Off-the-Grid'],
      specialFeatures: ['Home Gym', 'Art Studio', 'Music Room/Studio', 'Bar', 'Study', 'Pool', 'Gazebo', 'Home Office'],
      lotSizes: ['20x15 / 20x20', '30x20 / 30x30', '40x30 / 40x40', '50x40 / 50/50', '64x64'],
      householdSizes: ['1 sim', '2-3 sims', '3-5 sims', '6-8 sims'],
      archStyles: ['Spanish Colonial', 'Georgian', 'Manufactured', 'Greek Revival', 'Gothic', 'Italiante', 'Colonial Revival', 'Renessaince Revival', 'Queen Anne', 'Mission', 'Tudor', 'Neoclassical', 'Prairie', 'French Eclectic', 'Crafstman', 'Ranch', 'Modern/Contemporary', 'Brutalist/Bauhaus', 'Industrial', 'McMansion', 'Victorian', 'Mediterranean'],
      // styles heavily based on 'the Architecture of American Houses' by Pop Chart Labs: https://99percentinvisible.org/article/style-house-visual-guides-domestic-architectural-designs/
      colorSchemes: ['Basics', 'Neutrals', 'Brights', 'Pastels', 'Cool Colors', 'Warm Colors', 'Greyscale'],
      packLimits: ['No Limit', 'Base Game Only', `1 Pack (Builder's Choice)`]
  };
  for (const pack of selectedPackProperties) {
    possibleProperties.worlds.push(...pack.worlds);
  };
  for (const pack of selectedPackProperties) {
    possibleProperties.lotTraits.push(...pack.lotTraits);
  };
  for (const pack of selectedPackProperties) {
    possibleProperties.lotChallenges.push(...pack.lotChallenges);
  };
  for (const pack of selectedPackProperties) {
    possibleProperties.specialFeatures.push(...pack.specialFeatures);
  };
  for (const pack of selectedPackProperties) {
    possibleProperties.archStyles.push(...pack.archStyles);
  };
  console.log('These are the possible properties for your build: ');
  console.log(possibleProperties);
  const challengeProperties = {
    world: possibleProperties.worlds[Math.floor(Math.random() * possibleProperties.worlds.length)],
    lotTraits: possibleProperties.lotTraits.sort(() => 0.5 - Math.random()).slice(0,3),
    lotChallenge: possibleProperties.lotChallenges[Math.floor(Math.random() * possibleProperties.lotChallenges.length)],
    specialFeature: possibleProperties.specialFeatures[Math.floor(Math.random() * possibleProperties.specialFeatures.length)],
    lotSize: possibleProperties.lotSizes[Math.floor(Math.random() * possibleProperties.lotSizes.length)],
    householdSize: possibleProperties.householdSizes[Math.floor(Math.random() * possibleProperties.householdSizes.length)],
    archStyle: possibleProperties.archStyles[Math.floor(Math.random() * possibleProperties.archStyles.length)],
    colorScheme: possibleProperties.colorSchemes[Math.floor(Math.random() * possibleProperties.colorSchemes.length)],
    packLimit: possibleProperties.packLimits[Math.floor(Math.random() * possibleProperties.packLimits.length)],
    ccLimit: Math.random() < 0.5
  };
console.log(challengeProperties);
  // xit('should display the randomly generate set of properties to the user)
};