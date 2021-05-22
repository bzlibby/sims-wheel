// code that spins the wheel
function spin (options) {
  const spinResult = options[Math.floor(Math.random() * options.length)];
  return spinResult;
}

const spun = {
  world: spin(datas.worlds),
  traits: spin(datas.traits), // TODO: make this happen 3 times, with unique results each time
  types: spin(datas.types),
  lotSize: spin(datas.lotSizes),
  budget: spin(datas.budgets),
  householdSize: spin(datas.householdSizes),
  buildStyles: spin(datas.buildStyles),
  colorScheme: spin(datas.colorSchemes),
  specialFeature: spin(datas.specialFeatures),
  packLimit: spin(datas.packLimits),
  ccOption: spin(datas.ccOptions)
}

document.getElementById('spinner-button').onclick = console.log(spun);