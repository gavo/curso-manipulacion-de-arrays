const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 1, username: "Mike", attributes: ["Lovely"] },
  { userId: 1, username: "Nico", attributes: ["Nice", "Cool"] },
];

//Map y flat por separado
const rta = users.map((user) => user.attributes).flat();
console.log("Users", users);
console.log("Atributes", rta);
//Flatmap

const rta2 = users.flatMap((user) => user.attributes);
console.log("FlatMap: ", rta2);

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};
console.log("++++++++++++++++++++++++++++++++++++++++");
console.log(calendars);
console.log(
  Object.values(calendars).flatMap((item) => item.map((i) => i.startDate))
);
