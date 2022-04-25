const data = require('../data/zoo_data');

const { species } = data;

const localizacao = species.map((especies) => especies.location);
const animalsLocation = () => {
  const categLoc = {};
  localizacao.forEach((l) => {
    categLoc[l] = species.filter((especie) => especie.location === l)
      .map((s) => s.name);
  });
  return categLoc;
};
function animalsSex(options) {
  let verificity = [];
  const local = animalsLocation();
  Object.entries(local).forEach((v) => {
    v[1].forEach((item) => {
      const entrada = { [item]: species.find((especie) => especie.name === item)
        .residents.filter((sex) => sex.sex === options.sex)
        .map((nome) => nome.name) };
      if (options.sorted === true) {
        entrada[item].sort();
      }
      verificity.push(entrada);
    });
    local[v[0]] = verificity;
    verificity = [];
  });
  return local;
}
function animalsName(options) {
  let verificity = [];
  const local = animalsLocation();
  Object.entries(local).forEach((v) => {
    v[1].forEach((item) => {
      const entrada = { [item]: species.find((especie) =>
        especie.name === item).residents.map((nome) => nome.name) };
      if (options.sorted === true) {
        entrada[item].sort();
      }
      verificity.push(entrada);
    });
    local[v[0]] = verificity;
    verificity = [];
  });
  return local;
}
animalsSex({ sex: 'male' });
function getAnimalMap(options) {
  // seu código aqui
  if (!options || !options.includeNames) {
    return animalsLocation();
  }
  if (options.sex === 'male' || options.sex === 'female') {
    return animalsSex();
  }
  return animalsName(options);
}
console.log(getAnimalMap({ includeNames: true, sex: 'female' }));

module.exports = getAnimalMap;
// Ajuda da colega Ster pra resolver esse requisito;
