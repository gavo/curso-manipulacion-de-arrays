const pets = ["cat", "dog", "bat"];
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === "dog") {
    includeInArray = true;
    break;
  }
}
console.log("IncludeInArray: ", includeInArray);
let inc = pets.includes("dog");
console.log("Includes", inc);