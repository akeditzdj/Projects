// Get data from new user

// formEl = document.forms.registration;
// const btnEl = document.querySelector("form button");

// let = userData = [];

// const formSubmit = (event) => {
//   event.preventDefault();

//   const {
//     roll,
//     name,
//     email,
//     password,
//     cpassword,
//     number,
//     dob,
//     gender,
//     city,
//     pincode,
//     address,
//     terms,
//     newsletter,
//   } = formEl;

//   if (
//     (roll,
//     name,
//     email,
//     password,
//     cpassword,
//     number,
//     dob,
//     gender,
//     city,
//     pincode,
//     address,
//     terms,
//     newsletter)
//   ) {
//     console.log("Data submitted successfully.");
//     const formData = new FormData(formEl);

//       let userArrayData = [...formData.values()];

//       console.log(userArrayData);

//         // userData.push({
//         //   id: Date.now(),
//         //   roll,
//         //   name,
//         //   email,
//         //   password,
//         //   cpassword,
//         //   number,
//         //   dob,
//         //   gender,
//         //   city,
//         //   pincode,
//         //   address,
//         //   terms,
//         //   newsletter,
//         // });

//     //   saveUsersLocalStorage();

//   } else {
//     console.log("Plz fill all details.");
//   }
// };

// formEl.addEventListener("submit", formSubmit);

// // Save user data to localStorage...

// function saveUsersLocalStorage() {
//   localStorage.setItem("userArrayData", JSON.stringify(userArrayData));
//   console.log("Data Saved to localStorage");
// }

// // Get user data from localStorage...

// function getUserDetails() {
//   if (localStorage.getItem("userData")) {
//     userData = JSON.parse(localStorage.getItem("userData"));
//   }
// }

let = userData = [
  {
    id: 1,
    roll: "Admin",
    name: "Ajithkumar",
    email: "akeditz@gmail.com",
    password: "123456",
    cpassword: "123456",
    number: "9786000352",
    dob: "23-04-2024",
    gender: "male",
    city: "Trichy",
    pincode: "622515",
    address: "207/A, North Street",
    terms: "Agreed",
    newsletter: "Agreed",
  },
];

const tbody = document.getElementById("usertable");

function loadUser() {
  tbody.innerHTML = "";
  userData.forEach((user) => {
    tbody.innerHTML += `<tr>
          <td>${user.index + 1}</td>
          <td>${user.roll}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.password}</td>
          <td>${user.cpassword}</td>
          <td>${user.number}</td>
          <td>${user.dob}</td>
          <td>${user.gender}</td>
          <td>${user.city}</td>
          <td>${user.pincode}</td>
          <td>${user.address}</td>
          <td>${user.terms}</td>
          <td>${user.newsletter}</td>
          <td><button>Edit</button></td>
          <td><button>Delete</button></td>

          </tr>`;
  });
}
