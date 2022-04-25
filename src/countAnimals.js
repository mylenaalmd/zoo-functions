const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const obj = {};
    species.forEach((item) => { obj[item.name] = item.residents.length; });
    return obj;
  } if (Object.keys(animal).length === 1) {
    const especie = Object.values(animal);
    const infoEspecie = especie.map((nome) => species.find((info) => info.name === nome));
    const number = infoEspecie.map((v) => v.residents.length)[0];
    return number;
  } if (Object.keys(animal).length === 2) {
    const especie = animal.specie;
    const sexo = animal.sex;
    const up = species.find((nome) => nome.name === especie);
    const li = Object.assign(up.residents);
    const o = li.filter((p) => p.sex === sexo);
    return o.length;
  }
}
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
