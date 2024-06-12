let courseList = [
  {
    name: " Html",
    percentage: 85,
  },
  {
    name: " Css",
    percentage: 76,
  },

  {
    name: " JavaScript",
    percentage: 64,
  },
  {
    name: "BootStap",
    percentage: 90,
  },
  {
    name: "React",
    percentage: 80,
  },
  {
    name: "NodeJs",
    percentage: 60,
  },
  {
    name: "Express",
    percentage: 79,
  },
  {
    name: "Mongo DB",
    percentage: 67,
  },
];

const progessBox = document.getElementById("progressBox");

function loadProgressData() {
  let output = "";
  courseList.forEach((course) => {
    output += `
        <div class="box">
           <h5 class="title">${course.name}</h5>
       <div class="skill">
        <div class="outer">
            <div class="inner">
                <div class="number" data-num="${course.percentage}">
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
            <defs>
                <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
            </defs>
            <circle id="color" cx="80" cy="80" r="70" stroke-linecap="round" />
        </svg>
    </div>
        </div>
         `;
  });
  progessBox.innerHTML = output;
}
loadProgressData();

const numbers = document.querySelectorAll(".number");
const svgEl = document.querySelectorAll("svg circle");
const counters = Array(numbers.length);
const intervals = Array(counters.length);
let title = document.querySelectorAll(".title");
counters.fill(0);

console.log(title);

numbers.forEach((number, index) => {
  intervals[index] = setInterval(() => {
    if (counters[index] === parseInt(number.dataset.num)) {
      clearInterval(counters[index]);
    } else {
      counters[index] += 1;
      number.innerHTML = counters[index] + "%";
      svgEl[index].style.strokeDashoffset = Math.floor(
        472 - 440 * parseFloat(number.dataset.num / 100)
      );
      numColor = svgEl[index].style.stroke = getColor();
      number.style.color = numColor;
      title[index].style.color = numColor;
    }
  }, 25);
});

// Random color generate

function getColor() {
  const randomDigit = Math.floor(Math.random() * 123456);
  const value = randomDigit.toString(16);
  const color = "#" + value.padStart(6, 0);

  return color;
}
getColor();
