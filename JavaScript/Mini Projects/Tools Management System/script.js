
const idTxt = document.getElementById("id");
const dateElement = (document.getElementById("date").innerHTML = currentDate());
const timeElement = (document.getElementById("time").innerHTML = showTime());
const typeElement = document.getElementById("type");
const personNameElement = document.getElementById("personName");
const toolsNameElement = document.getElementById("toolsName");
const mymodalElement = document.getElementById("myModal");
const myModal = new bootstrap.Modal(mymodalElement);
const modalTitle = document.querySelector(".modal-title");
const searchInput = document.querySelector("#filter-tools");
const btnAdd = document.getElementById("btnAdd");
const toolForm = document.getElementById("toolForm");

// Load Data in Table

function loadTools(isForSearch = 0, filteredTool = []) {

  if (isForSearch == 0) {
    tools = getTools();
  } else {
    tools = filteredTool;
  }
  tools = getTools();
  const toolList = document.querySelector("#toolList");
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



//------ Add and Update ------------//
btnAdd.addEventListener("click", function () {
 
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
            toolsName: toolsName,
            personName: personName,
          };
        } else {
          return tool;
        }
      }); 
      tools = updatedTools;
      saveLocalStorage();
       clearAllInputs();
      loadTools();
     
    } else {
      //Add
      const toolObj = {
        id: Date.now(),
        date: date,
        time: time,
        type: type,
        toolsName: toolsName,
        personName: personName,
      };

      tools.push(toolObj);
    saveLocalStorage();
      clearAllInputs();
      loadTools();
    }
  } else {
    alert("Please fill the all data");
  }
});
loadTools();

//Edit Tools

function editTools(id) {
  const tools = getTools();
  const tool = tools.find((tool) => tool.id === id);
  if (tool) {
    dateElement.value = tool.date;
    timeElement.value = tool.time;
    typeElement.value = tool.type;
    personNameElement.value = tool.personName;
    toolsNameElement.value = tool.toolsName;

    // btnAdd.setAttribute("data-toolkid", tool.id);
    modalTitle.innerHTML = " Update Task";
    myModal.show();
  }
  loadTools();
}

//Delete Tools
function deleteTools(toolId) {
  if (confirm("Are you sure to delete?")) {
    const tools = getTools();
    const updatedTools = tools.filter((tool) => tool.id != toolId);
    saveLocalStorage(updatedTools);
    loadTools();
  }
}

// Clear all Input Data

function clearAllInputs() {
  typeElement.value = "";
  personNameElement.value = "";
  toolsNameElement.value = "";
}

function saveLocalStorage() {
  localStorage.setItem("tools", JSON.stringify(tools));
  console.log("Data Saved to localStorage");
}

function getTools() {
  let data = [];
  if (localStorage.getItem("tools")!==null) {
    data = JSON.parse(localStorage.getItem("tools"));
  }
  return data;
}


//Filter tools
searchInput.addEventListener("input", function () {
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

