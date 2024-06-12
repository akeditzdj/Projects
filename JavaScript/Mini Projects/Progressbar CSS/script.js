const container = document.querySelector(".container");

const courses = [
  { course: "HTML", percent: 99, color: "#f9ca24" },
  { course: "CSS", percent: 65, color: "#78e08f" },
  { course: "JavaScript", percent: 35, color: "#c56cf0" },
  { course: "Bootstrap", percent: 85, color: "#badc58" },
];

courses.forEach((course) => {
  container.innerHTML += `
  <div class="progess-group">
  <div class="circular-progress" >
    <span class="course-value" style="color:${course.color}">0%</span>
  </div>
  <label class="text" style="color:${course.color}">${course.course}</label>
</div>
  `;
});

//style="  background: conic-gradient(${course.color} ${3.6 * course.percent}deg, #fff 0deg);"

const progressGroups = document.querySelectorAll(".progess-group");

progressGroups.forEach((progress, index) => {
  let progressStartValue = 0;
  let progressStartEnd = courses[index].percent;
  let speed = 50;
  let progessTimer = setInterval(() => {
    progressStartValue++;
    if (progressStartValue == progressStartEnd) {
      clearInterval(progessTimer);
    }
    progress.querySelector(".circular-progress").style.background = `
    conic-gradient(${courses[index].color} ${
      3.6 * progressStartValue
    }deg, #fff 0deg)`;

    progress.querySelector(".course-value").innerHTML =
      progressStartValue + "%";
  }, speed);
});
