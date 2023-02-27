const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Daniel",
    total: 220,
    delivered: true,
  },
  {
    customerName: "Maria",
    total: 85,
    delivered: false,
  },
  {
    customerName: "Carla",
    total: 33,
    delivered: true,
  },
];

const rta = orders.map((item) => item.total);
const rta2 = orders.map((item) => {
  //item.tax = 0.19;
  return item;
});

console.log("Original", orders);
console.log("rta", rta);
console.log("rta 2", rta2);

const rta3 = orders.map((item)=>{
    return {
        ...item,
        tax: .19,
    }
})

console.log('rta 3', rta3);