const xValues = [
  "Total Users",
  "Total Books",
  "Total Book Issue",
  "Total Book Returned",
  "Total Book Not Return",
  "Total Fines Received",
  "Total Author",
  "Total Category",
];
const yValues = [80, 125, 50, 25, 25, 100, 35, 80];
const barColors = [
  "red",
  "green",
  "blue",
  "orange",
  "brown",
  "white",
  "yellow",
  "violet",
];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Library Books Data 2024",
    },
  },
});
