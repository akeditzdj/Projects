//Dummy data
/*

const tasks = [
  {
    id: 1,
    taskName: "Reading",
    status: "Complete",
  },
  {
    id: 2,
    taskName: "Writing",
    status: "Pending",
  },
  {
    id: 3,
    taskName: "Cooking",
    status: "Pending",
  },
];

console.log(JSON.stringify(tasks));
*/
const btnAdd = document.getElementById("btnAdd");
const btnClear = document.getElementById("btnClear");
const nameElement = document.getElementById("taskName");
const statusElement = document.getElementById("taskStatus");
//Get data from LocalStorage
function getTasks() {
  let tasks = [];
  if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  return tasks;
}

//Render Task details in Table Format
function renderTasks() {
  const tasks = getTasks();
  const taskList = document.getElementById("taskList");
  tasks.innerHTML = "";
  tasks.forEach((task, index) => {
    const row = `
    <tr>
        <td>${index + 1}</td>
        <td>${task.taskName}</td>
        <td>${task.status}</td>
        <td>
        <button class="btn btn-sm btn-primary"><i class="bi bi-pencil-square"></i></button>
        </td>
        <td>
        <button class="btn btn-sm btn-danger" onclick="deleteTask(${
          task.id
        })"><i class="bi bi-trash3-fill"></i></button>
        </td>
        </tr>
        `;
    taskList.innerHTML += row;
  });
}

//Add New task
// function addNewTask() {
//     btnAdd.addEventListener("click", function () {

//     })
// }

//Save Task Details in LocalStorage
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Delete Task
function deleteTask(taskId) {
  if (confirm("Are you sure to delete?")) {
    const tasks = getTasks();
    const updatedTasks = tasks.filter((task) => task.id != taskId);
    saveTasks(updatedTasks);
    renderTasks();
  }
}

btnClear.addEventListener("click", clearAll);

function clearAll() {
  nameElement.value = "";
  statusElement.value = "";
  
}

//Initial Call
renderTasks();

/*

[{"id":1,"taskName":"Reading","status":"Complete"},{"id":2,"taskName":"Writing","status":"Pending"},{"id":3,"taskName":"Cooking","status":"Pending"}]

*/
