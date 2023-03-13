const totals = [1, 2, 3, 4];

let sum = 0;
for (let i = 0; i < totals.length; i++) {
  sum += totals[i];
}

console.log("Suma For =", sum);
console.log(
  "Suma Reduce =",
  totals.reduce((aux, element) => aux + element, 0)
);
