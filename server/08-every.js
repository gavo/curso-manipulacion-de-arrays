const numbers = [1, 30, 49, 29, 10, 13];
const max = 50;
let rta = true;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= max) {
    rta = false;
    break;
  }
}

let rta2 = numbers.every((element) => element <= max);

console.log("Numbers: ", numbers);
console.log("RTA 1: ", rta);
console.log("RTA 2: ", rta2);

//reto
const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

let reto = team.every((player) => player.age < 15);
console.log("Team:", team);
console.log("Todos son menor de 15?", reto);
