const letters = ["a", "b", "c"];

const newArray = [];
/*
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
}*/
letters.map(element=>newArray.push(element+"++"))
console.log(letters);
console.log(newArray);