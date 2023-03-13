const items = [1, 3, 2, 3, 1, 4, 2, 3, 5, 6, 6, 4];

console.log(
  "Reloaded Reduce",
  items.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
    return obj;
  }, {})
);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucía",
    level: "hight",
  },
];

console.log(data);
console.log(
  data
    .map((item) => item.level)
    .reduce((obj, item) => {
      if (!obj[item]) {
        obj[item] = 1;
      } else {
        obj[item] = obj[item] + 1;
      }
      return obj;
    }, {})
);
