const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  } const especies = [];
  ids.forEach((id) => especies.push(data.species.find((specie) => specie.id === id)));
  return especies;
}
console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;

// tive como base o raciocinio da colega de turma Vitoria;
