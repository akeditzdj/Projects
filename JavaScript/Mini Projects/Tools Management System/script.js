

const idTxt = document.getElementById("id");
let dateOutElement = document.getElementById("date-out");
let timeOutElement = document.getElementById("time-out");
let typeOutElement = document.getElementById("type-out");
let personNameOutElement = document.getElementById("person-name-out");
let toolsNameOutElement = document.getElementById("check-out-tool");


let btnCheckOut = document.getElementById("btnAdd");
btnCheckOut.addEventListener("click", function () {
  const id = idTxt.value;
  const dateOut = dateOutElement.value;
  const timeOut = timeOutElement.value;
  const typeOut = typeOutElement.value;
  const personNameOut = personNameOutElement.value.trim();
  const toolsNameOut = toolsNameOutElement.value.trim();

  if (dateOut && timeOut && typeOut && personNameOut && toolsNameOut) {
    if (id) {
      let updatedTools = tools.map((tool) => {
        if (tools.id == id) {
          alert("User data successfully updated");

          return {
            ...tools,
            date: dateOut,
            time: timeOut,
            toolsName: toolsNameOut,
            type: typeOut,
            personName: personNameOut,
          };
        } else {
          return tools;
        }
      });

      tools = updatedTools;
      loadData();
    } else {
      tools.push({
        id: Date.now(),
        date: dateOut,
        time: timeOut,
        toolsName: toolsNameOut,
        type: typeOut,
        personName: personNameOut,
      });

      saveToolsLocalStorage();
      clearAllCheckOutInputs();
      loadData();

      
    }
  } else {
    alert("Please fill the all data!");
  }
});

// Clear all Input Data
let btnClearCheckOut = document.getElementById("btn-check-out");

function clearAllInputs() {
  dateOutElement.value = "";
  timeOutElement.value = "";
  personNameOutElement.value = "";
  toolsNameOutElement.value = "";
}

function getTools() {
  let tools = [];
  if (localStorage.getItem("tools")) {
    tools = JSON.parse(localStorage.getItem("tools"));
  }
  return tools;
}
getTools();

// Load Data in Table

function loadData() {
  let output = "";
  tools.forEach((tool, index) => {
    output += `<tr>
    <td>${index + 1}</td>
    <td>${tool.date}</td>
     <td>${tool.time}</td>
      <td>${tool.toolsName}</td>
       <td>${tool.type}</td>
     <td>${tool.personName}</td>
    <td><button class="btn btn-sm btn-primary"><i class="bi bi-pencil-square"></i></button></td>
    <td><button class="btn btn-sm btn-danger"><i class="bi bi-trash3-fill"></i></button></td>
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
  let dateOutElement = document.getElementById("date-out");
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;
  dateOutElement.innerHTML = "hi";
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

  let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;

  // Displaying the time
  document.getElementById("clock").innerHTML = currentTime + " - " + day;
}

showTime();
