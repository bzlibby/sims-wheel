/*
 * see test.js for full script requirements
 */

// TODO: figure out why import/export isn't working and then remove this const
const packProperties = [
  // EXPANSION PACKS
  {
    name: 'Get to Work',
    worlds: ['Magnolia Promenade'],
    specialFeatures: ['Storefront', 'Science Lab']
  },
  { 
    name: 'Get Together',
    worlds: ['Windenburg'],
    specialFeatures: ['Dance Studio', 'Home Arcade']
  },
  {
    name: 'City Living',
    lotTypes: ['Apartment/Penthouse'],
    lotTraits: [`Chef's Kitchen`, 'Good Schools', 'Mean Vibe', 'Home Studio', 'Sunny Aspect', 'Penny Pixies', 'Party Place', 'Romantic Aura', 'Great Soil', `Child's Play`, 'On Ley Line', 'Gnomes'],
    lotChallenges: ['Spooky', 'Filty', 'Gremlins', 'Grody', 'Cursed', 'Quake Zone'],
    specialFeatures: ['Karaoke Space'],
  },
  {
    name: 'Cats and Dogs',
    lotTraits: ['Breeding Grounds', 'Cat Friendly/Hangout', 'Dog Friendly/Hangout', 'Training Grounds'],
    specialFeatures: [`Pet's Room`]
  },
  {
    name: 'Seasons',
    specialFeatures: ['Greenhouse', 'Seasonal/Holiday Dispaly', 'Three/Four Season Porch']
  },
  {
    name: 'Island Living',
    worlds: ['Sulani'],
    lotTraits: ['Island Spirits'],
    lotChallenges: ['Volcanic Activity']
  },
  {
    name: 'Discover University',
    worlds: ['Britechester'],
    lotTraits: ['Study Spot', 'University Student Hangout'],
    specialFeatures: ['Library']
  },
  {
    name: 'Eco Lifestyle',
    worlds: ['Evergreen Harbor'],
    lotTraits: ['Eco Lot', 'Geothermal', 'Natural Well'],
    lotChallenges: ['Landfill Lot', 'Reduce and Recylce'],
    specialFeatures: ['Eco Roof']
  },
  {
    name: 'Snowy Escape',
    worlds: ['Mt. Komorebi'],
    specialFeatures: ['Suana/Hot Spring']
  },
  {
    name: 'Cottage Living',
    worlds: ['Henford-on-Bagley'],
    lotChallenges: ['Simple Living', 'Wild Foxes'],
    specialFeatures: ['Farm', 'Cellar']
  },
  // GAME PACKS
  {
    name: 'Outdoor Retreat',
    worlds: ['Granite Falls'],
    specialFeatures: ['Tree House'],
    archStyles: ['Cabin']
  },
  {
    name: 'Spa Day',
    specialFeatures: ['Home Spa']
  },
  {
    name: 'Dine Out',
  },
  {
    name: 'Vampires',
    worlds: ['Forgotton Hollow'],
    lotTraits: ['On a Dark Ley Line', 'Registered Vampire Lair', 'Vampire Nexus'],
    specialFeatures: ['Graveyard']
  },
  {
    name: 'Parenthood',
    specialFeatures: ['Jungle Gym'],
  },
  {
    name: 'Jungle Adventure',
    worlds: ['Selvadorada'],
    lotTraits: ['Peace and Quiet'],
    lotChallenges: ['Creepy Crawlies']
  },
  {
    name: 'Strangerville',
    worlds: ['Strangerville'],
    specialFeatures: ['Bunker', 'Hidden/Secret Room']
  },
  {
    name: 'Realm of Magic',
    worlds: ['Glimmerbrook'],
    specialFeatures: ['Magic Room']
  },
  {
    name: 'Journey to Batuu',
    specialFeatures: ['Fandom Room']
  },
  {
    name: 'Dream Home Decorator',
    specialFeatures: ['Renovation of Existing Build', 'Walk-In Closets']
  },
  // STUFF PACKS
  {
    name: 'Luxury Party'
  },
  {
    name: 'Perfect Patio'
  },
  {
    name: 'Cool Kitchen',
    specialFeatures: ['Walk-In Pantry']
  },
  {
    name: 'Spooky Stuff'
  },
  {
    name: 'Movie Hangout',
    specialFeatures: ['Home Theater']
  },
  {
    name: 'Romantic Garden',
    specialFeatures: ['Flower Garden']
  },
  {
    name: 'Kids Room',
    specialFeatures: ['Play Room']
  },
  {
    name: 'Backyard Stuff'
  },
  {
    name: 'Vintage Glamour',
    specialFeatures: ['Formal Dining Room', 'Wine Cellar']
  },
  {
    name: 'Bowling Night',
    specialFeatures: ['Bowling Alley']
  },
  {
    name: 'Fitness Stuff',
    specialFeatures: ['Rock Climbing Wall']
  },
  {
    name: 'Toddler Stuff',
    specialFeatures: ['Nursery']
  },
  {
    name: 'Laundry Day',
    specialFeatures: ['Laundry Room']
  },
  {
    name: 'My First Pet'
  },
  {
    name: 'Moschino',
    specialFeatures: ['Photo Studio']
  },
  {
    name: 'Tiny Living',
    specialFeatures: ['Tiny Home (lot type)']
  },
  {
    name: 'Nifty Knitting',
    specialFeatures: ['Craft Room']
  },
  {
    name: 'Paranormal Stuff',
    specialFeatures: ['Haunted House (lot type)', 'Attic']
  },
  // KITS
  {
    name: 'Bust the Dust'
  },
  {
    name: 'Country Kitchen'
  },
  {
    name: 'Throwback Fit'
  },
  {
    name: 'Courtyard Oasis',
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
    checkbox.value = allPacks[j];
    checkbox.name = 'pack';
    packDiv.appendChild(checkbox);
    packDiv.appendChild(label);
    label.appendChild(document.createTextNode(allPacks[j]));
  };
};

function wheelSpin () {
  const selectedPackNames = [];
  const packSelection = function() {
    const checkboxes = document.querySelectorAll(`input[type=checkbox]:checked`);
    checkboxes.forEach((checkbox) => {
        selectedPackNames.push(checkbox.value);
    });
    return selectedPackNames;
  };
  console.log('The wheel has been spun!');
  console.log('These packs have been checked: ' + packSelection());
  const selectedPackProperties = [];
  for (let i = 0; i < selectedPackNames.length; i++) {
    selectedPackProperties.push(packProperties.filter(x => x.name === selectedPackNames[i]));
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
      colorSchemes: ['Basics', 'Neutrals', 'Brights', 'Pastels', 'Cool Colors', 'Warm Colors', 'Greyscale']
  };
  for (const pack of selectedPackProperties) {
    possibleProperties.worlds.push(...pack.worlds);
  }
  console.log(possibleProperties.worlds)
  // xit('should filter the pack properties for ${getCheckboxes}')
  // xit('should generate a random set of properties from the filtered pack properties')
  // xit('should generate a random pack limit based on the selected packs');
  // xit('should randomly set cc allowed to true or false');
  // xit('should display the randomly generate set of properties to the user)
};