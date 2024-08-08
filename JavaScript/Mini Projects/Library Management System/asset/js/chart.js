const xValues = [
  "Total Books",
  "Total Book Issue",
  "Total Book Returned",
  "Total Book Not Return",
];

let yValues = [100, 100, 100, 100];

const barColors = ["red", "green", "blue", "orange"];

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
