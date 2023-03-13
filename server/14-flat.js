const matriz = [
  [1, 2, 3, [2, 3, 5]],
  [4, 5, 6, [1, 1, 1]],
  [7, 8, [0, 0, 0], 9],
];

function aplanar(lista) {
  const salida = [];
  lista.forEach((e) => {
    Array.isArray(e) ? salida.push(...aplanar(e)) : salida.push(e);
  });
  return salida;
}

console.log("Aplanar:", aplanar(matriz));

function explorar(list) {
  if (!Array.isArray(list)) return [list];
  let output = [];
  list.forEach((element) => output.push(...explorar(element)));
  return output;
}

const newArray = [];

for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < array.length; j++) {
    const element = array[j];
    newArray.push(element);
  }
}

console.log("For", newArray);

console.log("flat 3", matriz.flat(3));
console.log("matriz", explorar(matriz));
