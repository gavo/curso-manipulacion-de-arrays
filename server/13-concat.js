const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
  const element = otherElements[index];
  newArray.push(element);
}

const rta = elements.concat(otherElements);
const rta3 = [...elements, ...otherElements];

console.log("Elements", elements);
console.log("Other Elements", otherElements);
console.log("For", newArray);
console.log("concat", rta);
console.log("...", rta3);

elements.push(...otherElements); //Mutando elements para trabajar sobre si
console.log("Elements", elements);
