// const en = require('faker/lib/locales/en');
const data = require('../data/zoo_data');

const { prices } = data;

const entrantsTest = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const dados = entrants.map((e) => e.age);
  const obj = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  dados.forEach((idade) => {
    if (idade < 18) {
      obj.child += 1;
    } if (idade >= 18 && idade < 50) {
      obj.adult += 1;
    } if (idade >= 50) {
      obj.senior += 1;
    }
  });
  return obj;
}
function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) {
    return 0;
  }
  if (!Object.keys(entrants).length) {
    return 0;
  }
  const obj = countEntrants(entrants);
  const preço = obj.adult * prices.adult + obj.child * prices.child + obj.senior * prices.senior;
  return preço;
}

console.log(calculateEntry(entrantsTest));

module.exports = { calculateEntry, countEntrants };
