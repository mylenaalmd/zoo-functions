const en = require('faker/lib/locales/en');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const dados = entrants.map(({ e }) => e.name);
  console.log(dados);
  // const obj = {};
  // pop.reduce((arr, curr) => {
  //   if (age < 18) {
  //     obj[child] = +1;
  //   } if (age >= 18) {
  //     obj[adult] = +1;
  //   } if (age >= 50) {
  //     obj[senior] = +1;
  //   }
  // });
  // return obj;
}

function calculateEntry(entrants) {
  // seu código aqui
}
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
