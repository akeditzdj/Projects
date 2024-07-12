const idElement = document.getElementById("id");
const deteElement = document.getElementById("date");
const timeElement = document.getElementById("time");
const typeElement = document.getElementById("type");
const personNameElement = document.getElementById("personName");
const toolsNameElement = document.getElementById("toolsName");
const searchElement = document.getElementById("filter-tools");
const btnAdd = document.getElementById("btnAdd");
const btnClear = document.getElementById("btnClear");
const regTool = document.getElementById("regTool");

// Load Data in Table
function loadTools(isForSearch = 0, filteredTool = []) {
  if (isForSearch == 0) {
    tools = getTools();
  } else {
    tools = filteredTool;
  }
  const toolList = document.querySelector("#toolList");
  toolList.innerHTML = "";
  tools.forEach((tool, index) => {
    const output = `<tr>
    <td>${index + 1}</td>
    <td>${tool.date}</td>
     <td>${tool.time}</td>
      <td>${tool.toolsName}</td>
       <td>${tool.type}</td>
     <td>${tool.personName}</td>
    <td><button onclick="editTools(${
      tool.id
    })" class="btn btn-sm btn-primary btnEdit">Edit</button></td>
    <td><button onclick="deleteTools(${
      tool.id
    })" class="btn btn-sm btn-danger btnDel">Delete</button></td>
    </tr>
    `;
    toolList.innerHTML += output;
  });
}

loadTools();

//Modal show and Hide
function modalShow() {
  const Modal = new bootstrap.Modal(myModal, {
    keyboard: false,
  });
  Modal.show();
}

regTool.addEventListener("click", function () {
  modalShow();
  clearAll();
});

//Register New Tools
btnAdd.addEventListener("click", function () {
  const id = idElement.value;
  const date = currentDate();
  const time = showTime();
  const type = typeElement.value;
  const personName = personNameElement.value;
  const toolsName = toolsNameElement.value;

  if (date && time && type && personName && toolsName) {
    if (id) {
      //Update Tools
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
      saveTools();
      clearAll();
      loadTools();
    } else {
      //Add Tools
      const toolObj = {
        id: Date.now(),
        date: date,
        time: time,
        type: type,
        personName: personName,
        toolsName: toolsName,
      };
      tools.push(toolObj);
      saveTools();
      loadTools();
    }
  } else {
    alert("Please fill the all details");
  }
});

//Edit tools
function editTools(id) {
  modalShow();
  const selectedTools = tools.filter((tool) => tool.id == id)[0];
  idElement.value = selectedTools.id;
  typeElement.value = selectedTools.type;
  personNameElement.value = selectedTools.personName;
  toolsNameElement.value = selectedTools.toolsName;
  loadTools();
}

// Delete tools
function deleteTools(id) {
  if (confirm("Are you sure to delete?")) {
    tools = getTools();
    let updatedTools = tools.filter((tool) => tool.id != id);
    tools = updatedTools;
    saveTools();
    loadTools();
  }
}

// Save tools to localStorage
function saveTools() {
  localStorage.setItem("tools", JSON.stringify(tools));
  loadTools();
}

//Get Data from localStorage
function getTools() {
  let data = [];
  if (localStorage.getItem("tools") !== null) {
    data = JSON.parse(localStorage.getItem("tools"));
  }
  return data;
}

//ClearAll input elements
function clearAll() {
  typeElement.value = "";
  personNameElement.value = "";
  toolsNameElement.value = "";
}

//Filter tools
searchElement.addEventListener("input", function () {
  const searchQuery = this.value.toLowerCase();
  const tools = getTools();
  const filteredTool = tools.filter((tool) =>
    tool.toolsName.toLowerCase().includes(searchQuery)
  );
  loadTools(1, filteredTool);
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
