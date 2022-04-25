const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  // const groupName = data.species.filter(({ name }) => name === animal);
  // const verificty = groupName.map((res) => res.residents).every((idade) => idade.age > age);
  // return verificty;

  const groupName = data.species.find(({ name }) => name === animal);
  const verificty = groupName.residents.every((idade) => idade.age > age);
  return verificty;
}
console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
// Brainon Queiroz da turma 21 B me ajudou dando a dica do uso do find.
