const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
  const categLoc = {};
  if (!options) {
    const l = data.species.map((especies) => data.species.filter((loc) => especies.location === loc.location));
    console.log(l);
  }
}

module.exports = getAnimalMap;
