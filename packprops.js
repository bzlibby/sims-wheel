/* this file includes the properties for every pack
 * 
 * it was last updated: Sept. 26, 2022
 */

/* each new pack should have the following keys:
 * name: ''
 * worlds: ['']
 * lotTraits: ['']
 * lotChallenges: ['']
 * specialFeatures: ['']
 * archStyles: ['']
 * 
 * lotSizes, householdSizes, and colorSchemes do not have any additions added from packs; there are only the base game options
 */

export const possibleProperties = {
  worlds: ['Willow Creek', 'Oasis Springs', 'Newcrest'],
  budgets: ['Unlimited', '20k', '35k', '50k', '75k', '100k'],
  lotTraits: ['Great Acoustics', 'Fast Internet', 'Homey', 'Science Lair', 'Convival', 'Natural Light', 'Bracing Breezes', 'Private Dwelling', 'Teen Neighborhood', 'Clothing Optional'],
  lotChallenges: ['Off-the-Grid'],
  specialFeatures: ['Home Gym', 'Art Studio', 'Music Room/Studio', 'Bar', 'Study', 'Pool', 'Gazebo', 'Home Office'],
  lotSizes: ['20x15 / 20x20', '30x20 / 30x30', '40x30 / 40x40', '50x40 / 50/50', '64x64'],
  householdSizes: ['1 sim', '2-3 sims', '3-5 sims', '6-8 sims'],
  archStyles: ['Spanish Colonial', 'Georgian', 'Manufactured', 'Greek Revival', 'Gothic', 'Italiante', 'Colonial Revival', 'Renessaince Revival', 'Queen Anne', 'Mission', 'Tudor', 'Neoclassical', 'Prairie', 'French Eclectic', 'Crafstman', 'Ranch', 'Modern/Contemporary', 'Brutalist/Bauhaus', 'McMansion', 'Victorian', 'Mediterranean'],
  // styles heavily based on 'the Architecture of American Houses' by Pop Chart Labs: https://99percentinvisible.org/article/style-house-visual-guides-domestic-architectural-designs/
  colorSchemes: ['Basics', 'Neutrals', 'Brights', 'Pastels', 'Cool Colors', 'Warm Colors', 'Greyscale'],
  packLimits: ['No Limit', 'Base Game Only', `1 Pack (Builder's Choice)`]
};

export const packProperties = [
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
    lotTraits: ['Breeding Grounds', 'Cat Hangout', 'Dog Hangout', 'Training Grounds'],
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
    lotTraits: ['Study Spot'],
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
  {
    name: 'Get Famous',
    worlds: ['Del Sol Valley'],
    lotTraits: ['Celebrity Home'],
    lotChallenges: [],
    specialFeatures: ['Recording Studio', 'Rehearsal Space'],
    archStyles: []
  },
  {
    name: 'High School Years',
    worlds: ['Copperdale'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Teen Bedroom', 'Teen Hangout'],
    archStyles: [],
  },
  // GAME PACKS
  {
    name: 'Outdoor Retreat',
    worlds: ['Granite Falls'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Overgrown Landscaping'],
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
  {
    name: 'My Wedding Stories',
    worlds: ['Tartosa'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Tea Room', 'Jack & Jill En Suite'],
    archStyles: [],
  },
  {
    name: 'Werewolves',
    worlds: ['Moonwood Mill'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Observatory/Observation Deck'],
    archStyles: [],
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
  },
  {
    name: 'Industrial Loft',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Loft Bedroom'],
    archStyles: ['Industrial']
  },
  {
    name: 'Fashion Street',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: ['Indo-Saracenic']
  },
  {
    name: 'Incheon Arrivals',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: ['Hanok']
  },
  {
    name: 'Blooming Rooms',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [ 'Greenhouse '],
    archStyles: []
  },
  {
    name: 'Modern Menswear',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Carnaval Streetwear',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Decor to the Max',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: ['Maximalism']
  },
  {
    name: 'Moonlight Chic',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: ['Art Nouveau', 'Art Deco']
  },
  {
    name: 'Little Campers',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: ['Treehouse', 'Play Area']
  },
  {
    name: 'First Fits',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Desert Luxe',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
];