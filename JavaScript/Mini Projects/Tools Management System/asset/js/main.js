const idElement = document.getElementById("id");
const deteElement = document.getElementById("date");
const timeElement = document.getElementById("time");
const personNameElement = document.getElementById("personName");
const toolsNameElement = document.getElementById("toolsName");
const unitNameElement = document.getElementById("unitName");
const searchElement = document.getElementById("filter-tools");
const btnAdd = document.getElementById("btnAdd");
const btnClear = document.getElementById("btnClear");
const regTool = document.getElementById("regTool");

//Modal show and Hide

const modalTitle = document.getElementById("title");
const alertMsg = document.getElementById("alert");
const mainModalTitle = document.getElementById("modalTitle");

const Modal = new bootstrap.Modal(myModalRegister, {
  keyboard: false,
});

regTool.addEventListener("click", function () {
  Modal.show();
  clearAll();
});

//Register New Tools
btnAdd.addEventListener("click", function () {
  const id = idElement.value;
  const date = currentDate();
  const time = showTime();
  const personName = personNameElement.value;
  const toolsName = toolsNameElement.value;
  const unit = unitNameElement.value;
  let remark = "";
  let timeIn = "";
  let returnPersonName = "";
  let tools = getTools();
  const ModalStatus = new bootstrap.Modal(myModalMessage, {
    keyboard: false,
  });

  if (date && time && personName && toolsName && unit) {
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
            unit: unit,
          };
        } else {
          return tool;
        }
      });

      saveTools(updatedTools);
      Modal.hide();
      ModalStatus.show();
      modalTitle.innerHTML = "Tools Update Status";
      alertMsg.innerHTML = "Tools Updated Successfully...";

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
        returnDate:returnDate,
        timeIn: timeIn,
        unit: unit,
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
    alertMsg.innerHTML = "Plaese fill all the details";
  }
});

//Edit tools
function editTools(id) {
  Modal.show();
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
     loadTools();
    setTimeout(deleteSuccessMessage, 200);
    }
  }

// Delete Success message with timer

function deleteSuccessMessage() {
    const ModalStatus = new bootstrap.Modal(myModalMessage, {
      keyboard: false,
    });
  const modalTitle = document.getElementById("title");
  const alertMsg = document.getElementById("alert");
  ModalStatus.show();
  modalTitle.innerHTML = "Delete Tools";
  alertMsg.innerHTML = "Tools Deleted Successfully...";
  }


// Custom modal delete with confirmation

const msgModal = new bootstrap.Modal(myModalDelete, {
  keyboard: false,
});

function showDeleteModal(callback) {
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
  showDeleteModal(function (confirmed) {
    if (confirmed) {
      deleteTools(id);
    }
  });
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
     <td>${tool.unit}</td>
     <td>${tool.returnDate}</td>
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
  unitNameElement.value = "";
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

const returnModal = new bootstrap.Modal(myModalReturn, {
  keyboard: false,
});

// function returnToolsWithRemark() {
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("btnReturn")) {
         const ModalStatus = new bootstrap.Modal(myModalMessage, {
           keyboard: false,
         });
      const modalTitle = document.getElementById("title");
      const alertMsg = document.getElementById("alert");
   
      // let returnPersonNameElement =document.getElementById("returnPersonName");
      // let remarkElement = document.getElementById("remark");

       const returnPersonName = prompt("Enter Name")
       const remark = prompt("Enter Remaraks")

      if ((remark, returnPersonName)) {
        let timeIn = showTime();
        let returnDate = currentDate()
        let id = e.target.dataset.id;
        let data = getTools();
        let updatedData = data.map((tool) => {
          if (tool.id === Number(id)) {
            tool.remark = remark;
            tool.timeIn = timeIn;
            tool.returnDate=returnDate
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
// }

// function showReturnModal(callback) {
//   returnModal.show();
//   document.getElementById("Ryes").addEventListener("click", function () {
//     callback(true);
//     returnModal.hide();
//   });

//   document.getElementById("Rno").addEventListener("click", function () {
//     callback(false);
//     returnModal.hide();
//   });
// }

// function returnTools(id) {
//   showReturnModal(function (confirmed) {
//     if (confirmed) {
//       returnToolsWithRemark(id);
//     }
//   });
// }
