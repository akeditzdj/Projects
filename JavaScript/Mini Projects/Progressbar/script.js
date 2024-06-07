let courseList = [
  {
    id: 1,
    name: " Html",
    percentage: 85,
  },
  {
    id: 2,
    name: " Css",
    percentage: 76,
  },
  
  {
    id: 3,
    name: " JavaScript",
    percentage: 64,
  },

  {
    id: 4,
    name: "React",
    percentage: 80,
  },
  {
    id: 5,
    name: "NodeJs",
    percentage: 84,
  },
  {
    id: 6,
    name: "Angular",
    percentage: 67,
  },
  {
    id: 7,
    name: "Express",
    percentage: 79,
  },
  {
    id: 8,
    name: "BootStap",
    percentage: 95,
  },
];

const progessBar = document.getElementById("progress-box");

function loadData() {
  let output;
  courseList.forEach((course) => {
    output += `
        <div class="box">
           <div>${course.name}<span>${course.percentage}</span></div>
        </div>
         `;
    progessBar.innerHTML = output;
  });
}
loadData();
