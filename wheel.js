/*
 * see test.js for full script requirements
 */

import { packProperties, possibleProperties } from './packprops.js';
if (typeof document !== 'undefined') {
  document.onload = pageLoading(packProperties);
  document.getElementById('spinner-button').onclick = wheelSpin
};

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
  return challengeProperties;
};



export { pageLoading, wheelSpin };