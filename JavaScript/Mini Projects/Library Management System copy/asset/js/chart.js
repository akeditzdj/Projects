const xValues = [
  "Total Users",
  "Total Books",
  "Total Book Issue",
  "Total Book Returned",
  "Total Book Not Return",
  "Total Book Price",
  "Total Author",
  "Total Publications",
];

let yValues = [80, 50, 85, 25, 75, 50, 37, 64];

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

