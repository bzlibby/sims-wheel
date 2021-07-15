/*
 * see test.js for full script requirements
 */

// describe('Loading the page')
function pageLoading(packData) {
  // xit('should generate the list of pack names')
  const allPacks = [];
  for (let i = 0; i < packData.length; i ++) {
    allPacks.push(packData[i].name);
  };
  // xit('should create a checklist of packs')
  // http://jsfiddle.net/dandv/9aZQF/2/
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/checkbox
};

// describe('Getting the checkboxes')
function getCheckboxes (packList) {
  let selectedPacks = [];
  for (let i = 0; i < packList.length; i ++) {
    if (document.getElementById(packList[i]).checked) {
      selectedPacks.push(packList[i])
    };
  };
  return selectedPacks;
};

// describe('Spinning the wheel')
function wheelSpin () {
  // xit('should filter the pack properties for ${getCheckboxes}')
  // xit('should generate a random number')
  // xit('should generate a random set of properties from the filtered pack properties')
  // xit('should generate a random pack limit based on the selected packs');
  // xit('should randomly set cc allowed to true or false');
  // xit('should display the randomly generate set of properties to the user)
};