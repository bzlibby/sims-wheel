// code that spins the wheel
function spin (options) {
  const spinResult = options[Math.floor(Math.random() * options.length)];
  return spinResult;
}

const spun = {
  world: spin(datas.worlds),
  traits: spin(datas.traits), // TODO: make this happen 3 times, with unique results each time
  lotSize: spin(lotSizes),
  budget: spin(budgets),
  householdSize: spin(householdSizes),
  buildStyles: spin(buildStyles),
  colorScheme: spin(colorSchemes),
  specialFeature: spin(specialFeatures),
  packLimit: spin(packLimits),
  ccOption: spin(ccOptions)
}

document.getElementById('spinner-button').onclick = console.log(spun);