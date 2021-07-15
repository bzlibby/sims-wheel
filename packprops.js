/* this file includes the properties for every pack, including the base game (as a pack) and a fictional pack (for testing)
 * 
 * it was last updated: < NULL >
 */

const packProperties = [
  {
    name: 'Base Game',
    worlds: ['Willow Creek', 'Oasis Springs', 'Newcrest'],
    lotTraits = ['Great Acoustics', 'Fast Internet', 'Homey', 'Science Lair', 'Convival', 'Natural Light', 'Bracing Breezes', 'Private Dwelling', 'Teen Neighborhood', 'Off-the-Grid', 'Clothing Optional'],
    specialFeatures = [ /* add these after adding special features based on dlc */ ],
    lotSizes = ['20x15 / 20x20', '30x20 / 30x30', '40x30 / 40x40', '50x40 / 50/50', '64x64'],
    householdSizes = ['1 sim', '2-3 sims', '3-5 sims', '6-8 sims'],
    archStyles = ['Spanish Colonial', 'Georgian', 'Manufactured', 'Greek Revival', 'Gothic', 'Italiante', 'Colonial Revival', 'Renessaince Revival', 'Queen Anne', 'Mission', 'Tudor', 'Neoclassical', 'Prairie', 'French Eclectic', 'Crafstman', 'Ranch', 'Modern/Contemporary', 'Brutalist/Bauhaus', 'Industrial', 'McMansion', 'Victorian', 'Mediterranean'],
    // styles heavily based on 'the Architecture of American Houses' by Pop Chart Labs: https://99percentinvisible.org/article/style-house-visual-guides-domestic-architectural-designs/
    colorSchemes = ['Basics', 'Neutrals', 'Brights', 'Pastels', 'Cool Colors', 'Warm Colors', 'Greyscale']
  },
  {
    name: 'Get to Work',
    worlds: ['Magnolia Promenade'],
    specialFeatures: ['Storefront', 'Science Lab']
  },
  {
    name: 'Get To Work',
    worlds: ['Magnolia Promenade'],
    specialFeatures = ['Storefront', 'Science Lab']
  },
  { 
    name: 'Get Together',
    worlds: ['Windenburg'],
    specialFeatures: ['Dance Studio', 'Home Arcade']
  },
  {
    name: 'City Living',
    lotTypes: ['Apartment/Penthouse'],
    lotTraits: [`Chef's Kitchen`, 'Quake Zone', 'Good Schools', 'Mean Vibe', 'Home Studio', 'Sunny Aspect', 'Cursed', 'Grody', 'Gremlins', 'Penny Pixies', 'Party Place', 'Filthy', 'Haunted', 'Romantic Aura', 'Great Soil', `Child's Play`, 'On Ley Line', 'Gnomes'],
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
    lotTraits: ['Oceanic Paradise', 'Island Spirits', 'Volcanic Activity'],
  },
  {
    name: 'Discover University',
    worlds: ['Britechester'],
    lotTraits: ['Study Spot', 'University Student Hangout'],
    specialFeatures: ['Study/Library']
  },
  {
    name: 'Eco Living',
    worlds: ['Evergreen Harbor'],
    lotTraits: ['Eco Lot', 'Geothermal', 'Landfill Lot', 'Natural Well', 'Reduce and Recycle'],
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
  }
]