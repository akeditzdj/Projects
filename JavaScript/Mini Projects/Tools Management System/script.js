let tools = [];

const idTxt = document.getElementById("id");
let dateElement = (document.getElementById("date").innerHTML = currentDate());
let timeElement = (document.getElementById("time").innerHTML = showTime());
let typeElement = document.getElementById("type");
let personNameElement = document.getElementById("personName");
let toolsNameElement = document.getElementById("toolsName");
const mymodalElement = document.getElementById("myModal");
const myModal = new bootstrap.Modal(mymodalElement);
const modalTitle = document.querySelector(".modal-title");
const searchInput = document.querySelector("#filter-tools");
const btnAdd = document.getElementById("btnAdd");
const toolForm = document.getElementById("toolForm");



//Delete Task
function deleteTools(toolId) {
  if (confirm("Are you sure to delete?")) {
    const tools = getTools();
    const updatedTools = tools.filter((tool) => tool.id != toolId);
    saveToolsLocalStorage(updatedTools);
    loadData();
  }
}

//Edit task

function editTools(id) {
  const tools = getTools();
  const tool = tools.find((tool) => tool.id === id);
  if (tool) {
    dateElement.value = tool.date;
    timeElement.value = tool.time;
    typeElement.value = tool.type;
    personNameElement.value = tool.personName;
    toolsNameElement.value = tool.toolsName;

    btnAdd.setAttribute("data-toolkid", tool.id);
    modalTitle.innerHTML = " Update Task";
    myModal.show();
  }
  loadData();
}

//------ Add and Update ------------//
btnAdd.addEventListener("click", function addtools() {
  const id = idTxt.value;
  const date = currentDate();
  const time = showTime();
  const type = typeElement.value;
  const personName = personNameElement.value;
  const toolsName = toolsNameElement.value;

  if (date && time && type && personName && toolsName) {
    if (id) {
      //update
      let updatedTools = tools.map((tool) => {
        if (tool.id == id) {
          return {
            ...tool,
            date: date,
            time: time,
            type: type,
            personName: personName,
            toolsName: toolsName,
          };
        } else {
          return tool;
        }
      });
      tools = updatedTools;
      loadData();
      clearAllInputs();
      saveToolsLocalStorage();
    } else {
      //Add
      const toolObj = {
        id: Date.now(),
        date: date,
        time: time,
        type: type,
        personName: personName,
        toolsName: toolsName,
      };

      tools.push(toolObj);
      loadData();
      clearAllInputs();
      saveToolsLocalStorage();
    }
  } else {
    alert("Please fill the all data");
  }
});

loadData();

// //Add new task

// btnAdd.addEventListener("click",function addNewTools(date, time, type, personName, toolsName) {
//     const tools = getTools();
//     const newTools = {
//       id: Date.now(),
//       date,
//       time,
//       type,
//       personName,
//       toolsName,
//     };
//     tools.push(newTools);
//     saveToolsLocalStorage(tools);
//     loadData();
//   }
// );

// //Upade existing task

// function updateTools(id, type, personName, toolsName) {
//   const tools = getTools();
//   const updatedTools = tools.map((tool) => {
//     if (tool.id == id) {
//       // tool.date = date;
//       // tool.time = time;
//       tool.type = type;
//       tool.personName = personName;
//       tool.toolsName = toolsName;
//     }
//     return tool;
//   });
//   saveToolsLocalStorage(updatedTools);
//   loadData();
// }

// Clear all Input Data

function clearAllInputs() {
  typeElement.value = "";
  personNameElement.value = "";
  toolsNameElement.value = "";
}

// Load Data in Table

function loadData(isForSearch = 0, filteredTool = []) {
  let tools = [];
  if (isForSearch == 0) {
    tools = getTools();
  } else {
    tools = filteredTool;
  }
  const toolList = document.getElementById("toolList");
  toolList.innerHTML = "";
  tools.forEach((tool, index) => {
    const row = `<tr>
    <td>${index + 1}</td>
    <td>${tool.date}</td>
     <td>${tool.time}</td>
      <td>${tool.toolsName}</td>
       <td>${tool.type}</td>
     <td>${tool.personName}</td>
    <td><button onclick="editTools(${
      tool.id
    })" class="btn btn-sm btn-primary"><i class="bi bi-pencil-square"></i></button></td>
    <td><button onclick="deleteTools(${
      tool.id
    })" class="btn btn-sm btn-danger"><i class="bi bi-trash3-fill"></i></button></td>
    </tr>
    `;
    toolList.innerHTML += row;
  });
}

loadData();

function saveToolsLocalStorage() {
  localStorage.setItem("tools", JSON.stringify(tools));
  console.log("Data Saved to localStorage");
}

function getTools() {
  let tools = [];
  if (localStorage.getItem("tools")) {
    tools = JSON.parse(localStorage.getItem("tools"));
  }
  return tools;
}
getTools();

//Search Function

searchInput.addEventListener("input", function () {
  const searchQuery = this.value.toLowerCase();
  const tools = getTools();
  const filteredTool = tools.filter((tool) =>
    tool.toolsName.toLowerCase().includes(searchQuery)
  );
  loadData(1, filteredTool);
});

//get current date

function currentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;
  document.getElementById("date").innerHTML = today;
  return today;
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
  document.getElementById("time").innerHTML = currentTime;

  return currentTime;
}

showTime();
