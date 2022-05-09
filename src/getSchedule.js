const data = require('../data/zoo_data');

const days = Object.keys(data.hours);

const animalsTimesOpen = () => {
  // const animalsDay = {};
  // const j = Object.entries(data.hours);
  // // j.forEach((item) => console.log(Object.entries(item[1])));
  // // console.log(j);
  // Object.entries(data.hours).forEach((horario) => {
  //   animalsDay[horario[0]] = {};

  //   // const numbs = j.concat();
  //   // j.forEach((o) => o.concat());
  //   // console.log(o);
  // //   const timeZoo = { 'officeHour' :  `Open from ${[0]}am until ${[0]}pm `,
  // //   'exhibition': [],
  // // animalsDay.push(timeZoo);
  // });
  // console.log(animalsDay);
};
function getAnimalByDay(day) {
  return data.species.filter((animal) => animal.availability.find((dia) => dia === day).map((bicho) => bicho.name));
}
const animalsDay = (scheduleTarget) => {
  const animalsAvailable = {};
  const time = Object.entries(data.hours).find((item) => item[0] === scheduleTarget);
  console.log(time);
  const horario = Object.values(time[1]);
  const array = getAnimalByDay(scheduleTarget);
  console.log(array);
  animalsAvailable[scheduleTarget] = {
    officeHour: `Open from ${horario[0]}am until ${horario[1]}pm`,
    exhibition: 'animalsExibition' };
  return animalsAvailable;
  //     'exhibition': [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
};

const animalsName = (scheduleTarget) => {
  const daysOpen = data.species.find((item) => item.name === scheduleTarget)
    .availability.map((l) => l);
  return daysOpen;
};

function getSchedule(scheduleTarget) {
  // if (!scheduleTarget || scheduleTarget !== animals || scheduleTarget !== days) {
  //   return animalsTimesOpen();
  // }
  if ((days.some((item) => item === scheduleTarget)) === true) {
    return animalsDay(scheduleTarget);
  }
  return animalsName(scheduleTarget);
}
console.log(getSchedule('Wednesday'));

module.exports = getSchedule;
