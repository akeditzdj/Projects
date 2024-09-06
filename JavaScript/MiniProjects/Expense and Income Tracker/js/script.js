const idElement = document.getElementById("id");
const dateElement = document.getElementById("date");
const nameElement = document.getElementById("name");
const typeElement = document.getElementById("type");
const amountElement = document.getElementById("amount");
const status = document.getElementById("status");

let transection = [
  {
    id: 1,
    name: "Salary",
    amount: 15000,
    date: "2024-04-23",
    type: "Income",
  },
  {
    id: 2,
    name: "Movie",
    amount: 500,
    date: "2024-04-24",
    type: "Expense",
  },
  {
    id: 3,
    name: "Shopping",
    amount: 8000,
    date: "2024-04-26",
    type: "Expense",
  },
  {
    id: 4,
    name: "Groceries",
    amount: 15000,
    date: "2024-04-28",
    type: "Income",
  },
];

//------------ Load Transection -------------//

function loadTransection() {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  let inc = 0,
    exp = 0;
  transection.forEach((trans, index) => {
    tbody.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${trans.date}</td>
        <td>${trans.name}</td>
        <td>${trans.type}</td>
        <td>Rs.${trans.amount}.00</td>
        <td><button onclick="editTransection(${
          trans.id
        })" id="edit" type="button" class="btn btn-primary btn-sm" data-id='${
      trans.id
    }'><i class="bi bi-pencil-square"></i></button></td> 
        <td><button id="delete" type="button" onclick="deleteTransection(${
          trans.id
        })" class="btn btn-danger btn-sm"  data-id='${
      trans.id
    }'><i class="bi bi-trash3-fill"></i></button></td> 
        </tr>
        `;

    if (trans.type == "Income") {
      inc += trans.amount;
    } else {
      exp += trans.amount;
    }

    let bal = inc - exp;
    balance.innerHTML = `<i class="bi bi-currency-rupee"></i>` + bal + `.00`;
    income.innerHTML = `<i class="bi bi-currency-rupee"></i>` + inc + `.00`;
    expense.innerHTML = `<i class="bi bi-currency-rupee"></i>` + exp + `.00`;
  });
}

loadTransection();

//------------ Add Transection -------------//

function addTransection() {
  const id = idElement.value;
  const date = dateElement.value;
  const name = nameElement.value.trim();
  const type = typeElement.value;
  const amount = amountElement.value.trim();

  if (date && name && type && amount) {
    if (id) {
      let updatedTransection = transection.map((trans) => {
        if (trans.id == id) {
          status.innerHTML = "Transection Updated Successfully";
          return {
            ...trans,
            date: date,
            name: name,
            type: type,
            amount: Number(amount),
          };
        } else {
          return trans;
        }
      });
      transection = updatedTransection;
      loadTransection();
      clearTransection();
    } else {
      const obj = {
        id: Date.now(),
        date: dateElement.value,
        name: nameElement.value,
        type: typeElement.value,
        amount: Number(amountElement.value),
      };
      status.innerHTML = "Transection Added Successfully";
      transection.push(obj);
      loadTransection();
      clearTransection();
    }
  } else {
    alert("Please fill all details");
  }
}

loadTransection();

//------------ Clear Input -------------//

function clearTransection() {
  (dateElement.value = ""),
    (nameElement.value = ""),
    (typeElement.value = ""),
    (amountElement.value = "");
}

//------------ Fiter Transection -------------//

function filterTransection() {
  let input, filter, tbody, tr, td, txtValue;
  input = document.getElementById("filter");
  filter = input.value.toUpperCase();
  tbody = document.getElementById("tbody");
  tr = tbody.getElementsByTagName("tr");

  if (filter === "") {
    const cells = tbody.querySelectorAll("td");
    cells.forEach((cell) => cell.classList.remove("highlight"));
    return;
  }

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for (j = 1; j < td.length - 2; j++) {
      let cell = td[j];
      if (cell) {
        txtValue = cell.textContent.toUpperCase();

        if (txtValue.indexOf(filter) > -1) {
          tr[i].style.display = "";
          cell.classList.add("highlight");
          break;
        } else {
          tr[i].style.display = "none";
          cell.classList.remove("highlight");
        }
      }
    }
  }
}

//------------ Filter Transection Date Between -------------//

let fromDate = document.getElementById("fromDate");
let toDate = document.getElementById("toDate");
let btnView = document.getElementById("btnView");
let btnReset = document.getElementById("btnReset");

function filterByDateRange(objects, fromDate, toDate) {
  return objects.filter((obj) => obj.date >= fromDate && obj.date <= toDate);
}

btnView.addEventListener("click", () => {
  let filterDate = filterByDateRange(transection, fromDate.value, toDate.value);
  
  console.log(filterDate)
});

btnReset.addEventListener("click", function () {
  fromDate.value = "";
  toDate.value = "";
});

//------------ Delete Transection -------------//

function deleteTransection(id) {
  if (confirm("Are you sure to delete?")) {
    let filterTransection = transection.filter((trans) => trans.id != id);
    transection = filterTransection;
    status.innerHTML = "Transection Delete Successfully";
    loadTransection();
    clearTransection();
  }
}

//------------ Edit Transection -------------//

function editTransection(id) {
  let selectedTransection = transection.filter((trans) => trans.id == id)[0];
  idElement.value = selectedTransection.id;
  dateElement.value = selectedTransection.date;
  nameElement.value = selectedTransection.name;
  typeElement.value = selectedTransection.type;
  amountElement.value = selectedTransection.amount;
  loadTransection();
}

//------------ Change Dark Mode -------------//

let theme = document.getElementById("theme");
let body = document.getElementById("body");

function changeTheme() {
  body.classList.toggle("dark-mode");
}
