const data = require('../data/zoo_data');

const { employees, species } = data;

function usuariosInfos(info) {
  return employees.find(({ firstName, lastName, id }) => firstName === info.name
    || id === info.id
    || lastName === info.name);
}
// console.log(usuariosInfos({ name: 'Spry' }));

function animaisInfo(info) {
  const responsibleAnimal = usuariosInfos(info).responsibleFor;
  const animalsId = species.filter(({ id }) => responsibleAnimal.includes(id));
  return animalsId;
}
// console.log(animaisInfo({ name: 'Spry' }));

function infosCompleted(info) {
  const obj = {
    id: usuariosInfos(info).id,
    fullName: `${usuariosInfos(info).firstName} ${usuariosInfos(info).lastName}`,
    species: animaisInfo(info).map(({ name }) => name),
    locations: animaisInfo(info).map(({ location }) => location),
  };
  return obj;
}
// console.log(infosCompleted({ name: 'Ola' }));

function peopleList() {
  return employees.reduce((acc, item) => {
    const obj = {
      id: item.id,
      fullName: `${item.firstName} ${item.lastName}`,
      species: species.filter(({ id }) => item.responsibleFor.includes(id)).map(({ name }) => name),
      locations: species.filter(({ id }) =>
        item.responsibleFor.includes(id)).map(({ location }) => location),
    };
    acc.push(obj);
    return acc;
  }, []);
}
// console.log(peopleList());

function infosId() {
  return employees.reduce((acc, item) => {
    const array = acc;
    array.push(item.firstName);
    array.push(item.lastName);
    array.push(item.id);
    return array;
  }, []);
}
// console.log(infosId());

function getEmployeesCoverage(param) {
  if (!param) return peopleList();
  if (!infosId().includes(param.name || param.id)) throw new Error('Informações inválidas');
  try {
    return infosCompleted(param);
  } catch (error) {
    return error.message;
  }
}
// console.log(getEmployeesCoverage({ name: 'Ola' }));

module.exports = getEmployeesCoverage;
