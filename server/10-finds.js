const numbers = [1, 30, 49, 29, 10, 13];
const toFind = 14;

let rta = undefined;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === toFind) {
    rta = element;
    break;
  }
}

let rta2 = numbers.find((n) => n === toFind);

console.log("RTA For:", rta);
console.log("RTA Find:", rta2);

//example 2
const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const rta3 = products.find((item) => item.id == "🍔");
const rta4 = products.findIndex((item) => item === rta3);
console.log("Products", products);
console.log("rta 3:", rta3, "en la posición: ", rta4);
