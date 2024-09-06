const idTxt = document.getElementById("id");
const nameTxt = document.getElementById("name");
const ageTxt = document.getElementById("age");
const addressTxt = document.getElementById("address");
const cityTxt = document.getElementById("city");
const courseTxt = document.getElementById("course");
const msgPara = document.getElementById("errorMsg");
const errorBox = document.querySelector(".error-box");

const male = document.getElementById("male");
const female = document.getElementById("female");
const others = document.getElementById("others");

let genderVal = "";

let users = [
  {
    id: 1,
    name: "Ajith",
    age: 28,
    address: "207/A, North Street",
    city: "Trichy",
    gender: "Male",
    course: "React",
  },
  {
    id: 2,
    name: "Chaithra",
    age: 25,
    address: "55/B, KK Nagar",
    city: "Bangalore",
    gender: "Female",
    course: "HTML 5",
  },
  {
    id: 3,
    name: "Divya",
    age: 26,
    address: "205/C, South Street",
    city: "Tirupati",
    gender: "Female",
    course: "CSS 3",
  },
  {
    id: 4,
    name: "Suma Sri",
    age: 24,
    city: "Nellore",
    gender: "Female",
    course: "Node Js",
    address: "253, Anna Nagar",
  },
  {
    id: 5,
    name: "Ramesh",
    age: 15,
    address: "52/C, Thillai Nagar",
    city: "Namakkal",
    gender: "Male",
    course: "Mongo DB",
  },
  {
    id: 6,
    name: "Suresh",
    age: 18,
    address: "27, Kaveri Street",
    city: "Kovai",
    gender: "Male",
    course: "Express Js",
  },
  {
    id: 7,
    name: "Priya",
    age: 23,
    address: "159/2, Planiyappa Street",
    city: "Pudukkottai",
    gender: "Female",
    course: "Bootstrap",
  },
  {
    id: 8,
    name: "Abi",
    age: 27,
    address: "55/7, Thambaram",
    city: "Chennai",
    gender: "Female",
    course: "HTML 5",
  },
  {
    id: 9,
    name: "Mani",
    age: 35,
    address: "455/D Raja Colony",
    city: "Trichy",
    gender: "Others",
    course: "CSS 3",
  },
  {
    id: 10,
    name: "Dinesh",
    age: 25,
    address: "254, NSB Road",
    city: "Chennai",
    gender: "Male",
    course: "Bootstrap",
  },
];
//------ Add and Update ------------//
function saveChanges() {
  const id = idTxt.value;
  const name = nameTxt.value.trim();
  const age = ageTxt.value.trim();
  const address = addressTxt.value.trim();
  const city = cityTxt.value.trim();
  const gender = male.checked ? "Male" : female.checked ? "Female" : "Others";
  const course = courseTxt.value;

  if (name && age && address && city && gender && course) {
    if (id) {
      //update
      let updatedUsers = users.map((user) => {
        if (user.id == id) {
          msgPara.innerHTML = "User data successfully updated";
          errorBox.style.display = "block";
          return {
            ...user,
            name: name,
            age: age,
            address: address,
            city: city,
            gender: gender,
            course: course,
          };
        } else {
          return user;
        }
      });
      users = updatedUsers;
      loadUser();
      clearAll();
      closeSignUp();
    } else {
      //Add
      const userObj = {
        id: Date.now(),
        name: name,
        age: age,
        address: address,
        city: city,
        gender: gender,
        course: course,
      };

      users.push(userObj);
      loadUser();
      clearAll();
      closeSignUp();
      msgPara.innerHTML = "";
      msgPara.innerHTML = "User added successfully";
      errorBox.style.display = "block";
    }
  } else {
    msgPara.innerHTML = "Please fill the all data";
    errorBox.style.display = "block";
  }
}
loadUser();

//-------- Edit user ------------//

function editUser(id) {
  const selectedUser = users.filter((user) => user.id == id)[0];
  idTxt.value = selectedUser.id;
  nameTxt.value = selectedUser.name;
  ageTxt.value = selectedUser.age;
  addressTxt.value = selectedUser.address;
  cityTxt.value = selectedUser.city;
  genderVal = selectedUser.gender;
  courseTxt.value = selectedUser.course;

  // male.checked ? "Male" : female.checked ? "Female" : "Others";
  genderVal == "Male"? (male.checked = true) : genderVal == "Female" ? (female.checked = true): (others.checked = true);
  openSignUp();
  loadUser();
}

//------------- Load user ----------//

function loadUser() {
  let output = "";
  users.forEach(
    (user, index) =>
      (output += `<tr>
    <td>${index + 1}</td>
     <td>${user.name}</td>
      <td>${user.age}</td>
      <td>${user.address}</td>
       <td>${user.city}</td>
        <td>${user.gender}</td>
         <td>${user.course}</td>
    <td><button onclick='editUser(${
      user.id
    })'><i class="fa-solid fa-pen-to-square"></i></button></td>
    <td><button onclick='deleteUserWithConfirmation(${
      user.id
    }) '><i class="fa-solid fa-trash"></i></button></td>
    </tr>`)
  );

  document.getElementById("tbody").innerHTML = output;
}

//----------- Clear All input ----------//

function clearAll() {
  idTxt.value = "";
  nameTxt.value = "";
  ageTxt.value = "";
  addressTxt.value = "";
  cityTxt.value = "";
  genderVal.value = "";
  courseTxt.value = "";
}

//----------- Delete user ----------//

function deleteUser(id) {
 
  const filtereduser = users.filter((user) => user.id != id);
  users = filtereduser;
  loadUser();
  
}

//------------ Close alert box ------------//

const btnClose = document.getElementById("close");
btnClose.addEventListener("click", () => {
  errorBox.style.display = "none";
});

//------------ Fiter user -------------//

function filterUser() {
  let input, filter, tbody, tr, td, txtValue;
  input = document.getElementById("userData");
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

/*--------- Delete Code ----------- */

function showModal(callback) {
  const warBox = document.getElementById("warBox");
  warBox.style.display = "block";

  document.getElementById("yes").addEventListener("click", function () {
    callback(true);
    warBox.style.display = "none";
  });

  document.getElementById("no").addEventListener("click", function () {
    callback(false);
    warBox.style.display = "none";
  });
}

function deleteUserWithConfirmation(id) {
  showModal(function (confirmed) {
    if (confirmed) {
      deleteUser(id);
    }
  });
}

/*-------open and close sign-up box-----------*/

function openSignUp() {
  const bodyEl = document.getElementById("body");
  const containerEl = document.getElementById("regForm");
  containerEl.classList.add("container-active");
  bodyEl.classList.add("body-active");
}

function closeSignUp() {
  const bodyEl = document.getElementById("body");
  const containerEl = document.getElementById("regForm");
  containerEl.classList.remove("container-active");
  bodyEl.classList.remove("body-active");
}
