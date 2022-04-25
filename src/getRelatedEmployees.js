const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const gerente = employees.map((a) => a.managers);
  const verificty = gerente.some((d) => d.find((p) => p === id) === id);
  if (verificty === true) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  if (isManager(managerId) === true) {
    const manager = employees.map((a) => a.managers);
    const nomesId = manager.filter(([d]) => d === managerId);
    const pup = [];
    nomesId.forEach((esp) => pup.push(data.employees.find((lup) => lup.managers === esp)));
    const ppup = pup.map((nome) => `${nome.firstName} ${nome.lastName}`);
    return ppup;
  }
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
