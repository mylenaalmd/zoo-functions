const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalsResponsible = data.employees.find((item) => item.id === id).responsibleFor[0];
  const animalsId = data.species.find((item) => item.id === animalsResponsible).residents;
  const animalAge = animalsId.sort((a, b) => b.age - a.age)[0];
  return Object.values(animalAge);
}
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
