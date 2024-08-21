const xValues = [
  "Total Books",
  "Total Book Issue",
  "Total Book Returned",
  "Total Book Not Return",
  "Total Authors",
  "Total Languages",
];
let yValues = [100, 80, 50, 30, 82, 22];
const barColors = ["green", "blue", "orange", "red", "purple", "pink"];
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
