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
  const expansionPacks = [];
  const gamePacks = [];
  const stuffPacks = [];
  const kits = [];
  for (let i = 0; i < packData.length; i ++) {
    allPacks.push(packData[i].name);
    switch (packData[i].type) {
      case 'Expansion':
        expansionPacks.push(packData[i].name)
        break
      case 'Game':
        gamePacks.push(packData[i].name)
        break
      case 'Stuff':
        stuffPacks.push(packData[i].name)
        break
      case 'Kit':
        kits.push(packData[i].name)
        break
    }
  };
  const expansionDiv = document.getElementById('expansion-pack-list');
  for (let j = 0; j < expansionPacks.length; j ++) {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    checkbox.type = 'checkbox';
    checkbox.id = expansionPacks[j];
    expansionDiv.appendChild(checkbox);
    expansionDiv.appendChild(label);
    label.appendChild(document.createTextNode(expansionPacks[j]));
    label.htmlFor = expansionPacks[j];
  };
  const gameDiv = document.getElementById('game-pack-list');
  for (let j = 0; j < gamePacks.length; j ++) {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    checkbox.type = 'checkbox';
    checkbox.id = gamePacks[j];
    gameDiv.appendChild(checkbox);
    gameDiv.appendChild(label);
    label.appendChild(document.createTextNode(gamePacks[j]));
    label.htmlFor = gamePacks[j];
  };
  const stuffDiv = document.getElementById('stuff-pack-list');
  for (let j = 0; j < stuffPacks.length; j ++) {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    checkbox.type = 'checkbox';
    checkbox.id = stuffPacks[j];
    stuffDiv.appendChild(checkbox);
    stuffDiv.appendChild(label);
    label.appendChild(document.createTextNode(stuffPacks[j]));
    label.htmlFor = stuffPacks[j];
  };
  const kitsDiv = document.getElementById('kit-list');
  for (let j = 0; j < kits.length; j ++) {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    checkbox.type = 'checkbox';
    checkbox.id = kits[j];
    kitsDiv.appendChild(checkbox);
    kitsDiv.appendChild(label);
    label.appendChild(document.createTextNode(kits[j]));
    label.htmlFor = kits[j];
  };
};

function packSelection () {
  const checkboxes = document.querySelectorAll(`input[type=checkbox]:checked`);
  return Array.from(checkboxes).map((checks) => checks.id);
}

function wheelSpin () {
  const selectedPackNames = packSelection();
  console.log('The wheel has been spun!');
  console.log('These packs have been checked: ' + selectedPackNames);
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
  console.log('These are the selected properties for your build - Good luck!')
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



export { pageLoading, wheelSpin, packSelection };