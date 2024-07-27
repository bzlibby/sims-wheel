/* this file includes the properties for every pack
 * 
 * it was last updated: July 25, 2024 [Lovestruck]
 */

/* each new pack should have the following keys:
 * name: ''
 * type: '' (Expansion, Game, Stuff, or Kit)
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
  lotSizes: ['20x15 / 20x20', '30x20 / 30x30', '40x30 / 40x40', '50x40 / 50x50', '64x64'],
  householdSizes: ['1 sim', '2-3 sims', '3-5 sims', '6-8 sims'],
  archStyles: ['Spanish Colonial', 'Georgian', 'Manufactured', 'Greek Revival', 'Gothic', 'Italiante', 'Colonial Revival', 'Renaissance Revival', 'Queen Anne', 'Mission', 'Tudor', 'Neoclassical', 'Prairie', 'French Eclectic', 'Craftsman', 'Ranch', 'Modern/Contemporary', 'Brutalist/Bauhaus', 'McMansion', 'Victorian', 'Mediterranean'],
  // styles heavily based on 'the Architecture of American Houses' by Pop Chart Labs: https://99percentinvisible.org/article/style-house-visual-guides-domestic-architectural-designs/
  colorSchemes: ['Basics', 'Neutrals', 'Brights', 'Pastels', 'Cool Colors', 'Warm Colors', 'Greyscale', 'Monochrome'],
  packLimits: ['No Limit', 'Base Game Only', `1 Pack (Builder's Choice)`]
};

export const packProperties = [
  // EXPANSION PACKS
  {
    name: 'Get to Work',
    type: 'Expansion',
    worlds: ['Magnolia Promenade'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Storefront', 'Science Lab'],
    archStyles: []
  },
  { 
    name: 'Get Together',
    type: 'Expansion',
    worlds: ['Windenburg'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Dance Studio', 'Home Arcade'],
    archStyles: []
  },
  {
    name: 'City Living',
    type: 'Expansion',
    worlds: ['San Myshuno'],
    lotTraits: [`Chef's Kitchen`, 'Good Schools', 'Mean Vibe', 'Home Studio', 'Sunny Aspect', 'Penny Pixies', 'Party Place', 'Romantic Aura', 'Great Soil', `Child's Play`, 'On Ley Line', 'Gnomes'],
    lotChallenges: ['Spooky', 'Filthy', 'Gremlins', 'Grody', 'Cursed', 'Quake Zone'],
    specialFeatures: ['Karaoke Space'],
    archStyles: ['Apartment/Penthouse']
  },
  {
    name: 'Cats and Dogs',
    type: 'Expansion',
    worlds: ['Brindleton Bay'],
    lotTraits: ['Breeding Grounds', 'Cat Hangout', 'Dog Hangout', 'Training Grounds'],
    lotChallenges: [],
    specialFeatures: [`Pet's Room`],
    archStyles: []
  },
  {
    name: 'Seasons',
    type: 'Expansion',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Greenhouse', 'Seasonal/Holiday Dispaly', 'Three/Four Season Porch'],
    archStyles: []
  },
  {
    name: 'Island Living',
    type: 'Expansion',
    worlds: ['Sulani'],
    lotTraits: ['Island Spirits'],
    lotChallenges: ['Volcanic Activity'],
    specialFeatures: [],
    archStyles: ['Island/Beach']
  },
  {
    name: 'Discover University',
    type: 'Expansion',
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
    type: 'Expansion',
    worlds: ['Mt. Komorebi'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Suana/Hot Spring'],
    archStyles: ['Traditional Japanese']
  },
  {
    name: 'Cottage Living',
    type: 'Expansion',
    worlds: ['Henford-on-Bagley'],
    lotTraits: [],
    lotChallenges: ['Simple Living', 'Wild Foxes'],
    specialFeatures: ['Farm', 'Cellar'],
    archStyles: ['Cottage']
  },
  {
    name: 'Get Famous',
    type: 'Expansion',
    worlds: ['Del Sol Valley'],
    lotTraits: ['Celebrity Home'],
    lotChallenges: [],
    specialFeatures: ['Recording Studio', 'Rehearsal Space'],
    archStyles: []
  },
  {
    name: 'High School Years',
    type: 'Expansion',
    worlds: ['Copperdale'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Teen Bedroom', 'Teen Hangout'],
    archStyles: [],
  },
  {
    name: 'Growing Together',
    type: 'Expansion',
    worlds: ['San Sequoia'],
    lotTraits: [],
    lotChallenges: ['Wild Prairie Grass'],
    specialFeatures: ['Nursery', 'Mother-in-Law Suite', 'Multigenerational Home'],
    archStyles: ['Ranch'],
  },
  {
    name: 'Horse Ranch',
    type: 'Expansion',
    worlds: ['Chestnut Ridge'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Horse Ranch'],
    archStyles: [],
  },
  {
    name: 'For Rent',
    type: 'Expansion',
    worlds: ['Tomarang'],
    lotTraits: [],
    lotChallenges: ['Mold', 'Maintenence Troubles'],
    specialFeatures: ['Multi-family Home', 'Communal Spaces', 'Courtyard', 'Maintenence Room'],
    archStyles: [],
  },
  {
    name: 'Lovestruck',
    type: 'Expansion',
    worlds: ['Ciudad Enamorada'],
    lotTraits: ['Singles Hangout'],
    // TODO: check if this trait can be used on residential lots
    lotChallenges: [],
    specialFeatures: ['Bachelor/ette Pad', 'Hot Tub'],
    archStyles: [],
  },
  // GAME PACKS
  {
    name: 'Outdoor Retreat',
    type: 'Game',
    worlds: ['Granite Falls'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Overgrown Landscaping'],
    archStyles: ['Cabin']
  },
  {
    name: 'Spa Day',
    type: 'Game',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Home Spa'],
    archStyles: []
  },
  {
    name: 'Dine Out',
    worlds: [],
    type: 'Game',
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Vampires',
    type: 'Game',
    worlds: ['Forgotton Hollow'],
    lotTraits: ['On a Dark Ley Line', 'Registered Vampire Lair', 'Vampire Nexus'],
    lotChallenges: [],
    specialFeatures: ['Graveyard'],
    archStyles: []
  },
  {
    name: 'Parenthood',
    type: 'Game',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Jungle Gym'],
    archStyles: []
  },
  {
    name: 'Jungle Adventure',
    type: 'Game',
    worlds: ['Selvadorada'],
    lotTraits: ['Peace and Quiet'],
    lotChallenges: ['Creepy Crawlies'],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Strangerville',
    type: 'Game',
    worlds: ['Strangerville'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Bunker', 'Hidden/Secret Room'],
    archStyles: []
  },
  {
    name: 'Realm of Magic',
    type: 'Game',
    worlds: ['Glimmerbrook'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Magic Room'],
    archStyles: ['Fantasy']
  },
  {
    name: 'Journey to Batuu',
    type: 'Game',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Fandom Room'],
    archStyles: ['SciFi/Futuristic']
  },
  {
    name: 'Dream Home Decorator',
    type: 'Game',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Renovation of Existing Build', 'Walk-In Closets'],
    archStyles: []
  },
  {
    name: 'My Wedding Stories',
    type: 'Game',
    worlds: ['Tartosa'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Tea Room', 'Jack & Jill En Suite'],
    archStyles: [],
  },
  {
    name: 'Werewolves',
    type: 'Game',
    worlds: ['Moonwood Mill'],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Observatory/Observation Deck'],
    archStyles: [],
  },
  // STUFF PACKS
  {
    name: 'Luxury Party',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Perfect Patio',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Patio'],
    archStyles: [] 
  },
  {
    name: 'Cool Kitchen',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Walk-In Pantry'],
    archStyles: []
  },
  {
    name: 'Spooky Stuff',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Movie Hangout',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Home Theater'],
    archStyles: []
  },
  {
    name: 'Romantic Garden',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Flower Garden'],
    archStyles: []
  },
  {
    name: 'Kids Room',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Play Room'],
    archStyles: []
  },
  {
    name: 'Backyard Stuff',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Deck', 'Large Backyard'],
    archStyles: []
  },
  {
    name: 'Vintage Glamour',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Formal Dining Room', 'Wine Cellar'],
    archStyles: []
  },
  {
    name: 'Bowling Night',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Bowling Alley'],
    archStyles: []
  },
  {
    name: 'Fitness Stuff',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Rock Climbing Wall'],
    archStyles: []
  },
  {
    name: 'Toddler Stuff',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Nursery'],
    archStyles: []
  },
  {
    name: 'Laundry Day',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Laundry Room'],
    archStyles: []
  },
  {
    name: 'My First Pet',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Moschino',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Photo Studio'],
    archStyles: []
  },
  {
    name: 'Tiny Living',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Tiny Home (lot type)'],
    archStyles: []
  },
  {
    name: 'Nifty Knitting',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Craft Room'],
    archStyles: []
  },
  {
    name: 'Paranormal Stuff',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Haunted House (lot type)', 'Attic'],
    archStyles: [],
  },
  {
    name: 'Home Chef Hustle',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Modern Kitchen', 'Pizza Kitchen', 'Baking Kitchen'],
    archStyles: [],
  },
  {
    name: 'Crystal Creations',
    type: 'Stuff',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Jewelry Workshop'],
    archStyles: [],
  },
  // KITS
  {
    name: 'Bust the Dust',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Country Kitchen',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Mud Room'],
    archStyles: ['French Country']
  },
  {
    name: 'Throwback Fit',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Courtyard Oasis',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Courtyard'],
    archStyles: ['Moroccan']
  },
  {
    name: 'Industrial Loft',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Loft Bedroom'],
    archStyles: ['Industrial']
  },
  {
    name: 'Fashion Street',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: ['Indo-Saracenic']
  },
  {
    name: 'Incheon Arrivals',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: ['Hanok']
  },
  {
    name: 'Blooming Rooms',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Greenhouse'],
    archStyles: []
  },
  {
    name: 'Modern Menswear',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Bachelor Pad', 'Man Cave'],
    archStyles: []
  },
  {
    name: 'Carnaval Streetwear',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Decor to the Max',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: ['Maximalism']
  },
  {
    name: 'Moonlight Chic',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: ['Art Nouveau', 'Art Deco']
  },
  {
    name: 'Little Campers',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: ['Treehouse', 'Play Area']
  },
  {
    name: 'First Fits',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Desert Luxe',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Everyday Clutter',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['No Storage Space'],
    archStyles: []
  },
  {
    name: 'Pastel Pop',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Bathroom Clutter',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['En Suite Bathroom'],
    archStyles: []
  },
  {
    name: 'Simtimates Collection',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: []
  },
  {
    name: 'Basement Treasures',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Unfinished Basement', 'Finished Basement', 'Attic'],
    archStyles: []
  },
  {
    name: 'Greenhouse Haven',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Greenhouse', 'Garden'],
    archStyles: []
  },
  {
    name: 'Grunge Revival',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Music Space'],
    archStyles: []
  },
  {
    name: 'Book Nook',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Book Nook', 'Library'],
    archStyles: []
  },
  {
    name: 'Modern Luxe',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: [],
    archStyles: ['Modern']
  },
  {
    name: 'Poolside Splash',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Above Ground Pool', 'In Ground Pool'],
    archStyles: []
  },
  {
    name: 'Castle Estates',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Throne Room', 'Moat'],
    archStyles: ['Castle']
  },
  {
    name: 'Goth Galore',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Brooding Room'],
    archStyles: ['Victorian']
  },
  {
    name: 'Urban Homage',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Exposed Brick', 'Mural'],
    archStyles: []
  },
  {
    name: 'Party Essentials',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Party Room'],
    archStyles: []
  },
  {
    name: 'Riviera Retreat',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['River/waterfront'],
    archStyles: []
  },
  {
    name: 'Cozy Bistro',
    type: 'Kit',
    worlds: [],
    lotTraits: [],
    lotChallenges: [],
    specialFeatures: ['Breakfast/Coffee Nook', 'Dining Patio'],
    archStyles: []
  }
];