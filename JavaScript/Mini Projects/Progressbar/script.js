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
    percentage: 95,
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
    name: "Angular",
    percentage: 67,
  },
  {
    name: "Express",
    percentage: 79,
  },
];

const progessBox = document.getElementById("progressBox");

function loadProgressData() {
  let output;
  courseList.forEach((course) => {
    output += `
        <div class="box">
           <h5>${course.name}</h5>
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
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
        </svg>
    </div>
        </div>
         `;
    progessBox.innerHTML = output;
  });
}
loadProgressData();

const numbers = document.querySelectorAll(".number");
const svgEl = document.querySelectorAll("svg circle");
const counters = Array(numbers.length);
const intervals = Array(counters.length);
counters.fill(0);

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
      svgEl[circle].style.color = getColor();
    }
  }, 25);
});
 

// Random color generate

function getColor(){
  const randomDigit = Math.floor(Math.random() * 123456);
 const value = randomDigit.toString(16);
  const color = "#" + value.padStart(6, 0);
  
  return color;
}
getColor();