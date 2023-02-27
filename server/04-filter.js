const words = ["spray", "limit", "elite", "exuberant"];

const newArray = [];

for (let index = 0; index < words.length; index++) {
  const item = words[index];
  if (item.length >= 6) {
    newArray.push(item);
  }
}

console.log("words", words);
console.log("newArray", newArray);
const rta = words.filter((word) => word.length >= 6);
console.log("rta", rta);

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

  const rta3 = orders.filter(item=>item.delivered && item.total >= 100);
  console.log('rta 3', rta3);

  const search = (query)=>{
    return orders.filter(item=>{
        return item.customerName.includes(query);
    })
  }

  console.log(search('ni'));