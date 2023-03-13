const numbers = [1, 2, 3, 4, 5, 6];

console.log(
  "Hay numero par en ",
  numbers,
  "?",
  numbers.some((value) => {
    console.log(value); //solo para ver como itera hasta que encuentra el valor par que buscamos
    return value % 2 === 0;
  })
);

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

console.log(
  "Hay alguna entrega por hacer en: ",
  orders,
  ":",
  orders.some((item) => !item.delivered)
);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

let areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");

const newDate = {
  startDate: new Date(2021, 1, 1, 20),
  endDate: new Date(2021, 1, 1, 21),
  title: "Cena Familiar",
};

console.log(
  "La cena a horas",
  newDate,
  "choca con alguna fecha en: ",
  dates,
  dates.some((rec) =>
    areIntervalsOverlapping(
      { start: rec.startDate, end: rec.endDate },
      { start: newDate.startDate, end: newDate.endDate }
    )
  )
);
