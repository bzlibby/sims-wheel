/*
 * see test.js for full script requirements
 */

// TODO: figure out why import/export isn't working and then remove this const
import { packProperties } from './packprops.js';
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
      budgets: ['Unlimited', '20k', '35k', '50k', '75k', '100k'],
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
    budget: possibleProperties.budgets[Math.floor(Math.random() * possibleProperties.budgets.length)],
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