const idElement = document.getElementById("id");
const deteElement = document.getElementById("date");
const timeElement = document.getElementById("time");
const personNameElement = document.getElementById("personName");
const toolsNameElement = document.getElementById("toolsName");
const searchElement = document.getElementById("filter-tools");
const btnAdd = document.getElementById("btnAdd");
const btnClear = document.getElementById("btnClear");
const regTool = document.getElementById("regTool");


  const alertMsg = document.getElementById("alert");
  const modalTitle = document.getElementById("title");


//Modal show and Hide
const Modal = new bootstrap.Modal(myModal, {
  keyboard: false,
});
function modalShow() {
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
  const personName = personNameElement.value;
  const toolsName = toolsNameElement.value;
  let remark = "";
  let timeIn = "";
  let returnPersonName = "";
  let tools = getTools();


  const ModalStatus = new bootstrap.Modal(modal, {
    keyboard: false,
  });

  if (date && time && personName && toolsName) {
    if (id) {
      //Update Tools
      let updatedTools = tools.map((tool) => {
        if (tool.id == id) {
          return {
            ...tool,
            date: date,
            time: time,
            personName: personName,
            toolsName: toolsName,
          };
        } else {
          return tool;
        }
      });
      ModalStatus.show();
      modalTitle.innerHTML = "Tools Update Status";
      alertMsg.innerHTML = "Tools Updated Successfully...";
      saveTools(updatedTools);
      clearAll();
      loadTools();
    } else {
      //Add Tools
      const toolObj = {
        id: Date.now(),
        date: date,
        time: time,
        personName: personName,
        toolsName: toolsName,
        timeIn: timeIn,
        returnPersonName: returnPersonName,
        remark: remark,
      };
      tools.push(toolObj);
      ModalStatus.show();
      modalTitle.innerHTML = "New Tool Registration";
      alertMsg.innerHTML = "Tools Added Successfully...";
      saveTools(tools);
      clearAll();
      loadTools();
    }
    Modal.hide();
  } else {
    ModalStatus.show();
    modalTitle.innerHTML = "Warning";
    alertMsg.innerHTML = "Plaese fill all the details"
    
  }
});

//Edit tools
function editTools(id) {
  modalShow();
  let tools = getTools();
  const selectedTools = tools.filter((tool) => tool.id == id)[0];
  idElement.value = selectedTools.id;
  personNameElement.value = selectedTools.personName;
  toolsNameElement.value = selectedTools.toolsName;
  loadTools();
}

// Delete tools
function deleteTools(id) {
  if (id) {
    tools = getTools();
    let updatedTools = tools.filter((tool) => tool.id != id);
    tools = updatedTools;
    saveTools(updatedTools);
    msgModal.hide();
    const myTimeout = setTimeout(DeleteSuccessMessage, 1000);
    myTimeout();
  }
}

// Delete Success message with timer

function DeleteSuccessMessage() {
  const modalTitle = document.getElementById("title");
  const alertMsg = document.getElementById("alert");
  const ModalStatus = new bootstrap.Modal(modal, {
    keyboard: false,
  });
  ModalStatus.show();
  modalTitle.innerHTML = "Delete Tools";
  alertMsg.innerHTML = "Tools Deleted Successfully...";
}

// Save tools to localStorage
function saveTools(tools) {
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

// Load Data in Table
function loadTools(isForSearch = 0, filteredTool = []) {
  let tools = [];
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
     <td>${tool.personName}</td>
        <td id="time-in">${tool.timeIn}</td>
           <td>${tool.returnPersonName}</td>
    <td>${tool.remark}</td>
    <td><button id="btnEdit" onclick="editTools(${
      tool.id
    })" class="btn btn-sm btn-primary btnEdit">Edit</button></td>
    <td><button id="btnDel" onclick="deleteUserWithConfirmation(${
      tool.id
    })" class="btn btn-sm btn-danger btnDel">Delete</button></td>
    <td><button data-id=${
      tool.id
    } class="btn btn-success btn-sm btnReturn">Return</button></td>
 
    </tr>
    `;
    toolList.innerHTML += output;
  });
}

loadTools();

//ClearAll input elements
function clearAll() {
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

// Return tools
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btnReturn")) {
    const modalTitle = document.getElementById("title");
    const alertMsg = document.getElementById("alert");
    const ModalStatus = new bootstrap.Modal(modal, {
      keyboard: false,
    });
    const returnPersonName = prompt("Enter Name");
    const remark = prompt("Enter Remarks");
    if ((remark, returnPersonName)) {
      let timeIn = showTime();
      let id = e.target.dataset.id;
      let data = getTools();
      let updatedData = data.map((tool) => {
        if (tool.id === Number(id)) {
          tool.remark = remark;
          tool.timeIn = timeIn;
          tool.returnPersonName = returnPersonName;
          return tool;
        } else {
          return tool;
        }
      });
      modalTitle.innerHTML = "Tools Return Status...";
      alertMsg.innerHTML = "Tools Returned Successfully...";
      ModalStatus.show();

      saveTools(updatedData);
      loadTools();
    }
  }
});

// Custom modal with confirmation

const msgModal = new bootstrap.Modal(staticBackdrop, {
  keyboard: false,
});

function showModal(callback) {
  msgModal.show();

  document.getElementById("yes").addEventListener("click", function () {
    callback(true);
    msgModal.hide();
  });

  document.getElementById("no").addEventListener("click", function () {
    callback(false);
    msgModal.hide();
  });
}

function deleteUserWithConfirmation(id) {
  showModal(function (confirmed) {
    if (confirmed) {
      deleteTools(id);
    }
  });
}
