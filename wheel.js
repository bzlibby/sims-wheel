/*
 * see test.js for full script requirements
 */

import { packProperties, possibleProperties } from './packprops.js';
if (typeof document !== 'undefined') {
  document.onload = pageLoading(packProperties);
  document.getElementById('spinner-button').onclick = wheelSpin;
  // select all expansion packs
  document.getElementById('select-all-expansions').addEventListener("change", function() {
    let checkboxes = document.querySelectorAll('.expansion');
    for (let i = 0; i < checkboxes.length; i ++) {
      checkboxes[i].checked = this.checked
    };
  }, this);
  // select all game packs
  document.getElementById('select-all-gamepacks').addEventListener("change", function() {
    let checkboxes = document.querySelectorAll('.game');
    for (let i = 0; i < checkboxes.length; i ++) {
      checkboxes[i].checked = this.checked
    };
  }, this);
  // select all stuff packs
  document.getElementById('select-all-stuffpacks').addEventListener("change", function() {
    let checkboxes = document.querySelectorAll('.stuff');
    for (let i = 0; i < checkboxes.length; i ++) {
      checkboxes[i].checked = this.checked
    };
  }, this);
  // select all kits
  document.getElementById('select-all-kits').addEventListener("change", function() {
    let checkboxes = document.querySelectorAll('.kit');
    for (let i = 0; i < checkboxes.length; i ++) {
      checkboxes[i].checked = this.checked
    };
  }, this);
};

function makeCheckboxes(divID, type, list) {
  for (let i = 0; i < list.length; i ++) {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    checkbox.type = 'checkbox';
    checkbox.className = type;
    checkbox.id = list[i];
    divID.appendChild(checkbox);
    divID.appendChild(label);
    label.appendChild(document.createTextNode(list[i]));
    label.htmlFor = list[i];
  };
}

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
  makeCheckboxes(expansionDiv, 'expansion', expansionPacks);
  const gameDiv = document.getElementById('game-pack-list');
  makeCheckboxes(gameDiv, 'game', gamePacks);
  const stuffDiv = document.getElementById('stuff-pack-list');
  makeCheckboxes(stuffDiv, 'stuff', stuffPacks);
  const kitsDiv = document.getElementById('kit-list');
  makeCheckboxes(kitsDiv, 'kit', kits);
};

function packSelection () {
  const checkboxes = document.querySelectorAll(`input[type=checkbox]:checked`);
  return Array.from(checkboxes).map((checks) => checks.id);
}

function getRandomItem (list) {
  let randomItem = list[Math.floor(Math.random() * list.length)]
  return randomItem
}

function makeResultDisplay (type, result) {
  const resultsDiv = document.getElementById(type);
  resultsDiv.replaceChildren(document.createTextNode(result));
}

function displayResults (results) {
  makeResultDisplay('world', results.world);
  makeResultDisplay('budget', results.budget);
  makeResultDisplay('lot-traits', results.lotTraits);
  makeResultDisplay('lot-challenge', results.lotChallenge);
  makeResultDisplay('special-feature', results.specialFeature);
  makeResultDisplay('lot-size', results.lotSize);
  makeResultDisplay('household-size', results.householdSize);
  makeResultDisplay('arch-style', results.archStyle);
  makeResultDisplay('color-scheme', results.colorScheme);
  makeResultDisplay('pack-limits', results.packLimit);
  makeResultDisplay('cc-limit', results.ccLimit);
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
  console.log('These are the selected properties for your build - Good luck!');
  const challengeProperties = {
    world: getRandomItem(possibleProperties.worlds),
    budget: getRandomItem(possibleProperties.budgets),
    lotTraits: possibleProperties.lotTraits.sort(() => 0.5 - Math.random()).slice(0,3),
    lotChallenge: getRandomItem(possibleProperties.lotChallenges),
    specialFeature: getRandomItem(possibleProperties.specialFeatures),
    lotSize: getRandomItem(possibleProperties.lotSizes),
    householdSize: getRandomItem(possibleProperties.householdSizes),
    archStyle: getRandomItem(possibleProperties.archStyles),
    colorScheme: getRandomItem(possibleProperties.colorSchemes),
    packLimit: getRandomItem(possibleProperties.packLimits),
    ccLimit: (Math.random() < 0.5) ? 'Yes' : 'No'
  };
  console.log(challengeProperties);
  displayResults(challengeProperties);
};


export { pageLoading, wheelSpin, packSelection };