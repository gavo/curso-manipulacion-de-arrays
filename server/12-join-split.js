const elements = ["Fire", "Air", "Water"];

const separator = "--";
let rtaFinal = "";

for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaFinal = rtaFinal + element + separator;
}
console.log("For", rtaFinal);

console.log("Join", elements.join("--"));

const title = "Curso de manipulación de Arrays";

let t = title.split(" ");
console.log(t.join("_").toLocaleLowerCase());
