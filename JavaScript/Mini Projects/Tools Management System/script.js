let tools = [];

let dateOutElement = document.getElementById("date-out");
let timeOutElement = document.getElementById("time-out");
let typeOutElement = document.getElementById("type-out");
let personNameOutElement = document.getElementById("person-name-out");
let toolsNameOutElement = document.getElementById("check-out-tool");

let dateInElement = document.getElementById("date-in");
let timeInElement = document.getElementById("time-in");
let typeInElement = document.getElementById("type-in");
let personNameInElement = document.getElementById("person-name-in");
let toolsNameInElement = document.getElementById("check-in-tool");

let btnCheckOut = document.getElementById("btn-check-out");
btnCheckOut.addEventListener("click", function () {
  const dateOut = dateOutElement.value;
  const timeOut = timeOutElement.value;
  const typeOut = typeOutElement.value;
  const personNameOut = personNameOutElement.value.trim();
  const toolsNameOut = toolsNameOutElement.value.trim();

  if (dateOut && timeOut && typeOut && personNameOut && toolsNameOut) {
    tools.push({
      id: Date.now(),
      date: dateOut,
      time: timeOut,
      type: typeOut,
      personName: personNameOut,
      toolsName: toolsNameOut,
    });
    saveToolsLocalStorage();
    clearAllCheckOutInputs();
    loadData();
  } else {
    alert("Please fill the all data!");
  }
});

console.log(tools);

// Clear all Input Data
let btnClearCheckOut = document.getElementById("btn-check-out");

function clearAllCheckOutInputs() {
  dateOutElement.value = "";
  timeOutElement.value = "";
  personNameOutElement.value = "";
  toolsNameOutElement.value = "";
}
function clearAllCheckInInputs() {
  dateInElement.value = "";
  timeInElement.value = "";
  personNameInElement.value = "";
  toolsNameInElement.value = "";
}

// Load Data in Table

function loadData() {
 
  let output = "";
  tools.forEach((tool, index) => {
    output += `<tr>
    <td>${index + 1}</td>
    <td>${tool.date}</td>
     <td>${tool.time}</td>
     <td>${tool.personName}</td>
    <td>${tool.toolsName}</td>
    <td>${edit}</td>
    <td>${edit}</td>
    </tr>
    `;
  });
  document.getElementById("tbody").innerHTML = output;
}

loadData();

function saveToolsLocalStorage() {
  localStorage.setItem("tools", JSON.stringify(tools));
  console.log("Data Saved to localStorage");
}

function getToolsDetail() {
  if (localStorage.getItem("tools")) {
    tools = JSON.parse(localStorage.getItem("tools"));
  }
}

//get current date

function currentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;
}
currentDate();

// Get Current Timer
// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
  // Getting current time and date
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  // Setting time for 12 Hrs format
  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = "PM";
  } else if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + am_pm;

  // Displaying the time
  document.getElementById("clock").innerHTML = currentTime + " - " + day;
}

showTime();
